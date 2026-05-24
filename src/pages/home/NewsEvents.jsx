import { useState, useEffect, useRef } from "react";

const COLORS = {
  navy: "#1a1a2e",
  white: "#ffffff",
  gray100: "#e5e7eb",
  gray700: "#4b5563",
  gray800: "#1f2937",
  orange: "#f97316",
  bg: "#f9fafb"
};

const NEWS_EVENTS = [
  {
    title: "Parasnath Academy Students Achieve Top Ranks in State Board Exams",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80",
  },
  {
    title: "Parasnath Academy Celebrates 100% Success Rate in Olympiad Selection Across India",
    img: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80",
  },
  {
    title: "Annual Cultural & Prize Distribution Ceremony at Main Campus Ground",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
  },
  {
    title: "New Smart Classes and Modern Computer Lab Inauguration Ceremony",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
  },
  {
    title: "Inter-School Science Meet: Parasnath Academy Wins Clean Sweep Trophy",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80",
  },
  {
    title: "Parasnath Academy Launches Advanced Hybrid E-Learning Portal for Seniors",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
  },
  {
    title: "Our Athletics Team Brings Home the Gold in Regional Sports Tournament",
    img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80",
  },
  {
    title: "Parents-Teachers Interactive Meet Focuses on Holistic Student Development",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
  },
];

// 30% Scaled dimensions
const CARD_WIDTH = 312; 
const CARD_GAP = 20;
const CARD_STEP = CARD_WIDTH + CARD_GAP;

export default function NewsEvents() {
  const [pos, setPos] = useState(0);
  const dirRef = useRef(1);
  const trackRef = useRef(null);
  const timerRef = useRef(null);

  const getMax = () => {
    if (!trackRef.current) return 0;
    const visible = Math.floor(trackRef.current.parentElement.offsetWidth / CARD_STEP);
    return Math.max(0, (NEWS_EVENTS.length - visible) * CARD_STEP);
  };

  const slide = (delta) => {
    setPos((prev) => {
      const max = getMax();
      let next = Math.max(0, Math.min(prev + delta, max));
      if (next >= max) dirRef.current = -1;
      if (next <= 0) dirRef.current = 1;
      return next;
    });
  };

  const startAuto = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => slide(CARD_STEP * dirRef.current), 3000);
  };

  useEffect(() => {
    startAuto();
    return () => clearInterval(timerRef.current);
  }, []);

  const handlePrev = () => { clearInterval(timerRef.current); slide(-CARD_STEP); startAuto(); };
  const handleNext = () => { clearInterval(timerRef.current); slide(CARD_STEP); startAuto(); };

  return (
    <section 
      style={{ 
        width: "100%", 
        padding: "60px 0", 
        backgroundColor: COLORS.bg,
        backgroundImage: `
          radial-gradient(circle at center, transparent 20%, ${COLORS.bg} 75%),
          linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)
        `,
        backgroundSize: '100% 100%, 32px 32px, 32px 32px',
        position: "relative"
      }}
    >
      {/* Original Header Layout Structure */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "between",
          padding: "0 48px 24px",
          maxWidth: "100%",
          margin: "0 auto",
        }}
      >
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
          News and Events
            </h2>
          </div>
          <p style={{ color: "#64748b", fontSize: 13, margin: "0 0 0 16px" }}>
          Stay alert with all the latest news, events, and achievements.
          </p>
        </div>
      </div>

      {/* Carousel Container */}
      <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
        
        {/* Increased Edge Fades (Width and density increased for deep fading effect) */}
        <div 
          style={{ 
            position: "absolute", 
            left: 0, 
            top: 0, 
            height: "100%", 
            width: 160, 
            zIndex: 2, 
            background: `linear-gradient(to right, ${COLORS.bg} 20%, rgba(249, 250, 251, 0.8) 50%, transparent)`, 
            pointerEvents: "none" 
          }} 
        />
        <div 
          style={{ 
            position: "absolute", 
            right: 0, 
            top: 0, 
            height: "100%", 
            width: 160, 
            zIndex: 2, 
            background: `linear-gradient(to left, ${COLORS.bg} 20%, rgba(249, 250, 251, 0.8) 50%, transparent)`, 
            pointerEvents: "none" 
          }} 
        />

        <div
          ref={trackRef}
          style={{
            display: "flex",
            gap: CARD_GAP,
            transform: `translateX(-${pos}px)`,
            transition: "transform 0.5s cubic-bezier(.4,0,.2,1)",
            willChange: "transform",
            padding: "12px 48px 24px",
          }}
        >
          {NEWS_EVENTS.map((item, i) => (
            <NewsCard key={i} item={item} />
          ))}
        </div>
      </div>

      {/* Nav Buttons placed below the image placeholders / track */}
      <div style={{ display: "flex", justifyContent: "center", gap: 16, marginTop: 20 }}>
        <NavBtn label="Previous" icon="‹" onClick={handlePrev} />
        <NavBtn label="Next" icon="›" onClick={handleNext} />
      </div>

      {/* View All */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: 28 }}>
        <ViewAllBtn />
      </div>
    </section>
  );
}

function NewsCard({ item }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        minWidth: CARD_WIDTH,
        maxWidth: CARD_WIDTH,
        borderRadius: 16,
        overflow: "hidden",
        border: `1px solid ${COLORS.gray100}`,
        background: COLORS.white,
        cursor: "pointer",
        boxShadow: hovered ? "0 12px 36px rgba(0,0,0,0.12)" : "0 4px 12px rgba(0,0,0,0.04)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
      }}
    >
      {/* 30% Scaled Image Placeholder (Height: 195px) */}
      <div style={{ overflow: "hidden", height: 195 }}>
        <img
          src={item.img}
          alt={item.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: hovered ? "scale(1.06)" : "scale(1)",
            transition: "transform 0.4s ease",
            display: "block",
          }}
        />
      </div>

      {/* Title */}
      <p
        style={{
          padding: "16px 16px 20px",
          margin: 0,
          fontSize: 14,
          fontWeight: 700,
          color: COLORS.gray700,
          lineHeight: 1.5,
        }}
      >
        {item.title}
      </p>
    </div>
  );
}

function NavBtn({ label, icon, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      aria-label={label}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 44,
        height: 44,
        borderRadius: "50%",
        border: `1.5px solid ${COLORS.navy}`,
        background: hovered ? COLORS.navy : COLORS.white,
        color: hovered ? COLORS.white : COLORS.navy,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 24,
        transition: "all 0.2s ease",
      }}
    >
      <span style={{ transform: "translateY(-2px)" }}>{icon}</span>
    </button>
  );
}

function ViewAllBtn() {
  const [hovered, setHovered] = useState(false);
  return (
    <button></button>
  );
}