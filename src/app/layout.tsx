'use client'

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
const inter = Inter({ subsets: ['latin'] });
import { usePathname } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Next Portfolio',
  description: 'Next Portfolio by Seth',
}

const navigation: { name: string; href: string }[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Blog', href: '/blog' },
  { name: 'Projects', href: '/projects' },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname()
  return (
    <html lang="en">
      <head>
        <title>Next Portfolio</title>
      </head>
      <body className={inter.className}>
        {/* Add a div with class "menu-icon" for the hamburger menu */}
        
        <nav className="bg-gray-900 flex">
          <ul className="flex items-center space-x-4">
            <li>
              <Image
                src={'./tailwind.svg'}
                alt="tailwind logo"
                width={75}
                height={75}
                className="h-8 w-auto img m-2"
              />
            </li>
            {navigation.map((item) => (
              <li
                key={item.name}
                className={`m-2 links ${pathname == item.href ? 'text-gray-50 underline': ''}`} // Apply 'text-gray-50 underline' class to the active item
              >
                <Link href={item.href} className="text-gray-50">
                  {item.name}
                </Link>
              </li>
            ))}
            {/* <li className="menu-li" style={{left: '86vw'}}> */}
            <li className="menu-li mr-2" >
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </li>
          </ul>
          
        </nav>
        {children}

      </body>
    </html>
  );
}

/* Add your other CSS here */

// ...
