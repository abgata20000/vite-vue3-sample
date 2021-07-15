import { reactive, Ref, toRefs } from "vue"

type useApiResult<T> = {
    handleApi: () => Promise<T | null>
    errors: Ref<ApiErrorResponse | null>
    loading: Ref<boolean>
}

type ApiErrorResponse = {
    message: string
    status: number
    reason: Record<string, string>
}

export type useApi = {
    <T>(apiFunc: () => Promise<T>): useApiResult<T>
}

export const useApi: useApi = (apiFunc) => {
    const state = reactive<{
        errors: ApiErrorResponse | null
        loading: boolean
    }>({
        errors: null,
        loading: false,
    })

    const handleApi = async () => {
        state.loading = true

        return await apiFunc()
            .then((apiResponse) => {
                state.errors = null
                return apiResponse
            })
            .catch((err) => {
                state.errors = err
                return null
            })
            .finally(() => {
                state.loading = false
            })
    }

    return {
        handleApi,
        ...toRefs(state),
    }
}
