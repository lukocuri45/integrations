"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const ava_1 = require("ava");
const parser_1 = require("../core/parser");
const broidMessage = require("./fixtures/broid/message.json");
const broidMessageInteractiveCallback = require("./fixtures/broid/messageInteractiveCallback.json");
const broidMessageLocation = require("./fixtures/broid/messageLocation.json");
const broidMessageNormalized = require("./fixtures/broid/messageNormalized.json");
const broidMessageNormalizedInteractiveCallback = require("./fixtures/broid/messageNormalizedInteractiveCallback.json");
const broidMessageNormalizedLocation = require("./fixtures/broid/messageNormalizedLocation.json");
const broidMessageNormalizedWithMedia = require("./fixtures/broid/messageNormalizedWithMedia.json");
const broidMessageWithMedia = require("./fixtures/broid/messageWithMedia.json");
const viberMessage = require("./fixtures/viber/message.json");
const viberMessageInteractiveCallback = require("./fixtures/viber/messageInteractiveCallback.json");
const viberMessageLocation = require("./fixtures/viber/messageLocation.json");
const viberMessageWithMedia = require("./fixtures/viber/messageWithMedia.json");
const targetMe = {
    _isMe: true,
    category: "Companies, Brands & Products",
    country: "CA",
    event_types: [
        "subscribed",
        "unsubscribed",
        "conversation_started",
        "delivered",
        "message",
        "seen",
    ],
    icon: "https://media-direct.cdn.viber.com/pg_download?pgtp=icons&dlid=0-04-01-f6683bfa60198d661e0ed02c81065b7825b069a0c5c3aaae106248292653f704&fltp=jpg&imsz=0000",
    id: "pa:4995190299521361547",
    location: {
        lat: 45.5308397,
        lon: -73.5538878,
    },
    members: [
        {
            id: "8GBW4nlCwfAk8SQm3zmcAA==",
            name: "Killix",
            role: "admin",
        },
    ],
    name: "Killix",
    status: 0,
    status_message: "ok",
    subcategory: "Apps & Utilities",
    subscribers_count: 1,
    uri: "killix",
    webhook: "https://09566bf5.ngrok.io/",
};
let parser;
ava_1.default.before(() => {
    parser = new parser_1.default("test_service", "info");
});
ava_1.default("Parse null", (t) => __awaiter(this, void 0, void 0, function* () {
    const data = parser.parse(null);
    t.is(yield data, null);
}));
ava_1.default("Normalize null", (t) => __awaiter(this, void 0, void 0, function* () {
    const data = parser.normalize(null);
    t.is(yield data, null);
}));
ava_1.default("Normalize a simple message", (t) => __awaiter(this, void 0, void 0, function* () {
    const data = parser.normalize(viberMessage);
    t.deepEqual(yield data, broidMessageNormalized);
}));
ava_1.default("Normalize a location message", (t) => __awaiter(this, void 0, void 0, function* () {
    const data = parser.normalize(viberMessageLocation);
    t.deepEqual(yield data, broidMessageNormalizedLocation);
}));
ava_1.default("Normalize a interactive message callback", (t) => __awaiter(this, void 0, void 0, function* () {
    const data = parser.normalize(viberMessageInteractiveCallback);
    t.deepEqual(yield data, broidMessageNormalizedInteractiveCallback);
}));
ava_1.default("Normalize a message with media", (t) => __awaiter(this, void 0, void 0, function* () {
    const data = parser.normalize(viberMessageWithMedia);
    t.deepEqual(yield data, broidMessageNormalizedWithMedia);
}));
ava_1.default("Parse a simple message", (t) => __awaiter(this, void 0, void 0, function* () {
    const broidWithTarget = Object.assign({}, broidMessageNormalized);
    broidWithTarget.target = targetMe;
    const data = parser.parse(broidWithTarget);
    t.deepEqual(yield data, broidMessage);
}));
ava_1.default("Parse a location message", (t) => __awaiter(this, void 0, void 0, function* () {
    const broidWithTarget = Object.assign({}, broidMessageNormalizedLocation);
    broidWithTarget.target = targetMe;
    const data = parser.parse(broidWithTarget);
    t.deepEqual(yield data, broidMessageLocation);
}));
ava_1.default("Parse a interactive message callback", (t) => __awaiter(this, void 0, void 0, function* () {
    const broidWithTarget = Object.assign({}, broidMessageNormalizedInteractiveCallback);
    broidWithTarget.target = targetMe;
    const data = parser.parse(broidWithTarget);
    t.deepEqual(yield data, broidMessageInteractiveCallback);
}));
ava_1.default("Parse a message with media", (t) => __awaiter(this, void 0, void 0, function* () {
    const broidWithTarget = Object.assign({}, broidMessageNormalizedWithMedia);
    broidWithTarget.target = targetMe;
    const data = parser.parse(broidWithTarget);
    t.deepEqual(yield data, broidMessageWithMedia);
}));
ava_1.default("Validate a simple message", (t) => __awaiter(this, void 0, void 0, function* () {
    const data = parser.validate(broidMessage);
    t.deepEqual(yield data, broidMessage);
}));
ava_1.default("Validate a location message", (t) => __awaiter(this, void 0, void 0, function* () {
    const data = parser.validate(broidMessageLocation);
    t.deepEqual(yield data, broidMessageLocation);
}));
ava_1.default("Validate a interactive message callback", (t) => __awaiter(this, void 0, void 0, function* () {
    const data = parser.validate(broidMessageInteractiveCallback);
    t.deepEqual(yield data, broidMessageInteractiveCallback);
}));
ava_1.default("Validate a message  with media", (t) => __awaiter(this, void 0, void 0, function* () {
    const data = parser.validate(broidMessageWithMedia);
    t.deepEqual(yield data, broidMessageWithMedia);
}));
