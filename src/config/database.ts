import { DataSource } from "typeorm";
import { fileURLToPath } from "node:url";
import path from "node:path";

export const database = new DataSource({
  type: "mysql",
  username: "root",
  password: "",
  database: "test",
  logging: true,
  synchronize: true,
  entities: [
    path.resolve(
      fileURLToPath(import.meta.url),
      "..",
      "..",
      "entities",
      "*.entity.ts"
    ),
  ],
});
