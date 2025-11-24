import type { Metadata } from 'next'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import Navigation from '@/components/Navigation'
import AuthGate from '@/components/AuthGate'

export const metadata: Metadata = {
  title: 'Motasem Sakr - Chip-to-Agent Stack',
  description: 'Engineering the full AI pipeline: from custom silicon to autonomous agents that ship',
  keywords: ['AI Engineer', 'ASIC Design', 'Machine Learning', 'AI Agents', 'Silicon', 'Hardware Acceleration'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthGate>
          <SmoothScroll>
            <Navigation />
            {children}
          </SmoothScroll>
        </AuthGate>
      </body>
    </html>
  )
}

