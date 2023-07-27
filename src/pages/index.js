import { Inter } from 'next/font/google'
import Hero from './hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main >
      <Hero />

    </main>
  )
}
