import { useDispatch } from 'react-redux';
import { showAlert } from '@/app/store/alertSlice.ts';

export const useAlert = () => {
    const dispatch = useDispatch();

    return {
        success: (message: string) =>
            dispatch(showAlert({ message, severity: 'success' })),

        error: (message: string) =>
            dispatch(showAlert({ message, severity: 'error' })),

        warning: (message: string) =>
            dispatch(showAlert({ message, severity: 'warning' })),
    };
};
