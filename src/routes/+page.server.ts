import { sql } from "$lib/server/postgres";

export const load = async (event) => {
  const result = await sql`SELECT * FROM test`;

  const test = result.at(0);

  console.log(test);

  console.log("name", test?.name);
};
