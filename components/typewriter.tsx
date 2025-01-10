import { useEffect, useState } from 'react'

interface TypewriterProps {
  text: string
}

export function Typewriter({ text }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const handleType = () => {
      const fullText = text + " "

      setDisplayedText(
        isDeleting
          ? fullText.substring(0, displayedText.length - 1)
          : fullText.substring(0, displayedText.length + 1)
      )

      setTypingSpeed(isDeleting ? 30 : 150)

      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), 4000) // Increase idle duration here
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false)
      }
    }

    const timer = setTimeout(handleType, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, text, typingSpeed])

  return (
    <span className="typewriter">
      {displayedText}
      <span className="cursor">|</span>
    </span>
  )
}