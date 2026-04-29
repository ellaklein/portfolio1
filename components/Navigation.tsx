'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Index' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/connect', label: 'Connect' },
]

export default function Navigation() {
  const path = usePathname()

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      padding: '0 40px',
      height: '65px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid rgba(10,10,10,0.12)',
      background: 'rgba(245,245,240,0.92)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
    }}>
      {/* Logo / Name */}
      <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <span style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '22px',
          letterSpacing: '0.04em',
          lineHeight: 1,
        }}>
          Ella Klein
        </span>
      </Link>

      {/* Center nav */}
      <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
        {links.map(link => (
          <Link key={link.href} href={link.href} style={{
            textDecoration: 'none',
            color: path === link.href ? '#0a0a0a' : '#888',
            fontFamily: "'Space Mono', monospace",
            fontSize: '11px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            transition: 'color 0.2s ease',
            borderBottom: path === link.href ? '1px solid #0a0a0a' : '1px solid transparent',
            paddingBottom: '2px',
          }}>
            {link.label}
          </Link>
        ))}
      </div>

      {/* Status */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{
          width: '6px', height: '6px',
          background: '#22c55e',
          borderRadius: '50%',
          display: 'inline-block',
        }} />
        <span style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '10px',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#888',
        }}>
        </span>
      </div>
    </nav>
  )
}