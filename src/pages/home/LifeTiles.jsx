import {
    HelpCircle,
    FileText,
    GraduationCap,
    Video,
    Users,
    BookOpen,
    Brain,
    ClipboardCheck
  } from "lucide-react";
  import { COLORS } from "../../constants";
  
  const TILE_DATA = [
    { label: "24×7 Doubt Solving", icon: HelpCircle },
    { label: "Mock Tests", icon: ClipboardCheck },
    { label: "Flashcards", icon: FileText },
    { label: "Career Guidance", icon: GraduationCap },
    { label: "Live Classes", icon: Video },
    { label: "Mentorship", icon: Users },
    { label: "Improvement Book", icon: BookOpen },
    { label: "PYQ Practice", icon: Brain },
    { label: "Meditation Session", icon: Brain },
    { label: "Revision Notes", icon: FileText },
    { label: "PYQ Tests", icon: ClipboardCheck },
    { label: "Topic-wise Videos", icon: Video },
    { label: "Subjective Tests", icon: ClipboardCheck },
    { label: "ALLEN Important Q's", icon: HelpCircle },
    { label: "Topic-wise Tests", icon: ClipboardCheck },
    { label: "Regular Homework", icon: BookOpen },
  ];
  
  const row1 = TILE_DATA.slice(0, 5);
  const row2 = TILE_DATA.slice(5, 11);
  const row3 = TILE_DATA.slice(11);
  
  // Repeat items many times so track is always much wider than viewport — no jump ever
  const repeat = (arr, times = 12) => Array.from({ length: times }, () => arr).flat();
  
  const CSS = `
    @keyframes mq-left {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes mq-right {
      0%   { transform: translateX(-50%); }
      100% { transform: translateX(0%); }
    }
    .mq-track-left  {
      animation: mq-left  35s linear infinite;
      will-change: transform;
    }
    .mq-track-right {
      animation: mq-right 35s linear infinite;
      will-change: transform;
    }
  `;
  
  function MarqueeRow({ items, direction }) {
    // Use 6 copies total — translateX(-50%) = exactly half → seamless
    const tiles = repeat(items, 6);
  
    return (
      <div style={{ position: "relative", overflow: "hidden", padding: "5px 0" }}>
        {/* Edge fades */}
        <div style={{
          position: "absolute", left: 0, top: 0, width: 100, height: "100%", zIndex: 2,
          background: `linear-gradient(to right, ${COLORS.bg || "#0f172a"} 30%, transparent)`,
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", right: 0, top: 0, width: 100, height: "100%", zIndex: 2,
          background: `linear-gradient(to left, ${COLORS.bg || "#0f172a"} 30%, transparent)`,
          pointerEvents: "none",
        }} />
  
        <div
          className={direction === "left" ? "mq-track-left" : "mq-track-right"}
          style={{ display: "flex", gap: 16, width: "max-content" }}
        >
          {tiles.map((tile, i) => {
            const Icon = tile.icon;
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  backgroundColor: COLORS.bg2 || "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  padding: "12px 24px",
                  borderRadius: 28,
                  whiteSpace: "nowrap",
                  userSelect: "none",
                  boxShadow: "0 3px 12px rgba(0,0,0,0.18)",
                }}
              >
                <Icon
                  size={20}
                  strokeWidth={2}
                  style={{ color: COLORS.gray500 || "#94a3b8", flexShrink: 0 }}
                />
                <span style={{
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.03em",
                  color: COLORS.gray500 || "#94a3b8",
                }}>
                  {tile.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  
  export default function LifeTiles() {
    return (
      <section
        style={{
          backgroundColor: COLORS.bg || "#0f172a",
          padding: "72px 0",
          overflow: "hidden",
        }}
      >
        <style>{CSS}</style>
  
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2 style={{
            fontSize: 32,
            fontWeight: 900,
            letterSpacing: "0.04em",
            color: COLORS.gray800 || "#1f2937",
            margin: 0,
          }}>
            Life at{" "}
            <span style={{ color: "#025FCA" }}>Parasnath Academy</span>
          </h2>
        </div>
  
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <MarqueeRow items={row1} direction="left" />
          <MarqueeRow items={row2} direction="right" />
          <MarqueeRow items={row3} direction="left" />
        </div>
      </section>
    );
  }