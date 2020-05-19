"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("supertest");
const server_1 = require("../server");
// here is a test suite for the order-item router. it makes srue that the appropriate routes return the correct status codes
// technically, these are integration test
// these tests are also not very robust. Note how we would have to add a couple of more tests for each of these
// situations (perhaps some where the user does properly input data)to be confident that the endpoint is fully functional
describe("Testing for /order-item", () => {
    it("GET request to /order-item", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request(server_1.app).get("/order-item");
        expect(res.statusCode).toEqual(200);
    }));
    it("POST request to /order-item", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request(server_1.app).post("/order-item");
        expect(res.statusCode).toEqual(201);
    }));
    it("PUT request to /order-item", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request(server_1.app).put("/order-item");
        expect(res.statusCode).toEqual(201);
    }));
});
// here is an example of a sample test suite that will always pass:
describe("sample test suite", () => {
    it("true === true", () => {
        expect(true).toBe(true);
    });
});
