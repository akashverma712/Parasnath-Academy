import { FOOTER_COLS, COLORS } from "../../constants";

const SOCIALS = ["Facebook", "Twitter", "Instagram", "YouTube", "LinkedIn"];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: COLORS.bg }} className="text-white pt-10 pb-6">
      <div className="max-w-screen-xl mx-auto px-4">

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <div
                style={{
                  color: COLORS.black,
                  borderBottom: `1px solid rgba(255,255,255,0.2)`,
                }}
                className="font-black text-sm mb-3 pb-2"
              >
                {col.title}
              </div>
              {col.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-[11px] mb-1.5 text-gray-700 leading-snug hover:text-white transition"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div
          style={{ borderTop: `1px solid rgba(255,255,255,0.2)` }}
          className="pt-5 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Logo + copyright */}
          <div className="flex items-center gap-3">
            <div
              style={{ backgroundColor: COLORS.white }}
              className="w-8 h-8 rounded flex items-center justify-center"
            >
              <span style={{ color: COLORS.navy }} className="font-black text-sm">P</span>
            </div>
            <div>
              <div className="font-black text-gray-700 text-sm leading-none">
               Parasnath Academy
              </div>
              <div className="text-[10px] text-gray-700">
                © 2025 All rights reserved
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="flex gap-4 flex-wrap justify-center">
            {SOCIALS.map((s) => (
              <a
                key={s}
                href="#"
                className="text-[11px] hover:text-blue-600 transition text-gray-600"
              >
                {s}
              </a>
            ))}
          </div>

          {/* ISO badge */}
          <div
            style={{ border: `1px solid rgba(255,255,255,0.3)` }}
            className="flex items-center gap-2 rounded px-3 py-1"
          >
            <span  className="text-xs text-gray-700">ISO</span>
            <div className="text-[10px] text-gray-700">9001:2015</div>
          </div>
        </div>
      </div>
    </footer>
  );
}