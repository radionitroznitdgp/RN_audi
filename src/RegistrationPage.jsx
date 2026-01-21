import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

/* ---------- CONSTANTS ---------- */

const domains = [
  "Event Management",
  "Content Writing",
  "Graphic Designing",
  "Video Editing",
  "Public Speaking",
  "Web Development",
];

const steps = [
  "Personal Details",
  "Domain Preferences",
  "Rate Your Skills",
  "About You",
];

/* ---------- VALIDATORS ---------- */

const isValidEmail = (email) =>
  /^[a-zA-Z0-9._%+-]+@(gmail\.com|nitdgp\.ac\.in)$/.test(email);

/* ---------- MAIN COMPONENT ---------- */

export default function RegistrationPage() {
  const navigate = useNavigate();

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxVd-FoKlmKo35wGX_iDkuhxgUT6KMi8u-8-WogqtyD7zJ3VqSpZnaoOTyzxuFWuk98/exec";

  const [step, setStep] = useState(0);
  const [status, setStatus] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    regNumber: "",
    year: "",
    gender: "",
    department: "",
    email: "",
    phone: "",
    domainPreferences: {},
    skills: {
      creativity: "",
      management: "",
      hardworking: "",
      communication: "",
    },
    whyJoin: "",
    teamPlayerDesc: "",
  });

  /* ---------- HANDLERS ---------- */

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const setDomainPref = (domain, value) => {
    const used = Object.values(formData.domainPreferences);
    if (used.includes(value)) return;

    setFormData((prev) => ({
      ...prev,
      domainPreferences: {
        ...prev.domainPreferences,
        [domain]: value,
      },
    }));
  };

  const setSkill = (skill, value) =>
    setFormData((prev) => ({
      ...prev,
      skills: { ...prev.skills, [skill]: value },
    }));

  /* ---------- STEP VALIDATION ---------- */

  const isStepValid = () => {
    const {
      name,
      rollNumber,
      regNumber,
      year,
      gender,
      department,
      email,
      phone,
      domainPreferences,
      skills,
      whyJoin,
      teamPlayerDesc,
    } = formData;

    if (step === 0) {
      return (
        name &&
        rollNumber &&
        regNumber &&
        year &&
        gender &&
        department &&
        email &&
        isValidEmail(email) &&
        phone
      );
    }

    if (step === 1) {
      return (
        Object.keys(domainPreferences).length === domains.length &&
        new Set(Object.values(domainPreferences)).size === domains.length
      );
    }

    if (step === 2) {
      return Object.values(skills).every((v) => v !== "");
    }

    if (step === 3) {
      return whyJoin.trim().length > 20 && teamPlayerDesc.trim().length > 20;
    }

    return false;
  };

  /* ---------- SUBMIT ---------- */

  const submitForm = async () => {
    setStatus("submitting");
    try {
      const form = new FormData();
      form.append("data", JSON.stringify(formData));

      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        body: form,
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

  /* ---------- UI ---------- */

  return (
    <div style={styles.page}>
      {/* PROGRESS */}
      <div style={styles.progress}>
        {steps.map((s, i) => (
          <span
            key={i}
            style={{
              ...styles.progressStep,
              ...(i === step ? styles.progressActive : {}),
            }}
          >
            {s}
          </span>
        ))}
      </div>

      <div style={styles.card}>
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -80, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* STEP 1 */}
            {step === 0 && (
              <>
                <h2 style={styles.title}>Personal Details</h2>

                <Input name="name" placeholder="Full Name" onChange={handleChange} />
                <Input name="rollNumber" placeholder="Roll Number" onChange={handleChange} />
                <Input name="regNumber" placeholder="Registration Number" onChange={handleChange} />

                <select name="year" onChange={handleChange} style={styles.smallSelect}>
                  <option value="">Select Year</option>
                  <option>First Year</option>
                  <option>Second Year</option>
                </select>

                <select name="gender" onChange={handleChange} style={styles.smallSelect}>
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>

                <Input name="department" placeholder="Department" onChange={handleChange} />

                <Input
                  name="email"
                  placeholder="Email (gmail.com / nitdgp.ac.in)"
                  onChange={handleChange}
                />
                {formData.email && !isValidEmail(formData.email) && (
                  <p style={styles.error}>
                    Enter a valid Gmail or NIT Durgapur email
                  </p>
                )}

                <Input name="phone" placeholder="Phone Number" onChange={handleChange} />
              </>
            )}

            {/* STEP 2 */}
        {step === 1 && (
              <>
                <h2 style={styles.title}>Domain Preference Order</h2>
                <p style={styles.helper}>Each domain must have a unique rank</p>

                {domains.map((domain) => (
                  <div key={domain} style={styles.domainRow}>
                    <span>{domain}</span>
                    <select
                      value={formData.domainPreferences[domain] || ""}
                      onChange={(e) => setDomainPref(domain, e.target.value)}
                      style={styles.smallSelect}
                    >
                      <option value="">—</option>
                      {domains.map((_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </>
            )}

            {/* STEP 3 */}
            {step === 2 && (
              <>
                <h2 style={styles.title}>Rate Your Skills</h2>
                {Object.keys(formData.skills).map((s) => (
                  <RatingRow
                    key={s}
                    label={s}
                    value={formData.skills[s]}
                    onSelect={(v) => setSkill(s, v)}
                  />
                ))}
              </>
            )}

            {/* STEP 4 */}
            {step === 3 && (
              <>
                <h2 style={styles.title}>About You</h2>

                <textarea
                  name="whyJoin"
                  placeholder="Why do you want to join Radio NITroz?"
                  onChange={handleChange}
                  style={{ ...styles.input, height: 120 }}
                />

                <textarea
                  name="teamPlayerDesc"
                  placeholder="How good are you as a team player? Explain."
                  onChange={handleChange}
                  style={{ ...styles.input, height: 120 }}
                />
              </>
            )}
          </motion.div>
        </AnimatePresence>

        {/* NAV */}
        <div style={styles.nav}>
          {step > 0 && (
            <button onClick={() => setStep(step - 1)} style={styles.secondary}>
              Back
            </button>
          )}
          {step < steps.length - 1 ? (
            <button
              onClick={() => setStep(step + 1)}
              style={{
                ...styles.primary,
                opacity: isStepValid() ? 1 : 0.4,
              }}
              disabled={!isStepValid()}
            >
              Next
            </button>
          ) : (
            <button
              onClick={submitForm}
              style={styles.primary}
              disabled={!isStepValid()}
            >
              {status === "submitting" ? "Submitting..." : "Submit"}
            </button>
          )}
        </div>

        {status === "success" && (
          <p style={{ color: "#00ff9d", marginTop: 16 }}>
            Submitted successfully! Redirecting…
          </p>
        )}
        {status === "error" && (
          <p style={{ color: "#ff006e", marginTop: 16 }}>
            Submission failed. Try again.
          </p>
        )}
      </div>
    </div>
  );
}

/* ---------- REUSABLE COMPONENTS ---------- */

const Input = (props) => <input {...props} style={styles.input} />;

const RatingRow = ({ label, value, onSelect }) => (
  <div style={{ marginBottom: 20 }}>
    <p style={{ textTransform: "capitalize" }}>{label}</p>
    <div style={{ display: "flex", gap: 8 }}>
      {[1, 2, 3, 4, 5].map((n) => (
        <div
          key={n}
          onClick={() => onSelect(n)}
          style={{
            ...styles.rate,
            ...(value === n ? styles.rateActive : {}),
          }}
        >
          {n}
        </div>
      ))}
    </div>
  </div>
);

/* ---------- STYLES ---------- */

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(180deg,#050505,#110e21)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px 16px",
    color: "#fff",
  },
  progress: {
    display: "flex",
    gap: 16,
    marginBottom: 24,
    flexWrap: "wrap",
  },
  progressStep: { fontSize: 12, opacity: 0.6 },
  progressActive: { color: "#00f3ff", fontWeight: 700, opacity: 1 },
  card: {
    width: "100%",
    maxWidth: 650,
    background: "rgba(20,20,35,0.75)",
    backdropFilter: "blur(20px)",
    borderRadius: 20,
    padding: 32,
  },
  title: { fontSize: 28, marginBottom: 16 },
  helper: { color: "#9ca3af", marginBottom: 16 },
  error: { color: "#ff006e", fontSize: 12, marginBottom: 10 },
  input: {
    width: "100%",
    padding: 14,
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(0,0,0,0.3)",
    color: "#fff",
    marginBottom: 14,
  },
  smallSelect: {
    width: "140px",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#0f0f1a",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.2)",
    marginBottom: 14,
  },
  domainRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 24,
  },
  primary: {
    padding: "12px 28px",
    borderRadius: 999,
    background: "linear-gradient(135deg,#00f3ff,#a855f7)",
    border: "none",
    fontWeight: 700,
    cursor: "pointer",
  },
  secondary: {
    padding: "12px 28px",
    borderRadius: 999,
    background: "transparent",
    border: "1px solid #00f3ff",
    color: "#00f3ff",
    cursor: "pointer",
  },
  rate: {
    padding: "10px 14px",
    borderRadius: 8,
    border: "1px solid rgba(255,255,255,0.2)",
    cursor: "pointer",
  },
  rateActive: {
    background: "#00f3ff",
    color: "#000",
    fontWeight: 700,
  },
};

