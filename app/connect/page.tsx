'use client'
export default function ConnectPage() {
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
          Get in touch
        </p>

        <h1 className="font-display" style={{
          fontSize: 'clamp(64px, 10vw, 140px)',
          lineHeight: 0.9,
        }}>
          Connect
        </h1>
      </section>

      {/* CONTENT */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        borderBottom: '1px solid rgba(10,10,10,0.12)',
      }}
      className="connect-grid">

        {/* LEFT TEXT */}
        <div style={{
          padding: '60px 40px',
          borderRight: '1px solid rgba(10,10,10,0.12)',
        }}>
          <p style={{
            maxWidth: '420px',
            color: '#555',
            lineHeight: 1.7,
            marginBottom: '40px',
          }}>
            Open to collaborations, ideas and new opportunities.
Always happy to connect.

          </p>

          <p className="font-mono" style={{
            fontSize: '11px',
            color: '#888',
            textTransform: 'uppercase',
          }}>
            Based in Munich
          </p>
        </div>

        {/* RIGHT LINKS */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
        }}>

          {[
            { label: 'Email', value: 'ella.klein05@web.de' },
            { label: 'GitLab', value: 'https://gitlab.lrz.de/000000003B9CB75E' },
            { label: 'LinkedIn', value: 'http://linkedin.com/in/ella-klein-7b69b2390' },
          ].map((item, i) => (
            <a
              key={i}
              href={item.label === 'Email' ? `mailto:${item.value}` : item.value}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '35px',
                borderBottom: '1px solid rgba(10,10,10,0.12)',
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'background 0.2s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(10,10,10,0.03)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
              }}
            >
              <span className="font-mono" style={{
                fontSize: '10px',
                color: '#888',
                textTransform: 'uppercase',
              }}>
                {item.label}
              </span>

              <span
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  transition: 'transform 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateX(4px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateX(0)')}
              >
                {item.value}
              </span>
            </a>
          ))}

        </div>

      </section>

    </div>
  )
}