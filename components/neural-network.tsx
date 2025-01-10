'use client'

import { useEffect, useRef, useState } from 'react'

interface Neuron {
  x: number
  y: number
  connections: { targetIndex: number; opacity: number }[]
}

interface Layer {
  neurons: Neuron[]
}

export function NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [activeLetter, setActiveLetter] = useState<string | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Neural network configuration with optimized neuron distribution
    const layers: Layer[] = [
      { neurons: Array(4).fill(0).map(() => ({ x: 0, y: 0, connections: [] })) },
      { neurons: Array(6).fill(0).map(() => ({ x: 0, y: 0, connections: [] })) },
      { neurons: Array(8).fill(0).map(() => ({ x: 0, y: 0, connections: [] })) },
      { neurons: Array(6).fill(0).map(() => ({ x: 0, y: 0, connections: [] })) },
      { neurons: Array(4).fill(0).map(() => ({ x: 0, y: 0, connections: [] })) },
    ]

    const setCanvasSize = () => {
      const margin = 40 // Increased margin for better spacing
      const width = Math.min(window.innerWidth - margin * 2, 1200) // Max width cap
      const height = Math.min(600, window.innerHeight - margin * 2) // Max height cap
      
      // Set canvas size with device pixel ratio
      const scale = window.devicePixelRatio || 1
      canvas.width = width * scale
      canvas.height = height * scale
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.scale(scale, scale)

      // Position neurons
      const layerSpacing = (width - margin * 2) / (layers.length - 1)
      const maxNeurons = Math.max(...layers.map(layer => layer.neurons.length))
      const neuronSpacing = (height - margin * 2) / (maxNeurons - 1)

      layers.forEach((layer, layerIndex) => {
        const layerHeight = (layer.neurons.length - 1) * neuronSpacing
        const layerOffset = (height - layerHeight) / 2

        layer.neurons.forEach((neuron, neuronIndex) => {
          neuron.x = margin + layerIndex * layerSpacing
          neuron.y = layerOffset + neuronIndex * neuronSpacing

          // Connect to next layer with improved connection distribution
          if (layerIndex < layers.length - 1) {
            const nextLayer = layers[layerIndex + 1]
            neuron.connections = nextLayer.neurons.map((_, i) => ({
              targetIndex: i,
              opacity: 0.08 // Reduced base opacity for subtler connections
            }))
          }
        })
      })
    }

    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    const letters = ['D', 'S', 'A', 'I']
    let particles: {
      x: number
      y: number
      targetX: number
      targetY: number
      layerIndex: number
      sourceIndex: number
      targetIndex: number
      progress: number
    }[] = []

    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      layers.forEach((layer, layerIndex) => {
        if (layerIndex < layers.length - 1) {
          layer.neurons.forEach((neuron, neuronIndex) => {
            neuron.connections.forEach((connection) => {
              const target = layers[layerIndex + 1].neurons[connection.targetIndex]
              ctx.beginPath()
              ctx.strokeStyle = `rgba(0, 0, 0, ${connection.opacity})`
              ctx.lineWidth = 0.5
              ctx.moveTo(neuron.x, neuron.y)
              ctx.lineTo(target.x, target.y)
              ctx.stroke()

              // Smoother opacity fade
              connection.opacity = Math.max(0.08, connection.opacity * 0.95)
            })
          })
        }
      })

      // Draw neurons with improved styling
      layers.forEach((layer, layerIndex) => {
        layer.neurons.forEach((neuron, neuronIndex) => {
          ctx.beginPath()
          ctx.arc(neuron.x, neuron.y, 3, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
          ctx.fill()

          // Draw letters with improved positioning and zoom effect
          if (layerIndex === layers.length - 1) {
            const letter = letters[neuronIndex]
            const isActive = activeLetter === letter
            const fontSize = isActive ? 28 : 20
            const fontWeight = isActive ? 'bold' : 'normal'
            ctx.font = `${fontWeight} ${fontSize}px Inter, sans-serif`
            ctx.fillStyle = isActive ? 'rgba(0, 0, 255, 0.9)' : 'rgba(0, 0, 0, 0.7)'
            ctx.textAlign = 'left'
            ctx.textBaseline = 'middle'
            
            // Add a glow effect for active letters
            if (isActive) {
              ctx.shadowColor = 'rgba(0, 0, 255, 0.5)'
              ctx.shadowBlur = 10
            }
            
            ctx.fillText(letter, neuron.x + 12, neuron.y)
            
            // Reset shadow
            ctx.shadowColor = 'transparent'
            ctx.shadowBlur = 0
          }
        })
      })

      // Generate new particles with controlled frequency
      if (Math.random() < 0.05) { // Increased frequency for more activity
        const sourceLayer = Math.floor(Math.random() * (layers.length - 1))
        const sourceNeuron = Math.floor(Math.random() * layers[sourceLayer].neurons.length)
        const targetNeuron = Math.floor(Math.random() * layers[sourceLayer + 1].neurons.length)

        particles.push({
          x: layers[sourceLayer].neurons[sourceNeuron].x,
          y: layers[sourceLayer].neurons[sourceNeuron].y,
          targetX: layers[sourceLayer + 1].neurons[targetNeuron].x,
          targetY: layers[sourceLayer + 1].neurons[targetNeuron].y,
          layerIndex: sourceLayer,
          sourceIndex: sourceNeuron,
          targetIndex: targetNeuron,
          progress: 0
        })
      }

      // Update and draw particles with smoother animation
      particles = particles.filter(particle => {
        particle.progress += 0.005
        const t = particle.progress
        particle.x = particle.x + (particle.targetX - particle.x) * t
        particle.y = particle.y + (particle.targetY - particle.y) * t

        // Activate connection with smoother transition
        const sourceNeuron = layers[particle.layerIndex].neurons[particle.sourceIndex]
        sourceNeuron.connections[particle.targetIndex].opacity = 0.6

        // Draw particle with trail effect
        ctx.beginPath()
        ctx.moveTo(particle.x, particle.y)
        ctx.lineTo(particle.x - (particle.targetX - particle.x) * 0.1, particle.y - (particle.targetY - particle.y) * 0.1)
        ctx.strokeStyle = 'rgba(0, 0, 255, 0.4)'
        ctx.lineWidth = 2
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, 3, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0, 0, 255, 0.8)'
        ctx.fill()

        // Trigger letter animation when particle reaches end
        if (particle.layerIndex === layers.length - 2 && t >= 0.95) {
          setActiveLetter(letters[particle.targetIndex])
          setTimeout(() => setActiveLetter(null), 400)
        }

        return t < 1
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="block mx-auto max-w-full"
    />
  )
}

