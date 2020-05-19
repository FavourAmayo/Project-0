import * as request from "supertest";
import { app } from "../server";

// here is a test suite for the order-item router. it makes srue that the appropriate routes return the correct status codes
// technically, these are integration test
// these tests are also not very robust. Note how we would have to add a couple of more tests for each of these
// situations (perhaps some where the user does properly input data)to be confident that the endpoint is fully functional
describe("Testing for /auth logout", () => {
  it("GET request to /auth", async () => {
    const res: any = await request(app).get("/auth/logout");
    expect(res.statusCode).toEqual(200);
  });
  it("POST request to /auth general login", async () => {
    const res: any = await request(app).post("/auth/login");
    expect(res.statusCode).toEqual(201);
  });
  it("POST request to /auth admin", async () => {
    const res: any = await request(app).put("/auth/admin-login");
    expect(res.statusCode).toEqual(201);
  });
});

// here is an example of a sample test suite that will always pass:
describe("sample test suite", () => {
  it("true === true", () => {
    expect(true).toBe(true);
  });
});
