// Option 1: import dotenv in index.ts
//import "dotenv/config";

// Option 2: import dotenv in config.ts
import { config } from "./config";
import router from "./src/components/posts/post.api";

import express, { Request, Response, Express } from "express";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.use("/posts", router);

app.listen(config.PORT, () => {
    console.log(`Example app listening on port ${config.PORT}!`);
});
