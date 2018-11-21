import "jest";
import * as request from "supertest";
import app from "../app";
import { fiddleRoutes } from "../routes/fiddleRoutes";

app.use("/fiddles", fiddleRoutes);

describe("POST /fiddles/", () => {
    test("It should gets 200 success return code", () => {
        return request(app).post("/fiddles/").then((response) => {
            expect(response.status).toBe(200);
        });
    });
});

describe("PUT /fiddles/:fiddleid", () => {
    test("It should gets 200 success return code", () => {
        return request(app).put("/fiddles/1").then((response) => {
            expect(response.status).toBe(200);
        });
    });
});

describe("POST /fiddles/:fiddleid/star", () => {
    test("It should gets 200 success return code", () => {
        return request(app).post("/fiddles/1/star").then((response) => {
            expect(response.status).toBe(200);
        });
    });
});

describe("POST /fiddles/:fiddleid/fork", () => {
    test("It should gets 200 success return code", () => {
        return request(app).post("/fiddles/1/fork").then((response) => {
            expect(response.status).toBe(200);
        });
    });
});

describe("POST /fiddles/:fiddleid/download", () => {
    test("It should gets 200 success return code", () => {
        return request(app).post("/fiddles/1/download").then((response) => {
            expect(response.status).toBe(200);
        });
    });
});

describe("POST /fiddles/:fiddleid/code-blocks", () => {
    test("It should gets 200 success return code", () => {
        return request(app).post("/fiddles/1/code-blocks").then((response) => {
            expect(response.status).toBe(200);
        });
    });
});

describe("GET /fiddles/recent", () => {
    test("It should gets 200 success return code", () => {
        return request(app).get("/fiddles/recent").then((response) => {
            expect(response.status).toBe(200);
        });
    });
});

describe("GET /fiddles/popular", () => {
    test("It should gets 200 success return code", () => {
        return request(app).get("/fiddles/popular").then((response) => {
            expect(response.status).toBe(200);
        });
    });
});
