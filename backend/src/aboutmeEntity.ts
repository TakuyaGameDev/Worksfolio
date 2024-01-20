import { sqlExecuter, createParams } from "./database";

export const getAboutme = async (res: any) => {
    const query = "select id, career, skills, certificates from about_me order by id asc";
    let message = ""
    let status = -1
    const data = await sqlExecuter.any(query)
    if (data.length <= 0) {
        message = "aboutme Not Found."
    } else {
        message = "【getAboutme】success"
        status = 1
    }
    res.status(200).json({
        data: data,
        message: message,
        status: status
    });
}