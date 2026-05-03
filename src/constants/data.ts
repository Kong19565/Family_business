export const tourDetails = {
  operatingHours: "08:00 - 18:00 (Custom times available upon request)",
  basePrice: "฿1,500 per hour",
  meetingPoints: [
    { name: "Talat Phlu Pier", detail: "Classic riverside atmosphere" },
    { name: "Wutthakat Pier", detail: "Easy access via BTS Wutthakat" },
  ],
};

export const tours = [
  {
    id: "scenic-canal-1hr",
    title: "1-Hour Scenic Canal Tour",
    duration: "1 Hour",
    price: "฿1,500",
    highlights:
      "Sightseeing, Wat Paknam (Big Buddha) Photo Spot, Khlong Bang Luang Artist House",
    description:
      "Cruising through the local canals, stop for photos at the Big Buddha, and pass by the historic Artist House.",
    startingPoint: "BTS Wutthakat Pier",
    image: "/images/Wat_Paknam.jpg",
  },
  {
    id: "heritage-art-2hr",
    title: "2-Hour Heritage & Art Tour",
    duration: "2 Hours",
    price: "฿3,000",
    highlights:
      "Wat Paknam (20 mins stop), Khlong Bang Luang Artist House (40 mins stop)",
    description:
      "A deep dive into local culture. Includes stops at the Big Buddha and time to walk around the Artist House market.",
    startingPoint: "Talat Phlu or Wutthakat Pier",
    dropOff: "Return to pier or drop-off at MRT/BTS stations",
    image: "/images/Bangluang.jpg",
  },
];

export const allDestinations = [
  {
    id: "scenic-canal-1hr",
    title: "1-Hour Scenic Canal Tour",
    tags: "BIG BUDDHA | ARTIST HOUSE",
    price: "฿1,500",
    duration: "1 Hour",
    image: "/images/Wat_Paknam.jpg",
    description:
      "A perfect introduction to the charms of Phasi Charoen canal. Cruise past local wooden houses and stop for a breathtaking photo with the Great Golden Buddha.",
    details: {
      duration: "60 Minutes",
      startingPoint: "BTS Wutthakat (Exit 5) or Talat Phlu Pier",
      itinerary: [
        "Scenic canal cruise through local communities",
        "Wat Paknam Phasi Charoen (Big Buddha Photo Spot)",
        "Pass by Khlong Bang Luang Artist House",
        "Experience the authentic riverside atmosphere",
      ],
      included: ["Private Boat", "Life Jacket", "Drinking Water", "Insurance"],
    },
  },
  {
    id: "heritage-art-2hr",
    title: "2-Hour Heritage & Art Tour",
    tags: "LOCAL MARKET | CULTURE | ART",
    price: "฿3,000",
    duration: "2 Hours",
    image: "/images/Bangluang.jpg",
    description:
      "A deep dive into canal culture. Includes dedicated stops at the Big Buddha and the historic Artist House market for art and coffee lovers.",
    details: {
      duration: "120 Minutes",
      startingPoint: "BTS Wutthakat (Exit 5) or Talat Phlu Pier",
      itinerary: [
        "Traditional canal cruise along Khlong Bang Luang",
        "20-minute stop at Wat Paknam (Great Buddha)",
        "40-minute stop at Artist House (Baan Silapin)",
        "Fish feeding ritual at Wat Pradu Chimphli",
        "Sightseeing of centuries-old teak wood houses",
      ],
      included: [
        "Private Boat",
        "Life Jacket",
        "Drinking Water",
        "Fish Food",
        "Insurance",
      ],
    },
  },
  {
    id: "temple-cafe-2hr",
    title: "2-Hour Temple & Cafe Tour",
    tags: "WAT KALAYA | BIG BUDDHA | CAFE",
    price: "฿3,500",
    duration: "2 Hours",
    image: "/images/Wat_Kalaya.jpg",
    description:
      "Start from the mouth of the canal at Wat Kalayanamit, visit the Great Buddha, and end your trip at a 100-year-old lychee orchard cafe.",
    details: {
      duration: "120 Minutes",
      startingPoint: "Wat Kalayanamit (Luang Pho To Pier)",
      itinerary: [
        "Board at Wat Kalayanamit (Luang Pho To)",
        "30-minute stop at Wat Paknam Phasi Charoen",
        "30-minute stop at Wat Ratchaorasaram (Thai-Chinese Art)",
        "Final drop off at Poomjai Garden (Hidden canal-side cafe)",
      ],
      included: ["Private Boat", "Life Jacket", "Drinking Water", "Insurance"],
    },
  },
  {
    id: "custom-merit-6hr",
    title: "6-Hour Private Charter (Full Day)",
    tags: "FLEXIBLE | 9 TEMPLES | FAMILY",
    price: "฿6,500",
    duration: "6 Hours",
    image: "/images/Wat_Hong.jpg",
    description:
      "Design your own spiritual journey. Perfect for families (8-10 persons). Visit 3, 5, or 9 sacred temples along the historic Phasi Charoen and Bangkok Yai canals.",
    details: {
      duration: "360 Minutes",
      startingPoint: "Flexible (Talat Phlu / Wutthakat / Wat Kalaya)",
      itinerary: [
        "Customizable route based on your preference",
        "Choice of 12+ historic temples (e.g., Wat Hong, Wat Nak Prok)",
        "Leisurely canal-side lunch break (Self-paid)",
        "Expert boat captain with local heritage knowledge",
      ],
      included: [
        "Private Boat for 6 Hours",
        "Life Jacket",
        "Drinking Water",
        "Fish Food",
        "Insurance",
      ],
    },
  },
  {
    id: "mu-spirit-tour",
    title: "The 'Sai Mu' Spiritual Tour",
    tags: "LUCK | WEALTH | PROTECTION",
    price: "฿4,500",
    duration: "4 Hours",
    image: "/images/Wat_NakProk.jpg",
    description:
      "A specialized tour for those seeking blessings. Visit the most powerful spiritual spots including the Rahu statue and the 300-year-old Naga temple.",
    details: {
      duration: "240 Minutes",
      startingPoint: "BTS Wutthakat (Exit 5)",
      itinerary: [
        "Wat Nak Prok (Crawling under the 300-year-old temple)",
        "Wat Khun Chan (Praying to Giant Rahu)",
        "Wat Paknam (Meditation at the Great Buddha)",
        "Wat Nang Chi (Heritage temple from King Rama I era)",
      ],
      included: [
        "Private Boat",
        "Life Jacket",
        "Drinking Water",
        "Temple Offerings Set",
        "Insurance",
      ],
    },
  },
];

export const fleet = [
  {
    name: "Classic Small Boat",
    image: "/images/Classic_Small_Boat.png",
    capacity: "6-8 Seats",
    description:
      "A charming open-air wooden boat perfect for sightseeing. Experience the natural breeze, ideal for couples or intimate groups of friends.",
  },
  {
    name: "Vintage Taxi Boat",
    image: "/images/Vintage_Taxi_Boat.png",
    capacity: "8-12 Seats",
    description:
      "A classic heritage design with a protective roof and comfortable seating. Perfectly suited for medium-sized families seeking a nostalgic journey.",
  },
  {
    name: "Grand Longtail Boat",
    image: "/images/Grand_Longtail_Boat.jpg",
    capacity: "Up to 20 Seats",
    description:
      "Our spacious signature longtail boat with ample moving space. The premier choice for large family excursions or organized tour groups.",
  },
  {
    name: "Express Canal Boat",
    image: "/images/Express_Canal_Boat.jpg",
    capacity: "20-25 Seats",
    description:
      "An extra-large vessel designed for high capacity and maximum comfort. Features excellent ventilation, perfect for large corporate events or big gatherings.",
  },
  {
    name: "Eco Electric Boat",
    image: "/images/Eco_Electric_Boat.jpg",
    capacity: "4-6 Seats",
    description:
      "A modern, silent, and eco-friendly electric vessel. Ideal for a peaceful and sustainable river experience without engine noise or emissions.",
  },
];

// ข้อมูลสำหรับแผนที่ (ใส่ลิงก์ Embed จาก Google Maps จริง)
export const mapLocations = {
  "talat-phlu": {
    name: "Talat Phlu Pier (Wat Paknam)",
    info: "Parking available at the temple",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1937.9665047479211!2d100.47643914312803!3d13.722505579958224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2985bb3ebe235%3A0x9ecaa416911b8c5e!2sTalat%20Phlu%20Pier!5e0!3m2!1sen!2sth!4v1773944993782!5m2!1sen!2sth", // นำจาก Google Maps > Share > Embed map
  },
  wutthakat: {
    name: "BTS Wutthakat Pier",
    info: "BTS Wutthakat Exit 5 (100m walk)",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1938.0426795285837!2d100.4665387!3d13.7132798!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29869ecc03e61%3A0xbda819456cee9c7!2sWutthakat!5e0!3m2!1sen!2sth!4v1773944166958!5m2!1sen!2sth",
  },
};

