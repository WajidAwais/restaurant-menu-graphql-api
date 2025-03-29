import express from "express";
import { expressMiddleware } from "@apollo/server/express4";

import { apollo } from "./graphql/apollo.js";

const PORT = 3000;
const app = express();

app.use(express.json());

async function main() {
  await apollo.start();

  app.get("/", (req, res) => res.send("Server is running"));
  app.use("/graphql", expressMiddleware(apollo));

  app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
}

main();
