'use client';
import "./globals.css";




     


export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) 
{ 
  return (
    <html lang="en" className ='group-[transition-colors duration-10000] invisible-scrollbar  overflow-x-clip dark '>
      <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" /> {/* makes sure the website always matches screen width*/}
      </head>
      <body>
            <div >
            {children}
            </div>
      </body>
    </html>
  );
}

