import { COLORS } from "../../constants";

const VIDEO_ITEMS = [
  {
    title: "Campus Tour — Experience the Energy of Parasnath Academy",
    thumb: "https://images.unsplash.com/photo-1562774053-701939374585?w=640&q=85",
  },
  {
    title: "Student Life — Learning, Growing & Thriving Together",
    thumb: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&q=85",
  },
];

export default function VideoSection() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-12">
      <div className="w-full text-center mb-10">
        <h2
          style={{ color: COLORS.gray800 || "#1f2937" }}
          className="text-3xl md:text-4xl font-black tracking-wider"
        >
          Life at <span style={{ color: "#025FCA" }}>Parasnath Academy</span>
        </h2>
      </div>

      <div className="flex gap-6 justify-center flex-wrap">
        {VIDEO_ITEMS.map((v) => (
          <VideoCard key={v.title} v={v} />
        ))}
      </div>
    </section>
  );
}

function VideoCard({ v }) {
  return (
    <div
      style={{
        backgroundColor: COLORS.white || "#fff",
        borderColor: COLORS.gray100 || "#f3f4f6",
        width: 320,
      }}
      className="border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group cursor-pointer"
    >
      {/* Thumbnail with play button overlay */}
      <div className="relative overflow-hidden">
        <img
          src={v.thumb}
          alt={v.title}
          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Dark overlay on hover */}
        <div
          className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"
        />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            style={{ backgroundColor: "rgba(255,255,255,0.92)" }}
            className="w-12 h-12 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200"
          >
            <div
              style={{
                width: 0,
                height: 0,
                borderTop: "8px solid transparent",
                borderBottom: "8px solid transparent",
                borderLeft: "14px solid #025FCA",
                marginLeft: 3,
              }}
            />
          </div>
        </div>
      </div>

      {/* Title */}
      <p
        style={{ color: COLORS.gray700 || "#374151" }}
        className="p-4 text-sm font-semibold min-h-[64px]"
      >
        {v.title}
      </p>
    </div>
  );
}