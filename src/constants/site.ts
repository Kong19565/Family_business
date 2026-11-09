import type { Bilingual } from "@/lib/i18n";

export const contact = {
  // Friend link decoded from the account's own QR. 0988289849 is a phone number, not a LINE ID, so `~0988289849` links fail.
  line: { url: "https://line.me/ti/p/Qu9Xw6WnH_", qr: "/images/qr-line.png" },
  whatsapp: { url: "https://wa.me/66988289849", qr: "/images/qr-whatsapp.png" },
  wechat: { id: "0988289849", qr: "/images/qr-wechat.png" },
  phones: [
    { label: "065-446-3694", href: "tel:0654463694" },
    { label: "098-828-9849", href: "tel:0988289849" },
  ],
};

export const pickups: { id: string; name: Bilingual; hint: Bilingual; map?: string; embed?: string }[] = [
  {
    id: "talat-phlu",
    name: { en: "Talat Phlu Pier", th: "ท่าเรือตลาดพลู" },
    hint: { en: "Parking available at the temple", th: "มีที่จอดรถที่วัด" },
    map: "https://www.google.com/maps/search/?api=1&query=Talat+Phlu+Pier+Bangkok",
    embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1937.9665047479211!2d100.47643914312803!3d13.722505579958224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2985bb3ebe235%3A0x9ecaa416911b8c5e!2sTalat%20Phlu%20Pier!5e0!3m2!1sen!2sth!4v1773944993782!5m2!1sen!2sth",
  },
  {
    id: "wutthakat",
    name: { en: "BTS Wutthakat Pier", th: "ท่าเรือ BTS วุฒากาศ" },
    hint: { en: "Exit 5, about 100 m walk", th: "ทางออก 5 เดินประมาณ 100 เมตร" },
    map: "https://www.google.com/maps/search/?api=1&query=Wutthakat+BTS+Station+Bangkok",
    embed:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1938.0426795285837!2d100.4665387!3d13.7132798!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29869ecc03e61%3A0xbda819456cee9c7!2sWutthakat!5e0!3m2!1sen!2sth!4v1773944166958!5m2!1sen!2sth",
  },
  {
    id: "kalaya",
    name: { en: "Wat Kalayanamit", th: "วัดกัลยาณมิตร" },
    hint: { en: "Luang Pho To Pier", th: "ท่าเรือหลวงพ่อโต" },
    map: "https://www.google.com/maps/search/?api=1&query=Wat+Kalayanamit+Bangkok",
    embed: "https://www.google.com/maps?q=Wat+Kalayanamit+Bangkok&z=16&output=embed",
  },
  {
    id: "other",
    name: { en: "Not sure yet", th: "ยังไม่แน่ใจ" },
    hint: { en: "We'll help you choose", th: "เราช่วยแนะนำให้" },
  },
];

/** Smallest boat that fits the group. Names match `fleet` in data.ts. */
export const boatBySize: { max: number; name: Bilingual }[] = [
  { max: 6, name: { en: "Eco Electric Boat", th: "เรือไฟฟ้าอีโก้" } },
  { max: 8, name: { en: "Classic Small Boat", th: "เรือพายไม้ดั้งเดิม" } },
  { max: 12, name: { en: "Vintage Taxi Boat", th: "เรือแท็กซี่วินเทจ" } },
  { max: 20, name: { en: "Grand Longtail Boat", th: "เรือหางยาวแกรนด์" } },
  { max: 25, name: { en: "Express Canal Boat", th: "เรือด่วนพิเศษ" } },
];
export const MAX_GUESTS = 25;

export const heroImage = "/images/gallery_8.jpg";

export const gallery = [
  "/images/gallery_1.jpg",
  "/images/gallery_2.jpg",
  "/images/gallery_3.jpg",
  "/images/gallery_4.jpg",
  "/images/gallery_7.png",
  "/images/Home_pic.jpg",
];
