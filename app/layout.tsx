import type { Metadata, Viewport } from 'next'
import { Inter, Lora } from 'next/font/google'
import Script from 'next/script'
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
  metadataBase: new URL('https://www.dobrikiprov.com'),
  title: 'Dr. Dobri Kiprov, M.D. | Pioneer in Therapeutic Plasma Exchange',
  description:
    'Dr. Dobri Kiprov - Pioneer in therapeutic plasma exchange with 40+ years of research. Founding member of ASFA, 100+ publications on therapeutic apheresis, immunology, longevity medicine, and biological age reversal.',
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
  alternates: {
    canonical: 'https://dobrikiprov.com/',
  },
  verification: {
    google: 'UVG2iyrjWaBFDSJ0Z9dyCYVMQlZcsH_vzPwDA1Psuk0',
  },
  openGraph: {
    title: 'Dr. Dobri Kiprov - 40 Years of Therapeutic Plasma Exchange Research',
    description:
      'Pioneer in therapeutic plasma exchange with 40+ years of research. Founding member of ASFA, 100+ publications on therapeutic apheresis, immunology, and longevity medicine.',
    type: 'website',
    url: 'https://dobrikiprov.com',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dr.%20Kiprov%20Headshot%20from%20his%20site-i84KUVGfGymdPHVCCFIBxYJXf9mC7C.jpg',
        alt: 'Dr. Dobri Kiprov',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Dobri Kiprov - Therapeutic Plasma Exchange Pioneer',
    description:
      '40 years of published research in therapeutic plasma exchange, immunology, longevity medicine, and biological age reversal.',
  },
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S925LG7WFF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S925LG7WFF');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Dobri Kiprov',
              honorificPrefix: 'Dr.',
              jobTitle: 'Founder & Medical Director',
              worksFor: {
                '@type': 'Organization',
                name: 'Global Apheresis',
              },
              alumniOf: [
                { '@type': 'Organization', name: 'Harvard Medical School' },
                { '@type': 'Organization', name: 'Massachusetts General Hospital' },
              ],
              award: [
                'American Society for Apheresis Presidential Award',
                'ASFA Lecturers Award',
                'Francis Morrison Memorial Award',
              ],
              knowsAbout: [
                'Therapeutic Plasma Exchange',
                'Therapeutic Apheresis',
                'Biological Age Reversal',
                'Longevity Medicine',
                'Immunotherapy',
              ],
              url: 'https://dobrikiprov.com',
              sameAs: [
                'https://www.linkedin.com/in/dobrikiprov',
                'https://www.youtube.com/@globalapheresis',
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MedicalBusiness',
              name: 'Global Apheresis',
              url: 'https://globalapheresis.com',
              founder: {
                '@type': 'Person',
                name: 'Dobri Kiprov',
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: '655 Redwood Highway, Suite 370',
                addressLocality: 'Mill Valley',
                addressRegion: 'CA',
                postalCode: '94941',
              },
              medicalSpecialty: 'Therapeutic Apheresis',
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
