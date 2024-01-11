
import { Works } from "../../type"

export type GetWorksParams = {
    user_id: string | null
}

export type GetWorksRes = {
    data: Works[],
    message: string,
    status: number
} 