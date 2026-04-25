import { configureStore } from '@reduxjs/toolkit';
import { projectApi } from '../../features/project/api/projectApi.ts';
import alertReducer from './alertSlice.ts';

export const store = configureStore({
    reducer: {
        [projectApi.reducerPath]: projectApi.reducer,
        alert: alertReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(projectApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
