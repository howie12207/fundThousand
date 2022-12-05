import * as toolkitRaw from '@reduxjs/toolkit';
import baseReducer from './base';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { configureStore } = ((toolkitRaw as any).default || toolkitRaw) as typeof toolkitRaw;

export const store = configureStore({
    reducer: { base: baseReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
