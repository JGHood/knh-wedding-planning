import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";


let theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontDisplay: 'optional',
    fontFamily: [
      'Montserrat',
      'Helvetica',
      'sans-serif'
    ].join(','),
    h1: {
      fontSize: '2rem',
      '@media (min-width:768px)': {
        fontSize: "3rem",
      },
      '@media (min-width:1300px)': {
        fontSize: "4rem"
      },
    },
    h2: {
      fontSize: '1.5rem',
      '@media (min-width:768px)': {
        fontSize: "2rem",
      },
      '@media (min-width:1300px)': {
        fontSize: "3rem"
      },
    },
    h3: {
      fontFamily: 'Montserrat',
      fontSize: '16px',
      '@media (min-width:768px)': {
        fontSize: '21px',
      },
      '@media (min-width:1300px)': {
        fontSize: "24px"
      },
    },
    h4: {
      fontSize: '1.5rem',
      '@media (min-width:768px)': {
        fontSize: "2rem",
      },
      '@media (min-width:1300px)': {
        fontSize: "2.5rem"
      },
    },
    h5: {
    fontSize: '1rem',
    '@media (min-width:768px)': {
      fontSize: "1.5rem",
    },
    '@media (min-width:1300px)': {
      fontSize: "2rem"
    },
    },
    button: {
      fontSize: '16px',
      '@media (min-width:768px)': {
        fontSize: "16px",
      },
      '@media (min-width:1300px)': {
        fontSize: "24px"
      },
    },
    body1: {
      fontSize: '14px',
      '@media (min-width:768px)': {
        fontSize: "15px",
      },
      '@media (min-width:1300px)': {
        fontSize: "16px"
      },
    },
    body2: {
      fontSize: '18px',
      '@media (min-width:768px)': {
        fontSize: "22px",
      },
      '@media (min-width:1300px)': {
        fontSize: "26px"
      },
    }
  },
  palette: {
    primary: {
      main: "#344F1F",
    },
    secondary: {
      main: "#e4dbaf",
    },
    background: {
      default: "#EFEEE9",
    }
  },
});
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
