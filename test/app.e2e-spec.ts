import type { INestApplication } from "@nestjs/common";
import { Test, type TestingModule } from "@nestjs/testing";
import * as request from "supertest";
import type { App } from "supertest/types";
import { AppModule } from "../src/server/modules/app.module";

describe("AppController (e2e)", () => {
    let app: INestApplication<App>;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it("/ (GET)", () => {
        return request(app.getHttpServer()).get("/").expect(200).expect("Hello World!");
    });
});
