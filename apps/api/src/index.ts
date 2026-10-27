
import express from "express";

const app = express();
const PORT = Number(process.env.PORT ?? 4000);

app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "recall-dsa-api",
  });
});

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});

