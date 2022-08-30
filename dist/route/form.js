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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route = (0, express_1.Router)();
exports.default = (app) => {
    app.use('/', route);
    // route.get('/', mw.isAuth, getBranches);
    // route.post('/add', mw.isAuth, addBranch);
};
const getName = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    return res.json({ result: 123 }).status(200);
});
// const getBranches = async (req: Request, res: Response, next: NextFunction) => {
//     const branch = new Branch({});
//     try {
//         const result = await branch.find();
//         return res.json({ result, status: CommonConst.API_STATUS.SUCCESS }).status(200);
//     } catch (error: any) {
//         return res.json({ result: error.message, status: CommonConst.API_STATUS.ERROR }).status(400);
//     }
// }
// const addBranch = async (req: Request, res: Response, next: NextFunction) => {
//     const branch = new Branch({});
//     try {
//         const result = await branch.addBranch({ ...req.body });
//         return res.json({ result, status: CommonConst.API_STATUS.SUCCESS }).status(200);
//     } catch (error: any) {
//         return res.json({ result: error.message, status: CommonConst.API_STATUS.ERROR }).status(400);
//     }
// }
//# sourceMappingURL=form.js.map