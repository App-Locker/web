import postgres from "postgres";

import {
  PG_CONNECTION_STRING,
  PG_USER,
  PG_PASSWORD,
} from "$env/static/private";

export const sql = postgres(PG_CONNECTION_STRING, {
  user: PG_USER,
  password: PG_PASSWORD,
});
