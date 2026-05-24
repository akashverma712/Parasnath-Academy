import { AFFILIATIONS, COLORS } from "../../constants";

export default function Affiliation() {
  return (
    <section 
      style={{ 
        backgroundColor: COLORS.bg || "#f9fafb",
        // CSS Grid background pattern that fades out towards the center
        backgroundImage: `
          linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
          radial-gradient(circle at center, transparent 30%, ${COLORS.bg || "#f9fafb"} 85%)
        `,
        backgroundSize: '24px 24px, 24px 24px, 100% 100%',
        backgroundBlendMode: 'normal'
      }} 
      className="py-16 relative overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto px-4 relative z-10">

        {/* Heading */}
        <h2
          style={{ color: COLORS.gray800 || "#1f2937" }}
          className="text-3xl md:text-4xl font-black tracking-wider text-center"
        >
          Our <span style={{ color: "#025FCA"}}>Affiliation</span>
        </h2>

        {/* Orange underline */}
        <div
          
          className="mx-auto mb-10 mt-2"
        />

        {/* Logo cards - Stretched to landscape format with dynamic flexibility */}
        <div className="flex justify-center gap-8 flex-wrap">
          {AFFILIATIONS.map((a, index) => (
            <div
              key={a.name}
              style={{ backgroundColor: COLORS.white || "#ffffff" }}
              className="rounded-2xl p-5 w-52 sm:w-60 flex flex-col items-center gap-4 border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              img='./gov.png'
            >
              {/* Profile/Logo Image Wrapper */}
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center p-1 shadow-inner">
                <img
                  src={index === 0 ? "./jut.png" : "./gov.png"}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              {/* Text Meta Container */}
              <div
                style={{ color: COLORS.gray700 || "#374151" }}
                className="text-xs md:text-sm font-extrabold text-center tracking-tight leading-snug"
              >
                {a.name}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}