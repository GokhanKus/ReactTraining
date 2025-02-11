import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoSlice'

export const store = configureStore({
    reducer: {
        todo: todoReducer //todoSlice'taki initial state'e erismis oluruz
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch