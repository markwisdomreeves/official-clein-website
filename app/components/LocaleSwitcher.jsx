'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function LocaleSwitcher() {
  const pathname = usePathname()
  
  const redirectedPathname = (locale) => {
    if (!pathname) return '/'
    const segments = pathname.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className="flex items-center gap-1">
     
      <Link 
        href={redirectedPathname('it')}
        className={` size-8 flex items-center justify-center rounded ${pathname.startsWith('/it') ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
      >
        IT
      </Link> <Link 
        href={redirectedPathname('en')}
        className={` size-8 flex items-center justify-center rounded ${pathname.startsWith('/en') ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
      >
        EN
      </Link>
    </div>
  )
}