import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'HIMATIFA — Inovasi Tanpa Batas',
  description: 'Himpunan Mahasiswa Teknik Informatika Universitas Muhammadiyah Surabaya.',
  generator: 'v0.app',
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

  openGraph: {
    title: 'HIMATIFA — Inovasi Tanpa Batas',
    description: 'Himpunan Mahasiswa Teknik Informatika Universitas Muhammadiyah Surabaya.',
    url: 'https://himatifa.vercel.app',
    siteName: 'HIMATIFA UMSurabaya',
    images: [
      {
        url: 'https://himatifa.vercel.app/himatifabg.png',
        width: 1200,
        height: 630,
        alt: 'HIMATIFA UMSurabaya Logo',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HIMATIFA — Inovasi Tanpa Batas',
    description: 'Himpunan Mahasiswa Teknik Informatika Universitas Muhammadiyah Surabaya.',
    images: ['https://himatifa.vercel.app/himatifabg.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable} bg-[#f4f8fc]`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}