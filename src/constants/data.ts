export const tourDetails = {
  en: {
    operatingHours: "08:00 - 18:00 (Custom times available upon request)",
    basePrice: "฿1,500 per hour",
    meetingPoints: [
      { name: "Talat Phlu Pier", detail: "Classic riverside atmosphere" },
      { name: "Wutthakat Pier", detail: "Easy access via BTS Wutthakat" },
    ],
  },
  th: {
    operatingHours: "08:00 - 18:00 (สามารถขอนอกเวลาได้ตามความเหมาะสม)",
    basePrice: "฿1,500 ต่อชั่วโมง",
    meetingPoints: [
      { name: "ท่าเรือตลาดพลู", detail: "บรรยากาศริมน้ำแบบดั้งเดิม" },
      { name: "ท่าเรือวุฒากาศ", detail: "เดินทางสะดวกผ่าน BTS วุฒากาศ" },
    ],
  },
};

export const tours = [
  {
    id: "scenic-canal-1hr",
    title: {
      en: "1-Hour Scenic Canal Tour",
      th: "ทัวร์ชมคลอง 1 ชั่วโมง",
    },
    duration: { en: "1 Hour", th: "1 ชั่วโมง" },
    price: "฿1,500",
    highlights: {
      en: "Sightseeing, Wat Paknam (Big Buddha) Photo Spot, Khlong Bang Luang Artist House",
      th: "ชมวิว, ถ่ายรูปวัดปากน้ำ (หลวงพ่อโต), บ้านศิลปิน คลองบางหลวง",
    },
    description: {
      en: "Cruising through the local canals, stop for photos at the Big Buddha, and pass by the historic Artist House.",
      th: "ล่องเรือชมวิถีชีวิตริมคลอง แวะถ่ายรูปหลวงพ่อโตวัดปากน้ำ และผ่านบ้านศิลปินที่เก่าแก่",
    },
    startingPoint: { en: "BTS Wutthakat Pier", th: "ท่าเรือ BTS วุฒากาศ" },
    image: "/images/Wat_Paknam.jpg",
  },
  {
    id: "heritage-art-2hr",
    title: {
      en: "2-Hour Heritage & Art Tour",
      th: "ทัวร์วัฒนธรรมและศิลปะ 2 ชั่วโมง",
    },
    duration: { en: "2 Hours", th: "2 ชั่วโมง" },
    price: "฿3,000",
    highlights: {
      en: "Wat Paknam (20 mins stop), Khlong Bang Luang Artist House (40 mins stop)",
      th: "แวะวัดปากน้ำ (20 นาที), บ้านศิลปิน คลองบางหลวง (40 นาที)",
    },
    description: {
      en: "A deep dive into local culture. Includes stops at the Big Buddha and time to walk around the Artist House market.",
      th: "สัมผัสวัฒนธรรมท้องถิ่นอย่างลึกซึ้ง รวมการแวะชมหลวงพ่อโตและเดินเล่นตลาดบ้านศิลปิน",
    },
    startingPoint: { en: "Talat Phlu or Wutthakat Pier", th: "ท่าเรือตลาดพลู หรือ วุฒากาศ" },
    dropOff: { en: "Return to pier or drop-off at MRT/BTS stations", th: "กลับท่าเรือเดิม หรือส่งที่สถานี MRT/BTS" },
    image: "/images/Bangluang.jpg",
  },
];

export const allDestinations = [
  {
    id: "scenic-canal-1hr",
    title: { en: "1-Hour Scenic Canal Tour", th: "ทัวร์ชมคลอง 1 ชั่วโมง" },
    tags: "BIG BUDDHA | ARTIST HOUSE",
    price: "฿1,500",
    duration: { en: "1 Hour", th: "1 ชั่วโมง" },
    image: "/images/Wat_Paknam.jpg",
    description: {
      en: "A perfect introduction to the charms of Phasi Charoen canal. Cruise past local wooden houses and stop for a breathtaking photo with the Great Golden Buddha.",
      th: "การเริ่มต้นที่สมบูรณ์แบบเพื่อสัมผัสเสน่ห์คลองภาษีเจริญ ล่องเรือผ่านบ้านไม้ท้องถิ่นและแวะถ่ายรูปที่น่าประทับใจกับหลวงพ่อโต",
    },
    details: {
      duration: { en: "60 Minutes", th: "60 นาที" },
      startingPoint: { en: "BTS Wutthakat (Exit 5) or Talat Phlu Pier", th: "BTS วุฒากาศ (ทางออก 5) หรือ ท่าเรือตลาดพลู" },
      itinerary: {
        en: [
          "Scenic canal cruise through local communities",
          "Wat Paknam Phasi Charoen (Big Buddha Photo Spot)",
          "Pass by Khlong Bang Luang Artist House",
          "Experience the authentic riverside atmosphere",
        ],
        th: [
          "ล่องเรือชมวิวผ่านชุมชนท้องถิ่น",
          "จุดถ่ายรูปวัดปากน้ำภาษีเจริญ (หลวงพ่อโต)",
          "ล่องผ่านบ้านศิลปิน คลองบางหลวง",
          "สัมผัสบรรยากาศริมน้ำที่แท้จริง",
        ],
      },
      included: {
        en: ["Private Boat", "Life Jacket", "Drinking Water", "Insurance"],
        th: ["เรือส่วนตัว", "เสื้อชูชีพ", "น้ำดื่ม", "ประกันภัย"],
      },
    },
  },
  {
    id: "heritage-art-2hr",
    title: { en: "2-Hour Heritage & Art Tour", th: "ทัวร์วัฒนธรรมและศิลปะ 2 ชั่วโมง" },
    tags: "LOCAL MARKET | CULTURE | ART",
    price: "฿3,000",
    duration: { en: "2 Hours", th: "2 ชั่วโมง" },
    image: "/images/Bangluang.jpg",
    description: {
      en: "A deep dive into canal culture. Includes dedicated stops at the Big Buddha and the historic Artist House market for art and coffee lovers.",
      th: "เจาะลึกวัฒนธรรมริมคลอง รวมจุดแวะพิเศษที่หลวงพ่อโตและตลาดบ้านศิลปินสำหรับคนรักศิลปะและกาแฟ",
    },
    details: {
      duration: { en: "120 Minutes", th: "120 นาที" },
      startingPoint: { en: "BTS Wutthakat (Exit 5) or Talat Phlu Pier", th: "BTS วุฒากาศ (ทางออก 5) หรือ ท่าเรือตลาดพลู" },
      itinerary: {
        en: [
          "Traditional canal cruise along Khlong Bang Luang",
          "20-minute stop at Wat Paknam (Great Buddha)",
          "40-minute stop at Artist House (Baan Silapin)",
          "Fish feeding ritual at Wat Pradu Chimphli",
          "Sightseeing of centuries-old teak wood houses",
        ],
        th: [
          "ล่องเรือแบบดั้งเดิมตามคลองบางหลวง",
          "แวะชมวัดปากน้ำ 20 นาที (หลวงพ่อโต)",
          "แวะบ้านศิลปิน 40 นาที (บ้านศิลปิน)",
          "กิจกรรมให้อาหารปลาที่วัดประดู่ฉิมพลี",
          "ชมบ้านไม้สักเก่าแก่อายุนับร้อยปี",
        ],
      },
      included: {
        en: [
          "Private Boat",
          "Life Jacket",
          "Drinking Water",
          "Fish Food",
          "Insurance",
        ],
        th: [
          "เรือส่วนตัว",
          "เสื้อชูชีพ",
          "น้ำดื่ม",
          "อาหารปลา",
          "ประกันภัย",
        ],
      },
    },
  },
  {
    id: "temple-cafe-2hr",
    title: { en: "2-Hour Temple & Cafe Tour", th: "ทัวร์วัดและคาเฟ่ 2 ชั่วโมง" },
    tags: "WAT KALAYA | BIG BUDDHA | CAFE",
    price: "฿3,500",
    duration: { en: "2 Hours", th: "2 ชั่วโมง" },
    image: "/images/Wat_Kalaya.jpg",
    description: {
      en: "Start from the mouth of the canal at Wat Kalayanamit, visit the Great Buddha, and end your trip at a 100-year-old lychee orchard cafe.",
      th: "เริ่มต้นจากปากคลองที่วัดกัลยาณมิตร เยี่ยมชมหลวงพ่อโต และจบทริปที่คาเฟ่ในสวนลิ้นจี่อายุกว่า 100 ปี",
    },
    details: {
      duration: { en: "120 Minutes", th: "120 นาที" },
      startingPoint: { en: "Wat Kalayanamit (Luang Pho To Pier)", th: "วัดกัลยาณมิตร (ท่าเรือหลวงพ่อโต)" },
      itinerary: {
        en: [
          "Board at Wat Kalayanamit (Luang Pho To)",
          "30-minute stop at Wat Paknam Phasi Charoen",
          "30-minute stop at Wat Ratchaorasaram (Thai-Chinese Art)",
          "Final drop off at Poomjai Garden (Hidden canal-side cafe)",
        ],
        th: [
          "ขึ้นเรือที่วัดกัลยาณมิตร (หลวงพ่อโต)",
          "แวะชมวัดปากน้ำภาษีเจริญ 30 นาที",
          "แวะชมวัดราชโอรสาราม (ศิลปะไทย-จีน) 30 นาที",
          "ส่งที่ภูมิใจการ์เด้น (คาเฟ่ลับริมคลอง)",
        ],
      },
      included: {
        en: ["Private Boat", "Life Jacket", "Drinking Water", "Insurance"],
        th: ["เรือส่วนตัว", "เสื้อชูชีพ", "น้ำดื่ม", "ประกันภัย"],
      },
    },
  },
  {
    id: "custom-merit-6hr",
    title: { en: "6-Hour Private Charter (Full Day)", th: "เหมาเรือส่วนตัว 6 ชั่วโมง (เต็มวัน)" },
    tags: "FLEXIBLE | 9 TEMPLES | FAMILY",
    price: "฿6,500",
    duration: { en: "6 Hours", th: "6 ชั่วโมง" },
    image: "/images/Wat_Hong.jpg",
    description: {
      en: "Design your own spiritual journey. Perfect for families (8-10 persons). Visit 3, 5, or 9 sacred temples along the historic Phasi Charoen and Bangkok Yai canals.",
      th: "ออกแบบเส้นทางแสวงบุญของคุณเอง เหมาะสำหรับครอบครัว (8-10 ท่าน) ไหว้พระ 3, 5 หรือ 9 วัดตามคลองภาษีเจริญและคลองบางกอกใหญ่",
    },
    details: {
      duration: { en: "360 Minutes", th: "360 นาที" },
      startingPoint: { en: "Flexible (Talat Phlu / Wutthakat / Wat Kalaya)", th: "ยืดหยุ่น (ตลาดพลู / วุฒากาศ / วัดกัลยาฯ)" },
      itinerary: {
        en: [
          "Customizable route based on your preference",
          "Choice of 12+ historic temples (e.g., Wat Hong, Wat Nak Prok)",
          "Leisurely canal-side lunch break (Self-paid)",
          "Expert boat captain with local heritage knowledge",
        ],
        th: [
          "ปรับเปลี่ยนเส้นทางได้ตามความต้องการ",
          "เลือกจากวัดเก่าแก่กว่า 12 แห่ง (เช่น วัดหงส์, วัดนาคปรก)",
          "พักรับประทานอาหารกลางวันริมคลอง (ชำระเอง)",
          "กัปตันเรือผู้เชี่ยวชาญพร้อมความรู้ด้านมรดกท้องถิ่น",
        ],
      },
      included: {
        en: [
          "Private Boat for 6 Hours",
          "Life Jacket",
          "Drinking Water",
          "Fish Food",
          "Insurance",
        ],
        th: [
          "เรือส่วนตัว 6 ชั่วโมง",
          "เสื้อชูชีพ",
          "น้ำดื่ม",
          "อาหารปล",
          "ประกันภัย",
        ],
      },
    },
  },
  {
    id: "mu-spirit-tour",
    title: { en: "The 'Sai Mu' Spiritual Tour", th: "ทัวร์สายมู เสริมสิริมงคล" },
    tags: "LUCK | WEALTH | PROTECTION",
    price: "฿4,500",
    duration: { en: "4 Hours", th: "4 ชั่วโมง" },
    image: "/images/Wat_NakProk.jpg",
    description: {
      en: "A specialized tour for those seeking blessings. Visit the most powerful spiritual spots including the Rahu statue and the 300-year-old Naga temple.",
      th: "ทัวร์พิเศษสำหรับผู้แสวงหาพร เยี่ยมชมจุดศักดิ์สิทธิ์ที่ทรงพลัง รวมถึงรูปปั้นราหูและวัดพญานาคอายุกว่า 300 ปี",
    },
    details: {
      duration: { en: "240 Minutes", th: "240 นาที" },
      startingPoint: { en: "BTS Wutthakat (Exit 5)", th: "BTS วุฒากาศ (ทางออก 5)" },
      itinerary: {
        en: [
          "Wat Nak Prok (Crawling under the 300-year-old temple)",
          "Wat Khun Chan (Praying to Giant Rahu)",
          "Wat Paknam (Meditation at the Great Buddha)",
          "Wat Nang Chi (Heritage temple from King Rama I era)",
        ],
        th: [
          "วัดนาคปรก (ลอดใต้โบสถ์เก่าแก่อายุ 300 ปี)",
          "วัดขุนจันทร์ (ไหว้พระราหูองค์ใหญ่)",
          "วัดปากน้ำ (นั่งสมาธิหน้าหลวงพ่อโต)",
          "วัดนางชี (วัดมรดกตั้งแต่สมัยรัชกาลที่ 1)",
        ],
      },
      included: {
        en: [
          "Private Boat",
          "Life Jacket",
          "Drinking Water",
          "Temple Offerings Set",
          "Insurance",
        ],
        th: [
          "เรือส่วนตัว",
          "เสื้อชูชีพ",
          "น้ำดื่ม",
          "ชุดเครื่องสักการะ",
          "ประกันภัย",
        ],
      },
    },
  },
];

export const fleet = [
  {
    name: { en: "Classic Small Boat", th: "เรือพายไม้ดั้งเดิม" },
    image: "/images/Classic_Small_Boat.png",
    capacity: { en: "6-8 Seats", th: "6-8 ที่นั่ง" },
    description: {
      en: "A charming open-air wooden boat perfect for sightseeing. Experience the natural breeze, ideal for couples or intimate groups of friends.",
      th: "เรือไม้เปิดประทุนที่มีเสน่ห์เหมาะสำหรับการชมวิว สัมผัสสายลมธรรมชาติ เหมาะสำหรับคู่รักหรือกลุ่มเพื่อนฝูง",
    },
  },
  {
    name: { en: "Vintage Taxi Boat", th: "เรือแท็กซี่วินเทจ" },
    image: "/images/Vintage_Taxi_Boat.png",
    capacity: { en: "8-12 Seats", th: "8-12 ที่นั่ง" },
    description: {
      en: "A classic heritage design with a protective roof and comfortable seating. Perfectly suited for medium-sized families seeking a nostalgic journey.",
      th: "ดีไซน์คลาสสิกพร้อมหลังคากันแดดและที่นั่งสะดวกสบาย เหมาะอย่างยิ่งสำหรับครอบครัวขนาดกลางที่ต้องการการเดินทางย้อนยุค",
    },
  },
  {
    name: { en: "Grand Longtail Boat", th: "เรือหางยาวแกรนด์" },
    image: "/images/Grand_Longtail_Boat.jpg",
    capacity: { en: "Up to 20 Seats", th: "สูงสุด 20 ที่นั่ง" },
    description: {
      en: "Our spacious signature longtail boat with ample moving space. The premier choice for large family excursions or organized tour groups.",
      th: "เรือหางยาวเอกลักษณ์ของเราที่มีพื้นที่กว้างขวาง เป็นตัวเลือกอันดับหนึ่งสำหรับการท่องเที่ยวครอบครัวใหญ่หรือกลุ่มทัวร์",
    },
  },
  {
    name: { en: "Express Canal Boat", th: "เรือด่วนพิเศษ" },
    image: "/images/Express_Canal_Boat.jpg",
    capacity: { en: "20-25 Seats", th: "20-25 ที่นั่ง" },
    description: {
      en: "An extra-large vessel designed for high capacity and maximum comfort. Features excellent ventilation, perfect for large corporate events or big gatherings.",
      th: "เรือขนาดใหญ่พิเศษที่ออกแบบมาเพื่อรองรับคนจำนวนมากและความสะดวกสบายสูงสุด ระบายอากาศได้ดีเยี่ยม เหมาะสำหรับงานองค์กรหรืองานสังสรรค์ขนาดใหญ่",
    },
  },
  {
    name: { en: "Eco Electric Boat", th: "เรือไฟฟ้าอีโก้" },
    image: "/images/Eco_Electric_Boat.jpg",
    capacity: { en: "4-6 Seats", th: "4-6 ที่นั่ง" },
    description: {
      en: "A modern, silent, and eco-friendly electric vessel. Ideal for a peaceful and sustainable river experience without engine noise or emissions.",
      th: "เรือไฟฟ้าที่ทันสมัย เงียบ และเป็นมิตรกับสิ่งแวดล้อม เหมาะสำหรับประสบการณ์ริมน้ำที่สงบและยั่งยืน โดยไม่มีเสียงรบกวนจากเครื่องยนต์หรือการปล่อยมลพิษ",
    },
  },
];

export const mapLocations = {
  "talat-phlu": {
    name: { en: "Talat Phlu Pier (Wat Paknam)", th: "ท่าเรือตลาดพลู (วัดปากน้ำ)" },
    info: { en: "Parking available at the temple", th: "มีที่จอดรถให้บริการที่วัด" },
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1937.9665047479211!2d100.47643914312803!3d13.722505579958224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2985bb3ebe235%3A0x9ecaa416911b8c5e!2sTalat%20Phlu%20Pier!5e0!3m2!1sen!2sth!4v1773944993782!5m2!1sen!2sth",
  },
  wutthakat: {
    name: { en: "BTS Wutthakat Pier", th: "ท่าเรือ BTS วุฒากาศ" },
    info: { en: "BTS Wutthakat Exit 5 (100m walk)", th: "BTS วุฒากาศ ทางออก 5 (เดิน 100 เมตร)" },
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1938.0426795285837!2d100.4665387!3d13.7132798!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29869ecc03e61%3A0xbda819456cee9c7!2sWutthakat!5e0!3m2!1sen!2sth!4v1773944166958!5m2!1sen!2sth",
  },
};
