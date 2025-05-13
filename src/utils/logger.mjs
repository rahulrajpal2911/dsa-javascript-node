import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { getCPUUsage, getElapsedTime, getMemoryUsage } from "./metrics.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Ensures the directory exists; creates it recursively if not.
 * @param {string} dirPath
 */
function ensureDirExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

/**
 * Loads existing JSON log data or returns an empty array.
 * @param {string} filePath
 * @returns {object}
 */
function loadJSON(filePath) {
  if (!fs.existsSync(filePath)) return {};
  const raw = fs.readFileSync(filePath, "utf-8");
  try {
    const parsed = JSON.parse(raw);
    return typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

/**
 * Saves performance metrics to a JSON file.
 *
 * @param {Object} data
 * @param {string} data.fileName - File name (without `.json`)
 * @param {string} data.sheetName - Logical section (e.g., "traversal")
 * @param {string} data.method - Method name
 * @param {string} data.elapsedTime
 * @param {{ heapUsed: string; heapTotal: string; }} data.memoryUsage
 * @param {{ user: string; system: string; }} data.cpuUsage
 */
function saveToJson({
  fileName,
  sheetName,
  method,
  elapsedTime,
  memoryUsage,
  cpuUsage,
}) {
  const logDir = path.join(__dirname, "../..", "reports");
  const filePath = path.join(logDir, `${fileName}.json`);

  ensureDirExists(logDir);

  const data = loadJSON(filePath);

  if (!data[sheetName]) {
    data[sheetName] = [];
  }

  data[sheetName].push({
    method,
    elapsedTime,
    memoryUsage,
    cpuUsage,
    timestamp: new Date().toISOString(),
  });

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
}

/**
 * Records and logs method performance as JSON.
 *
 * @param {string} fileName
 * @param {string} sheetName
 * @param {string} method
 * @param {Array<number>} startTime
 * @param {NodeJS.MemoryUsage} startMemory
 * @param {NodeJS.CpuUsage} startCPU
 * @returns {Promise<object>}
 */
export async function logRecord(
  fileName,
  sheetName,
  method,
  startTime,
  startMemory,
  startCPU
) {
  const elapsedTime = getElapsedTime(startTime); // ms
  const memoryUsage = getMemoryUsage(startMemory); // MB
  const cpuUsage = getCPUUsage(startCPU); // µs

  saveToJson({
    fileName,
    sheetName,
    method,
    elapsedTime,
    memoryUsage,
    cpuUsage,
  });

  return { elapsedTime, memoryUsage, cpuUsage };
}
