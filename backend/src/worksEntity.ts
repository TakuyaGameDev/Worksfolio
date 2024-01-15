import { sqlExecuter, createParams } from "./database";

export const getWorks = async (res: any) => {
    const query = "select id, user_id, title, image_url, site_url, dev_periods, descriptions from works order by id asc";
    const query2 = "select id, works_id, name, image_url, descriptions from screens where works_id=$1";
    let message = ""
    let status = -1
    const data = await sqlExecuter.any(query)
    let data2 :Object[] = []
    data.forEach(async(value) => {
        const i = await sqlExecuter.any(query2, createParams({works_id: value.id}))
        data2.push({value_id: i})
    })
    console.log(data2)
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

export const getWorksByUserId = async (req: any, res: any) => {
    const query = "select id, user_id, title, image_url, site_url, dev_periods, descriptions from works where user_id = $1 order by id asc";
    let message = ""
    let status = -1
    const data = await sqlExecuter.any(query, createParams(req.body))
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