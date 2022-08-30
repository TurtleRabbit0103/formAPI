"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
// project imports
exports.default = ({ app }) => __awaiter(void 0, void 0, void 0, function* () {
    app.get('/status', (req, res) => { res.status(200).end(); });
    app.head('/status', (req, res) => { res.status(200).end(); });
    app.enable('trust proxy');
    app.use(body_parser_1.default.urlencoded({ extended: false }));
    app.use(express_1.default.json({ limit: '50mb' }));
    // static files
    app.use(express_1.default.static(process.cwd() + '/src/public/'));
    // For /api prefix
    //app.use(config.api.prefix, routes());
    // app.use(routes());
    /// error handlers
    app.use((err, req, res, next) => {
        if (err.name === "UnauthorizedError") {
            res.status(401).send("invalid token...");
        }
        else {
            next(err);
        }
    });
    // Return the express app
    return app;
});
//# sourceMappingURL=express.js.map