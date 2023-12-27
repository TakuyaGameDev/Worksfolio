
export type LoginUserParams = {
    user_id: string,
    password: string
}

export type LoginUserRes = {
    data: {
        id: number,
        user_id: string,
        role: number,
    },
    message: string,
    status: number
} 