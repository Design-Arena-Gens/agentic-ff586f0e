import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Luxe Hair Salon - Premium Hair Styling',
  description: 'Expert hair cutting, coloring, and styling services',
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
