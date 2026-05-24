import { useState } from "react";
import { NAV_LINKS, COLORS } from "../../constants";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* ── Top utility bar ── */}
      {/* <div style={{ backgroundColor: COLORS.navy }} className="text-white text-xs py-1.5 px-6 flex items-center justify-between">
        <span>📞 1800-258-5555 &nbsp;|&nbsp; info.allen@gmail.com</span>
        <div className="flex gap-3">
          <button
            style={{ backgroundColor: COLORS.orange }}
            className="hover:opacity-90 px-3 py-0.5 rounded font-semibold transition text-white text-xs"
          >
            Login
          </button>
          <button
            className="border border-white/40 hover:bg-white/10 px-3 py-0.5 rounded font-semibold transition text-xs"
          >
            Register
          </button>
        </div>
      </div> */}

      {/* ── Main Navbar ── */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div
              style={{ backgroundColor: "#025FCA" }}
              className="w-10 h-10 rounded-lg flex items-center justify-center"
            >
              <span className="text-white font-black text-xl">P</span>
            </div>
            <div>
              <div style={{ color: "#025FCA" }} className="font-black text-xl leading-none">PARASNATH</div>
              <div style={{ color: COLORS.gray700 }} className="text-[9px] leading-none tracking-[3px] uppercase">Career Institute</div>
            </div>
          </div>

          {/* Desktop links */}
          <div className="hidden xl:flex items-center gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                style={{ color: COLORS.gray700 }}
                className="text-xs font-semibold whitespace-nowrap hover:opacity-70 transition"
                onMouseEnter={e => (e.target.style.color = COLORS.navy)}
                onMouseLeave={e => (e.target.style.color = COLORS.gray700)}
              >
                {link}
              </a>
            ))}
          </div>

          {/* View All pill */}
          <button
            style={{ backgroundColor: "#025FCA" }}
            className="hidden xl:block text-white text-xs font-bold px-4 py-1.5 rounded-full hover:opacity-90 transition"
          >
            View All
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: "#025FCA" }}
            className="xl:hidden text-2xl"
          >
            ☰
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="xl:hidden bg-white border-t px-4 pb-4" style={{ borderColor: COLORS.gray100 }}>
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                style={{ color: COLORS.gray700 }}
                className="block py-2 text-sm hover:opacity-70 transition"
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}