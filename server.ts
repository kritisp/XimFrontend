import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // API Route
  app.post("/api/title/verify", async (req, res) => {
    const { title } = req.body;
    console.log(`Verification request received for: ${title}`);

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    // Artificial delay to simulate processing
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const similarity_score = Number((Math.random() * (0.7 - 0.4) + 0.4).toFixed(3));
    const verification_probability = Math.floor(100 - (similarity_score * 100));
    const status = similarity_score < 0.6 ? "approved" : "rejected";

    res.json({
      submitted_title: title,
      status,
      similarity_score,
      verification_probability,
      phonetic_matches: [],
      semantic_conflicts: [],
      violations: [],
      reason_summary: status === "approved" 
        ? "The submitted title has been found to be in compliance with the Press Registrar General of India (PRGI) guidelines."
        : "The submitted title fails to meet the mandatory requirements for registration due to conflicts with existing archives or guideline violations."
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Static serving for production
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    
    // SPA fallback
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
