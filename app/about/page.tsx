import Image from 'next/image'

export default function AboutPage() {
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
          About me
        </p>

        <h1 className="font-display" style={{
          fontSize: 'clamp(64px, 10vw, 140px)',
          lineHeight: 0.9,
        }}>
          Ella
        </h1>
      </section>

      {/* CONTENT */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        borderBottom: '1px solid rgba(10,10,10,0.12)',
      }}>

<div style={{
  padding: '60px 40px',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  borderRight: '1px solid rgba(10,10,10,0.12)',
}}>
  <div style={{
    position: 'relative',
    width: '280px',
    height: '360px',
  }}>
    <Image
      src="/ella.jpg"
      alt="Portrait von Ella"
      fill
      style={{ objectFit: 'cover' }}
    />
  </div>
</div>

        {/* TEXT */}
        <div style={{
          padding: '60px 40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>

          <div>
            <p style={{
              maxWidth: '460px',
              color: '#555',
              lineHeight: 1.8,
              marginBottom: '30px',
            }}>
              I’m Ella, a creative developer and design student based in Munich.
              I work at the intersection of code and visual design, focusing on clarity, structure and meaningful interaction.
            </p>

            <p style={{
              maxWidth: '460px',
              color: '#555',
              lineHeight: 1.8,
              marginBottom: '30px',
            }}>
              My work ranges from interactive web applications and 3D environments to conceptual design projects. 
              I enjoy translating ideas into systems that balance aesthetics and functionality — from early concepts to implementation.
            </p>

            <p style={{
              maxWidth: '460px',
              color: '#555',
              lineHeight: 1.8,
            }}>
              Currently studying Informatics & Design, I’m interested in creating digital experiences 
              that are both intuitive and expressive.
            </p>
          </div>

          {/* META */}
          <div style={{
            marginTop: '40px',
            display: 'flex',
            gap: '240px',
          }}>
            <div>
              <p className="font-mono" style={{
                fontSize: '10px',
                color: '#888',
                textTransform: 'uppercase',
                marginBottom: '6px',
              }}>
                Location
              </p>
              <p>Munich, Germany</p>
            </div>

            <div>
              <p className="font-mono" style={{
                fontSize: '10px',
                color: '#888',
                textTransform: 'uppercase',
                marginBottom: '6px',
              }}>
                Focus
              </p>
              <p>Design × Code</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}