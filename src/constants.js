/* ─────────────────────────────────────────────────────────────
   COLORS  — single source of truth, always use hex
───────────────────────────────────────────────────────────── */
export const COLORS = {
    navyDark:    "#001f5c",
    navy:        "#003087",
    navyLight:   "#0050c8",
    blue:        "#3a7bd5",
    orange:      "#E8500A",
    orangeHover: "#c94208",
    green:       "#1a7a4a",
    gold:        "#FFD700",
    black:       "#0a0a0a",
    white:       "#ffffff",
    gray50:      "#f9fafb",
    gray100:     "#f3f4f6",
    gray200:     "#e5e7eb",
    gray400:     "#9ca3af",
    gray500:     "#6b7280",
    gray700:     "#374151",
    gray800:     "#1f2937",
    gray900:     "#111827",
    gray950:     "#030712",
    bg:         "#edf2fa",
    bg2:        "#ffffff",
  };
  
  /* ─────────────────────────────────────────────────────────────
     DATA
  ───────────────────────────────────────────────────────────── */
  export const NAV_LINKS = [
    "Home", "About", "Administration", "Academics", "Research",
    "Students", "Alumni", "Information Corner", "IQAC", "Gallery", "Contact",
  ];
  
  export const HERO_SLIDES = [
    { label: "Main Campus – Kota, Rajasthan",  bg: "#001f5c" },
    { label: "ALLEN Library & Study Centre",   bg: "#0a3d2e" },
    { label: "Digital Classroom Block",        bg: "#4a1500" },
  ];
  
  export const TICKER_TEXT =
    "Admissions Open 2025–26  ·  Study Hard, Revolutions Inevitable  ·  Limited Seats  ·  New Batch for Class XI Starting June 1  ·  Download ALLEN App for FREE Mock Tests";
  
  export const NEWS_EVENTS = [
    { title: "Annual Fresher Event 2025",          img: "https://placehold.co/300x200/003087/ffffff?text=Fresher+2025" },
    { title: "International Yoga Day Celebration", img: "https://placehold.co/300x200/E8500A/ffffff?text=Yoga+Day" },
    { title: "Annual Fresher Event – Batch B",     img: "https://placehold.co/300x200/1a7a4a/ffffff?text=Fresher+B" },
    { title: "Annual Fresher Event – Batch C",     img: "https://placehold.co/300x200/8B0000/ffffff?text=Fresher+C" },
  ];
  
  export const CAMPUS_TABS = [
    {
      label:   "CAMPUS",
      heading: "Welcome to our campus",
      body:    "ALLEN Career Institute is committed to empowering students with advanced knowledge in Science, Mathematics and Commerce through industry collaboration, research programs, and globally aligned academic curriculum. The institution focuses on developing skilled professionals through mentored training, interdisciplinary research, and international academic partnerships.",
      img:     "https://placehold.co/500x320/003087/ffffff?text=Campus+View",
    },
    {
      label:   "INFRASTRUCTURE",
      heading: "World-Class Infrastructure",
      body:    "ALLEN's campuses feature fully air-conditioned smart classrooms, 50,000+ book libraries, high-speed internet, dedicated doubt-clearing labs, and medical facilities — all designed to eliminate distractions and maximise student potential.",
      img:     "https://placehold.co/500x320/001a4d/ffffff?text=Infrastructure",
    },
    {
      label:   "CAREERS",
      heading: "Career Opportunities",
      body:    "Join a legacy of 35+ years. ALLEN has produced over 1,00,000 selections in JEE & NEET. Our alumni are shaping the future at IITs, AIIMS, and global institutions. We also actively hire passionate educators and staff.",
      img:     "https://placehold.co/500x320/0a3d2e/ffffff?text=Careers",
    },
  ];
  
  export const VISIONARIES = [
    { name: "Shri Rajesh Maheshwari",  role: "Chairman & Founder",     initials: "RM", color: "#003087" },
    { name: "Dr. Naveen Maheshwari",   role: "Managing Director",       initials: "NM", color: "#E8500A" },
    { name: "Shri Anubhav Maheshwari", role: "Director – Operations",   initials: "AM", color: "#1a7a4a" },
  ];
  
  export const LIFE_TILES = [
    { label: "Academic Programmes", icon: "🎓" },
    { label: "Faculty",             icon: "👨‍🏫" },
    { label: "Social Initiatives",  icon: "🤝" },
    { label: "Testimonial",         icon: "💬" },
    { label: "Careers KSP",         icon: "🎯" },
    { label: "Central Facilities",  icon: "🏛️" },
    { label: "Research Highlights", icon: "🔬" },
    { label: "Administration",      icon: "📋" },
  ];
  
  export const PLACEMENTS = [
    { name: "Harendra Gope",      company: "Sun Pharma",    batch: "Placement 2024", initials: "HG" },
    { name: "Nimpi Kumari",       company: "Cipla Ltd.",    batch: "Placement 2024", initials: "NK" },
    { name: "Shreya Chakraborty", company: "Dr. Reddy's",  batch: "Placement 2024", initials: "SC" },
    { name: "Kaushik Kumar Mady", company: "Lupin Limited", batch: "Placement 2024", initials: "KM" },
    { name: "Sonnet Sonner",      company: "Torrent Pharma",batch: "Placement 2024", initials: "SS" },
  ];
  
  export const AFFILIATIONS = [
    { name: "Jharkhand University of Technology", img: "https://placehold.co/80x80/003087/ffffff?text=JUT" },
    { name: "Government of Jharkhand",            img: "https://placehold.co/80x80/E8500A/ffffff?text=GOJ" },
  ];
  
  export const VIDEO_ITEMS = [
    { title: "Campus Building Tour", thumb: "https://placehold.co/320x200/003087/ffffff?text=Campus+Tour",    hasPlay: false },
    { title: "Pharmaq Building",     thumb: "https://placehold.co/320x200/1a7a4a/ffffff?text=Pharmaq+Building", hasPlay: true  },
  ];
  
  export const FOOTER_COLS = [
    {
      title: "Our Offline Locations",
      links: [
        "Kachehri Chowk, Dumdum KOLNEGT",
        "Sitamarhi",
        "Bihar Sharif",
        "Timing: 09:00 AM – 06:30 PM",
        "Email: info.allen@gmail.com",
        "Anti-ragging Helpline: 1800-XXX-XXXX",
      ],
    },
    {
      title: "About ALLEN",
      links: ["About Us", "Vision & Mission", "The Governing Body", "IQAC", "Our Faculty", "Our Administrative Staff", "Privacy Policy"],
    },
    {
      title: "Know More",
      links: ["Programs", "Media Library", "Appointment Letter", "Our Mandate", "Blogs", "Mandatory Disclosure"],
    },
    {
      title: "Important Links",
      links: ["Link to Beneficiaries", "NAAC", "NBA", "NIRF Ranking", "RTI"],
    },
    {
      title: "For You",
      links: ["For Students", "For Researchers", "For Supervisors", "For Citizens", "Engage with Us", "For Press and Media"],
    },
  ];