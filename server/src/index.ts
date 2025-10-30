import express, {type Request, type Response, type NextFunction} from "express";


// MARK: Application Backend Constants ( for this file only )
const PORT: number = Number(process.env.PORT) || 8080;

// MARK: Main Application Init
const application = express();

// MARK: Middlewares
application.use(express.json());

application.use((req: Request, _: Response, next: NextFunction) => {
    console.log(`${req.method} ${req.url}`);
    next();
});




application.get("/", (_: Request, res: Response) => {
    return res.json({
        message: "Hello, World!",
        success: true
    });
});


application.listen(PORT, () => {
    console.log(`Application Server Listening on port: ${PORT}`);
});
