import express, { Request, Response } from "express";

import { getLoginUsers } from './usersEntity'
import { getWorks, getWorksByUserId } from "./worksEntity"

const app = express();
// ポート番号はdocker-compose.ymlにあるnode_containerのポート番号を指定します
const port = 3000;
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTION"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// get user
app.post("/getLoginUser", (req: Request, res: Response) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001')
    getLoginUsers(req, res)
});

// get works
app.post("/getWorks", (req: Request, res: Response) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001')
  getWorks(res)
});
// get works by user_id
app.post("/getWorksByUserId", (req: Request, res: Response) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001')
  getWorksByUserId(req, res)
});

app.listen(port, () => {
    //yarn nodemon ファイル名.tsで実行した画面で表示されるログメッセージです
    console.log(`Example app listening on port ${port}`);
});