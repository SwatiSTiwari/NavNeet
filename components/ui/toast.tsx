import { useEffect, useState } from 'react'

interface ToastProps {
  title: string
  description: string
}

export function Toast({ title, description }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm">
      <h3 className="font-semibold">{title}</h3>
      <p>{description}</p>
    </div>
  )
}
