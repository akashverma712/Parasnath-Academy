import { useState, useEffect } from "react";

const HERO_SLIDES = [
  {
    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1400&q=85",
    label: "Welcome to Parasnath Academy",
    sub: "Satkira, Topchachi, Dhanbad",
  },
  {
    img: "https://images.unsplash.com/photo-1562774053-701939374585?w=1400&q=85",
    label: "Excellence in Education",
    sub: "Shaping Future Since 2005",
  },
  {
    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1400&q=85",
    label: "Labs & Research Facilities",
    sub: "JUT Accredited · Jharkhand Government Approved",
  },
  {
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1400&q=85",
    label: "Admissions Open 2026",
    sub: "Nursery · Matriculation · Intermediate",
  },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setActive((prev) => (prev + 1) % HERO_SLIDES.length),
      3800
    );
    return () => clearInterval(timer);
  }, []);

  const prev = () => setActive((p) => (p - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  const next = () => setActive((p) => (p + 1) % HERO_SLIDES.length);

  return (
    <div style={{ position: "relative", width: "100%", height: 460, overflow: "hidden" }}>
      {/* Slides */}
      {HERO_SLIDES.map((slide, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            inset: 0,
            opacity: active === i ? 1 : 0,
            transition: "opacity 0.8s ease",
            zIndex: active === i ? 1 : 0,
          }}
        >
          {/* Background image */}
          <img
            src={slide.img}
            alt={slide.label}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              transform: active === i ? "scale(1.03)" : "scale(1)",
              transition: "transform 4s ease",
            }}
          />

          {/* Dark overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.55) 100%)",
            }}
          />

          {/* Text content */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "0 24px",
              zIndex: 2,
            }}
          >
            <div
              style={{
                background: "#025FCA",
                color: "#fff",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                padding: "4px 18px",
                borderRadius: 999,
                marginBottom: 16,
                textTransform: "uppercase",
              }}
            >
              Krishna Institute of Pharmacy
            </div>

            <h1
              style={{
                color: "#fff",
                fontSize: 36,
                fontWeight: 800,
                lineHeight: 1.25,
                margin: "0 0 10px",
                maxWidth: 680,
                textShadow: "0 2px 8px rgba(0,0,0,0.4)",
              }}
            >
              {slide.label}
            </h1>

            <p
              style={{
                color: "rgba(255,255,255,0.82)",
                fontSize: 14,
                margin: "0 0 24px",
              }}
            >
              {slide.sub}
            </p>

            <div style={{ display: "flex", gap: 12 }}>
              <button
                style={{
                  background: "#025FCA",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "10px 28px",
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
                
              >
                Apply Now
              </button>
              
            </div>
          </div>
        </div>
      ))}

      {/* Left arrow */}
      <button
        onClick={prev}
        style={{
          position: "absolute",
          left: 16,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.2)",
          border: "1.5px solid rgba(255,255,255,0.5)",
          color: "#fff",
          fontSize: 20,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(4px)",
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.35)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
        aria-label="Previous slide"
      >
        ‹
      </button>

      {/* Right arrow */}
      <button
        onClick={next}
        style={{
          position: "absolute",
          right: 16,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.2)",
          border: "1.5px solid rgba(255,255,255,0.5)",
          color: "#fff",
          fontSize: 20,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(4px)",
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.35)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Dot indicators */}
      <div
        style={{
          position: "absolute",
          bottom: 18,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 8,
          zIndex: 10,
        }}
      >
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: active === i ? 28 : 10,
              height: 10,
              borderRadius: 999,
              border: "none",
              background: active === i ? "#025FCA" : "rgba(255,255,255,0.5)",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>

      {/* "ADMISSION OPEN 2026" vertical tab — right side */}
      
    </div>
  );
}