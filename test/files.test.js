process.env.NODE_ENV = "test";

import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../app.js";

chai.use(chaiHttp);

describe("GET /files/list", () => {
  it("should return an object with files array", (done) => {
    chai
      .request(app)
      .get("/files/list")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.own.property("files");
        expect(res.body.files).to.be.an("array");
        done();
      });
  });
});

describe("GET /files/data", () => {
  it("should return an array", (done) => {
    chai
      .request(app)
      .get("/files/data")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an("array");
        done();
      });
  });
});
