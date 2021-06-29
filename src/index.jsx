import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

const mainFont = "'Roboto', sans-serif";
const cursive = "'Rogue Script', cursive";

let theme = createMuiTheme({
  typography: {
    fontFamily:[
      'Montserrat',
      'Roboto',
      'Helvetica',
      'sans-serif'
    ].join(',') ,
    h4: {
      fontFamily:
      [
        'Cinzel',
        'cursive',
      ].join(','),
      fontSize: '1.5rem',
      '@media (min-width:600px)': {
        fontSize: "2rem",
      },

      '@media (min-width:1500px)': {
        fontSize: "3rem"
      }
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
//theme = responsiveFontSizes(theme);
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
