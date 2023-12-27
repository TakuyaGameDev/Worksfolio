import pgPromise from "pg-promise";
 
const pgp = pgPromise({});
const config = {
	db: {
		// 設定項目: https://github.com/vitaly-t/pg-promise/wiki/Connection-Syntax
		host: "postgres",
		port: 5432,
		database: "worksfolio_db",
		user: "user",
		password: "password",
		max: 10, // size of the connection pool
		query_timeout: 60000 // 60sec
	}
};
 
export const sqlExecuter = pgp(config.db);

// クエリパラメーター作成
export const createParams = (reqBody: any) => {
	console.log(reqBody)
	let keys = Object.values(reqBody)
	let params: any[] = []
	keys.forEach((value: any) => {
		params.push(value)
	});
	return params
}