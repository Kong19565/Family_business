import { describe, it, expect } from "vitest";
import { buildMessage, clampGuests, formatDate, isFutureOrToday, suggestBoat, whatsappLink } from "./booking";
import { switchLocalePath } from "./i18n";
import { allDestinations, fleet } from "@/constants/data";
import { boatBySize } from "@/constants/site";
import en from "@/dictionaries/en.json";
import th from "@/dictionaries/th.json";

describe("suggestBoat", () => {
  it("picks the smallest boat that fits", () => {
    expect(suggestBoat(2)?.en).toBe("Eco Electric Boat");
    expect(suggestBoat(7)?.en).toBe("Classic Small Boat");
    expect(suggestBoat(20)?.en).toBe("Grand Longtail Boat");
    expect(suggestBoat(25)?.en).toBe("Express Canal Boat");
  });
  it("returns null above the max", () => {
    expect(suggestBoat(26)).toBeNull();
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
    expect(clampGuests(99)).toBe(26);
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

describe("tour data", () => {
  it("every tour has both languages for the fields we show", () => {
    allDestinations.forEach((t) => {
      expect(t.title.en && t.title.th).toBeTruthy();
      expect(t.details.itinerary.en.length).toBe(t.details.itinerary.th.length);
      expect(t.details.included.en.length).toBe(t.details.included.th.length);
    });
  });
});
