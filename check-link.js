import fs from "fs";
import axios from "axios";

const urls = fs.readFileSync("urls.txt", "utf-8")
  .split("\n")
  .map(u => u.trim())
  .filter(Boolean);

const results = [];

async function checkUrl(url) {
  try {
    const res = await axios.get(url, {
      timeout: 10000,
      validateStatus: () => true
    });
    return res.status;
  } catch (e) {
    return "ERROR";
  }
}

async function run() {
  for (const url of urls) {
    const status = await checkUrl(url);
    console.log(`${url} → ${status}`);
    results.push({ url, status });
  }

  // Export CSV
  const csv = "url,status\n" + results.map(r => `${r.url},${r.status}`).join("\n");
  fs.writeFileSync("resultats.csv", csv);

  console.log("✅ Vérification terminée → resultats.csv");
}

run();