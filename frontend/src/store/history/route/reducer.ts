// 初期ユーザー情報(ログアウトにて使用)
const initialState = {
    id: undefined,
    user_id: '',
    role: -1,
}

function reducer(state: [], action: string, payload: any) {
    // actionのタイプごとに、処理を分ける
    switch (action) {
        // PUSHの場合、次の遷移先情報を格納.
        case 'PUSH':
            return {
                ...state,
                path: [...state.path, payload],
            }
        // POPの場合、現在の遷移情報を削除
        case 'POP':
            return {
                ...state,
                path: state.path.filter((item) => item.id !== payload.id)
            }
        default:
            return state
    }
}

export default reducer;