import { NavBar } from '../components/nav-bar'
import { NeuralNetwork } from '../components/neural-network'
import { Typewriter } from '../components/typewriter'

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <NavBar />
      <div className="flex-grow relative px-4 flex flex-col items-center justify-center fade-in">
        <div className="flex flex-col items-center">
          <NeuralNetwork />
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-sm font-medium text-black/70">
          <Typewriter text="Data Science and Artificial Intelligence (DSAI) Laboratory" />
        </div>
      </div>
    </main>
  )
}