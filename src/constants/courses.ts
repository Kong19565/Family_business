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
  intharam: { name: { en: "Wat Intharam", th: "วัดอินทาราม" }, at: [13.72333, 100.48276] },
  nangchi: { name: { en: "Wat Nang Chi", th: "วัดนางชี" }, at: [13.7168, 100.46816] },
} satisfies Record<string, { name: Bilingual; at: [number, number] }>;

export type PlaceId = keyof typeof places;

/** Piers a customer can start from. */
export const mapPiers = {
  "talat-phlu": { at: [13.72244, 100.47712] as [number, number] },
  wutthakat: { at: [13.71302, 100.4689] as [number, number] },
  kalaya: { at: [13.74096, 100.4922] as [number, number] },
  poomjai: { at: [13.69152, 100.46645] as [number, number] },
};
export type PierId = keyof typeof mapPiers;
/** Piers a customer can choose from, unless a course has its own `starts`. */
export const pierIds: PierId[] = ["talat-phlu", "wutthakat", "kalaya"];

export interface Course {
  id: string;
  no: number;
  title: Bilingual;
  summary: Bilingual;
  description: Bilingual;
  image: string;
  /** Fixed starting pier(s); otherwise the customer picks from `pierIds`. */
  starts?: PierId[];
  duration?: Bilingual;
  /** Numbered stops shown on both maps. */
  stops: PlaceId[];
  /** Waypoints for the diagram, when the path passes more than the stops. */
  via?: string[];
  /** True when the boat returns by a different way, so the line closes at the pier. */
  loop?: boolean;
  highlights: Bilingual<string[]>;
  /** Replaces the standard rule of 5 guests, then 100 baht each, up to 10. */
  pricing?: { included: number; extra: number; max: number; label: Bilingual; extraValue: Bilingual; confirm: Bilingual };
  /** Bookable price options, per boat for up to 5 guests. */
  options: { id: string; label?: Bilingual; price: number }[];
}

export const included: Bilingual<string[]> = {
  en: ["Private boat", "Travel accident insurance for all guests", "Life jacket for everyone", "Drinking water"],
  th: ["เรือส่วนตัว", "ประกันอุบัติเหตุในการเดินทางสำหรับลูกค้าทุกท่าน", "เสื้อชูชีพสำหรับทุกคน", "น้ำดื่ม"],
};

// Routes and prices follow the owner's BOAT TRIP programme.
export const courses: Course[] = [
  {
    id: "route-1",
    no: 1,
    title: { en: "Poomjai Garden & Wat Paknam", th: "ภูมิใจการ์เด้น - วัดปากน้ำ" },
    summary: { en: "40 min to 1 hour", th: "40 นาที ถึง 1 ชั่วโมง" },
    duration: { en: "40 min to 1 hour", th: "40 นาที ถึง 1 ชั่วโมง" },
    starts: ["poomjai"],
    description: {
      en: "Board at Poomjai Garden and end at Wat Paknam, or pass the Great Buddha for photos and return to the garden.",
      th: "ขึ้นเรือที่ภูมิใจการ์เด้น แล้วไปส่งจบที่วัดปากน้ำ หรือผ่านถ่ายรูปวัดปากน้ำแล้วกลับมาที่เดิม",
    },
    image: "/images/gallery_3.jpg",
    stops: ["paknam"],
    highlights: {
      en: ["Board at Poomjai Garden", "Along Khlong Bang Khun Thian and Khlong Dan, passing Wat Ratchaorasaram, Wat Nang Nong, Wat Nang, Wat Mai Yai Nui and Wat Nang Chi", "End at Wat Paknam, or pass it for photos and return to Poomjai Garden (about 1 hour)"],
      th: ["ขึ้นเรือที่ภูมิใจการ์เด้น", "ล่องคลองบางขุนเทียนต่อคลองด่าน ผ่านวัดราชโอรสาราม วัดนางนอง วัดหนัง วัดใหม่ยายนุ้ย และวัดนางชี", "ไปส่งจบที่วัดปากน้ำ หรือผ่านถ่ายรูปวัดปากน้ำแล้วกลับที่เดิม (ประมาณ 1 ชั่วโมง)"],
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
    duration: { en: "About 2 hours", th: "ประมาณ 2 ชั่วโมง" },
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
    duration: { en: "About 1 hour 40 minutes", th: "ประมาณ 1 ชั่วโมง 40 นาที" },
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
    duration: { en: "About 1 hour", th: "ประมาณ 1 ชั่วโมง" },
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
    duration: { en: "1 to 1.5 hours (the river lock can cause delays)", th: "1 ชั่วโมง ถึง 1 ชั่วโมง 30 นาที (อาจติดประตูกั้นน้ำ)" },
    description: {
      en: "Ride the canals and the Chao Phraya River to ICONSIAM.",
      th: "ล่องคลองและแม่น้ำเจ้าพระยาไปยังไอคอนสยาม",
    },
    image: "/images/Express_Canal_Boat.jpg",
    stops: ["iconsiam"],
    highlights: { en: ["ICONSIAM on the Chao Phraya River"], th: ["ไอคอนสยามริมแม่น้ำเจ้าพระยา"] },
    options: [{ id: "route-5", price: 2000 }],
  },
  {
    id: "route-6",
    no: 6,
    title: { en: "Around Bang Khun Thian Island", th: "เที่ยวรอบเกาะบางขุนเทียน" },
    summary: { en: "Wat Ratchaorasaram · Wat Sai Market", th: "วัดราชโอรส · ตลาดน้ำวัดไทร" },
    duration: { en: "About 2 hours", th: "ประมาณ 2 ชั่วโมง" },
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
        "Thin Phaibun, the oldest shop in the Wat Sai floating market area, selling vintage goods opposite Wat Sai on Khlong Sanam Chai",
      ],
      th: [
        "แวะเที่ยววัดราชโอรส วัดประจำรัชกาลที่ 3",
        "เที่ยวชมย่านชาวสวน รอบเกาะบางขุนเทียน คลองบางมด",
        "แวะชมร้านขายของโบราณที่แพสุเทพ",
        "แวะชมร้านถิ่นไพบูลย์ ร้านเก่าแก่ที่สุดของย่านตลาดน้ำวัดไทร ขายของใช้โบราณ อยู่ตรงข้ามวัดไทร ริมคลองสนามชัย",
      ],
    },
    options: [{ id: "route-6", price: 2400 }],
  },
  {
    id: "route-7",
    no: 7,
    title: { en: "6-Hour Sai Mu Merit Charter", th: "เหมาทัวร์สายมู 6 ชั่วโมง" },
    summary: { en: "6 hours · 4 temples and markets", th: "6 ชั่วโมง · วัดและตลาดเก่า" },
    duration: { en: "6 hours, starting 8:30 to 9:00", th: "6 ชั่วโมง เริ่ม 8:30 ถึง 9:00 น." },
    description: {
      en: "A full merit-making day of canal temples, local food and a 100-year-old market. We can adjust the route to suit you.",
      th: "ทริปไหว้พระเต็มวัน ล่องคลองแวะวัด ทานอาหาร และเดินตลาดเก่า 100 ปี ปรับเส้นทางได้ตามต้องการ",
    },
    image: "/images/Wat_NakProk.jpg",
    starts: ["talat-phlu", "wutthakat"],
    stops: ["intharam", "paknam", "nangchi", "artist"],
    loop: true,
    pricing: {
      included: 10,
      extra: 400,
      max: 25,
      label: { en: "Price per boat (up to 10)", th: "ราคาต่อลำ (ไม่เกิน 10 คน)" },
      extraValue: { en: "฿400 each above 10", th: "เกิน 10 คน คิดคนละ ฿400" },
      confirm: { en: "Up to 10 guests included, then ฿400 per extra guest. We confirm availability in the chat.", th: "รวม 10 คนแรก คนถัดไปเพิ่มคนละ ฿400 เราจะยืนยันวันว่างในแชท" },
    },
    highlights: {
      en: [
        "Wat Intharam: pay respect to King Taksin, walk Wat Klang Market, and stop at the 100-year-old Suriya coffee shop",
        "Along Khlong Bangkok Yai to Wat Paknam for photos and to pay respect to Luang Pho Sot",
        "Lunch at Luang Chura Cafe",
        "Into Khlong Dan to Wat Nang Chi, a Rama I temple and the only one continuing the Chak Phra tradition",
        "Walk to Wat Nak Prok to pay respect to Luang Pho Chao Sua and pass under the ordination hall",
        "Khlong Bang Luang floating market and Artist House, then the 100-year-old market",
        "Return to the pier. The route can be changed to suit you, or we can recommend one",
      ],
      th: [
        "วัดอินทาราม ไหว้พระเจ้าตากสิน เดินชมตลาดวัดกลาง แวะร้านกาแฟสุริยา 100 ปี",
        "ล่องคลองบางกอกใหญ่ไปวัดปากน้ำภาษีเจริญ ถ่ายรูปจุดเช็คอินและสักการะหลวงพ่อสด",
        "ทานอาหารที่คาเฟ่หลวงชุระ",
        "เข้าคลองด่านไปวัดนางชี วัดของรัชกาลที่ 1 วัดเดียวที่สืบสานประเพณีชักพระ",
        "เดินไปวัดนาคปรก สักการะหลวงพ่อเจ้าสัว และรอดโบสถ์",
        "ตลาดน้ำคลองบางหลวง บ้านศิลปิน พักและเดินชมตลาดเก่า 100 ปี",
        "เดินทางกลับท่าเรือ เส้นทางปรับเปลี่ยนได้ตามที่ลูกค้าต้องการ หรือให้ทางเราแนะนำ",
      ],
    },
    options: [{ id: "route-7", price: 6000 }],
  },
];
