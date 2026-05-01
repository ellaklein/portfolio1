'use client'

import { projects } from '@/lib/projects'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug)
  const [activeImage, setActiveImage] = useState<string | null>(null)

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
          {project.links && (
            <div style={{
              marginTop: '20px',
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap'
            }}>
              {project.links.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: '#0a0a0a',
                    textDecoration: 'none',
                    borderBottom: '1px solid #0a0a0a',
                    paddingBottom: '2px'
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
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
      {project.images ? (
        <section style={{
          padding: '60px 40px',
          borderBottom: '1px solid rgba(10,10,10,0.12)',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: project.images.length === 2 ? '1fr 1fr' : '1fr',
            gap: '0px',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            {project.images.map((img, i) => (
              <div
                key={i}
                onClick={() => setActiveImage(img.src)}
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '350px',
                  cursor: 'zoom-in',
                  transition: 'transform 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
          {project.images[0]?.description && (
            <p style={{
              marginTop: '16px',
              color: '#666',
              fontSize: '13px',
              maxWidth: '600px',
              textAlign: 'center',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              {project.images[0].description}
            </p>
          )}
        </section>
      ) : project.codeImage && (
        <section style={{
          padding: '60px 40px',
          borderBottom: '1px solid rgba(10,10,10,0.12)',
        }}>
          <div
            onClick={() => project.codeImage?.src && setActiveImage(project.codeImage.src)}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '900px',
              height: '350px',
              margin: '0 auto',
              cursor: 'zoom-in',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <Image
              src={project.codeImage?.src || ''}
              alt={project.codeImage?.alt || ''}
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>

          {project.codeImage?.description && (
            <p style={{
              marginTop: '16px',
              color: '#666',
              fontSize: '13px',
              maxWidth: '600px',
              textAlign: 'center',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              {project.codeImage?.description}
            </p>
          )}
        </section>
      )}

      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            cursor: 'zoom-out',
          }}
        >
          <button
            onClick={() => setActiveImage(null)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'transparent',
              border: 'none',
              color: '#fff',
              fontSize: '24px',
              cursor: 'pointer',
            }}
          >
            ×
          </button>
          <img
            src={activeImage}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              objectFit: 'contain',
            }}
          />
        </div>
      )}

    </div>
  )
}