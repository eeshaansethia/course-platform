import { env } from "@/data/env/server";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  out: "./src/drizzle/migrations",
  schema: "./src/drizzle/schema.ts",
  verbose: true,
  strict: true,
  dbCredentials: {
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    host: env.DB_HOST,
    ssl: false,
  },
});
