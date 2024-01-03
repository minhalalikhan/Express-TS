"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const express = require('express')
const app = (0, express_1.default)();
const PORT = 3000;
app.get('/', (req, res, next) => {
    res.send("WELCOME TO NODE + Express + TYPESCRIPT APP 22");
});
app.listen(PORT, () => {
    console.log(`App is  listening on PORT : ${PORT}`);
});
//# sourceMappingURL=index.js.map