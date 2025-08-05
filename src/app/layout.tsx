'use client';
import "./globals.css";




     


export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) 
{ 
  return (
    <html lang="en" className ='group-[transition-colors duration-10000] invisible-scrollbar  overflow-x-clip '>
      <body>
            <div >
            {children}
            </div>
      </body>
    </html>
  );
}

