'use client';
import "./globals.css";
import Navbar from './components/navbar'




     


export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) 
{ 
  return (
    <html lang="en" className ='group-[transition-colors duration-10000] invisible-scrollbar'>
      <body>
            <div id = "root" className ='fixed w-full z-3'>
                <Navbar/>
            </div>
            <div className='absolute top-0'>
            {children}
            </div>
      </body>
    </html>
  );
}

