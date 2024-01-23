import { sqlExecuter, createParams } from "./database";

export const getWorks = async (res: any) => {
    const query = "select id, title, image_url, site_url, dev_periods, descriptions, details, dev_environment from works order by id asc";
    let message = ""
    let status = -1
    const data = await sqlExecuter.any(query)
    if (data.length <= 0) {
        message = "Works Not Found."
    } else {
        message = "【getWorks】success"
        status = 1
    }
    res.status(200).json({
        data: data,
        message: message,
        status: status
    });
}