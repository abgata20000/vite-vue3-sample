import { reactive, InjectionKey, inject } from "vue"

export const counterStore = () => {
    const state = reactive({
        count: 0,
    })

    return {
        get count() {
            return state.count
        },

        increment() {
            state.count += 1
        },

        decrement() {
            state.count -= 1
        },
    }
}

export type CounterStore = ReturnType<typeof counterStore>
export const CounterKey: InjectionKey<CounterStore> = Symbol("CounterStore")

export function useCounterStore() {
    const store = inject(CounterKey)
    if (!store) {
        throw new Error(`${CounterKey} is not provided`)
    }
    return store
}
