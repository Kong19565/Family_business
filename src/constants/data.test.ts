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
  it("has the six routes from the programme, with prices", () => {
    expect(courses.map((c) => c.no)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(courses.flatMap((c) => c.options.map((o) => o.price))).toEqual([1200, 1800, 2400, 2200, 1600, 1600, 2400]);
  });

  it("has a real-map line from every pier", () => {
    const geo = routes as unknown as Record<string, Record<string, { km: number; line: unknown[] }>>;
    courses.forEach((c) => pierIds.forEach((p) => expect(geo[c.id][p].line.length).toBeGreaterThan(1)));
  });

  it("has a diagram path from every pier through every stop", () => {
    courses.forEach((c) =>
      pierIds.forEach((p) => {
        const path = coursePath(p, c.via ?? c.stops, c.loop);
        expect(path[0]).toBe(p);
        c.stops.forEach((s) => expect(path).toContain(s));
        c.stops.forEach((s) => expect(places[s].name.th).toBeTruthy());
      }),
    );
  });
});
