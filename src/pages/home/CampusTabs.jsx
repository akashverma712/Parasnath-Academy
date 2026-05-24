import { useState } from "react";

const COLORS = {
  navy: "#1a1a2e",
  orange: "#019370",
  white: "#ffffff",
  bg: "#edf2fa",
};

const CAMPUS_TABS = [
  {
    label: "Campus Life",
    heading: "Vibrant Campus Experience",
    body: "From sprawling green lawns to modern infrastructure, our campus is designed to inspire learning and holistic growth. Students enjoy a safe, energetic, and well-equipped environment every single day.",
    img: "https://images.unsplash.com/photo-1562774053-701939374585?w=900&q=85",
  },
  {
    label: "Classrooms",
    heading: "Smart & Modern Classrooms",
    body: "Our classrooms are equipped with smart boards, ergonomic seating, and excellent acoustics to ensure every student stays engaged and learns effectively — whether in theory or practical sessions.",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&q=85",
  },
  {
    label: "Library",
    heading: "Knowledge Hub — Our Library",
    body: "With thousands of books, journals, digital resources, and dedicated reading spaces, our library is the ultimate resource centre for students preparing for competitive exams and academic excellence.",
    img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=900&q=85",
  },
  {
    label: "Laboratories",
    heading: "State-of-the-Art Labs",
    body: "Hands-on learning is at the core of our curriculum. Our laboratories are fully equipped with modern instruments and safety infrastructure, giving students real-world experimental exposure.",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&q=85",
  },
  {
    label: "Sports",
    heading: "Sports & Physical Wellness",
    body: "We believe in nurturing both mind and body. Our sports facilities include grounds for cricket, football, basketball, and indoor games — encouraging teamwork, discipline, and a healthy lifestyle.",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=85",
  },
];

export default function CampusTabs() {
  const [active, setActive] = useState(0);
  const tab = CAMPUS_TABS[active];

  return (
    <section
      style={{
        backgroundColor: COLORS.bg,
        // backgroundImage: `
        //   radial-gradient(ellipse at top left, rgba(249,115,22,0.06) 0%, transparent 45%),
        //   radial-gradient(ellipse at bottom right, rgba(26,26,46,0.05) 0%, transparent 55%),
        //   linear-gradient(rgba(26,26,46,0.05) 1px, transparent 1px),
        //   linear-gradient(90deg, rgba(26,26,46,0.05) 1px, transparent 1px)
        // `,
        backgroundSize: "100% 100%, 100% 100%, 32px 32px, 32px 32px",
        padding: "72px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Section heading */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <div
              style={{
                width: 4,
                height: 28,
                borderRadius: 999,
                background:"#025FCA",
              }}
            />
            <h2
              style={{
                fontSize: 22,
                fontWeight: 900,
                color: COLORS.navy,
                margin: 0,
                letterSpacing: "0.02em",
                textTransform: "uppercase",
              }}
            >
              Explore Our Campus
            </h2>
          </div>
          <p style={{ color: "#64748b", fontSize: 13, margin: "0 0 0 16px" }}>
            World-class infrastructure built for exceptional learning
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: 24,
            alignItems: "stretch",
            flexWrap: "wrap",
          }}
        >
          {/* ── Vertical tab list (Left) ── */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              flexShrink: 0,
              minWidth: 180,
            }}
          >
            {CAMPUS_TABS.map((t, i) => (
              <TabButton
                key={t.label}
                label={t.label}
                active={active === i}
                onClick={() => setActive(i)}
              />
            ))}
          </div>

          {/* ── Image ── */}
          <div
            style={{
              flex: "1 1 320px",
              minHeight: 380,
              borderRadius: 20,
              overflow: "hidden",
              border: "1px solid rgba(26,26,46,0.1)",
              position: "relative",
              boxShadow: "0 4px 24px rgba(26,26,46,0.08)",
            }}
          >
            {CAMPUS_TABS.map((t, i) => (
              <img
                key={i}
                src={t.img}
                alt={t.label}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  opacity: active === i ? 1 : 0,
                  transform: active === i ? "scale(1.04)" : "scale(1)",
                  transition: "opacity 0.6s ease, transform 0.7s ease",
                }}
              />
            ))}
            {/* Gradient overlay on image bottom */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 80,
                background: "linear-gradient(to top, rgba(26,26,46,0.45), transparent)",
                pointerEvents: "none",
              }}
            />
          </div>

          {/* ── Content card (Right) ── */}
          <div
            style={{
              flex: "1 1 280px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "36px 32px",
              borderRadius: 20,
              border: "1px solid rgba(26,26,46,0.08)",
              background: COLORS.white,
              boxShadow: "0 2px 16px rgba(26,26,46,0.06)",
            }}
          >
            {/* Orange accent line */}
            <div
              style={{
                width: 40,
                height: 3,
                borderRadius: 999,
                background: COLORS.orange,
                marginBottom: 20,
              }}
            />

            <h3
              style={{
                color: COLORS.navy,
                fontSize: 26,
                fontWeight: 900,
                margin: "0 0 14px",
                lineHeight: 1.2,
                textTransform: "uppercase",
                letterSpacing: "0.02em",
              }}
            >
              {tab.heading}
            </h3>

            <p
              style={{
                color: "#475569",
                fontSize: 14,
                lineHeight: 1.75,
                margin: "0 0 28px",
              }}
            >
              {tab.body}
            </p>

            <ReadMoreButton />
          </div>
        </div>
      </div>
    </section>
  );
}

function TabButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        textAlign: "left",
        padding: "12px 20px",
        fontSize: 12,
        fontWeight: 800,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        borderRadius: 12,
       
        background: active ? "#f1f5f9" : COLORS.white,
        color: active ? COLORS.orange : "#475569",
        cursor: "pointer",
        transition: "all 0.25s ease",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={(e) => {
        if (!active) {
          e.currentTarget.style.background = "#f1f5f9";
          e.currentTarget.style.color = COLORS.navy;
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          e.currentTarget.style.background = COLORS.white;
          e.currentTarget.style.color = "#475569";
        }
      }}
    >
      {label}
    </button>
  );
}

function ReadMoreButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        alignSelf: "flex-start",
        background: hovered ? "#019370" : "#019370",
        color: COLORS.white,
        border: "none",
        borderRadius: 12,
        padding: "12px 28px",
        fontSize: 12,
        fontWeight: 800,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        cursor: "pointer",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        transition: "all 0.2s ease",
        
      }}
    >
      Read More
    </button>
  );
}