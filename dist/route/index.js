"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// project imports
//import user from 'stx-api/routes/user';
const form_1 = __importDefault(require("./form"));
// guaranteed to get dependencies
exports.default = () => {
    const app = (0, express_1.Router)();
    (0, form_1.default)(app);
    // reservation(app);
    // contact_message(app);
    // lock_reservation(app);
    // review(app);
    // branch(app);
    // menu(app);
    return app;
};
//# sourceMappingURL=index.js.map