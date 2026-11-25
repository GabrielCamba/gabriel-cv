import { describe, expect, it } from "vitest";
import { cv, site } from "@/content/cv";

describe("CV content", () => {
  it("contains the core identity and sections", () => {
    expect(cv.name).toBe("Gabriel Nicolás González");
    expect(cv.headline).toContain("Technical Customer Support");
    expect(cv.experience.length).toBeGreaterThanOrEqual(5);
    expect(cv.projects.length).toBeGreaterThanOrEqual(4);
    expect(cv.speaking.length).toBeGreaterThanOrEqual(4);
    expect(cv.skills.length).toBeGreaterThanOrEqual(5);
    expect(cv.education.length).toBeGreaterThanOrEqual(2);
  });

  it("uses a valid site URL and email", () => {
    expect(site.url).toMatch(/^https:\/\//);
    expect(cv.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });

  it("does not contain placeholder copy", () => {
    const serialized = JSON.stringify(cv);
    expect(serialized).not.toMatch(/lorem ipsum|placeholder|todo:|tbd/i);
  });

  it("uses secure external links", () => {
    for (const link of cv.links) {
      if (link.url.startsWith("http")) {
        expect(link.url).toMatch(/^https:\/\//);
      }
    }
  });
});
