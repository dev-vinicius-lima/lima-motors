import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LimaMotors - sua oficina especializada!',
  description: 'Oficina de carros em Manaus-AM',
  keywords: ['oficina', 'oficina de carros', 'carros', 'manutenção de carros'],
  openGraph: {
    images: [`${process.env.NEXT_PUBLIC_URL}/logo.jpg`],
    siteName: 'LimaMotors',
    title: 'LimaMotors - sua oficina especializada!',
    description: 'Oficina de carros em Manaus-AM',
    url: `${process.env.NEXT_PUBLIC_URL}`,
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <p style={{ textAlign: 'center', marginTop: 54, marginBottom: 24 }}>
          Todos os direitos reservados @{`${new Date().getFullYear()}`}
        </p>
      </body>
    </html>
  )
}
