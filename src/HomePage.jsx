import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ChevronDown,
  MapPin,
  Mail,
  Users,
  Instagram,
  Linkedin,
  Facebook, // Imported Facebook
  Phone,
} from "lucide-react";
import { useState, useEffect } from "react";

// --- COMPONENTS ---
import AboutUs from "./AboutUs";
import EventInfiniteCards from "./components/EventInfinite";
import DraggableGallery from "./components/DraggableGallery";

// --- THEME & STYLES ---
const theme = {
  colors: {
    primary: "#ec4899", // Pink
    secondary: "#a855f7", // Purple
    background: "linear-gradient(180deg, #0a0a0a, #1a1a2e)",
    text: "#ffffff",
  },
  transitions: "all 0.3s ease",
};

const styles = {
  nav: {
    padding: "1rem 5%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid rgba(236,72,153,0.2)",
    backdropFilter: "blur(10px)",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  button: {
    padding: "10px 24px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    transition: theme.transitions,
  },
  buttonSecondary: {
    background: "transparent",
    border: "2px solid #38bdf8", // Blue border
    color: "#38bdf8", // Blue text
  },
  contactCard: {
    background: "rgba(255, 255, 255, 0.03)",
    border: "1px solid rgba(0, 243, 255, 0.1)",
    borderRadius: "12px",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    transition: "all 0.3s ease",
  },
};

export default function HomePage() {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  return (
    <div
      style={{
        background: theme.colors.background,
        minHeight: "100vh",
        color: theme.colors.text,
        overflowX: "hidden",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      {/* --- NAVBAR --- */}
      <nav style={styles.nav}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span
            style={{
              fontSize: isMobile ? "18px" : "22px",
              fontWeight: 800,
              background: `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            RadioNitroz
          </span>
        </div>

        <button
          onClick={() => navigate("/register")}
          style={{ ...styles.button, ...styles.buttonSecondary }}
          onMouseEnter={(e) => {
            e.target.style.background =
              "linear-gradient(135deg, #38bdf8, #2563eb)";
            e.target.style.color = "#000";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "transparent";
            e.target.style.color = "#38bdf8";
          }}
        >
          Register
        </button>
      </nav>

      {/* --- HERO SECTION --- */}
      <section
        style={{
          padding: isMobile ? "60px 16px" : "100px 24px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "80vh",
          justifyContent: "center",
        }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.h1
            style={{
              fontSize: "clamp(3.5rem, 15vw, 10rem)",
              fontWeight: "900",
              margin: 0,
              lineHeight: 1,
              letterSpacing: isMobile ? "2px" : "8px",
              whiteSpace: "nowrap",
              background: "linear-gradient(180deg, #e0f2fe, #38bdf8, #2563eb)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            animate={{
              filter: [
                "drop-shadow(0 0 12px rgba(56,189,248,0.4))",
                "drop-shadow(0 0 28px rgba(37,99,235,0.6))",
                "drop-shadow(0 0 12px rgba(56,189,248,0.4))",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            {"AUDITIONS".split("").map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                style={{ display: "inline-block" }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: isMobile ? "10px" : "20px",
              marginTop: "10px",
              width: "100%",
              maxWidth: "900px",
            }}
          >
            <div
              style={{
                height: "1px",
                flex: 1,
                background: "linear-gradient(to left, #38bdf8, transparent)",
                display: isMobile ? "none" : "block",
              }}
            />
            <motion.span
              style={{
                fontSize: "clamp(1rem, 4vw, 2.5rem)",
                fontWeight: "300",
                letterSpacing: isMobile ? "4px" : "15px",
                color: "#38bdf8",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              Coming Soon
            </motion.span>
            <div
              style={{
                height: "1px",
                flex: 1,
                background: "linear-gradient(to right, #38bdf8, transparent)",
                display: isMobile ? "none" : "block",
              }}
            />
          </motion.div>
        </motion.div>

        <p
          style={{
            fontSize: isMobile ? "15px" : "20px",
            opacity: 0.8,
            maxWidth: "600px",
            margin: "30px auto",
            lineHeight: "1.6",
            fontWeight: "300",
          }}
        >
          Unleash your talent. Amplify your voice. The hunt for the next iconic
          frequency of Radio NITroz is about to begin.
        </p>

        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px rgba(248, 56, 194, 0.6)",
          }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate("/register")}
          style={{
            ...styles.button,
            background: "transparent",
            border: "3px solid",
            borderImage: "linear-gradient(135deg, #c238f8, #db25eb) 1",
            color: "#ffffff",
            fontSize: isMobile ? "16px" : "18px",
            padding: isMobile ? "14px 40px" : "16px 52px",
            fontWeight: "700",
          }}
        >
          REGISTER NOW
        </motion.button>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{ marginTop: "40px" }}
        >
          <ChevronDown color={theme.colors.primary} size={isMobile ? 28 : 36} />
        </motion.div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <AboutUs isSmallScreen={isMobile} />

      {/* --- EVENTS SECTION (STICKY SCROLL) --- */}
      {/* --- EVENTS SECTION (INFINITE CARDS) --- */}
<section
  id="events"
  style={{
    position: "relative",
    paddingTop: isMobile ? "60px" : "80px",
    paddingBottom: isMobile ? "60px" : "80px",
    paddingLeft: "24px",
    paddingRight: "24px",
  }}
>
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    style={{
      fontSize: isMobile ? "32px" : "48px",
      fontWeight: "800",
      marginBottom: "48px",
      textAlign: "center",
      background: "linear-gradient(135deg, #a855f7, #00f3ff)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    Past Events
  </motion.h2>

  <EventInfiniteCards />
</section>


      {/* --- DRAGGABLE GALLERY SECTION --- */}
      <DraggableGallery />

      {/* --- CONTACT SECTION --- */}
      <section
        id="contact"
        style={{
          position: "relative",
          paddingTop: isMobile ? "60px" : "80px",
          paddingBottom: isMobile ? "60px" : "80px",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            position: "relative",
            padding: isMobile ? "40px 24px" : "64px 32px",
            borderRadius: "16px",
            background:
              "linear-gradient(135deg, rgba(0, 243, 255, 0.05), rgba(168, 85, 247, 0.05))",
            border: "2px solid rgba(0, 243, 255, 0.3)",
            textAlign: "center",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: isMobile ? "32px" : "48px",
              fontWeight: "800",
              marginBottom: "48px",
              background: "linear-gradient(135deg, #00f3ff, #ff006e)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Get In Touch
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
              gap: "24px",
              textAlign: "center",
            }}
          >
            {/* Location Card */}
            <motion.div
              style={styles.contactCard}
              whileHover={{ y: -5, background: "rgba(255, 255, 255, 0.08)" }}
            >
              <div
                style={{
                  padding: "12px",
                  background: "rgba(0, 243, 255, 0.1)",
                  borderRadius: "50%",
                }}
              >
                <MapPin size={24} color="#00f3ff" />
              </div>
              <div>
                <h3
                  style={{
                    color: "#fff",
                    fontSize: "18px",
                    marginBottom: "8px",
                  }}
                >
                  Location
                </h3>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>
                  SAC Building, NIT Durgapur
                  <br />
                  West Bengal, India
                </p>
              </div>
            </motion.div>

            {/* Email Card */}
            <motion.div
              style={styles.contactCard}
              whileHover={{ y: -5, background: "rgba(255, 255, 255, 0.08)" }}
            >
              <div
                style={{
                  padding: "12px",
                  background: "rgba(168, 85, 247, 0.1)",
                  borderRadius: "50%",
                }}
              >
                <Mail size={24} color="#a855f7" />
              </div>
              <div>
                <h3
                  style={{
                    color: "#fff",
                    fontSize: "18px",
                    marginBottom: "8px",
                  }}
                >
                  Email
                </h3>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>
                  radionitroz.nitdgp@gmail.com
                </p>
              </div>
            </motion.div>

            {/* Socials Card */}
            <motion.div
              style={styles.contactCard}
              whileHover={{ y: -5, background: "rgba(255, 255, 255, 0.08)" }}
            >
              <div
                style={{
                  padding: "12px",
                  background: "rgba(255, 0, 110, 0.1)",
                  borderRadius: "50%",
                }}
              >
                <Users size={24} color="#ff006e" />
              </div>
              <div>
                <h3
                  style={{
                    color: "#fff",
                    fontSize: "18px",
                    marginBottom: "8px",
                  }}
                >
                  Follow Us
                </h3>
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    justifyContent: "center",
                    marginTop: "4px",
                  }}
                >
                  <motion.a
                    href="https://www.instagram.com/radionitroz.nitdgp"
                    whileHover={{ scale: 1.2, color: "#00f3ff" }}
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    <Instagram size={20} />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/company/radio-nitroz-nitdgp/"
                    whileHover={{ scale: 1.2, color: "#0077b5" }}
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    <Linkedin size={20} />
                  </motion.a>
                  {/* FACEBOOK ADDED HERE */}
                  <motion.a
                    href="https://www.facebook.com/radionitroz.nitdgp"
                    whileHover={{ scale: 1.2, color: "#1877F2" }}
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    <Facebook size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* --- FOOTER --- */}
      <footer
        style={{
          borderTop: "1px solid rgba(0, 243, 255, 0.1)",
          paddingTop: isMobile ? "32px" : "48px",
          paddingBottom: isMobile ? "32px" : "48px",
          paddingLeft: "24px",
          paddingRight: "24px",
          textAlign: "center",
          color: "rgba(255, 255, 255, 0.6)",
        }}
      >
        <div style={{ maxWidth: "896px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: isMobile ? "24px" : "48px",
              marginBottom: "32px",
              flexWrap: "wrap",
            }}
          >
            {/* President */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <h4
                style={{
                  color: "#ff006e",
                  margin: 0,
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                President
              </h4>
              <span
                style={{ fontSize: "16px", fontWeight: "700", color: "#fff" }}
              >
                D Sai Sahil
              </span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "14px",
                }}
              >
                <Phone size={14} color="#00f3ff" />
                <span>+91 83280 78950</span>
              </div>
            </div>

            {/* Divider 1 */}
            {!isMobile && (
              <div
                style={{
                  width: "1px",
                  height: "50px",
                  background: "rgba(255,255,255,0.1)",
                }}
              />
            )}

            {/* Vice President */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <h4
                style={{
                  color: "#a855f7",
                  margin: 0,
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Vice President
              </h4>
              <span
                style={{ fontSize: "16px", fontWeight: "700", color: "#fff" }}
              >
                 SK Raj Ali
              </span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "14px",
                }}
              >
                <Phone size={14} color="#00f3ff" />
                <span>+91 96356 37725</span>
              </div>
            </div>

            {/* Divider 2 */}
            {!isMobile && (
              <div
                style={{
                  width: "1px",
                  height: "50px",
                  background: "rgba(255,255,255,0.1)",
                }}
              />
            )}

            {/* Gen Sec (ADDED) */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <h4
                style={{
                  color: "#00f3ff",
                  margin: 0,
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                General Secretary
              </h4>
              <span
                style={{ fontSize: "16px", fontWeight: "700", color: "#fff" }}
              >
                Mohammed Asif
              </span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "14px",
                }}
              >
                <Phone size={14} color="#00f3ff" />
                <span>+91 89672 90251</span>
              </div>
            </div>
          </div>
<p style={{ fontSize: isMobile ? "12px" : "14px" }}>
  © {new Date().getFullYear()} Radio NITroz • Developed by the Web Team
</p>
        </div>
      </footer>
    </div>
  );
}
