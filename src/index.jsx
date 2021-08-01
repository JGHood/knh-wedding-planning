import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";


let theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      'Roboto',
      'Helvetica',
      'sans-serif'
    ].join(','),
    h1: {
      fontSize: '2rem',
      '@media (min-width:768px)': {
        fontSize: "2rem",
      },
      '@media (min-width:1300px)': {
        fontSize: "4rem"
      },
    },
    h2: {
      fontSize: '2rem',
      '@media (min-width:768px)': {
        fontSize: "2.5rem",
      },
      '@media (min-width:1300px)': {
        fontSize: "3rem"
      },
    },
    h4: {
      fontFamily:
        [
          'Cinzel',
          'cursive',
        ].join(','),
      fontSize: '1.5rem',
      '@media (min-width:768px)': {
        fontSize: "2rem",
      },
      '@media (min-width:1300px)': {
        fontSize: "2.5rem"
      },
    },
    h5: {
      fontFamily:
      [
        'Cinzel',
        'cursive',
      ].join(','),
    fontSize: '1rem',
    '@media (min-width:768px)': {
      fontSize: "1.5rem",
    },
    '@media (min-width:1300px)': {
      fontSize: "2rem"
    },
    }
  },
  palette: {
    primary: {
      main: "#344F1F",
    },
    secondary: {
      main: "#EEBA2B",
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
