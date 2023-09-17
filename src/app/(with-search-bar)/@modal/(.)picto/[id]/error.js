'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function ErrorModal({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2>Une erreur est survenue modal !</h2>
    </div>
  )
}