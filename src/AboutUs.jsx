import { motion } from "framer-motion";
import aboutImage from "./assets/rnlogo.png"; // 👈 change name if needed

export default function AboutUs({ isSmallScreen }) {
  return (
    <section
      id="about"
      style={{
        paddingTop: isSmallScreen ? "50px" : "70px",
        paddingBottom: isSmallScreen ? "50px" : "70px",
        background: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: isSmallScreen ? "column" : "row",
            alignItems: "center",
            gap: isSmallScreen ? "28px" : "48px",
          }}
        >
          {/* TEXT SIDE (LEFT) */}
          <motion.div
            initial={{ opacity: 0, x: isSmallScreen ? 0 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ flex: "1" }}
          >
            <h2
              style={{
                fontSize: isSmallScreen ? "30px" : "46px",
                fontWeight: "900",
                marginBottom: "20px",
                letterSpacing: "-1px",
              }}
            >
              WE ARE{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #ff006e, #a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                RADIONITROZ
              </span>
            </h2>

            <p
              style={{
                color: "rgba(255, 255, 255, 0.65)",
                fontSize: isSmallScreen ? "15px" : "17px",
                lineHeight: "1.8",
                maxWidth: "560px",
              }}
            >
              RadioNitroz is the official media body and campus radio station of
              our prestigious institute. Since our inception, we have been the
              voice of the students — connecting campus stories, creativity, and
              culture through powerful audio experiences.
            </p>
          </motion.div>

          {/* IMAGE SIDE (RIGHT) */}
          <motion.div
            initial={{ opacity: 0, x: isSmallScreen ? 0 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              flex: "1",
              position: "relative",
              maxWidth: isSmallScreen ? "100%" : "480px",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top right, rgba(168, 85, 247, 0.3), rgba(0, 243, 255, 0.3))",
                borderRadius: "16px",
                filter: "blur(28px)",
                opacity: 0.25,
                transform: "rotate(3deg)",
              }}
            />

            <img
              src={aboutImage}
              alt="RadioNitroz Studio"
              style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                aspectRatio: "1",
                objectFit: "cover",
                borderRadius: "16px",
                filter: "grayscale(100%)",
                transition: "filter 0.4s ease",
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
              onMouseEnter={(e) => (e.target.style.filter = "grayscale(0%)")}
              onMouseLeave={(e) => (e.target.style.filter = "grayscale(100%)")}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
