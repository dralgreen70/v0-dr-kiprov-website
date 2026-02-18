import type { Metadata, Viewport } from 'next'
import { Inter, Lora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _lora = Lora({ subsets: ['latin'], variable: '--font-lora' })

export const viewport: Viewport = {
  themeColor: '#1a2744',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Dr. Dobri Kiprov, M.D. | Pioneer in Therapeutic Plasma Exchange',
  description:
    'Dr. Dobri Kiprov is the leading authority in therapeutic plasma exchange for age-related disease, Alzheimer\'s, and long COVID. 40+ years of published research, 100+ peer-reviewed publications. Schedule a consultation.',
  keywords: [
    'therapeutic plasma exchange',
    'Dr. Dobri Kiprov',
    'apheresis',
    'biological aging',
    'Alzheimer\'s treatment',
    'long COVID treatment',
    'preventative medicine',
    'Global Apheresis',
  ],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_inter.variable} ${_lora.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
