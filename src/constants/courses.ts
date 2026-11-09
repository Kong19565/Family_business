import type { Bilingual } from "@/lib/i18n";

/** Named places, with real coordinates from OpenStreetMap. */
export const places = {
  paknam: { name: { en: "Wat Paknam", th: "วัดปากน้ำ" }, at: [13.72162, 100.47045] },
  poomjai: { name: { en: "Poomjai Garden", th: "ภูมิใจการ์เด้น" }, at: [13.69152, 100.46645] },
  artist: { name: { en: "Artist House", th: "บ้านศิลปิน" }, at: [13.73128, 100.46325] },
  arun: { name: { en: "Wat Arun", th: "วัดอรุณ" }, at: [13.74497, 100.48921] },
  iconsiam: { name: { en: "ICONSIAM", th: "ไอคอนสยาม" }, at: [13.72663, 100.51185] },
  ratcha: { name: { en: "Wat Ratchaorasaram", th: "วัดราชโอรส" }, at: [13.70259, 100.46441] },
  sai: { name: { en: "Wat Sai Market", th: "ตลาดน้ำวัดไทร" }, at: [13.68977, 100.45725] },
} satisfies Record<string, { name: Bilingual; at: [number, number] }>;

export type PlaceId = keyof typeof places;

/** Piers a customer can start from. */
export const mapPiers = {
  "talat-phlu": { at: [13.72244, 100.47712] as [number, number] },
  wutthakat: { at: [13.71302, 100.4689] as [number, number] },
  kalaya: { at: [13.74096, 100.4922] as [number, number] },
};
export type PierId = keyof typeof mapPiers;
export const pierIds = Object.keys(mapPiers) as PierId[];

export interface Course {
  id: string;
  no: number;
  title: Bilingual;
  summary: Bilingual;
  description: Bilingual;
  image: string;
  /** Numbered stops shown on both maps. */
  stops: PlaceId[];
  /** Waypoints for the diagram, when the path passes more than the stops. */
  via?: string[];
  /** True when the boat returns by a different way, so the line closes at the pier. */
  loop?: boolean;
  highlights: Bilingual<string[]>;
  /** Bookable price options, per boat for up to 5 guests. */
  options: { id: string; label?: Bilingual; price: number }[];
}

export const included: Bilingual<string[]> = {
  en: ["Private boat", "Life jacket", "Drinking water"],
  th: ["เรือส่วนตัว", "เสื้อชูชีพ", "น้ำดื่ม"],
};

// Routes and prices follow the owner's BOAT TRIP programme.
export const courses: Course[] = [
  {
    id: "route-1",
    no: 1,
    title: { en: "Poomjai Garden & Wat Paknam", th: "ภูมิใจการ์เด้น - วัดปากน้ำ" },
    summary: { en: "Wat Paknam · Poomjai Garden", th: "วัดปากน้ำ · ภูมิใจการ์เด้น" },
    description: {
      en: "Cruise past the Great Buddha of Wat Paknam and on to the canal-side Poomjai Garden.",
      th: "ล่องเรือชมพระใหญ่วัดปากน้ำ แล้วไปต่อที่ภูมิใจการ์เด้นริมคลอง",
    },
    image: "/images/gallery_3.jpg",
    stops: ["paknam", "poomjai"],
    highlights: {
      en: ["Wat Paknam, cruise past or stop for 30 minutes", "Poomjai Garden"],
      th: ["วัดปากน้ำ ล่องผ่านหรือแวะ 30 นาที", "ภูมิใจการ์เด้น"],
    },
    options: [
      { id: "route-1", label: { en: "no stop", th: "ไม่แวะ" }, price: 1200 },
      { id: "route-1-stop", label: { en: "30-min temple stop", th: "แวะวัด 30 นาที" }, price: 1800 },
    ],
  },
  {
    id: "route-2",
    no: 2,
    title: { en: "Wat Paknam & Artist House", th: "วัดปากน้ำ + บ้านศิลปินคลองบางหลวง" },
    summary: { en: "Wat Paknam · Artist House", th: "วัดปากน้ำ · บ้านศิลปิน" },
    description: {
      en: "Visit the Great Buddha, then the Artist House on Khlong Bang Luang.",
      th: "แวะไหว้พระใหญ่วัดปากน้ำ แล้วเที่ยวบ้านศิลปินคลองบางหลวง",
    },
    image: "/images/Bangluang.jpg",
    stops: ["paknam", "artist"],
    highlights: {
      en: ["Wat Paknam, 20-minute stop", "Artist House at Khlong Bang Luang, 20-minute stop"],
      th: ["แวะวัดปากน้ำ 20 นาที", "แวะบ้านศิลปินคลองบางหลวง 20 นาที"],
    },
    options: [{ id: "route-2", price: 2400 }],
  },
  {
    id: "route-3",
    no: 3,
    title: { en: "Wat Arun & Wat Paknam", th: "วัดอรุณ + วัดปากน้ำ" },
    summary: { en: "Wat Paknam · Wat Arun", th: "วัดปากน้ำ · วัดอรุณ" },
    description: {
      en: "From the canals to the Chao Phraya River: Wat Paknam and Wat Arun in one trip.",
      th: "จากคลองสู่แม่น้ำเจ้าพระยา ชมวัดปากน้ำและวัดอรุณในทริปเดียว",
    },
    image: "/images/Wat_Paknam.jpg",
    stops: ["paknam", "arun"],
    highlights: {
      en: ["Wat Paknam, 30-minute stop", "Wat Arun on the Chao Phraya River"],
      th: ["แวะเที่ยววัดปากน้ำ 30 นาที", "วัดอรุณริมแม่น้ำเจ้าพระยา"],
    },
    options: [{ id: "route-3", price: 2200 }],
  },
  {
    id: "route-4",
    no: 4,
    title: { en: "Wat Arun", th: "วัดอรุณ" },
    summary: { en: "Wat Arun", th: "วัดอรุณ" },
    description: {
      en: "A direct trip along the water to the Temple of Dawn.",
      th: "ล่องเรือตรงสู่วัดอรุณ ริมแม่น้ำเจ้าพระยา",
    },
    image: "/images/Home_pic.jpg",
    stops: ["arun"],
    highlights: { en: ["Wat Arun on the Chao Phraya River"], th: ["วัดอรุณริมแม่น้ำเจ้าพระยา"] },
    options: [{ id: "route-4", price: 1600 }],
  },
  {
    id: "route-5",
    no: 5,
    title: { en: "ICONSIAM", th: "ไอคอนสยาม" },
    summary: { en: "ICONSIAM", th: "ไอคอนสยาม" },
    description: {
      en: "Ride the canals and the Chao Phraya River to ICONSIAM.",
      th: "ล่องคลองและแม่น้ำเจ้าพระยาไปยังไอคอนสยาม",
    },
    image: "/images/Express_Canal_Boat.jpg",
    stops: ["iconsiam"],
    highlights: { en: ["ICONSIAM on the Chao Phraya River"], th: ["ไอคอนสยามริมแม่น้ำเจ้าพระยา"] },
    options: [{ id: "route-5", price: 1600 }],
  },
  {
    id: "route-6",
    no: 6,
    title: { en: "Around Bang Khun Thian Island", th: "เที่ยวรอบเกาะบางขุนเทียน" },
    summary: { en: "Wat Ratchaorasaram · Wat Sai Market", th: "วัดราชโอรส · ตลาดน้ำวัดไทร" },
    description: {
      en: "A loop through the orchard district, with Wat Ratchaorasaram and the old Wat Sai market shops.",
      th: "ล่องรอบย่านชาวสวน แวะวัดราชโอรสและร้านเก่าแก่ย่านตลาดน้ำวัดไทร",
    },
    image: "/images/Wat_Ratchaorasaram.jpg",
    stops: ["ratcha", "sai"],
    via: ["ratcha", "sai", "sw", "se", "poomjai"],
    loop: true,
    highlights: {
      en: [
        "Wat Ratchaorasaram, the temple of King Rama III",
        "Orchard district around Bang Khun Thian Island and Khlong Bang Mot",
        "Antique shop at Phae Suthep",
        "Thin Phaibun, the oldest shop in the Wat Sai floating market area",
      ],
      th: [
        "แวะเที่ยววัดราชโอรส วัดประจำรัชกาลที่ 3",
        "เที่ยวชมย่านชาวสวน รอบเกาะบางขุนเทียน คลองบางมด",
        "แวะชมร้านขายของโบราณที่แพสุเทพ",
        "แวะชมร้านถิ่นไพบูลย์ ร้านเก่าแก่ที่สุดของย่านตลาดน้ำวัดไทร",
      ],
    },
    options: [{ id: "route-6", price: 2400 }],
  },
];
