import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type AlertState = {
    open: boolean;
    message: string;
    severity: 'success' | 'error' | 'warning' | 'info';
};

const initialState: AlertState = {
    open: false,
    message: '',
    severity: 'info',
};

const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        showAlert: (_, action: PayloadAction<Omit<AlertState, 'open'>>) => ({
            ...action.payload,
            open: true,
        }),
        hideAlert: () => initialState,
    },
});

export const { showAlert, hideAlert } = alertSlice.actions;
export default alertSlice.reducer;
