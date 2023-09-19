import create from "zustand";

type CounterState = {
    count: number,
    increment: () => void,
    decrement: () => void
}

const userCountStore = create<CounterState>((set) => ({
    count: 0,
    increment: () => set((state) => ({count: state.count + 1})),
    decrement: () => set((state) => ({count: state.count - 1})),
}))


export const useStore = userCountStore;