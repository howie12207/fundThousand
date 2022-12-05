import * as toolkitRaw from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { createSlice } = ((toolkitRaw as any).default ?? toolkitRaw) as typeof toolkitRaw;
export type BaseState = {
    loading: boolean;
    ip: string;
    idNumber: string;
    hasFocus: boolean;
};

const initialState: BaseState = {
    loading: false,
    ip: '',
    idNumber: '',
    hasFocus: false,
};

export const baseSlice = createSlice({
    name: 'base',
    initialState,
    reducers: {
        updateLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        updateIp(state, action: PayloadAction<string>) {
            state.ip = action.payload;
        },
        updateIdNumber(state, action: PayloadAction<string>) {
            state.idNumber = action.payload;
        },
        updateHasFocus(state, action: PayloadAction<boolean>) {
            state.hasFocus = action.payload;
        },
    },
});

export const { updateLoading, updateIp, updateIdNumber, updateHasFocus } = baseSlice.actions;

export default baseSlice.reducer;
