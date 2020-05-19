import * as request from "supertest";
import { app } from "../server";

// here is a test suite for the purchases router. it makes srue that the appropriate routes return the correct status codes
// technically, these are integration test
// these tests are also not very robust. Note how we would have to add a couple of more tests for each of these
// situations (perhaps some where the user does properly input data)to be confident that the endpoint is fully functional
describe("Testing for /purchases", () => {
  it("GET request to /purchases", async () => {
    const res: any = await request(app).get("/purchases");
    expect(res.statusCode).toEqual(200);
  });
});

// here is an example of a sample test suite that will always pass:
describe("sample test suite", () => {
  it("true === true", () => {
    expect(true).toBe(true);
  });
});