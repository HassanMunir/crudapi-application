const request = require("supertest");
const app = require("../server");
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
    app.close && app.close();
  });

  it("POST / - should add a school", async () => {
    const res = await request(app)
      .post("/")
      .send({ name: "Test School", location: "Test Location" });
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe("Successfully added child");
  });
});
