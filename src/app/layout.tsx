import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Short URL',
  description: 'Generador de acortador de URL, acorta tus URL de manera fácil, evitarás tener URL largas',
  keywords: 'Url, acortador, no url largas'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
