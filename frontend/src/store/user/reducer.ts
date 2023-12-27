
// 初期ユーザー情報(ログアウトにて使用)
const initialState = {
    id: undefined,
    user_id: '',
    role: -1,
}

function reducer(state: any, action: string, payload: any) {
    // actionのタイプごとに、処理を分ける
    switch (action) {
        // LOGINの場合、ユーザ情報を格納.
        case 'LOGIN':
            state = {
                userInfo: {
                    id: payload.id,
                    user_id: payload.user_id,
                    role: payload.role,
                },
            }
            return state
        // LOGOUTの場合、ユーザー情報をリセット
        case 'LOGOUT':
            state = {
                userInfo: initialState
            }
            return state
        default:
            return state
    }
}

export default reducer;