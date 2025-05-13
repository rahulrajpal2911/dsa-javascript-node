import http from "http";
import fs from "fs";
import path from "path";
import url from "url";
import { dsaData } from "./utils/dsa-data.js";
import { fileURLToPath } from "url";

// Get the __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create the HTTP server
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // Serve the index page (organizational chart)
  if (pathname === "/" || pathname === "/index.html") {
    const filePath = path.join(__dirname, "../public", "index.html");
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("Error reading index.html");
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        const injectedHtml = data.replace(
          "<!-- dsaData -->",
          `<script>const dsaData = ${JSON.stringify(dsaData)};</script>`
        );
        res.end(injectedHtml);
      }
    });
  }
  // Serve dynamic traversal page
  else if (pathname.startsWith("/traverse-page")) {
    const topic = parsedUrl.query.topic; // Get the topic (e.g., "Traversal")
    const arrayTopic = dsaData["Arrays"];

    // Check if the topic exists
    if (arrayTopic && arrayTopic[topic]) {
      const pageContent = generateTopicPage(arrayTopic[topic], topic);
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(pageContent);
    } else {
      res.statusCode = 404;
      res.end("Topic not found");
    }
  }
  // Handle all other routes
  else {
    res.statusCode = 404;
    res.end("Page not found");
  }
});

// Start the server
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Function to generate the dynamic content for the traverse-page
function generateTopicPage(topicData, topic) {
  const description = topicData.description;
  const algorithms = topicData.algorithms;

  let algorithmsHtml = algorithms
    .map((algorithm) => {
      return `<button class="algorithm-btn" onclick="startAnalysis('${algorithm}')">${algorithm}</button>`;
    })
    .join("");

  return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Traversal - DSA</title>
            <script>
                function startAnalysis(algorithm) {
                    // Handle starting the analysis for the selected algorithm
                    alert('Selected Algorithm: ' + algorithm);
                }
            </script>
        </head>
        <body>
            <h1>${topic} - Array</h1>
            <p>${description}</p>
            <div class="algorithms">
                ${algorithmsHtml}
            </div>

            <!-- Code editor for JSON input -->
            <textarea id="jsonInput" rows="10" cols="50" placeholder="Paste your JSON array here"></textarea>
            <button onclick="generateReport()">Generate Report</button>

            <script>
                function generateReport() {
                    const jsonArray = JSON.parse(document.getElementById('jsonInput').value);
                    fetch('/generate-report', {
                        method: 'POST',
                        body: JSON.stringify(jsonArray),
                        headers: { 'Content-Type': 'application/json' }
                    })
                    .then(response => response.json())
                    .then(data => {
                        alert('Report generated: ' + JSON.stringify(data, null, 2));
                    });
                }
            </script>
        </body>
        </html>
    `;
}
