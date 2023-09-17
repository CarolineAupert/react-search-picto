'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("error caupert " + error);
    console.error(error);
  }, [error])
 
  return (
    <div>
      <h2>Une erreur est survenue !</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Ré-essayer
      </button>
    </div>
  )
}