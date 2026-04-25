import { Snackbar, Alert } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../app/store/index.ts';
import { hideAlert } from '../../app/store/alertSlice.ts';

export const AlertSnackbar = () => {
    const alert = useSelector((state: RootState) => state.alert);
    const dispatch = useDispatch();

    return (
        <Snackbar
            open={alert.open}
            autoHideDuration={3000}
            onClose={() => dispatch(hideAlert())}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <Alert
                variant="filled"
                severity={alert.severity}
                onClose={() => dispatch(hideAlert())}
            >
                {alert.message}
            </Alert>
        </Snackbar>
    );
};
