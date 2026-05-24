import { TICKER_TEXT, COLORS } from "../../constants";

export default function Ticker() {
  const repeated = `${TICKER_TEXT} · ${TICKER_TEXT} · ${TICKER_TEXT}`;

  return (
    <div
      className="flex items-center border-b"
      style={{ backgroundColor: COLORS.white, borderColor: COLORS.gray100 }}
    >
      {/* Label badge */}
      <span
        style={{ backgroundColor: "#019370" }}
        className="text-xs font-black px-4 py-2.5 shrink-0 uppercase tracking-widest whitespace-nowrap"
      >
        JOIN QUICK ENROLL
      </span>

      {/* Scrolling text */}
      <div className="flex-1 overflow-hidden py-2 px-4">
        <style>{`
          @keyframes ticker-scroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .ticker-text {
            display: inline-block;
            animation: ticker-scroll 28s linear infinite;
            white-space: nowrap;
          }
        `}</style>
        <p className="ticker-text text-xs" style={{ color: COLORS.gray500 }}>
          {repeated}
        </p>
      </div>

      {/* View All button */}
      <button
        style={{ backgroundColor: "#025FCA" }}
        className="text-xs font-bold px-5 py-2.5  text-white shrink-0 hover:opacity-90 transition whitespace-nowrap"
      >
        View All
      </button>
    </div>
  );
}