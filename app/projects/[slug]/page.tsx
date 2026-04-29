import { projects } from '@/lib/projects'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug)

  if (!project) return notFound()

  return (
    <div>

      {/* HEADER */}
      <section style={{
        padding: '80px 40px 60px',
        borderBottom: '1px solid rgba(10,10,10,0.12)',
      }}>
        <Link href="/projects" className="font-mono" style={{
          fontSize: '11px',
          textTransform: 'uppercase',
          color: '#888',
          textDecoration: 'none',
          marginBottom: '24px',
          display: 'inline-block'
        }}>
          ← Back
        </Link>

        <h1 className="font-display" style={{
          fontSize: 'clamp(48px, 8vw, 120px)',
          lineHeight: 0.9,
          marginBottom: '20px',
        }}>
          {project.title}
        </h1>

        <p style={{
          fontSize: '16px',
          color: '#555',
          maxWidth: '600px',
        }}>
          {project.subtitle}
        </p>
      </section>

      {/* CONTENT */}
      <section style={{
        padding: '60px 40px',
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '60px',
        borderBottom: '1px solid rgba(10,10,10,0.12)',
      }}>

        {/* LEFT TEXT */}
        <div>
          <p style={{
            lineHeight: 1.8,
            color: '#444',
            whiteSpace: 'pre-line',
          }}>
            {project.description}
          </p>
        </div>

        {/* RIGHT META */}
        <div>

          {project.role && (
            <div style={{ marginBottom: '30px' }}>
              <p className="font-mono" style={{
                fontSize: '10px',
                color: '#888',
                textTransform: 'uppercase',
                marginBottom: '6px',
              }}>
                Role
              </p>
              <p>{project.role}</p>
            </div>
          )}

          {project.tech && (
            <div style={{ marginBottom: '30px' }}>
              <p className="font-mono" style={{
                fontSize: '10px',
                color: '#888',
                textTransform: 'uppercase',
                marginBottom: '6px',
              }}>
                Tech
              </p>
              <p>{project.tech.join(', ')}</p>
            </div>
          )}

          <div>
            <p className="font-mono" style={{
              fontSize: '10px',
              color: '#888',
              textTransform: 'uppercase',
              marginBottom: '6px',
            }}>
              Tags
            </p>
            <p>{project.tags.join(', ')}</p>
          </div>

        </div>

      </section>

      {/* IMAGE */}
      {project.codeImage && (
        <section style={{
          padding: '60px 40px',
          borderBottom: '1px solid rgba(10,10,10,0.12)',
        }}>
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '900px',
            height: '350px',
            margin: '0 auto',
          }}>
            <Image
              src={project.codeImage.src}
              alt={project.codeImage.alt}
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>

          {project.codeImage.description && (
            <p style={{
              marginTop: '16px',
              color: '#666',
              fontSize: '13px',
              maxWidth: '600px',
            }}>
              {project.codeImage.description}
            </p>
          )}
        </section>
      )}

    </div>
  )
}