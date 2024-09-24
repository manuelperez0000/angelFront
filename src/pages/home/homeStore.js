import { createWithEqualityFn } from 'zustand/traditional'

const useHomeStore = createWithEqualityFn((set) => ({
    init: {},
    setInit: (newState) => set(() => ({
        init: newState
    })),
}))

export default useHomeStore