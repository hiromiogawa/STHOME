import { useEffect, useState, RefObject } from 'react'

export const useScrollTrigger = (ref: RefObject<HTMLElement>) => {
  const [isTriggered, setIsTriggered] = useState(false)

  useEffect(() => {
    const handleScrollTrigger = () => {
      if (ref.current) {
        const { top, bottom } = ref.current.getBoundingClientRect()
        const windowHeight = window.innerHeight

        if (top < windowHeight && bottom > 0) setIsTriggered(true)
      }
    }

    window.addEventListener('scroll', handleScrollTrigger)
    window.addEventListener('resize', handleScrollTrigger)

    return () => {
      window.removeEventListener('scroll', handleScrollTrigger)
      window.removeEventListener('resize', handleScrollTrigger)
    }
  }, [ref])

  return isTriggered
}

export default useScrollTrigger
