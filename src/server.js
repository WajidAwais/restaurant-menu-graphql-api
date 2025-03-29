import express from "express";

const PORT = 3000;
const app = express();

app.use(express.json());

async function main() {
  app.get("/", (req, res) => res.send("Server is running"));

  app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
}

main();
