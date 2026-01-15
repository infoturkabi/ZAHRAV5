// ZAHRA Turkish Ice Cream - Mock Data

export const IMAGES = {
  hero: 'https://customer-assets.emergentagent.com/job_zahra-turkish-ice/artifacts/81an4530_hero.jpg',
  turkishIceCream: 'https://customer-assets.emergentagent.com/job_zahra-turkish-ice/artifacts/ops5zmtb_turkish%20ice%20cream.JPG',
  ownerSerdal: 'https://customer-assets.emergentagent.com/job_zahra-turkish-ice/artifacts/z8c7xlk9_zahra%20owner%20serdal.png',
  owner: 'https://customer-assets.emergentagent.com/job_zahra-turkish-ice/artifacts/ol1c2z8o_zahra%20owner.JPG',
  logo: 'https://customer-assets.emergentagent.com/job_zahra-turkish-ice/artifacts/87sn1l1e_ZAHRATurkishIceCreamlogo.jpg',
  child: 'https://customer-assets.emergentagent.com/job_zahra-turkish-ice/artifacts/1iqzvaxd_child.jpg',
  child2: 'https://customer-assets.emergentagent.com/job_zahra-turkish-ice/artifacts/79c5tver_child2.jpg',
  couple: 'https://customer-assets.emergentagent.com/job_zahra-turkish-ice/artifacts/q1gnk12y_couple.jpg',
  crowd: 'https://customer-assets.emergentagent.com/job_zahra-turkish-ice/artifacts/qhnubmvy_crowd.jpg',
  crowd2: 'https://customer-assets.emergentagent.com/job_zahra-turkish-ice/artifacts/gxfc8476_crowd2.jpg',
};

export const NAV_LINKS = [
  { id: 'experience', label: 'Experience' },
  { id: 'packages', label: 'Packages' },
  { id: 'how-it-works', label: 'How it works' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'videos', label: 'Videos' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
];

export const HERO_DATA = {
  badge: "Jakarta's Original Since 2011",
  title: 'Turkish Ice Cream',
  highlight: 'Showman',
  titleEnd: 'for Your Event',
  description: 'A premium, fun, interactive ice cream performance — served fresh, loved by guests, perfect for weddings, birthdays, corporate events, and malls.',
  ctaPrimary: 'Book on WhatsApp',
  ctaSecondary: 'View Packages',
  trustBadges: ['Jakarta Based', 'PT. Zahra Ranualis Senja', 'Est. 2011', 'Professional Service'],
  tagline: 'We Create Smiles to Be Remembered Forever — with Love, Good Vibes & Positive Energy.',
  stats: [
    { value: '14+', label: 'Years Experience' },
    { value: '5K+', label: 'Events Served' },
    { value: 'WA', label: 'Fast Response' },
  ],
};

export const EXPERIENCE_DATA = {
  tag: 'Why Choose Us',
  title: 'The ZAHRA Experience',
  description: 'More than ice cream — we create laughter, joy, and unforgettable memories through live Turkish performance.',
  features: [
    {
      icon: 'Sparkles',
      title: 'Live Showman Performance',
      description: 'Traditional dondurma tricks, playful moments, and crowd-friendly interactions that delight kids and adults.',
    },
    {
      icon: 'IceCream',
      title: 'Premium Quality Ice Cream',
      description: 'Authentic recipes with rich, elastic texture. Flavors: Chocolate, Vanilla (Sade), Strawberry.',
    },
    {
      icon: 'Building2',
      title: 'Official Company',
      description: 'Operated by PT. Zahra Ranualis Senja — trusted since 2011 for corporate launches, weddings, and celebrations.',
    },
  ],
};

export const PACKAGES_DATA = {
  tag: 'Packages',
  title: 'Our Packages',
  description: 'All packages include a live show, professional showman, and premium Turkish ice cream.',
  packages: [
    {
      name: 'Classic Party',
      price: 'Rp 2.500.000',
      perEvent: '/ event',
      features: [
        '2 scoops • minimum 100 cups',
        'Extra cups: Rp 23.000 / cup',
        'Best for birthdays & family events',
      ],
      featured: false,
    },
    {
      name: 'Royal Event',
      price: 'Rp 3.000.000',
      perEvent: '/ event',
      features: [
        '3 scoops • minimum 100 cups',
        'Extra cups: Rp 28.000 / cup',
        'Best for corporate events & weddings',
      ],
      featured: true,
      badge: 'Most Popular',
    },
    {
      name: 'Charity Event',
      price: 'Rp 3.000.000',
      perEvent: '/ event',
      features: [
        '1 scoop • minimum 200 servings',
        'Extra servings: Rp 15.000 / serving',
        'Best for schools & community events',
      ],
      featured: false,
    },
  ],
  note: 'Setup & transportation fee depends on location. Jakarta starts from Rp 1.500.000. Java & beyond starts from Rp 2.500.000.',
};

export const ADDONS_DATA = {
  tag: 'Add-ons',
  title: 'Cultural Entertainment',
  description: 'Upgrade your event with authentic Turkish cultural performances.',
  addons: [
    {
      icon: 'Users',
      title: 'Extra Showman / Stand',
      price: 'Rp 500.000',
      description: 'for larger events or longer shows.',
    },
    {
      icon: 'CircleDot',
      title: 'Sufi Dancer (Whirling Dervish)',
      price: 'Rp 2.500.000',
      description: 'mesmerizing traditional performance.',
    },
    {
      icon: 'Music',
      title: 'Belly Dancer',
      price: 'Start Rp 2.000.000',
      description: 'exciting entertainment for celebrations.',
    },
  ],
};

export const HOW_IT_WORKS_DATA = {
  tag: 'How it works',
  title: 'How Booking Works',
  description: 'Simple 5-step process via WhatsApp.',
  steps: [
    { number: 1, title: 'Contact Us', description: 'WhatsApp your date, location, and guest count.' },
    { number: 2, title: 'Confirm Details', description: 'We check availability and recommend the best package.' },
    { number: 3, title: 'Invoice Issued', description: 'Official invoice from PT. Zahra Ranualis Senja.' },
    { number: 4, title: 'Payment', description: 'Secure bank transfer.' },
    { number: 5, title: 'Event Day Magic', description: '45-min setup, then an unforgettable show.' },
  ],
};

export const GALLERY_DATA = {
  tag: 'Gallery',
  title: 'See the Fun in Action',
  description: 'Real moments from our events — laughter, joy, and unforgettable memories.',
  items: [
    { title: 'The Showman', subtitle: 'Traditional Performance', image: 'turkishIceCream' },
    { title: 'Corporate Events', subtitle: 'Launches • Teams • VIP', image: 'crowd' },
    { title: 'Birthday Parties', subtitle: 'Kids • Families', image: 'child' },
    { title: 'Mall Activations', subtitle: 'Crowd • Promo', image: 'crowd2' },
    { title: 'Family Fun', subtitle: 'Kids • Smiles', image: 'child2' },
    { title: 'Happy Guests', subtitle: 'Joy • Laughter', image: 'couple' },
  ],
};

export const VIDEOS_DATA = {
  tag: 'Videos',
  title: 'Watch the Magic',
  description: 'See our showman in action — entertaining crowds with traditional Turkish ice cream tricks.',
  videos: [
    {
      id: 'OaIp05232iU',
      title: 'Turkish Magic Ice Cream Jakarta',
      description: 'The magical vendor performance that started it all',
    },
    {
      id: '7Fiaked7yeU',
      title: 'Zahra Turkish Ice Cream Penyajian Unik',
      description: 'Our unique showman-style serving experience',
    },
    {
      id: '-IBPn-nQ5UE',
      title: 'Ice Cream Zahra Turkish',
      description: 'Kids love our playful ice cream tricks',
    },
    {
      id: '-W6Ud3bItho',
      title: 'ZAHRA at Gelato Ice Cream Fest Jakarta 2019',
      description: 'Big Bang Jakarta event performance',
    },
    {
      id: 'jLp664Tt8_o',
      title: 'Es Krim Turki Zahra Rame Pengunjung',
      description: 'Crowds enjoying our Turkish ice cream',
    },
    {
      id: 'ZYPg3xmCnH8',
      title: 'ZAHRA Turkish Ice Cream PRJ',
      description: 'Pekan Raya Jakarta performance',
    },
  ],
};

export const FAQ_DATA = {
  tag: 'FAQ',
  title: 'Frequently Asked Questions',
  description: 'Quick answers to help you book smoothly.',
  questions: [
    {
      question: 'How far in advance should I book?',
      answer: 'As early as possible for weekends. For weekdays, 3–7 days may be enough depending on availability.',
    },
    {
      question: 'What information do you need for a quote?',
      answer: 'Date, location, servings/guest count, service duration, and event type.',
    },
    {
      question: 'Do you provide cups/cones and setup equipment?',
      answer: 'Yes. Details depend on the package and venue requirements.',
    },
    {
      question: 'What do I need to provide at the venue?',
      answer: 'Minimum space 1.5m × 1.5m and electricity 6 Ampere. Setup time is about 45 minutes.',
    },
    {
      question: 'What areas do you serve?',
      answer: 'We are based in Jakarta and can serve Java, Bali, and beyond. Transportation fees apply outside Jakarta.',
    },
    {
      question: 'What flavors do you offer?',
      answer: 'Chocolate, Vanilla (Sade), and Strawberry.',
    },
  ],
};

export const TRUSTED_DATA = {
  tag: 'Trusted',
  title: 'Trusted by Leading Companies (2025)',
  description: 'Brands and partners who trusted ZAHRA for events and activations.',
  corporateClients: [
    'PT Passion Abadi Korpora (Passion Jewelry)',
    'PT. Dunia Luxindo',
    'ASTEKINDO',
    'PT Mega Adreena Jaya (Honda)',
    'ARYADUTA GROUP',
    'EZZ Lezatt Turki',
    'PT Mayora / Torabika (Turkish Coffee Launch)',
    'Neo Bank',
    'PT. Miniso Life Trading',
    "Partyblitz (Event at Minister Yusril Ihza Mahendra's residence)",
  ],
  eventPartners: [
    'Go Market',
    'Big 8 EO',
    'Maxi',
    'MP Project',
    'Java EO',
    'Baltimore',
    'Tempindo',
  ],
};

export const REQUIREMENTS_DATA = {
  tag: 'Requirements',
  title: 'Technical Requirements',
  description: 'Quick checklist for venues and event organizers.',
  items: [
    'Space Needed: 1.5m x 1.5m minimum',
    'Electricity: 6 Ampere',
    'Setup Time: 45 minutes before event',
    'Show Duration: 2–3 hours (flexible)',
    'Operating Hours: 08:00 – 01:00',
  ],
};

export const CONTACT_DATA = {
  tag: 'Contact & Booking',
  title: 'Ready to Book?',
  description: 'Fastest way: WhatsApp message for availability and price.',
  whatsappTemplate: `Hello ZAHRA, I want to book Turkish ice cream showman.

Date:
City:
Address:
Guest count (servings):
Time window:
Event type:`,
  whatsappNumbers: ['0821-1384-2595', '0813-8232-2513'],
  whatsappLinks: ['https://wa.me/6282113842595', 'https://wa.me/6281382322513'],
  email: 'zahra.icecream@gmail.com',
  instagram: '@zahraturkish_icecream',
  instagramLink: 'https://instagram.com/zahraturkish_icecream',
  office: {
    name: 'PT. Zahra Ranualis Senja',
    address: 'Sovereign Plaza, 12th Floor',
    street: 'Jl. TB. Simatupang No.36',
    city: 'Cilandak Barat, Jakarta Selatan 12430',
  },
};

export const FOOTER_DATA = {
  copyright: '© 2026 PT. Zahra Ranualis Senja | Jakarta, Indonesia',
  tagline: 'ZAHRA Turkish Ice Cream — Creating smiles and memories forever',
};
