
import reducer from "./reducer"

const store = {
    state : {
        path: [{
            id: 1,
            name: 'LOGIN',
            path: '/'
        }]
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