import { describe, it, expect } from "vitest";
import { fleet } from "./data";
import { courses, pierIds, places } from "./courses";
import routes from "./routes.geo.json";
import { coursePath } from "@/lib/schematic";

describe("fleet", () => {
  it("lists boats with capacity", () => {
    expect(fleet.length).toBeGreaterThan(0);
    expect(fleet[0]).toHaveProperty("capacity");
  });
});

describe("courses", () => {
  it("has the join tour and eight routes with their prices", () => {
    expect(courses.map((c) => c.no)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    expect(courses.flatMap((c) => c.options.map((o) => o.price))).toEqual([500, 1200, 1800, 2400, 2200, 1600, 2000, 2400, 6000, 5000]);
  });

  it("has a real-map line from every pier", () => {
    const geo = routes as unknown as Record<string, Record<string, { km: number; line: unknown[] }>>;
    courses.forEach((c) => (c.starts ?? pierIds).forEach((p) => expect(geo[c.id][p].line.length).toBeGreaterThan(1)));
  });

  it("has a diagram path from every pier through every stop", () => {
    courses.forEach((c) =>
      (c.starts ?? pierIds).forEach((p) => {
        const path = coursePath(p, c.via ?? c.stops, c.loop);
        expect(path[0]).toBe(p);
        c.stops.forEach((s) => expect(path).toContain(s));
        c.stops.forEach((s) => expect(places[s].name.th).toBeTruthy());
      }),
    );
  });
});
