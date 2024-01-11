import { sqlExecuter, createParams } from "./database";

export const getWorksByUserId = async (req: any, res: any) => {
    const query = "select * from works order by id asc";
    let message = ""
    let status = -1
    const data = await sqlExecuter.any(query)
    if (data.length <= 0) {
        message = "Works Not Found."
    } else {
        message = "【getWorksByUserId】success"
        status = 1
    }
    res.status(200).json({
        data: data,
        message: message,
        status: status
    });
}