"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import type { LayerGroup, Map as LeafletMap } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useBooking } from "./BookingProvider";
import { canals, coursePath, nodes, toSvgPath } from "@/lib/schematic";
import type { Locale } from "@/lib/i18n";

export interface CourseMapProps {
  lang: Locale;
  loop: boolean;
  via: string[];
  stops: { id: string; name: string; at: [number, number] }[];
  piers: { id: string; name: string; at: [number, number]; km: number; line: [number, number][] }[];
  text: { title: string; sub: string; start: string; diagram: string; real: string; distance: string; distanceLoop: string; km: string; note: string };
}

const NAVY = "#14304a";
const GOLD = "#c2a063";

function pinHtml(label: string, start: boolean) {
  const bg = start ? GOLD : NAVY;
  return `<span style="display:flex;width:28px;height:28px;align-items:center;justify-content:center;border-radius:50%;background:${bg};color:#fff;font:600 13px sans-serif;border:2px solid #fff;box-shadow:0 1px 4px rgb(0 0 0 / .4)">${label}</span>`;
}

function RealMap({ pier, stops, startLabel }: { pier: CourseMapProps["piers"][number]; stops: CourseMapProps["stops"]; startLabel: string }) {
  const box = useRef<HTMLDivElement>(null);
  const map = useRef<LeafletMap | null>(null);
  const layer = useRef<LayerGroup | null>(null);
  const lib = useRef<typeof import("leaflet") | null>(null);

  const draw = useRef(() => {});
  draw.current = () => {
    const L = lib.current;
    if (!L || !map.current || !layer.current) return;
    layer.current.clearLayers();
    L.polyline(pier.line, { color: "#fff", weight: 8, opacity: 0.9 }).addTo(layer.current);
    const route = L.polyline(pier.line, { color: NAVY, weight: 4 }).addTo(layer.current);
    const pin = (at: [number, number], label: string, name: string, start = false) =>
      L.marker(at, {
        title: name,
        alt: name,
        icon: L.divIcon({ html: pinHtml(label, start), className: "", iconSize: [28, 28], iconAnchor: [14, 14] }),
      })
        .bindTooltip(name, { direction: "top", offset: [0, -14] })
        .addTo(layer.current as LayerGroup);
    pin(pier.at, "S", `${startLabel}: ${pier.name}`, true);
    stops.forEach((s, i) => pin(s.at, String(i + 1), s.name));
    map.current.fitBounds(route.getBounds(), { padding: [34, 34] });
  };

  useEffect(() => {
    let cancelled = false;
    import("leaflet").then((L) => {
      if (cancelled || !box.current || map.current) return;
      lib.current = L;
      map.current = L.map(box.current, {
        scrollWheelZoom: false,
        // On phones one finger keeps scrolling the page instead of being caught by the map.
        dragging: !L.Browser.mobile,
      });
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map.current);
      layer.current = L.layerGroup().addTo(map.current);
      draw.current();
    });
    return () => {
      cancelled = true;
      map.current?.remove();
      map.current = null;
    };
  }, []);

  useEffect(() => {
    draw.current();
  }, [pier]);

  return <div ref={box} className="relative z-0 h-full w-full bg-sand" />;
}

function Diagram({ lang, via, loop, pier, stops, startLabel }: {
  lang: Locale;
  via: string[];
  loop: boolean;
  pier: CourseMapProps["piers"][number];
  stops: CourseMapProps["stops"];
  startLabel: string;
}) {
  const path = toSvgPath(coursePath(pier.id, via, loop));
  const line = (ids: string[]) => toSvgPath(ids);
  // Labels sit on the side of each point with free space.
  const labelSide = (x: number) => (x > 470 ? "end" : "start");
  const labelX = (x: number) => (x > 470 ? x - 22 : x + 22);

  const points = [
    { id: pier.id, name: pier.name, mark: "S", start: true },
    ...stops.map((s, i) => ({ id: s.id, name: s.name, mark: String(i + 1), start: false })),
  ];

  return (
    <svg viewBox="100 20 520 420" className="h-full w-full" role="img" aria-label={points.map((p) => p.name).join(", ")}>
      <rect x="100" y="20" width="520" height="420" fill="#fbf8f2" />
      {canals.map((c) => (
        <path key={c.label.en} d={line(c.points)} fill="none" stroke="#c9dfe6" strokeWidth={c.width} strokeLinecap="round" strokeLinejoin="round" />
      ))}
      {canals.map((c) => (
        <text key={c.label.en} x={c.at[0]} y={c.at[1]} fontSize="12" fill="#55798a" textAnchor={c.anchor ?? "middle"} fontStyle="italic">
          {c.label[lang]}
        </text>
      ))}
      <motion.path
        key={path}
        d={path}
        fill="none"
        stroke={NAVY}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
      />
      {points.map((p) => {
        const [x, y] = nodes[p.id];
        return (
          <g key={p.id}>
            <circle cx={x} cy={y} r="13" fill={p.start ? GOLD : NAVY} stroke="#fff" strokeWidth="2" />
            <text x={x} y={y + 4.5} textAnchor="middle" fontSize="13" fontWeight="600" fill="#fff">
              {p.mark}
            </text>
            <text
              x={labelX(x)}
              y={y - 12}
              textAnchor={labelSide(x)}
              fontSize="14"
              fontWeight="600"
              fill={NAVY}
              stroke="#fbf8f2"
              strokeWidth="4"
              paintOrder="stroke"
            >
              {p.start ? `${startLabel}: ${p.name}` : p.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export default function CourseMap({ lang, loop, via, stops, piers, text }: CourseMapProps) {
  const { pickupId, setPickupId } = useBooking();
  // "Not sure yet" has no pier to draw, so the map keeps showing the first one.
  const pier = piers.find((p) => p.id === pickupId) ?? piers[0];

  return (
    <section aria-labelledby="course-map">
      <h2 id="course-map" className="text-2xl">{text.title}</h2>
      <p className="mt-1 text-muted">{text.sub}</p>

      <fieldset className="mt-5">
        <legend className="mb-2 text-sm font-medium">{text.start}</legend>
        <div className="flex flex-wrap gap-2">
          {piers.map((p) => (
            <label
              key={p.id}
              className={`flex min-h-11 cursor-pointer items-center rounded-full border px-4 text-sm font-medium transition-colors focus-within:outline-2 focus-within:outline-gold ${
                p.id === pier.id ? "border-brand bg-brand text-white" : "border-line bg-white hover:border-gold"
              }`}
            >
              <input type="radio" name="map-pier" value={p.id} checked={p.id === pier.id} onChange={() => setPickupId(p.id)} className="sr-only" />
              {p.name}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <figure className="overflow-hidden rounded-lg border border-line bg-white">
          <figcaption className="border-b border-line px-4 py-2.5 text-sm font-semibold">{text.diagram}</figcaption>
          <div className="aspect-[26/21]">
            <Diagram lang={lang} via={via} loop={loop} pier={pier} stops={stops} startLabel={text.start} />
          </div>
        </figure>
        <figure className="flex flex-col overflow-hidden rounded-lg border border-line bg-white">
          <figcaption className="border-b border-line px-4 py-2.5 text-sm font-semibold">{text.real}</figcaption>
          <div className="aspect-[26/21] lg:flex-1">
            <RealMap pier={pier} stops={stops} startLabel={text.start} />
          </div>
        </figure>
      </div>

      <p className="mt-3 text-sm text-muted">
        {loop ? text.distanceLoop : text.distance} <strong className="font-semibold text-foreground">{pier.km} {text.km}</strong> · {text.note}
      </p>
    </section>
  );
}
