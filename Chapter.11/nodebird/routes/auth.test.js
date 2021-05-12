const request = require("supertest");
const { sequelize } = require("../models");
const app = require("../app");

beforeAll(async () => {
  await sequelize.sync();
});

describe("POST /login", () => {
  test("로그인 수행", async (done) => {
    request(app)
      .post("/auth/login")
      .send({
        email: "gkstjdwns2273@naver.com",
        password: "dkssud12",
      })
      .expect("Location", "/")
      .expect(302, done);
  });
});
