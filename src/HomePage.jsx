import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Mic2, ChevronDown, Radio, Users, Zap } from 'lucide-react';
import AboutUs from './AboutUs';
import { useState, useEffect } from 'react';

const styles = {
  container: {
    maxWidth: '896px',
    margin: '0 auto',
    padding: '0 24px',
  },
  button: {
    padding: '12px 32px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
    transition: 'all 0.3s ease',
  },
  buttonPrimary: {
    background: 'linear-gradient(135deg, #00f3ff, #a855f7)',
    color: '#fff',
  },
  buttonSecondary: {
    background: 'transparent',
    border: '2px solid #00f3ff',
    color: '#00f3ff',
  },
};

// SVG Drawing animation configuration
const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: i * 0.15, type: "spring", duration: 1.5, bounce: 0 },
      opacity: { delay: i * 0.15, duration: 0.01 },
    },
  }),
};

const pathStyle = {
  fill: "transparent",
  stroke: "url(#smoothGradient)",
  strokeWidth: 22,
  strokeLinecap: "square",
  strokeLinejoin: "miter",
};

export default function HomePage() {
  const navigate = useNavigate();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 100%)', color: '#fff', minHeight: '100vh', overflow: 'hidden', position: 'relative' }}>
      {/* Content Wrapper */}
      <div style={{ position: 'relative', zIndex: 1 }}>
      {/* Navigation */}
      <nav style={{ padding: isSmallScreen ? '16px' : '24px', borderBottom: '1px solid rgba(0, 243, 255, 0.1)' }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', flexWrap: 'wrap', gap: '16px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Radio style={{ color: '#00f3ff', width: isSmallScreen ? '24px' : '28px', height: isSmallScreen ? '24px' : '28px' }} />
            <span style={{ fontSize: isSmallScreen ? '20px' : '24px', fontWeight: '700', background: 'linear-gradient(90deg, #00f3ff, #a855f7)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              NITroz
            </span>
          </div>
          <button
            onClick={() => navigate('/register')}
            style={{
              ...styles.button,
              ...styles.buttonSecondary,
              padding: isSmallScreen ? '10px 20px' : '12px 32px',
              fontSize: isSmallScreen ? '14px' : '16px',
            }}
            onMouseEnter={(e) => {
              e.target.style.boxShadow = '0 0 20px rgba(0, 243, 255, 0.5)';
              e.target.style.background = 'rgba(0, 243, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = 'none';
              e.target.style.background = 'transparent';
            }}
          >
            {isSmallScreen ? 'Register' : 'Register Now'}
          </button>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section style={{ position: 'relative', paddingTop: isSmallScreen ? '60px' : '120px', paddingBottom: isSmallScreen ? '60px' : '120px', paddingLeft: '24px', paddingRight: '24px', overflow: 'hidden' }}>
        {/* Animated background gradients */}
        <div
          style={{
            position: 'absolute',
            top: '-50%',
            right: '-10%',
            width: isSmallScreen ? '300px' : '500px',
            height: isSmallScreen ? '300px' : '500px',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-50%',
            left: '-10%',
            width: isSmallScreen ? '300px' : '500px',
            height: isSmallScreen ? '300px' : '500px',
            background: 'radial-gradient(circle, rgba(0, 243, 255, 0.3) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ display: 'inline-block', marginBottom: '24px' }}
          >
            <Mic2 style={{ width: isSmallScreen ? '48px' : '64px', height: isSmallScreen ? '48px' : '64px', color: '#00f3ff' }} />
          </motion.div>

          {/* Background Video Container with AUDITION overlay */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: isSmallScreen ? '85vw' : '800px',
              height: isSmallScreen ? '300px' : '400px',
              margin: '24px auto',
              borderRadius: '12px',
              overflow: 'hidden',
            }}
          >
            {/* Background Video */}
            <video
              autoPlay
              loop
              muted
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: 'translate(-50%, -50%)',
                opacity: 0.4,
                zIndex: 1,
              }}
            >
              <source src="/src/assets/dj.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Animated SVG Drawing - AUDITION */}
            <motion.svg
              viewBox="0 0 1600 350"
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 10,
                filter: 'drop-shadow(0 0 20px rgba(157, 78, 221, 0.6))',
              }}
              initial="hidden"
              animate="visible"
            >
            {/* Gradient Definition */}
            <defs>
              <linearGradient
                id="smoothGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" style={{ stopColor: "#B5179E", stopOpacity: 1 }} />
                <stop offset="33%" style={{ stopColor: "#9D4EDD", stopOpacity: 1 }} />
                <stop offset="66%" style={{ stopColor: "#C77DFF", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#7209B7", stopOpacity: 1 }} />
              </linearGradient>
              {/* Glow filter */}
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Letter A */}
            <motion.path
              d="M60 250 L130 50 L200 250 M90 160 H170"
              variants={draw}
              custom={0}
              style={{...pathStyle, filter: 'url(#glow)'}}
            />

            {/* Letter U */}
            <motion.path
              d="M280 50 V180 Q280 250 355 250 Q430 250 430 180 V50"
              variants={draw}
              custom={1}
              style={{...pathStyle, filter: 'url(#glow)'}}
            />

            {/* Letter D */}
            <motion.path
              d="M500 50 V250 H560 Q660 250 660 150 Q660 50 560 50 H500"
              variants={draw}
              custom={2}
              style={{...pathStyle, filter: 'url(#glow)'}}
            />

            {/* Letter I */}
            <motion.path
              d="M750 50 H830 M790 50 V250 M750 250 H830"
              variants={draw}
              custom={3}
              style={{...pathStyle, filter: 'url(#glow)'}}
            />

            {/* Letter T */}
            <motion.path
              d="M900 50 H1000 M950 50 V250"
              variants={draw}
              custom={4}
              style={{...pathStyle, filter: 'url(#glow)'}}
            />

            {/* Letter I */}
            <motion.path
              d="M1070 50 H1150 M1110 50 V250 M1070 250 H1150"
              variants={draw}
              custom={5}
              style={{...pathStyle, filter: 'url(#glow)'}}
            />

            {/* Letter O */}
            <motion.path
              d="M1200 50 Q1200 250 1275 250 Q1350 250 1350 150 Q1350 50 1275 50 Q1200 50 1200 150"
              variants={draw}
              custom={6}
              style={{...pathStyle, filter: 'url(#glow)'}}
            />

            {/* Letter N */}
            <motion.path
              d="M1400 250 V50 L1520 250 V50"
              variants={draw}
              custom={7}
              style={{...pathStyle, filter: 'url(#glow)'}}
            />
            </motion.svg>
          </div>

          <h1 style={{
            fontSize: isSmallScreen ? '40px' : '64px',
            fontWeight: '900',
            marginBottom: '24px',
            background: 'linear-gradient(135deg, #00f3ff, #ff006e, #a855f7)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-2px',
          }}>
            Radio NITroz
          </h1>

          <p style={{
            fontSize: isSmallScreen ? '16px' : '20px',
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '48px',
            maxWidth: '600px',
            margin: '0 auto 48px',
            lineHeight: '1.6',
          }}>
            Unleash Your Talent. Amplify Your Voice. Join NITroz's Auditions.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => navigate('/register')}
              style={{
                ...styles.button,
                ...styles.buttonPrimary,
                boxShadow: '0 0 30px rgba(0, 243, 255, 0.5)',
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 0 50px rgba(0, 243, 255, 0.8)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = '0 0 30px rgba(0, 243, 255, 0.5)';
              }}
            >
              Start Auditioning
            </button>
          </motion.div>

          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ marginTop: '64px' }}
          >
            <ChevronDown style={{ width: isSmallScreen ? '24px' : '32px', height: isSmallScreen ? '24px' : '32px', color: '#00f3ff', margin: '0 auto' }} />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <AboutUs isSmallScreen={isSmallScreen} />

      {/* CTA Section */}
      <section style={{ position: 'relative', paddingTop: isSmallScreen ? '60px' : '80px', paddingBottom: isSmallScreen ? '60px' : '80px', paddingLeft: '24px', paddingRight: '24px' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            position: 'relative',
            padding: isSmallScreen ? '40px 24px' : '64px 32px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, rgba(0, 243, 255, 0.1), rgba(168, 85, 247, 0.1))',
            border: '2px solid rgba(0, 243, 255, 0.3)',
            textAlign: 'center',
            maxWidth: '896px',
            margin: '0 auto',
          }}
        >
          <h2 style={{
            fontSize: isSmallScreen ? '32px' : '48px',
            fontWeight: '800',
            marginBottom: '24px',
            background: 'linear-gradient(135deg, #00f3ff, #ff006e)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Ready to Audition?
          </h2>
          <p style={{
            fontSize: isSmallScreen ? '16px' : '18px',
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '32px',
          }}>
            Don't miss this opportunity. Register now and showcase your talent to Radio NITroz.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/register')}
            style={{
              ...styles.button,
              ...styles.buttonPrimary,
              boxShadow: '0 0 30px rgba(0, 243, 255, 0.5)',
            }}
            onMouseEnter={(e) => {
              e.target.style.boxShadow = '0 0 50px rgba(0, 243, 255, 0.8)';
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = '0 0 30px rgba(0, 243, 255, 0.5)';
            }}
          >
            Register for Auditions
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid rgba(0, 243, 255, 0.1)',
        paddingTop: isSmallScreen ? '32px' : '48px',
        paddingBottom: isSmallScreen ? '32px' : '48px',
        paddingLeft: '24px',
        paddingRight: '24px',
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.6)',
      }}>
        <div style={{ maxWidth: '896px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: isSmallScreen ? '16px' : '32px', marginBottom: '24px', flexWrap: 'wrap' }}>
            <a href="#about" style={{ color: '#00f3ff', textDecoration: 'none', transition: 'color 0.3s', fontSize: isSmallScreen ? '14px' : '16px' }} onMouseEnter={(e) => e.target.style.color = '#ff006e'} onMouseLeave={(e) => e.target.style.color = '#00f3ff'}>About</a>
            <a href="#auditions" style={{ color: '#00f3ff', textDecoration: 'none', transition: 'color 0.3s', fontSize: isSmallScreen ? '14px' : '16px' }} onMouseEnter={(e) => e.target.style.color = '#ff006e'} onMouseLeave={(e) => e.target.style.color = '#00f3ff'}>Auditions</a>
            <a href="#contact" style={{ color: '#00f3ff', textDecoration: 'none', transition: 'color 0.3s', fontSize: isSmallScreen ? '14px' : '16px' }} onMouseEnter={(e) => e.target.style.color = '#ff006e'} onMouseLeave={(e) => e.target.style.color = '#00f3ff'}>Contact</a>
          </div>
          <p style={{ fontSize: isSmallScreen ? '12px' : '14px' }}>© 2024 Radio NITroz. All rights reserved.</p>
        </div>
      </footer>
      </div>
    </div>
  );
}
