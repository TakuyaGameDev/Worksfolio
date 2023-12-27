
import reducer from "./reducer"

const store = {
    state : {
        userInfo: {
            id: 0,
            user_id: '',
            role: 0
        }
    },
    reducer : reducer,
    // ステートを取得するメソッドを追加.
    getState : function () {
        return this.state
    },
    dispatch : function (action: any, payload: any = null) {
        // reducer を使って、state を変更する.
        this.state = this.reducer(this.state, action, payload)
    }
}

export default store