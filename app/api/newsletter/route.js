import { NextResponse } from 'next/server';
import { google } from 'googleapis';

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

async function ensureSheetExists(spreadsheetId) {
  try {
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId,
    });

    const sheetExists = spreadsheet.data.sheets?.some(
      sheet => sheet.properties.title === 'Newsletter'
    );

    if (!sheetExists) {
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId,
        requestBody: {
          requests: [
            {
              addSheet: {
                properties: {
                  title: 'Newsletter',
                  gridProperties: {
                    rowCount: 1000,
                    columnCount: 10
                  }
                }
              }
            }
          ]
        }
      });

      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: 'Newsletter!A1:C1',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [['Email', 'Subscribed Date', 'Status']],
        },
      });
    }
  } catch (error) {
    console.error('Error ensuring sheet exists:', error);
    throw error;
  }
}

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email || !email.trim()) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const spreadsheetId = process.env.GOOGLE_SHEETS_ID;
    
    if (!spreadsheetId) {
      return NextResponse.json(
        { error: 'Google Sheets not configured' },
        { status: 500 }
      );
    }

    await ensureSheetExists(spreadsheetId);

    const range = 'Newsletter!A:C';

    try {
      const existingData = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range,
      });

      const emails = existingData.data.values?.slice(1).map(row => row[0]) || []; 
      if (emails.includes(email)) {
        return NextResponse.json(
          { message: 'Email already subscribed' },
          { status: 200 }
        );
      }
    } catch (error) {
      console.error('Error checking existing emails:', error);
    }

    // Add new subscriber
    const timestamp = new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    const values = [[email, timestamp, 'active']];
    
    console.log('Adding subscriber:', { email, timestamp, status: 'active' });

    const appendResult = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Newsletter!A:C',
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values,
      },
    });

    console.log('Append result:', appendResult.data);

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    
    if (error.message?.includes('Unable to parse range')) {
      return NextResponse.json(
        { error: 'Sheet configuration error. Please check your Google Sheets setup.' },
        { status: 500 }
      );
    }
    
    if (error.message?.includes('not found')) {
      return NextResponse.json(
        { error: 'Spreadsheet not found. Please check your GOOGLE_SHEETS_ID.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    );
  }
}