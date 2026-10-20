export const BRAND = {
  name: "HIO Hair Studio",
  tagline: "Quiet Luxury & Editorial Hair Artistry",
  bookingUrl: "https://www.facebook.com/profile.php?id=61580346459730", // Facebook booking link
  phone: "+84 (0) 90 123 4567",
  email: "concierge@hiohairstudio.com",
  address: {
    street: "55/28 Le Thi Hong Gam, Ben Thanh Ward",
    city: "District 1, Ho Chi Minh City",
    country: "Vietnam"
  },
  hours: [
    { days: "Tuesday – Friday", hours: "09:30 AM – 07:30 PM" },
    { days: "Saturday – Sunday", hours: "09:00 AM – 08:00 PM" },
    { days: "Monday", hours: "Reserved for Private Masterclasses & Rest" }
  ],
  socials: [
    { name: "Instagram", url: "https://instagram.com", handle: "@hio.hairstudio" },
    { name: "Pinterest", url: "https://pinterest.com", handle: "Hio Hair Aesthetic" },
    { name: "TikTok", url: "https://tiktok.com", handle: "@hiohairstudio" }
  ]
};

export const SERVICES = [
  {
    id: "bespoke-color",
    category: "Couture Color",
    title: "Signature Balayage & French Gloss",
    duration: "180 - 240 mins",
    description: "Multi-dimensional, lived-in hand-painted balayage harmonized with subtle root smudging and ultra-conditioning French gloss finish.",
    details: ["Consultation & Color Theory Analysis", "Bond-Protection Plex Infusion", "Custom Glaze & Scalp Conditioning Ritual"]
  },
  {
    id: "precision-cut",
    category: "Architectural Cut",
    title: "Editorial Sculpting & Blowout",
    duration: "75 - 90 mins",
    description: "Fluid, effortless shapes tailored to individual bone structure, natural texture, and lifestyle movement.",
    details: ["Hair Texture Diagnostic", "Signature Botanical Wash & Pressure-point Massage", "Bespoke Styling & Texture Direction"]
  },
  {
    id: "scalp-ritual",
    category: "Holistic Care",
    title: "Head Spa & Caviar Hair Therapy",
    duration: "90 mins",
    description: "Deep micro-circulation scalp exfoliation combined with bespoke caviar and phytotherapy infusions for luminous vitality.",
    details: ["Micro-camera Scalp Diagnostic", "Aromatherapeutic Lymphatic Drainage", "Cryo-infusion & Steam Hydration"]
  },
  {
    id: "ceremonial-styling",
    category: "Occasion & Editorial",
    title: "Red Carpet & Bridal Curation",
    duration: "120 mins",
    description: "Exquisite architectural waves, understated chignons, and editorial silhouettes designed for your most unforgettable moments.",
    details: ["Moodboard Consultation & Veil Fitting", "Long-lasting Texture Architecture", "Emergency Touch-up Kit Included"]
  }
];

/*
  LOOKBOOK IMAGES & VIDEOS:
  - Hàng 1 (3 items):
    1. Video 4 (/services/haircut_4.mp4) - Hiện đầu tiên
    2. haircut_5.jpg
    3. haircut_6.jpg
  - Hàng 2 (3 items):
    4. haircut_8.jpg
    5. haircut_9.jpg
    6. Video 7 (/services/haircut_7.mp4) - Hiện thứ ba của hàng 2 (vị trí số 6)
*/
export const LOOKBOOK_IMAGES = [
  // HÀNG 1:
  {
    url: "/services/haircut_4.mp4",
    type: "video",
    tag: "Haircut & Styling"
  },
  {
    url: "/services/haircut_5.jpg",
    type: "image",
    tag: "Haircut & Styling"
  },
  {
    url: "/services/haircut_6.jpg",
    type: "image",
    tag: "Haircut & Styling"
  },

  // HÀNG 2:
  {
    url: "/services/haircut_8.jpg",
    type: "image",
    tag: "Haircut & Styling"
  },
  {
    url: "/services/haircut_9.jpg",
    type: "image",
    tag: "Haircut & Styling"
  },
  {
    url: "/services/haircut_7.mp4",
    type: "video",
    tag: "Haircut & Styling"
  }
];

export const STUDIO_FEATURES = [
  {
    title: "Sensory Serenity",
    description: "Acoustically dampened private styling stations surrounded by natural limestone, warm travertine, and filtered ambient light."
  },
  {
    title: "Clean Formulations",
    description: "Curated with ammonia-free Italian color lines, biodynamic botanicals, and pharmaceutical-grade hair nourishment."
  },
  {
    title: "Bespoke Consultation",
    description: "Every appointment commences with a 15-minute diagnostic dialogue considering facial symmetry, posture, and hair vitality."
  }
];

export const STYLISTS = [
  {
    name: "Alexandre Hio",
    role: "Creative Director & Master Colorist",
    bio: "Over 14 years shaping editorial campaigns in Paris & Tokyo, renowned for invisible seamless balayage.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Elena Tran",
    role: "Lead Sculptor & Texture Specialist",
    bio: "Sassoon-trained precision artisan with an intuitive instinct for lived-in movement and framing silhouettes.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Minh Le",
    role: "Senior Colorist & Scalp Alchemist",
    bio: "Specializing in Japanese holistic head spa therapy, custom gloss transitions, and restorative hair wellness.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "Hio is not merely a salon visit; it is an unhurried ritual of elegance. The balayage grew out seamlessly across four months with zero harsh demarcation.",
    author: "Camille Dang",
    role: "Editorial Stylist",
    treatment: "Signature Balayage & French Gloss"
  },
  {
    id: 2,
    quote: "The scalp spa and haircut completely transformed my hair health. The salon's atmosphere is calm, fragrant, and exquisitely private.",
    author: "Sophie Vu",
    role: "Architectural Designer",
    treatment: "Editorial Sculpting & Caviar Therapy"
  },
  {
    id: 3,
    quote: "Understated luxury at its finest. No chaotic noise, no rushed appointments—just true craftsmen dedicated to their art.",
    author: "Grace Luu",
    role: "Creative Director",
    treatment: "Bespoke Cut & Gloss"
  },
  {
    id: 4,
    quote: "Every layer falls naturally into place without any blow-drying struggle. Alexandre and his team understand Asian bone structure deeply.",
    author: "Elena Tran",
    role: "Fashion Curator",
    treatment: "Architectural Butterfly Layer"
  },
  {
    id: 5,
    quote: "A transformative sensory experience. The private suite and personalized consultation exceeded every luxury standard in Saigon.",
    author: "Victoria Nguyen",
    role: "Hospitality Executive",
    treatment: "Head Spa & Couture Gloss"
  }
];
