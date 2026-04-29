'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ringX = 0, ringY = 0
    let curX = 0, curY = 0
    let rafId: number

    const onMove = (e: MouseEvent) => {
      curX = e.clientX
      curY = e.clientY
      if (cursorRef.current) {
        cursorRef.current.style.left = curX + 'px'
        cursorRef.current.style.top = curY + 'px'
      }
    }

    const animate = () => {
      ringX += (curX - ringX) * 0.15
      ringY += (curY - ringY) * 0.15
      if (ringRef.current) {
        ringRef.current.style.left = ringX + 'px'
        ringRef.current.style.top = ringY + 'px'
      }
      rafId = requestAnimationFrame(animate)
    }

    const onEnterLink = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '48px'
        ringRef.current.style.height = '48px'
        ringRef.current.style.background = 'rgba(10,10,10,0.08)'
      }
    }

    const onLeaveLink = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '30px'
        ringRef.current.style.height = '30px'
        ringRef.current.style.background = 'transparent'
      }
    }

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnterLink)
      el.addEventListener('mouseleave', onLeaveLink)
    })

    rafId = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}