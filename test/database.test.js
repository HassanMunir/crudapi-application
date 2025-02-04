const pool = require("../db");

describe("Database Tests", () => {
  beforeAll(async () => {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS schools (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        location VARCHAR(100)
      )
    `);
  });

  afterAll(async () => {
    await pool.end();
  });

  it("should connect to the database and create a table", async () => {
    const res = await pool.query(
      "CREATE TABLE IF NOT EXISTS test_table (id SERIAL PRIMARY KEY, name VARCHAR(100))",
    );
    expect(res).toBeTruthy();
  });

  it("should insert and retrieve data from the database", async () => {
    await pool.query("INSERT INTO schools (name, location) VALUES ($1, $2)", [
      "Test School",
      "Test Location",
    ]);
    const res = await pool.query("SELECT * FROM schools WHERE name = $1", [
      "Test School",
    ]);
    expect(res.rows[0].name).toBe("Test School");
  });
});
