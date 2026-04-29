import Link from 'next/link'
import Image from 'next/image'

// ─── EDIT THIS ───────────────────────────────────────────────
const CONFIG = {
  name: 'Ella Klein',
  role: 'Developer & Designer',
  tagline: 'Designing digital experiences between code and aesthetics.',
  location: 'Munich, Germany',
  year: '2026',
  skills: [
  'Next.js',
  'React',
  'TypeScript',
  'Three.js',
  'Svelte',
  'Node.js',
  'Python',
  'UI/UX Design',
  'JavaScript',
  'User Research',
  'Creative Coding',
  'Data Visualization',
  'Figma'
]
}
// ─────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div style={{ minHeight: '100vh' }}>

      {/* HERO */}
      <section className="hero-grid" style={{
        padding: '50px 40px 40px',
        borderBottom: '1px solid rgba(10,10,10,0.12)',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: '40px',
        alignItems: 'center',
        minHeight: '45vh',
        position: 'relative',
      }}>
        <div>
          <p style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '11px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase' as const,
            color: '#888',
            marginBottom: '24px',
          }}>Portfolio — {CONFIG.year}</p>

          <h1 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(72px, 13vw, 200px)',
            lineHeight: 0.88,
            letterSpacing: '-0.01em',
            marginBottom: '32px',
          }}>
            {CONFIG.name.split(' ').map((word, i) => (
              <span key={i} style={{ display: 'block' }}>{word}</span>
            ))}
          </h1>

          <p style={{ fontSize: '16px', color: '#555', maxWidth: '480px', lineHeight: 1.7, marginBottom: '40px' }}>
            {CONFIG.tagline}
          </p>

          <div style={{ display: 'flex', gap: '16px' }}>
            <Link href="/projects" style={{
              display: 'inline-block',
              padding: '12px 28px',
              background: '#0a0a0a',
              color: '#f5f5f0',
              textDecoration: 'none',
              fontFamily: "'Space Mono', monospace",
              fontSize: '11px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase' as const,
            }}>View Work</Link>
            <Link href="/connect" style={{
              display: 'inline-block',
              padding: '12px 28px',
              border: '1px solid #0a0a0a',
              color: '#0a0a0a',
              textDecoration: 'none',
              fontFamily: "'Space Mono', monospace",
              fontSize: '11px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase' as const,
            }}>Contact</Link>
          </div>
        </div>

        <div className="hero-image" style={{
  position: 'absolute',
  right: '50%',
  top: '40%',
  transform: 'translateY(-50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
}}>
  <div style={{
    position: 'relative',
    width: '220px',
    height: '220px',
    borderRadius: '50%',
    border: '3px solid #0a0a0a',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  }}>
    <Image
      src="/homepicture.png"
      alt="miau"
      fill
      style={{
        objectFit: 'cover',
      }}
    />
  </div>
</div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap" style={{ padding: '14px 0' }}>
        <div className="marquee-track">
          {[...CONFIG.skills, ...CONFIG.skills, ...CONFIG.skills, ...CONFIG.skills].map((skill, i) => (
            <span key={i} style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '18px',
              letterSpacing: '0.06em',
              padding: '0 32px',
              color: i % 2 === 0 ? '#0a0a0a' : '#bbb',
            }}>{skill} ◆</span>
          ))}
        </div>
      </div>

      {/* SECTIONS GRID */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid rgba(10,10,10,0.12)' }}>
        <Link href="/about" style={{
          display: 'block', padding: '60px 40px',
          borderRight: '1px solid rgba(10,10,10,0.12)',
          textDecoration: 'none', color: 'inherit',
        }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#888', marginBottom: '24px', display: 'flex', justifyContent: 'space-between' }}>
            <span>About Me</span><span>01</span>
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1, marginBottom: '20px' }}>Who I Am</h2>
          <p style={{ color: '#666', lineHeight: 1.7, maxWidth: '360px' }}>A closer look at how I think, design and build.</p>
          <div style={{ marginTop: '50px', fontFamily: "'Space Mono', monospace", fontSize: '11px', letterSpacing: '0.06em' }}>Learn more →</div>
        </Link>

        <Link href="/projects" style={{
          display: 'block', padding: '60px 40px',
          textDecoration: 'none', color: 'inherit', background: '#0a0a0a',
        }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#666', marginBottom: '24px', display: 'flex', justifyContent: 'space-between' }}>
            <span>Projects</span><span>02</span>
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1, marginBottom: '20px', color: '#f5f5f0' }}>My Work</h2>
          <p style={{ color: '#888', lineHeight: 1.7, maxWidth: '360px' }}>Selected projects combining structure, aesthetics and interaction.</p>
          <div style={{ marginTop: '40px', fontFamily: "'Space Mono', monospace", fontSize: '11px', letterSpacing: '0.06em', color: '#f5f5f0' }}>View projects →</div>
        </Link>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', color: '#aaa', letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>
          © {CONFIG.year} {CONFIG.name}
        </span>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', color: '#aaa', letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>
        </span>
      </footer>
    </div>
  )
}