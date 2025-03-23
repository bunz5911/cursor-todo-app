import type { Metadata } from 'next'
import './globals.css'
import { ThemeToggle } from './components/ThemeToggle'

export const metadata: Metadata = {
  title: 'Todo App',
  description: '간단한 Todo 앱',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <ThemeToggle />
        {children}
      </body>
    </html>
  )
}
