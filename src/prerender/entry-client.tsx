import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '@/store/store';
import { Provider } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
import { SnackbarUtilsConfigurator } from '../utils/snackBar';

import App from '../App';
import '../assets/css/index.css';

const snackProps = {
    maxSnack: 3,
    autoHideDuration: 2500,
    style: {
        width: '15rem',
        maxWidth: '100%',
    },
};

const theme = createTheme({
    palette: {
        primary: {
            main: '#004790',
        },
    },
});

const DOM = (
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <SnackbarProvider
                    {...snackProps}
                    variant="error"
                    anchorOrigin={{
                        horizontal: 'center',
                        vertical: 'top',
                    }}
                >
                    <Router basename={import.meta.env.BASE_URL}>
                        <App />
                    </Router>
                    <SnackbarUtilsConfigurator />
                </SnackbarProvider>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);

import.meta.env.MODE === 'development'
    ? ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(DOM)
    : ReactDOM.hydrateRoot(document.getElementById('root') as HTMLElement, DOM);
