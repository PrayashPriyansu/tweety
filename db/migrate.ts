import { db } from "./index";
import { migrate } from "drizzle-orm/neon-http/migrator";

const main = async () => {
  try {
    await migrate(db, {
      migrationsFolder: "db/migrations",
    });
    console.log("Migration Completed");
  } catch (error) {
    console.error("Error during migartion:", error);
    process.exit(1);
  }
};

main();
