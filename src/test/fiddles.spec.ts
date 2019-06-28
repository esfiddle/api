/* tslint:disable:only-arrow-functions */
import { assert, expect } from "chai";
import "mocha";
import * as request from "supertest";
import app from "../app";
import Database from "../database";

// Jest testing not recommended: https://mongoosejs.com/docs/jest.html

// TODO: dotenv() for tests
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017";
const MONGO_TEST_DB = process.env.MONGO_TEST_DB || "fiddles_test";
const db = new Database(MONGO_URI, MONGO_TEST_DB);

before (async function() {
  return await db.connect();
});

after (async function() {
  return await db.disconnect();
});

afterEach(async function() {
  return await db.clear();
});

describe("/fiddles/", function() {

  describe("POST", function() {

    const goodFiddleData = {
      _id: "12345",
      fiddle: "omgomgomgomgfiddle",
      name: "fiddle name",
      private: 0,
      stars: [
          { _id: "alsdhkk2j348sfjhlkj"},
          { _id: "alsdhkk2j348sfjh"},
      ],
      value: "omg fiddle value",
    };

    // no _id
    const badFiddleData = {
      fiddle: "omgomgomgomgfiddle",
      name: "fiddle name",
      private: 0,
      stars: [
          { _id: "alsdhkk2j348sfjhlkj"},
          { _id: "alsdhkk2j348sfjh"},
      ],
      value: "omg fiddle value",
    };

    it("valid request -> 200 status", async function() {

      const response = await request(app)
        .post("/fiddles/")
        .send(goodFiddleData);

      return expect(response.status).to.equal(200);
    });

    it("missing _id -> 400 status", async function() {

      try {
        const response = await request(app)
          .post("/fiddles/")
          .send(badFiddleData);
      } catch (err) {
        return expect(err.status).to.equal(400);
      }

      return assert.fail();
    });

  });

  describe("PUT", function() {

    const initialFiddleData = {
      _id: "1",
      fiddle: "fiddle1",
      name: "fiddle name 1",
      private: 1,
      stars: [
          { _id: "star1"},
      ],
      value: "fiddle test value 1",
    };

    before(async function() {

      // add an existing record which we change with PUT
      await request(app)
        .post("/fiddles/")
        .send(initialFiddleData);

      return;
    });

    it("valid request -> 200 status", async function() {

      const newFiddleData = {...initialFiddleData};
      newFiddleData.name = "success!";

      try {
        const response = await request(app)
          .put("/fiddles/")
          .send(newFiddleData);

        expect(response.status).to.equal(200);
        expect(response.body.newFiddle.name).to.equal("success!");

        return assert.ok(true);
      } catch (err) {

        return assert.fail();
      }

    });

    it("invalid _id -> 400 status", async function() {

      const newFiddleData = {...initialFiddleData};
      newFiddleData.name = "success!";
      newFiddleData._id = "not a valid id";

      try {
        const response = await request(app)
          .put("/fiddles/")
          .send(newFiddleData);

        return assert.fail();
      } catch (err) {
        expect(err.status).to.equal(400);

        return assert.ok(true);
      }

    });

  });

});

// describe("POST /fiddles/:fiddleid/star", () => {
//     test("It should gets 200 success return code", () => {
//         return request(app).post("/fiddles/1/star").then((response) => {
//             expect(response.status).toBe(200);
//         });
//     });
// });

// describe("POST /fiddles/:fiddleid/fork", () => {
//     test("It should gets 200 success return code", () => {
//         return request(app).post("/fiddles/1/fork").then((response) => {
//             expect(response.status).toBe(200);
//         });
//     });
// });

// describe("POST /fiddles/:fiddleid/download", () => {
//     test("It should gets 200 success return code", () => {
//         return request(app).post("/fiddles/1/download").then((response) => {
//             expect(response.status).toBe(200);
//         });
//     });
// });

// describe("POST /fiddles/:fiddleid/code-blocks", () => {
//     test("It should gets 200 success return code", () => {
//         return request(app).post("/fiddles/1/code-blocks").then((response) => {
//             expect(response.status).toBe(200);
//         });
//     });
// });

// describe("GET /fiddles/recent", () => {
//     test("It should gets 200 success return code", () => {
//         return request(app).get("/fiddles/recent").then((response) => {
//             expect(response.status).toBe(200);
//         });
//     });
// });

// describe("GET /fiddles/popular", () => {
//     test("It should gets 200 success return code", () => {
//         return request(app).get("/fiddles/popular").then((response) => {
//             expect(response.status).toBe(200);
//         });
//     });
// });
