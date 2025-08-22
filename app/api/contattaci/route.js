import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const EMAIL_TO = 'info@clein.it';

const serviceTranslations = {
  it: {
    'pulizia-della-casa': 'Pulizia della Casa',
    'pulizia-profonda': 'Pulizia Profonda',
    'pulizia-tappeti-divani': 'Pulizia Tappeti e Divani',
    'Pulizia Uffici': 'pulizia-uffici',
    'pulizia-post-costruzione': 'Pulizia Post-Costruzione',
    'pulizia-per-traslochi': 'Pulizia per Traslochi',
    'elettricista': 'Servizi Elettrici',
    'idraulico': 'Servizi Idraulici',
    'tuttofare': 'Servizi di Tuttofare',
    'giardinaggio': 'Giardinaggio',
    'assistenza-elettrodomestici': 'Assistenza Elettrodomestici',
    'sanificazione-disinfezione': 'Servizi di Sanificazione e Disinfezione',
    'altro': 'Altro'
  },
  en: {
  'house-cleaning': 'House Cleaning',
  'deep-cleaning': 'Deep Cleaning',
  'carpet-sofa-cleaning': 'Carpet & Sofa Cleaning',
  'office-cleaning': 'Office Cleaning',
  'post-construction-cleaning': 'Post-Construction Cleaning',
  'move-in-move-out-cleaning': 'Move-in/Move-out Cleaning',
  'electrical-services': 'Electrical Services',
  'plumbing-services': 'Plumbing Services',
  'handyman-services': 'Handyman Services',
  'gardening': 'Gardening',
  'appliance-repair': 'Appliance Installation & Repair',
  'sanitization-disinfection': 'Sanitization & Disinfection',
  'other': 'Other'
  }
};

const translations = {
  it: {
    errors: {
      missingFields: 'Campi obbligatori mancanti',
      failedToSend: 'Impossibile inviare l\'email',
      internalError: 'Errore interno del server'
    },
    email: {
      subject: 'Nuovo messaggio dal modulo di contatto da',
      adminEmail: {
        title: 'Nuovo messaggio dal modulo di contatto',
        name: 'Nome',
        email: 'Email',
        phone: 'Telefono',
        phoneNotProvided: 'Non fornito',
        serviceInterest: 'Servizio di interesse',
        serviceNotSpecified: 'Non specificato',
        message: 'Messaggio',
        footer: 'Questa email è stata inviata dal modulo di contatto del sito web CLEIN.'
      },
      confirmationEmail: {
        subject: 'Grazie per aver contattato CLEIN',
        title: 'Grazie per averci contattato!',
        greeting: 'Gentile',
        message: 'Abbiamo ricevuto il tuo messaggio e ti risponderemo entro 24 ore.',
        urgentHelp: 'Se hai bisogno di assistenza immediata, chiamaci al +39 351 591 9245.',
        regards: 'Cordiali saluti,',
        team: 'Il team CLEIN',
        footerText: 'CLEIN - La tua piattaforma di fiducia per i servizi domestici',
        downloadApp: 'Scarica la nostra app',
        visitCleinSite: 'Visita il nostro sito web per altri servizi domestici professionali'
      }
    }
  },
  en: {
    errors: {
      missingFields: 'Missing required fields',
      failedToSend: 'Failed to send email',
      internalError: 'Internal server error'
    },
    email: {
      subject: 'New Contact Form Submission from',
      adminEmail: {
        title: 'New Contact Form Submission',
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        phoneNotProvided: 'Not provided',
        serviceInterest: 'Service Interest',
        serviceNotSpecified: 'Not specified',
        message: 'Message',
        footer: 'This email was sent from the CLEIN website contact form.'
      },
      confirmationEmail: {
        subject: 'Thank you for contacting CLEIN',
        title: 'Thank you for reaching out!',
        greeting: 'Dear',
        message: 'We\'ve received your message and will get back to you within 24 hours.',
        urgentHelp: 'If you need immediate assistance, please call us at +39 351 591 9245.',
        regards: 'Best regards,',
        team: 'The CLEIN Team',
        footerText: 'CLEIN - Your trusted home services platform',
        downloadApp: 'Download our app',
        visitCleinSite: 'Visit our website for more professionals home services'
      }
    }
  }
};

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message, lang = 'it' } = body;
    
    const t = translations[lang] || translations.it;
    const serviceNames = serviceTranslations[lang] || serviceTranslations.it;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: t.errors.missingFields },
        { status: 400 }
      );
    }

    // Send email to admin
    const { error } = await resend.emails.send({
      from: 'CLEIN Contact Form <noreply@clein.it>',
      to: EMAIL_TO,
      reply_to: email,
      subject: `${t.email.subject} ${name}`,
      html: `
        <h2>${t.email.adminEmail.title}</h2>
        <p><strong>${t.email.adminEmail.name}:</strong> ${name}</p>
        <p><strong>${t.email.adminEmail.email}:</strong> ${email}</p>
        <p><strong>${t.email.adminEmail.phone}:</strong> ${phone || t.email.adminEmail.phoneNotProvided}</p>
        <p><strong>${t.email.adminEmail.serviceInterest}:</strong> ${service ? serviceNames[service] || service : t.email.adminEmail.serviceNotSpecified}</p>
        <h3>${t.email.adminEmail.message}:</h3>
        <p>${message}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">${t.email.adminEmail.footer}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: t.errors.failedToSend },
        { status: 500 }
      );
    }

    // Send confirmation email to user
    await resend.emails.send({
      from: 'CLEIN <noreply@clein.it>',
      to: email,
      subject: t.email.confirmationEmail.subject,
      html: `
        <h2>${t.email.confirmationEmail.title}</h2>
        <p>${t.email.confirmationEmail.greeting} ${name},</p>
        <p>${t.email.confirmationEmail.message}</p>
        <p>${t.email.confirmationEmail.urgentHelp}</p>
        <br>
        <p>${t.email.confirmationEmail.regards}<br>${t.email.confirmationEmail.team}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">
          ${t.email.confirmationEmail.footerText}<br>
          ${t.email.confirmationEmail.downloadApp}: <a href="https://play.google.com/store/apps/details?id=com.clein.homeservices&hl=it&gl=IT" target="_blank">Google Play</a> | <a href="https://apps.apple.com/it/app/clein-servizi-per-la-casa/id6743106855" target="_blank">App Store</a>
        </p>
        <p style="color: #666; font-size: 12px; margin-top: 5px;">
          ${t.confirmationEmail.visitCleinSite}: <a href="https://www.clein.it/" target="_blank"></a>
        </p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}