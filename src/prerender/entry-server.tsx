import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
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
            main: '#005598',
        },
    },
});

export function render(url: string) {
    const html = ReactDOMServer.renderToString(
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
                    <StaticRouter location={url}>
                        <App />
                    </StaticRouter>
                    <SnackbarUtilsConfigurator />
                </SnackbarProvider>
            </ThemeProvider>
        </Provider>
    );
    return html;
}
