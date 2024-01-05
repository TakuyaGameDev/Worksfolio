
// 遷移時の状態
export const TRANSITION_CONDITION_TYPE = {
    WELCOME: 0,
    BACK: 1,
} as const;

// 画面タイプ
export const PAGE_TYPE = {
    LOGIN: {
        id: 1,
        path: '/',
        name: 'LOGIN画面',
    },
    MAIN: {
        id: 2,
        path: '/main',
        name: 'MAIN画面',
    },
}

// 閲覧タイプ(自動: true 手動: false)
export const VIEW_TYPE = {
    AUTOMATIC: true,
    MANUAL: false,
}

// 現在閲覧している項目(Firstly, Carrer, Works 等)
export const VIEWING_ITEMS = {
    FIRSTLY: 0,
    CAREER: 1,
    WORKS: 2,
}