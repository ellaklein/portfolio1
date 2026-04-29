import type { Metadata } from 'next'
import './globals.css'
import Navigation from '../components/Navigation'

export const metadata: Metadata = {
  title: 'Portfolio — Ella Klein',
  description: 'Developer & Designer Portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Bebas+Neue&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navigation />
        <main style={{ paddingTop: '65px' }}>
          {children}
        </main>
      </body>
       </html>
  )
}