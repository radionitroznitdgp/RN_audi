import { motion } from 'framer-motion';
import { Radio, Headphones, Music } from 'lucide-react';

export default function AboutUs({ isSmallScreen }) {
  return (
    <section id="about" style={{ paddingTop: isSmallScreen ? '60px' : '80px', paddingBottom: isSmallScreen ? '60px' : '80px', background: 'rgba(0, 0, 0, 0.5)', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', alignItems: 'center', gap: isSmallScreen ? '32px' : '48px', flexWrap: 'wrap' }}>
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: isSmallScreen ? 0 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ flex: isSmallScreen ? '1 1 100%' : '1', minWidth: isSmallScreen ? 'auto' : '300px', position: 'relative' }}
          >
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top right, rgba(168, 85, 247, 0.3), rgba(0, 243, 255, 0.3))',
              borderRadius: '16px',
              filter: 'blur(30px)',
              opacity: 0.3,
              transform: 'rotate(3deg)',
              zIndex: 0,
            }}></div>
            <img 
              src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=600&fit=crop" 
              alt="Radio Studio" 
              style={{
                position: 'relative',
                zIndex: 1,
                borderRadius: '16px',
                filter: 'grayscale(100%)',
                transition: 'filter 0.5s ease',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                width: '100%',
                maxWidth: isSmallScreen ? '100%' : '500px',
                aspectRatio: '1',
                objectFit: 'cover',
              }}
              onMouseEnter={(e) => e.target.style.filter = 'grayscale(0%)'}
              onMouseLeave={(e) => e.target.style.filter = 'grayscale(100%)'}
            />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: isSmallScreen ? 0 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ flex: isSmallScreen ? '1 1 100%' : '1', minWidth: isSmallScreen ? 'auto' : '300px' }}
          >
            <h2 style={{
              fontSize: isSmallScreen ? '32px' : '48px',
              fontWeight: '900',
              marginBottom: '24px',
              letterSpacing: '-1px',
            }}>
              WE ARE{' '}
              <span style={{
                background: 'linear-gradient(135deg, #ff006e, #a855f7)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                RADIONITROZ
              </span>
            </h2>
            
            <p style={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: isSmallScreen ? '16px' : '18px',
              lineHeight: '1.8',
              marginBottom: '32px',
            }}>
              RadioNitroz is the official media body and campus radio station of our prestigious institute. 
              Since our inception, we have been the voice of the students, bridging the gap between campus events 
              and the student community. We don't just play music; we create experiences, tell stories, and 
              amplify the vibrant culture of our campus.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isSmallScreen ? '1fr' : 'repeat(3, 1fr)',
              gap: isSmallScreen ? '16px' : '24px',
            }}>
              {[
                { icon: Radio, label: 'Live Shows', color: '#00f3ff' },
                { icon: Headphones, label: 'Podcasts', color: '#a855f7' },
                { icon: Music, label: 'Events', color: '#ff006e' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    padding: isSmallScreen ? '16px' : '16px',
                    border: `1px solid rgba(255, 255, 255, 0.1)`,
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = item.color;
                    e.currentTarget.style.background = `rgba(255, 255, 255, 0.1)`;
                    e.currentTarget.style.boxShadow = `0 0 20px ${item.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <item.icon style={{ width: isSmallScreen ? '28px' : '32px', height: isSmallScreen ? '28px' : '32px', margin: '0 auto 12px', color: item.color }} />
                  <h3 style={{ fontWeight: '700', color: '#fff', fontSize: isSmallScreen ? '14px' : '16px' }}>{item.label}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
