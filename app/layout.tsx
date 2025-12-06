import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'React2Shell Test Server',
  description: 'Vulnerable Next.js application for testing CVE-2025-55182',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

