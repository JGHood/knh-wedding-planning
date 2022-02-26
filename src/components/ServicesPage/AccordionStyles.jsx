import { makeStyles } from "@material-ui/core";

const accordionStyles = makeStyles((theme) => ({
  accordionContainer: {
      width: '70%',
      marginTop: theme.typography.fontSize * 2.5,
      [theme.breakpoints.down('sm')]: {
        width: '98%',
      },
  },
  accordionTitleContainer: {
      display: "flex",
      justifyContent: "center",
      marginBottom: theme.typography.fontSize,
  },
  accordionTitle: {
      fontFamily: ['Cinzel', 'serif'],
  },
  heading: {
      fontFamily: ['Cinzel', 'serif'],
  },
  accordionSummary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      marginTop: "1rem",
      borderRadius: '0.2rem'
  },
  previewText: {
      marginTop: "1rem",
  },
  priceLabel: {
      backgroundColor: theme.palette.secondary.main,
      borderRadius: '8px',
      padding: '5px 10px'
  },
  details: {
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'serif',
  },
  packageBottom: {
      marginTop: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
  },
  compareLink: {
      color: theme.palette.common.black,
      marginTop: '10px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Montserrat',
  },
  serviceHeader: {
      borderBottom: `2.5px solid ${theme.palette.primary.main}`,
      paddingBottom: '1px',
      marginBottom: '12px',
      marginTop: '25px',
  },
  listItem: {
      paddingBottom: '4px',
  }
}));

export { accordionStyles };