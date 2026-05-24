import { VISIONARIES, COLORS } from "../../constants";

// Temporary mockup data with professional Unsplash images
const ENHANCED_VISIONARIES = VISIONARIES.map((v, index) => {
  const images = [
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"
  ];
  return {
    ...v,
    imageUrl: images[index] || images[0]
  };
});

export default function Visionaries() {
  return (
    <section className="w-full bg-gray-50 py-12 px-6 md:px-12">
      {/* Heading Container */}
      <div className="w-full text-center mb-10">
        <h2
          style={{ color: COLORS.gray800 || "#1f2937" }}
          className="text-3xl md:text-4xl font-black tracking-wider"
        >
          Our <span style={{ color: "#025FCA" }}>Visionaries</span>
        </h2>
      </div>

      {/* Grid with padding/gap between cards and maximum constraint for balanced width */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto w-full">
        {ENHANCED_VISIONARIES.map((v) => (
          <div
            key={v.name}
            style={{ backgroundColor: COLORS.white || "#ffffff" }}
            className="flex flex-col border border-gray-100 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
          >
            {/* Height slightly reduced to balance perfectly with the card width */}
            <div className="w-full h-[280px] sm:h-[340px] overflow-hidden relative">
              <img
                src={v.imageUrl}
                alt={v.name}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content Details & Alignment */}
            <div className="p-6 md:p-8 flex-grow flex flex-col items-center justify-between text-center bg-white">
              <div className="mb-6">
                <h3
                  style={{ color: COLORS.gray800 || "#111827" }}
                  className="font-extrabold text-lg md:text-xl tracking-tight mb-1"
                >
                  {v.name}
                </h3>
                <p
                  style={{ color: COLORS.gray500 || "#6b7280" }}
                  className="text-xs md:text-sm uppercase font-semibold tracking-widest"
                >
                  {v.role}
                </p>
              </div>

          
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}