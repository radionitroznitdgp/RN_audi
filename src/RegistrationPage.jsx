import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// --- SVG Icons Components ---

const Icons = {
  User: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  ),
  Star: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  ),
  Chart: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="20" x2="18" y2="10"></line>
      <line x1="12" y1="20" x2="12" y2="4"></line>
      <line x1="6" y1="20" x2="6" y2="14"></line>
    </svg>
  ),
  Target: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="6"></circle>
      <circle cx="12" cy="12" r="2"></circle>
    </svg>
  ),
  Edit: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>
  ),
};

const BackgroundAnimations = () => (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      overflow: "hidden",
      pointerEvents: "none",
      zIndex: 0,
    }}
  >
    {/* Floating Music Notes Only - No Giant Shapes */}
    <div
      className="floating-icon"
      style={{
        position: "absolute",
        top: "10%",
        left: "5%",
        opacity: 0.1,
        color: "#00f3ff",
        animationDelay: "0s",
      }}
    >
      <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    </div>
    <div
      className="floating-icon"
      style={{
        position: "absolute",
        top: "20%",
        right: "10%",
        opacity: 0.1,
        color: "#a855f7",
        animationDelay: "2s",
      }}
    >
      <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    </div>
    <div
      className="floating-icon"
      style={{
        position: "absolute",
        bottom: "30%",
        left: "15%",
        opacity: 0.05,
        color: "#ff006e",
        animationDelay: "4s",
      }}
    >
      <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z" />
      </svg>
    </div>
  </div>
);

// --- Main Component ---

export default function RegistrationPage() {
  const navigate = useNavigate();
  const SCRIPT_URL = import.meta.env.VITE_SCRIPT_URL;
  const [status, setStatus] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    phone: "",
    department: "",
    skillRatings: {
      creativity: "",
      management: "",
      hardworking: "",
      humour: "",
    },
    domainRatings: {
      eventManagement: "",
      contentWriting: "",
      graphicDesign: "",
      videoEditing: "",
      publicSpeaking: "",
      webDevelopment: "",
    },
    selectedDomains: [],
    preferenceOrder: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRatingChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
  };

  const handleCheckboxChange = (domain) => {
    setFormData((prev) => ({
      ...prev,
      selectedDomains: prev.selectedDomains.includes(domain)
        ? prev.selectedDomains.filter((d) => d !== domain)
        : [...prev.selectedDomains, domain],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setTimeout(() => navigate("/"), 2000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const RatingRow = ({ label, section, field }) => (
    <div style={styles.ratingRow}>
      <label style={styles.ratingLabel}>{label}</label>
      <div style={styles.ratingButtons}>
        {[1, 2, 3, 4, 5].map((n) => (
          <label key={n} style={styles.ratingButtonWrapper}>
            <input
              type="radio"
              name={`${section}-${field}`}
              value={n}
              checked={formData[section][field] == n}
              onChange={() => handleRatingChange(section, field, n)}
              style={{ display: "none" }}
            />
            <div
              style={{
                ...styles.ratingButton,
                ...(formData[section][field] == n
                  ? styles.ratingButtonActive
                  : {}),
              }}
            >
              {n}
            </div>
          </label>
        ))}
      </div>
    </div>
  );

  const domains = [
    { name: "Event Management", icon: "📅" },
    { name: "Content Writing", icon: "✍️" },
    { name: "Graphic Designing", icon: "🎨" },
    { name: "Video Editing", icon: "🎬" },
    { name: "Public Speaking", icon: "🎤" },
    { name: "Web Development", icon: "💻" },
  ];

  return (
    <div style={styles.container}>
      {/* Inject Keyframes for animations */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }
          .floating-icon {
            animation: float 6s ease-in-out infinite;
          }
        `}
      </style>

      <BackgroundAnimations />

      <div style={styles.formCard}>
        <div style={styles.header}>
          <div style={styles.headerContent}>
            <h1 style={styles.title}>Join Radio NITroz</h1>
            <p style={styles.subtitle}>
              Amplify your potential. Join the revolution.
            </p>
          </div>
          {/* Abstract Header Decoration */}
          <div style={styles.headerDecoration}></div>
        </div>

        <div style={styles.formContent}>
          <div onSubmit={handleSubmit} style={styles.formWrapper}>
            {/* Personal Information */}
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>
                <span style={styles.sectionIcon}>
                  <Icons.User />
                </span>
                Personal Information
              </h2>
              <div style={styles.grid}>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Full Name</label>
                  <input
                    name="name"
                    placeholder="Enter your name"
                    required
                    onChange={handleChange}
                    style={styles.input}
                  />
                </div>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Roll Number</label>
                  <input
                    name="rollNumber"
                    placeholder="Enter roll number"
                    required
                    onChange={handleChange}
                    style={styles.input}
                  />
                </div>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Phone Number</label>
                  <input
                    name="phone"
                    placeholder="Enter phone number"
                    required
                    onChange={handleChange}
                    style={styles.input}
                  />
                </div>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Department</label>
                  <select
                    name="department"
                    required
                    onChange={handleChange}
                    style={styles.select}
                  >
                    <option value="">Select Department</option>
                    <option>CSE</option>
                    <option>ECE</option>
                    <option>ME</option>
                    <option>CE</option>
                  </select>
                </div>
              </div>
            </div>

            <div style={styles.divider} />

            {/* Skill Ratings */}
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>
                <span style={styles.sectionIcon}>
                  <Icons.Star />
                </span>
                Rate Your Skills
              </h2>
              <div style={styles.gridTwo}>
                <RatingRow
                  label="Creativity"
                  section="skillRatings"
                  field="creativity"
                />
                <RatingRow
                  label="Management Skills"
                  section="skillRatings"
                  field="management"
                />
                <RatingRow
                  label="Hardworking"
                  section="skillRatings"
                  field="hardworking"
                />
                <RatingRow
                  label="Sense of Humour"
                  section="skillRatings"
                  field="humour"
                />
              </div>
            </div>

            <div style={styles.divider} />

            {/* Domain Ratings */}
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>
                <span style={styles.sectionIcon}>
                  <Icons.Chart />
                </span>
                Domain Expertise
              </h2>
              <div style={styles.gridTwo}>
                <RatingRow
                  label="Event Management"
                  section="domainRatings"
                  field="eventManagement"
                />
                <RatingRow
                  label="Content Writing"
                  section="domainRatings"
                  field="contentWriting"
                />
                <RatingRow
                  label="Graphic Designing"
                  section="domainRatings"
                  field="graphicDesign"
                />
                <RatingRow
                  label="Video Editing"
                  section="domainRatings"
                  field="videoEditing"
                />
                <RatingRow
                  label="Public Speaking"
                  section="domainRatings"
                  field="publicSpeaking"
                />
                <RatingRow
                  label="Web Development"
                  section="domainRatings"
                  field="webDevelopment"
                />
              </div>
            </div>

            <div style={styles.divider} />

            {/* Domain Selection */}
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>
                <span style={styles.sectionIcon}>
                  <Icons.Target />
                </span>
                Select Your Domains
              </h2>
              <div style={styles.domainGrid}>
                {domains.map((d) => (
                  <label key={d.name} style={styles.domainCardWrapper}>
                    <input
                      type="checkbox"
                      checked={formData.selectedDomains.includes(d.name)}
                      onChange={() => handleCheckboxChange(d.name)}
                      style={{ display: "none" }}
                    />
                    <div
                      style={{
                        ...styles.domainCard,
                        ...(formData.selectedDomains.includes(d.name)
                          ? styles.domainCardActive
                          : {}),
                      }}
                    >
                      <span style={styles.domainIcon}>{d.icon}</span>
                      <span style={styles.domainName}>{d.name}</span>
                      {formData.selectedDomains.includes(d.name) && (
                        <span style={styles.checkmark}>✓</span>
                      )}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Preference Order */}
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>
                <span style={styles.sectionIcon}>
                  <Icons.Edit />
                </span>
                Preference Order
              </h2>
              <textarea
                placeholder="Specify your preference order (e.g., 1. Web Dev, 2. Design...)"
                onChange={(e) =>
                  setFormData({ ...formData, preferenceOrder: e.target.value })
                }
                rows="3"
                style={styles.textarea}
              />
            </div>

            {/* Submit Button */}
            <div style={styles.submitSection}>
              <button
                onClick={handleSubmit}
                disabled={status === "submitting"}
                style={{
                  ...styles.submitButton,
                  ...(status === "submitting"
                    ? styles.submitButtonDisabled
                    : {}),
                }}
              >
                {status === "submitting"
                  ? "Transmitting Data..."
                  : "Submit Application"}
              </button>

              {status === "success" && (
                <div style={styles.successMessage}>
                  <span style={styles.messageIcon}>✓</span> Submitted
                  Successfully! Redirecting...
                </div>
              )}
              {status === "error" && (
                <div style={styles.errorMessage}>
                  <span style={styles.messageIcon}>✕</span> Submission Failed.
                  Please try again.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    position: "relative",
    background: "linear-gradient(180deg, #050505 0%, #110e21 100%)",
    padding: "48px 16px",
    overflow: "hidden",
    fontFamily: "'Inter', system-ui, sans-serif",
  },
  formCard: {
    position: "relative",
    maxWidth: "900px",
    margin: "0 auto",
    zIndex: 10,
    background: "rgba(20, 20, 35, 0.6)", // Glassmorphism base
    backdropFilter: "blur(20px)", // Blur effect
    WebkitBackdropFilter: "blur(20px)",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    borderRadius: "24px",
    boxShadow:
      "0 20px 80px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255,255,255,0.05)",
    overflow: "hidden",
  },
  header: {
    background:
      "linear-gradient(135deg, rgba(0, 243, 255, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)",
    padding: "50px 40px",
    color: "white",
    position: "relative",
    borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
    overflow: "hidden",
  },
  headerDecoration: {
    position: "absolute",
    top: -50,
    right: -50,
    width: "200px",
    height: "200px",
    background:
      "radial-gradient(circle, rgba(0,243,255,0.4) 0%, rgba(0,0,0,0) 70%)",
    filter: "blur(40px)",
    borderRadius: "50%",
  },
  title: {
    fontSize: "42px",
    fontWeight: "800",
    margin: "0 0 8px 0",
    letterSpacing: "-0.5px",
    background: "linear-gradient(90deg, #fff, #b3b3b3)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  subtitle: {
    fontSize: "18px",
    margin: 0,
    color: "#a1a1aa",
    fontWeight: "400",
  },
  formContent: {
    padding: "40px",
  },
  formWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "32px",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  sectionTitle: {
    fontSize: "22px",
    fontWeight: "600",
    color: "#fff",
    margin: 0,
    display: "flex",
    alignItems: "center",
    gap: "12px",
    borderLeft: "4px solid #00f3ff",
    paddingLeft: "16px",
  },
  sectionIcon: {
    display: "flex",
    alignItems: "center",
    color: "#00f3ff",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "24px",
  },
  gridTwo: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
    columnGap: "32px",
    rowGap: "8px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  label: {
    fontSize: "13px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    fontWeight: "600",
    color: "#71717a",
  },
  input: {
    padding: "14px 16px",
    fontSize: "16px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "12px",
    outline: "none",
    transition: "all 0.3s",
    boxSizing: "border-box",
    background: "rgba(0, 0, 0, 0.3)",
    color: "#fff",
    width: "100%",
  },
  select: {
    padding: "14px 16px",
    fontSize: "16px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "12px",
    outline: "none",
    transition: "all 0.3s",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    cursor: "pointer",
    boxSizing: "border-box",
    color: "#fff",
    width: "100%",
  },
  ratingRow: {
    marginBottom: "16px",
  },
  ratingLabel: {
    display: "block",
    fontSize: "14px",
    fontWeight: "500",
    color: "#d4d4d8",
    marginBottom: "8px",
  },
  ratingButtons: {
    display: "flex",
    gap: "4px",
    background: "rgba(0,0,0,0.2)",
    padding: "4px",
    borderRadius: "10px",
  },
  ratingButtonWrapper: {
    flex: 1,
    cursor: "pointer",
  },
  ratingButton: {
    padding: "10px 0",
    textAlign: "center",
    fontWeight: "600",
    borderRadius: "8px",
    color: "#71717a",
    transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
  },
  ratingButtonActive: {
    background: "linear-gradient(135deg, #00f3ff 0%, #0099ff 100%)",
    color: "#000",
    fontWeight: "bold",
    boxShadow: "0 2px 10px rgba(0, 243, 255, 0.3)",
    transform: "scale(1.02)",
  },
  domainGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "16px",
  },
  domainCardWrapper: {
    cursor: "pointer",
  },
  domainCard: {
    padding: "16px",
    borderRadius: "12px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    cursor: "pointer",
    color: "#a1a1aa",
    position: "relative",
    overflow: "hidden",
  },
  domainCardActive: {
    borderColor: "#a855f7",
    background: "rgba(168, 85, 247, 0.15)",
    color: "#fff",
    boxShadow: "0 0 0 1px rgba(168, 85, 247, 0.4)",
  },
  domainIcon: {
    fontSize: "20px",
  },
  domainName: {
    fontWeight: "500",
    fontSize: "14px",
  },
  checkmark: {
    marginLeft: "auto",
    color: "#a855f7",
    fontWeight: "bold",
  },
  textarea: {
    padding: "16px",
    fontSize: "16px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "12px",
    outline: "none",
    transition: "all 0.2s",
    resize: "vertical",
    fontFamily: "inherit",
    boxSizing: "border-box",
    background: "rgba(0, 0, 0, 0.3)",
    color: "#fff",
    width: "100%",
  },
  divider: {
    height: "1px",
    background:
      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
    margin: "8px 0",
  },
  submitSection: {
    paddingTop: "16px",
  },
  submitButton: {
    width: "100%",
    padding: "20px",
    fontSize: "18px",
    fontWeight: "700",
    letterSpacing: "1px",
    textTransform: "uppercase",
    color: "black",
    background: "linear-gradient(90deg, #00f3ff 0%, #00ff9d 100%)",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 20px rgba(0, 243, 255, 0.25)",
    position: "relative",
    overflow: "hidden",
  },
  submitButtonDisabled: {
    opacity: 0.7,
    cursor: "not-allowed",
    filter: "grayscale(0.5)",
  },
  successMessage: {
    marginTop: "20px",
    padding: "16px",
    backgroundColor: "rgba(0, 255, 136, 0.1)",
    border: "1px solid rgba(0, 255, 136, 0.2)",
    borderRadius: "8px",
    color: "#00ff88",
    fontWeight: "500",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  },
  errorMessage: {
    marginTop: "20px",
    padding: "16px",
    backgroundColor: "rgba(255, 0, 110, 0.1)",
    border: "1px solid rgba(255, 0, 110, 0.2)",
    borderRadius: "8px",
    color: "#ff006e",
    fontWeight: "500",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  },
};
