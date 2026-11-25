import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { cv } from "../../content/cv";

test("renders the core CV content", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { level: 1, name: /Gabriel Nicolás González/i }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: /email me/i }),
  ).toHaveAttribute("href", `mailto:${cv.email}`);
  await expect(page.locator("#experience")).toBeVisible();
  await expect(page.locator("#work")).toBeVisible();
  await expect(page.locator("#contact")).toBeVisible();
});

test("switches between dark and light themes", async ({ page }) => {
  await page.goto("/");

  const html = page.locator("html");
  await expect(html).toHaveClass(/dark/);

  await page.getByRole("button", { name: /switch to light theme/i }).click();
  await expect(html).not.toHaveClass(/dark/);

  await page.getByRole("button", { name: /switch to dark theme/i }).click();
  await expect(html).toHaveClass(/dark/);
});

test("exposes a download/print action", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("button", { name: /download cv/i }).first(),
  ).toBeVisible();
});

test("has no serious accessibility violations", async ({ page }) => {
  await page.goto("/");

  const results = await new AxeBuilder({ page }).analyze();
  const seriousViolations = results.violations.filter(
    (violation) =>
      violation.impact === "serious" || violation.impact === "critical",
  );

  expect(seriousViolations).toEqual([]);
});
