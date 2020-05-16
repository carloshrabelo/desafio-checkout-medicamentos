import http from "http";
import jest from "jest";
import fetch from "isomorphic-fetch";
import listen from "test-listen";
import { apiResolver } from "next/dist/next-server/server/api-utils";
import drugstore from "mock/drugstore";
import drugstores from "mock/drugstores";
import drugstoresF from "mock/drugstore.f.js";

import handler from ".";

jest.mock("isomorphic-fetch");
const _fetch = jest.requireActual("isomorphic-fetch");
let server;
let url;

describe("Integrations tests for PageDetailsService", () => {
  beforeAll(async (done) => {
    server = http.createServer((req, res) =>
      apiResolver(req, res, undefined, handler)
    );
    url = await listen(server);
    done();
  });

  afterAll((done) => {
    server.close(done);
  });

  it("should return the closest drugstore", async () => {
    fetch.mockImplementation((args) => {
      if (args === "undefined/desafio/farmacias")
        return Promise.resolve(new Response(JSON.stringify(drugstores)));
      return Promise.resolve(new Response(JSON.stringify(drugstore)));
    });

    const response = await _fetch(url).then((r) => r.json());

    expect(response).toStrictEqual(drugstoresF);
  });
});
