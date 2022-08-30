import { Router, Request, Response, NextFunction } from 'express';

const route = Router();

export default (app: Router) => {
    app.use('/form', route);

    route.get('/', getName);
    // route.post('/add', mw.isAuth, addBranch);
};


const getName = async (req: Request, res: Response, next: NextFunction) => {

    return res.json({ result: 123 }).status(200);
}

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

