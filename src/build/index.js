"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var company_controller_1 = __importDefault(require("./controllers/company.controller"));
var user_controller_1 = __importDefault(require("./controllers/user.controller"));
var mongoConnection_1 = require("./db/mongoConnection");
var dummy_controller_1 = __importDefault(require("./controllers/dummy.controller"));
require('dotenv').config();
var SERVER_PORT = process.env.PORT || 8000;
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
(0, mongoConnection_1.dbConnect)();
app.use('/api', company_controller_1.default);
app.use('/api', user_controller_1.default);
app.use('/api', dummy_controller_1.default);
app.listen(SERVER_PORT, function () {
    return console.log("Imagine Companies app listening on port ".concat(SERVER_PORT, "!"));
});
