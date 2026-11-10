/**
 * Simplified canal diagram, north up, laid out in the same arrangement as the
 * real waterways so the two maps can be compared side by side.
 */
export const nodes: Record<string, [number, number]> = {
  arun: [560, 50],
  kalaya: [560, 105],
  mouth: [560, 135],
  iconsiam: [560, 300],
  intharam: [505, 154],
  "talat-phlu": [445, 175],
  paknam: [345, 175],
  nangchi: [345, 208],
  artist: [195, 75],
  wutthakat: [345, 240],
  maiyainui: [345, 266],
  // Lat Mayom lies north-west, but there is no room up there, so its canal is drawn down the free left side.
  watko: [140, 100],
  orchid: [140, 168],
  ladmayom: [140, 236],
  ratcha: [345, 295],
  fork: [345, 325],
  sai: [150, 325],
  poomjai: [345, 372],
  sw: [150, 402],
  se: [345, 402],
};

/** Where a point's name goes when the default spot would collide with a neighbour. */
export const labelAt: Record<string, { dx: number; dy: number; anchor: "start" | "middle" | "end" }> = {
  intharam: { dx: 0, dy: -22, anchor: "middle" },
  "talat-phlu": { dx: 0, dy: 34, anchor: "middle" },
  nangchi: { dx: -22, dy: 5, anchor: "end" },
  watko: { dx: 22, dy: 5, anchor: "start" },
  orchid: { dx: 22, dy: 5, anchor: "start" },
  ladmayom: { dx: 22, dy: 5, anchor: "start" },
};

const edges: [string, string][] = [
  ["arun", "kalaya"],
  ["kalaya", "mouth"],
  ["mouth", "iconsiam"],
  ["mouth", "intharam"],
  ["intharam", "talat-phlu"],
  ["talat-phlu", "paknam"],
  ["paknam", "artist"],
  ["paknam", "nangchi"],
  ["nangchi", "wutthakat"],
  ["wutthakat", "maiyainui"],
  ["maiyainui", "ratcha"],
  ["artist", "watko"],
  ["watko", "orchid"],
  ["orchid", "ladmayom"],
  ["ratcha", "fork"],
  ["fork", "sai"],
  ["sai", "sw"],
  ["sw", "se"],
  ["se", "poomjai"],
  ["poomjai", "fork"],
];

/** Each waterway drawn as one continuous band. */
export const canals: { points: string[]; width: number; label: { en: string; th: string }; at: [number, number]; anchor?: "start" | "middle" | "end" }[] = [
  { points: ["arun", "kalaya", "mouth", "iconsiam"], width: 26, label: { en: "Chao Phraya River", th: "แม่น้ำเจ้าพระยา" }, at: [540, 278], anchor: "end" },
  { points: ["mouth", "talat-phlu", "paknam", "artist"], width: 13, label: { en: "Khlong Bangkok Yai", th: "คลองบางกอกใหญ่" }, at: [290, 118], anchor: "start" },
  { points: ["paknam", "wutthakat", "ratcha", "fork"], width: 13, label: { en: "Khlong Dan", th: "คลองด่าน" }, at: [360, 292], anchor: "start" },
  { points: ["artist", "watko", "orchid", "ladmayom"], width: 13, label: { en: "To Khlong Lat Mayom", th: "ไปคลองลัดมะยม" }, at: [162, 206], anchor: "start" },
  { points: ["fork", "sai", "sw"], width: 13, label: { en: "Khlong Sanam Chai", th: "คลองสนามชัย" }, at: [250, 350] },
  { points: ["fork", "poomjai", "se"], width: 13, label: { en: "Khlong Bang Khun Thian", th: "คลองบางขุนเทียน" }, at: [360, 398], anchor: "start" },
  { points: ["sw", "se"], width: 13, label: { en: "Khlong Bang Mot", th: "คลองบางมด" }, at: [250, 425] },
];

function neighbours(id: string): string[] {
  return edges.flatMap(([a, b]) => (a === id ? [b] : b === id ? [a] : []));
}

function shortest(from: string, to: string): string[] {
  const prev = new Map<string, string>([[from, from]]);
  const queue = [from];
  while (queue.length) {
    const u = queue.shift() as string;
    if (u === to) break;
    for (const v of neighbours(u)) {
      if (!prev.has(v)) {
        prev.set(v, u);
        queue.push(v);
      }
    }
  }
  if (!prev.has(to)) throw new Error(`No diagram path ${from} -> ${to}`);
  const path = [to];
  while (path[0] !== from) path.unshift(prev.get(path[0]) as string);
  return path;
}

/** Node ids the boat passes through, from the pier via each waypoint. */
export function coursePath(pier: string, waypoints: string[], loop = false): string[] {
  const seq = [pier, ...waypoints, ...(loop ? [pier] : [])];
  const out = [pier];
  for (let i = 0; i < seq.length - 1; i++) out.push(...shortest(seq[i], seq[i + 1]).slice(1));
  return out;
}

export function toSvgPath(ids: string[]): string {
  return ids.map((id, i) => `${i ? "L" : "M"}${nodes[id][0]} ${nodes[id][1]}`).join(" ");
}
