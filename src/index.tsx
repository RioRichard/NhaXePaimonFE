import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { createTheme,/*  CssBaseline */ ThemeProvider } from '@mui/material';

const container = document.getElementById('root')!;
const root = createRoot(container);

const theme = createTheme({
    typography: {
        allVariants: {
            fontFamily: "Roboto, Helvetica, Arial, sans-serif",
            fontSize: '14px',
            fontWeight: '450',
            textTransform: 'none',
            lineHeight: '1.5',
            wordWrap: 'break-word'
        }
    },

    components: {
        MuiTypography: {
            styleOverrides: {
                h1: {
                    fontWeight: 'bold',
                    fontSize: '24px'
                },

                h2: {
                    fontWeight: 'bold',
                    fontSize: '20px'
                },

                h3: {
                    fontWeight: 'bold',
                    fontSize: '16px'
                }
            }
        },

        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        cursor: 'pointer'
                    }
                }
            }
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '14px'
                }
            }
        },

        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    minWidth: '40px'
                }
            }
        },

        MuiTableCell: {
            styleOverrides: {
                head: {
                    fontWeight: '650'
                },
                root: {
                    fontWeight: '400'
                },
            }
        },

        MuiTableHead: {
            styleOverrides: {
                root: {
                    backgroundColor: '#dcf4fc',
                    position: 'sticky',
                    top: 0,
                    zIndex: 10
                }
            }
        }
    },

    palette: {
        primary: {
            main: '#0090da',
            contrastText: '#fff'
        },
        secondary: {
            main: '#666',
            contrastText: '#fff'
        },
        success: {
            main: 'rgb(75, 172, 77)',
            contrastText: '#fff'
        }
    }
});
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
