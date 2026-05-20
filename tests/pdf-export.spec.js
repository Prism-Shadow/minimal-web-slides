import { expect, test } from "@playwright/test";
import { mkdir, readFile } from "node:fs/promises";
import path from "node:path";

const PDF_HEADER = "%PDF-";
const PDF_EXPORT_DIR = process.env.PDF_EXPORT_DIR || "pdf-export";
const EXPECTED_FILENAME = "minimal-web-slides-zh.pdf";

test("exports the default deck as a PDF", async ({ page }) => {
  await page.goto("/");

  const exportButton = page.getByRole("button", { name: "Export PDF" });
  await expect(exportButton).toBeEnabled();

  const [download] = await Promise.all([
    page.waitForEvent("download", { timeout: 120_000 }),
    exportButton.click(),
  ]);

  expect(download.suggestedFilename()).toBe(EXPECTED_FILENAME);

  const outputDir = path.resolve(PDF_EXPORT_DIR);
  const outputPath = path.join(outputDir, EXPECTED_FILENAME);
  await mkdir(outputDir, { recursive: true });
  await download.saveAs(outputPath);

  const pdf = await readFile(outputPath);
  expect(pdf.subarray(0, PDF_HEADER.length).toString()).toBe(PDF_HEADER);
  expect(pdf.length).toBeGreaterThan(10_000);
});
