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

    // Set canvas size
    const setCanvasSize = () => {
      const margin = 20 // Margin for better fit
      const width = window.innerWidth - margin * 2
      const height = window.innerHeight - margin * 2
      const aspectRatio = 16 / 9 // Maintain a good aspect ratio

      if (width / height > aspectRatio) {
        canvas.width = height * aspectRatio
        canvas.height = height
      } else {
        canvas.width = width
        canvas.height = width / aspectRatio
      }

      canvas.style.width = `${canvas.width}px`
      canvas.style.height = `${canvas.height}px`
    }
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    // Neural network configuration with non-proportional layers
    const layers: Layer[] = [
      { neurons: Array(5).fill(0).map(() => ({ x: 0, y: 0, connections: [] })) },
      { neurons: Array(8).fill(0).map(() => ({ x: 0, y: 0, connections: [] })) },
      { neurons: Array(12).fill(0).map(() => ({ x: 0, y: 0, connections: [] })) },
      { neurons: Array(6).fill(0).map(() => ({ x: 0, y: 0, connections: [] })) },
      { neurons: Array(4).fill(0).map(() => ({ x: 0, y: 0, connections: [] })) },
    ]
    const letters = ['D', 'S', 'A', 'I']
    // Position neurons with non-proportional spacing
    const padding = 40 // Padding to ensure letters are fully visible
    const layerSpacing = (canvas.width - padding * 2) / (layers.length - 1)

    layers.forEach((layer, layerIndex) => {
      const layerHeight = canvas.height * (0.5 + Math.random() * 0.5) // Random height between 50% and 100% of canvas height
      const neuronSpacing = (layerHeight - padding * 2) / (layer.neurons.length - 1)
      const layerOffset = (canvas.height - layerHeight) / 2 // Center the layer vertically

      layer.neurons.forEach((neuron, neuronIndex) => {
        neuron.x = padding + layerIndex * layerSpacing
        neuron.y = layerOffset + padding + neuronIndex * neuronSpacing

        // Connect to next layer
        if (layerIndex < layers.length - 1) {
          const nextLayer = layers[layerIndex + 1]
          neuron.connections = Array(nextLayer.neurons.length).fill(0).map((_, i) => ({
            targetIndex: i,
            opacity: 0.1
          }))
        }
      })
    })

    // Animation variables
    let particles: { x: number; y: number; targetX: number; targetY: number; layerIndex: number; sourceIndex: number; targetIndex: number }[] = []
    const particleSpeed = 0.02
    const particleFadeSpeed = 0.05

    // Animation function
    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections with dynamic opacity
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

              // Fade out connection opacity
              connection.opacity = Math.max(0.1, connection.opacity - particleFadeSpeed)
            })
          })
        }
      })

      // Draw neurons
      layers.forEach((layer, layerIndex) => {
        layer.neurons.forEach((neuron, neuronIndex) => {
          ctx.beginPath()
          ctx.arc(neuron.x, neuron.y, 4, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'
          ctx.fill()

          if (layerIndex === layers.length - 1) {
            const letter = letters[neuronIndex]
            ctx.font = `${activeLetter === letter ? '24px' : '20px'} Arial`
            ctx.fillStyle = activeLetter === letter ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.8)'
            ctx.textAlign = 'left'
            ctx.textBaseline = 'middle'
            ctx.fillText(letter, neuron.x + 15, neuron.y)
          }
        })
      })

      // Random signal animation
      if (Math.random() < 0.05) {
        const sourceLayer = Math.floor(Math.random() * (layers.length - 1))
        const sourceNeuron = Math.floor(Math.random() * layers[sourceLayer].neurons.length)
        const targetNeuron = Math.floor(Math.random() * layers[sourceLayer + 1].neurons.length)

        if (
          layers[sourceLayer] &&
          layers[sourceLayer].neurons[sourceNeuron] &&
          layers[sourceLayer + 1] &&
          layers[sourceLayer + 1].neurons[targetNeuron]
        ) {
          particles.push({
            x: layers[sourceLayer].neurons[sourceNeuron].x,
            y: layers[sourceLayer].neurons[sourceNeuron].y,
            targetX: layers[sourceLayer + 1].neurons[targetNeuron].x,
            targetY: layers[sourceLayer + 1].neurons[targetNeuron].y,
            layerIndex: sourceLayer,
            sourceIndex: sourceNeuron,
            targetIndex: targetNeuron
          })
        }
      }

      // Update and draw particles
      particles = particles.filter(particle => {
        const dx = particle.targetX - particle.x
        const dy = particle.targetY - particle.y
        particle.x += dx * particleSpeed
        particle.y += dy * particleSpeed

        // Activate connection
        const sourceNeuron = layers[particle.layerIndex].neurons[particle.sourceIndex]
        sourceNeuron.connections[particle.targetIndex].opacity = 0.8

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'
        ctx.fill()

        if (particle.layerIndex === layers.length - 2 && Math.abs(dx) <= 1 && Math.abs(dy) <= 1) {
          setActiveLetter(letters[particle.targetIndex])
          setTimeout(() => setActiveLetter(null), 500) // Reset after 500ms
        }

        return Math.abs(dx) > 1 || Math.abs(dy) > 1
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
      className="block mx-auto"
    />
  )
}
