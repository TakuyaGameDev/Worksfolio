import { sqlExecuter, createParams } from "./database";

export const getLoginUsers = async (req:any, res: any) => {
    const query = "select * from users where user_id = $1 AND password = $2";
    let message = ""
    let status = -1
    const data = await sqlExecuter.any(query, createParams(req.body))
    if (data.length <= 0) {
        message = "ユーザが存在しません"
    } else {
        message = "ログイン成功"
        status = 1
    }
    res.status(200).json({
        data: {
            id: data[0]?.id,
            user_id: data[0]?.user_id,
            role: data[0]?.role,
        },
        message: message,
        status: status
    });
}