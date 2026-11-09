import { describe, it, expect } from "vitest";
import { buildMessage, clampGuests, depositAmount, formatBaht, formatDate, isFutureOrToday, suggestBoat, tripPrice, whatsappLink } from "./booking";
import { switchLocalePath } from "./i18n";
import { fleet } from "@/constants/data";
import { boatBySize } from "@/constants/site";
import en from "@/dictionaries/en.json";
import th from "@/dictionaries/th.json";

describe("suggestBoat", () => {
  it("picks the smallest boat that fits", () => {
    expect(suggestBoat(2)?.en).toBe("Eco Electric Boat");
    expect(suggestBoat(7)?.en).toBe("Classic Small Boat");
    expect(suggestBoat(10)?.en).toBe("Vintage Taxi Boat");
  });
  it("returns null above the max", () => {
    expect(suggestBoat(11)).toBeNull();
  });
  it("only suggests boats that exist in the fleet", () => {
    const names = fleet.map((f) => f.name.en);
    boatBySize.forEach((b) => expect(names).toContain(b.name.en));
  });
});

describe("clampGuests", () => {
  it("keeps values in range", () => {
    expect(clampGuests(0)).toBe(1);
    expect(clampGuests(5)).toBe(5);
    expect(clampGuests(99)).toBe(11);
    expect(clampGuests(NaN)).toBe(2);
  });
});

describe("isFutureOrToday", () => {
  const now = new Date(2026, 10, 5, 15, 0);
  it("accepts today and later", () => {
    expect(isFutureOrToday("2026-11-05", now)).toBe(true);
    expect(isFutureOrToday("2026-12-01", now)).toBe(true);
  });
  it("rejects past and invalid", () => {
    expect(isFutureOrToday("2026-11-04", now)).toBe(false);
    expect(isFutureOrToday("", now)).toBe(false);
  });
});

describe("tripPrice", () => {
  it("includes 5 guests, then adds 100 per guest", () => {
    expect(tripPrice(1600, 1)).toBe(1600);
    expect(tripPrice(1600, 5)).toBe(1600);
    expect(tripPrice(1600, 8)).toBe(1900);
    expect(formatBaht(1900)).toBe("฿1,900");
  });
  it("supports a course with its own rule", () => {
    expect(tripPrice(6000, 10, 10, 400)).toBe(6000);
    expect(tripPrice(6000, 12, 10, 400)).toBe(6800);
    expect(tripPrice(500, 3, 1, 500)).toBe(1500);
  });
});

describe("depositAmount", () => {
  it("is 60% of the boat price", () => {
    expect(depositAmount(2000)).toBe(1200);
    expect(depositAmount(1900)).toBe(1140);
  });
});

describe("formatDate", () => {
  it("writes a readable date in each language", () => {
    expect(formatDate("2026-12-05", "en")).toContain("Dec 2026");
    expect(formatDate("2026-12-05", "th")).toContain("2569");
  });
  it("returns an empty string for bad input", () => {
    expect(formatDate("", "en")).toBe("");
  });
});

describe("buildMessage / whatsappLink", () => {
  const msg = buildMessage({
    labels: en.booking.message,
    tour: "1-Hour Scenic Canal Tour",
    date: "2026-12-01",
    guests: 4,
    pickup: "Talat Phlu Pier",
    name: " Anna ",
    price: "฿1,500",
    boat: "Eco Electric Boat",
  });
  it("includes all details", () => {
    expect(msg).toContain("1-Hour Scenic Canal Tour");
    expect(msg).toContain("2026-12-01");
    expect(msg).toContain("4 (Eco Electric Boat)");
    expect(msg).toContain("Name: Anna");
  });
  it("omits the name line when empty", () => {
    expect(buildMessage({ labels: en.booking.message, tour: "x", date: "d", guests: 1, pickup: "p", price: "p" })).not.toContain("Name:");
  });
  it("url-encodes the WhatsApp text", () => {
    expect(whatsappLink("https://wa.me/1", "a b\nc")).toBe("https://wa.me/1?text=a%20b%0Ac");
  });
});

describe("i18n", () => {
  it("switches the locale prefix", () => {
    expect(switchLocalePath("/en", "th")).toBe("/th");
    expect(switchLocalePath("/en/tours/x", "th")).toBe("/th/tours/x");
  });
  it("EN and TH dictionaries have identical keys", () => {
    const keys = (o: unknown, p = ""): string[] =>
      typeof o === "object" && o !== null
        ? Object.entries(o).flatMap(([k, v]) => keys(v, `${p}${k}.`))
        : [p];
    expect(keys(th).sort()).toEqual(keys(en).sort());
  });
});
