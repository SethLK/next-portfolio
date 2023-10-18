"use client"

import './globals.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

import NavBar from './components/navBar';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next Portfolio</title>
      </head>
      <body className={inter.className}>
        {/* Add a div with class "menu-icon" for the hamburger menu */}
        <NavBar/>
        
        {children}
        <script src="/script/script.js" async></script>
      </body>
    </html>
  );
}

/* Add your other CSS here */

// ...