"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.post = exports.get = void 0;
const cross_fetch_1 = require("cross-fetch");
const get = (url, bodyArgs) => {
    return new Promise(async (resolve, reject) => {
        let res;
        if (typeof bodyArgs != "undefined") {
            res = await (0, cross_fetch_1.fetch)(url, {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(bodyArgs),
            });
        }
        else {
            res = await (0, cross_fetch_1.fetch)(url, {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            });
        }
        if (res.status == 200)
            resolve(res.json());
        reject(res);
    });
};
exports.get = get;
const post = (url, expectedStatusCode, bodyArgs) => {
    return new Promise(async (resolve, reject) => {
        let res;
        if (typeof bodyArgs != "undefined") {
            res = await (0, cross_fetch_1.fetch)(url, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(bodyArgs),
            });
        }
        else {
            res = await (0, cross_fetch_1.fetch)(url, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            });
        }
        if (res.status == expectedStatusCode)
            resolve(true);
        reject(res);
    });
};
exports.post = post;