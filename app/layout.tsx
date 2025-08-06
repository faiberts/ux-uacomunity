import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Academy - Aprendizaje con IA',
  description: 'Plataforma de aprendizaje impulsada por inteligencia artificial',
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
