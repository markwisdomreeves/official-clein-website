import { NextResponse } from 'next/server'

let locales = ['it']

function getLocale(request) {
  return 'it' 
}

export function middleware(request) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|assets|seo|manifest.json|site.webmanifest|robots.txt|browserconfig.xml|android-chrome.*\.png|apple-touch-icon\.png|favicon.*\.png|sw\.js|workbox.*\.js|pwa-.*\.html).*)',
  ],
}