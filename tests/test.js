/* Copyright G. Hemingway, @2018 */
"use strict";

const envConfig = require("../index"),
    testConfig = require("./config.json");


describe("env-config", () => {

    it("Success - default env - does nothing", async () => {
        const config = await envConfig("./tests/config.json");
        // TODO: Check that it is the expected config
    });

    it("Success - 'test' env", async () => {
        let config = await envConfig("./tests/config.json", "test");
        // TODO: Check that it is the expected config
    });

    it("Success - 'production' env", async () => {
        let config = await envConfig("./tests/config.json", "production");
        console.log(config);
        // TODO: Check that it is the expected config
    });

    it("Failure - config file does not exist", async () => {
        try {
            await envConfig("./not-a-config.json");
        } catch(err) {
            // TODO: Check that it is the expected error
            return err;
        }
    });

    it("Alternate flag", async () => {});
});
