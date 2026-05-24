import { useState, useEffect, useRef } from "react";

const TESTIMONIALS = [
  {
    quote: "Boring subjects became interesting!",
    subQuote: "Without this guidance, IIT would've remained a dream for my son.",
    name: "Alankriti Asthana's Mother",
    city: "Bengaluru, Karnataka",
    badge: "94%",
    exam: "CBSE 10th",
    img: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&q=80",
    starColor: "#e05a10",
  },
  {
    quote: "The study schedule was perfect",
    subQuote: "IIT Roorkee would've remained a dream for my daughter without ALLEN.",
    name: "Yogita Goyal's Father",
    city: "Kaithal, Haryana",
    badge: "AIR 1697",
    exam: "JEE Adv. 2024",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    starColor: "#22c55e",
  },
  {
    quote: "The quality of tests was top-notch!",
    subQuote: "Every mock test felt like the real thing. My child was fully prepared.",
    name: "Simran Goyal's Father",
    city: "Jaipur, Rajasthan",
    badge: "527/720",
    exam: "NEET 2025",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    starColor: "#3b82f6",
  },
  {
    quote: "Her mental ability improved a lot",
    subQuote: "She became more confident and focused after joining ALLEN.",
    name: "Inchara Shasti's Mother",
    city: "Bengaluru, Karnataka",
    badge: "AIR 420",
    exam: "NEET 2025",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    starColor: "#f59e0b",
  },
  {
    quote: "My child was WITH me all the time",
    subQuote: "Even studying from home, he never felt alone. Faculty support was incredible.",
    name: "Suchi Jain's Father",
    city: "Udham Singh Nagar, Uttarakhand",
    badge: "695/720",
    exam: "NEET 2024",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    starColor: "#ec4899",
  },
  {
    quote: "Best decision we ever made!",
    subQuote: "ALLEN transformed my son's approach to studying completely.",
    name: "Rohit Kumar's Father",
    city: "Lucknow, U.P.",
    badge: "AIR 892",
    exam: "JEE Main 2025",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    starColor: "#8b5cf6",
  },
  {
    quote: "Teachers were always available!",
    subQuote: "Any doubt, any time — the faculty was just a call away.",
    name: "Priya Mehta's Mother",
    city: "Pune, Maharashtra",
    badge: "98%",
    exam: "CBSE 12th",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
    starColor: "#10b981",
  },
  {
    quote: "Confidence grew with every test!",
    subQuote: "The structured approach helped my daughter crack NEET on first attempt.",
    name: "Ananya Sharma's Father",
    city: "Delhi, NCR",
    badge: "312/360",
    exam: "JEE Main 2025",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    starColor: "#06b6d4",
  },
];

const CARD_WIDTH = 220;
const CARD_GAP = 14;
const CARD_STEP = CARD_WIDTH + CARD_GAP;

function useVisibleCount() {
  const [count, setCount] = useState(4);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 480) setCount(1);
      else if (w < 768) setCount(2);
      else if (w < 1100) setCount(3);
      else setCount(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return count;
}

export default function AllenTestimonialsCarousel() {
  const visible = useVisibleCount();
  const [start, setStart] = useState(0);
  const dirRef = useRef(1);
  const timerRef = useRef(null);
  const total = TESTIMONIALS.length;
  const maxStart = Math.max(0, total - visible);

  const slide = (delta) => {
    setStart((prev) => {
      let next = prev + delta;
      if (next >= maxStart) { dirRef.current = -1; return maxStart; }
      if (next <= 0) { dirRef.current = 1; return 0; }
      return next;
    });
  };

  const startAuto = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => slide(dirRef.current), 2600);
  };

  useEffect(() => { startAuto(); return () => clearInterval(timerRef.current); }, [visible]);

  const handlePrev = () => { clearInterval(timerRef.current); slide(-1); startAuto(); };
  const handleNext = () => { clearInterval(timerRef.current); slide(1); startAuto(); };

  const slice = TESTIMONIALS.slice(start, start + visible);

  return (
    <section style={{ width: "100%", padding: "48px 0", background: "#fff", boxSizing: "border-box" }}>
      {/* Header */}
      <div style={{ padding: "0 clamp(16px, 4vw, 48px) 24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
          <div style={{ width: 4, height: 28, borderRadius: 999, background: "#025FCA", flexShrink: 0 }} />
          <h2 style={{ fontSize: "clamp(18px, 3vw, 22px)", fontWeight: 900, color: "#1a1a2e", margin: 0, letterSpacing: "0.02em", textTransform: "uppercase" }}>
            Our Placements
          </h2>
        </div>
        <p style={{ color: "#64748b", fontSize: 13, margin: "0 0 0 16px" }}>
          Hear from the parents whose children achieved their dreams with us.
        </p>
      </div>

      {/* Cards grid — responsive columns */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${visible}, 1fr)`,
          gap: CARD_GAP,
          padding: "8px clamp(16px, 4vw, 48px) 0",
          transition: "grid-template-columns 0.3s ease",
        }}
      >
        {slice.map((t, i) => (
          <TestimonialCard key={start + i} data={t} />
        ))}
      </div>

      {/* Arrows + Dots */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          marginTop: 20,
          padding: "0 16px",
          flexWrap: "wrap",
        }}
      >
        <NavBtn label="Prev" icon="‹" onClick={handlePrev} />
        {Array.from({ length: maxStart + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setStart(i)}
            style={{
              width: i === start ? 20 : 8,
              height: 8,
              borderRadius: 999,
              border: "none",
              background: i === start ? "#025FCA" : "#d1d5db",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.3s ease",
              flexShrink: 0,
            }}
          />
        ))}
        <NavBtn label="Next" icon="›" onClick={handleNext} />
      </div>
    </section>
  );
}

function TestimonialCard({ data }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 12,
        border: "1px solid #e5e7eb",
        overflow: "hidden",
        background: "#fff",
        cursor: "pointer",
        boxShadow: hovered ? "0 8px 28px rgba(0,0,0,0.12)" : "0 1px 4px rgba(0,0,0,0.06)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        transition: "all 0.25s ease",
      }}
    >
      {/* Quote bar */}
      <div style={{
        padding: "8px 12px", fontSize: 11, fontWeight: 600, color: "#374151",
        background: "#f9fafb", borderBottom: "1px solid #e5e7eb",
        minHeight: 34, display: "flex", alignItems: "center", lineHeight: 1.4,
      }}>
        {data.quote}
      </div>

      {/* Image */}
      <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 8, right: 10, color: data.starColor, fontSize: 14, zIndex: 2, pointerEvents: "none" }}>✦</div>
        <img
          src={data.img}
          alt={data.name}
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            objectPosition: "top center", display: "block",
            transform: hovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.4s ease",
          }}
        />
        {/* Hover overlay */}
        <div style={{
          position: "absolute", inset: 0, background: "rgba(0,0,0,0.70)",
          display: "flex", alignItems: "flex-end", padding: "12px",
          opacity: hovered ? 1 : 0, transition: "opacity 0.28s ease", zIndex: 3,
        }}>
          <p style={{ color: "#fff", fontSize: 11.5, lineHeight: 1.6, fontStyle: "italic", margin: 0 }}>
            {data.subQuote}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div style={{ padding: "10px 12px 12px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 6 }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#1a1a2e", lineHeight: 1.3, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {data.name}
            </div>
            <div style={{ fontSize: 10, color: "#9ca3af", marginTop: 1 }}>{data.city}</div>
          </div>
          <div style={{ background: "#025FCA", color: "#fff", borderRadius: 999, padding: "3px 10px", fontSize: 10, fontWeight: 700, whiteSpace: "nowrap", flexShrink: 0 }}>
            {data.badge}
          </div>
        </div>
        <div style={{ fontSize: 9.5, color: "#9ca3af", marginTop: 5 }}>{data.exam}</div>
      </div>
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
        width: 30, height: 30, borderRadius: "50%",
        border: hovered ? "1.5px solid #1a1a2e" : "1.5px solid #d1d5db",
        background: hovered ? "#1a1a2e" : "#fff",
        color: hovered ? "#fff" : "#6b7280",
        cursor: "pointer", display: "flex", alignItems: "center",
        justifyContent: "center", fontSize: 18, transition: "all 0.2s", flexShrink: 0,
      }}
    >
      {icon}
    </button>
  );
}