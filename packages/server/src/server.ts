import { SERVER_PORT } from "@util/secrets";
import { Server } from "http";
import "reflect-metadata";
import { createConnection } from "typeorm";

import app from "./app";

export let server: Server;

(async () => {
  try {
    await createConnection();
    server = app.listen(SERVER_PORT, () =>
      console.log(`Server is running in port ${SERVER_PORT}`)
    );
  } catch (e) {
    console.log("Could not connect to database");
    console.log("Could not connect to database");
    console.log("Could not connect to database");
    console.log("Could not connect to database");
    console.log("Could not connect to database");
    console.log("Could not connect to database");
    server = app.listen(SERVER_PORT, () =>
      console.log(`Server is running in port ${SERVER_PORT}`)
    );
  }
})();
