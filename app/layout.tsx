import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const poppins = Poppins({ weight:['400', '500', '600', '700'],subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OmniChat',
  description: 'Chat with anyone and anywhere',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        </body>
    </html>
  )
}
