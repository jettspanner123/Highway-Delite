import {Router} from "express";
import type {Request, Response} from "express";


const userRoute = Router();

userRoute.post("/login", (req: Request, res: Response) => {
    return res.json({
        
    });
});

export default userRoute;