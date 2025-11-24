import Hero from '@/components/Hero'
import StackVisualization from '@/components/StackVisualization'
import Layer0Silicon from '@/components/layers/Layer0Silicon'
import Layer1Models from '@/components/layers/Layer1Models'
import Layer2Agents from '@/components/layers/Layer2Agents'
import Layer3Impact from '@/components/layers/Layer3Impact'
import Publications from '@/components/Publications'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <StackVisualization />
      <Layer0Silicon />
      <Layer1Models />
      <Layer2Agents />
      <Layer3Impact />
      <Publications />
      <Contact />
    </main>
  )
}

