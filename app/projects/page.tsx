'use client'
import Link from 'next/link'
import { projects } from '../../lib/projects'

export default function ProjectsPage() {
  return (
    <div>

      {/* HEADER */}
      <section style={{
        padding: '80px 40px 60px',
        borderBottom: '1px solid rgba(10,10,10,0.12)',
      }}>
        <p className="font-mono" style={{
          fontSize: '11px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#888',
          marginBottom: '24px',
        }}>
          Selected Work
        </p>

        <h1 className="font-display" style={{
          fontSize: 'clamp(64px, 10vw, 140px)',
          lineHeight: 0.9,
        }}>
          Projects
        </h1>
      </section>

      {/* LIST */}
      <section>
        {projects.map((project, i) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            style={{
              display: 'block',
              padding: '50px 40px',
              borderBottom: '1px solid rgba(10,10,10,0.12)',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'all 0.2s ease',
              cursor: 'pointer',
              transform: 'translateY(0)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.opacity = '0.9'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.opacity = '1'
            }}
          >

            <div style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr auto',
              gap: '20px',
              alignItems: 'start',
            }}>

              {/* INDEX */}
              <span className="font-mono" style={{
                fontSize: '10px',
                color: '#888',
                letterSpacing: '0.1em',
              }}>
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* CONTENT */}
              <div>
                <h2 className="font-display" style={{
                  fontSize: 'clamp(32px, 5vw, 64px)',
                  lineHeight: 1,
                  marginBottom: '10px',
                }}>
                  {project.title}
                </h2>

                <p style={{
                  color: '#555',
                  marginBottom: '10px',
                  fontSize: '14px',
                }}>
                  {project.subtitle}
                </p>

                <p style={{
                  maxWidth: '520px',
                  color: '#777',
                }}>
                  {project.short}
                </p>

                <div style={{
                    marginTop: '20px',
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '11px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: '#888',
                    opacity: 0.8,
                    }}>
                    <span
                      style={{ transition: 'opacity 0.2s' }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.8')}
                    >
                      View Project →
                    </span>
                </div>
              </div>

              {/* TAGS */}
              <div style={{ textAlign: 'right' }}>
                <p className="font-mono" style={{
                  fontSize: '10px',
                  color: '#888',
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                }}>
                  Tags
                </p>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  alignItems: 'flex-end',
                }}>
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} style={{
                      fontSize: '11px',
                      color: '#aaa',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </Link>
        ))}
      </section>

    </div>
  )
}