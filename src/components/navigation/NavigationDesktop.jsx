//import { useContext } from 'react';
import NavLink from 'react-router-dom/NavLink';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Logo from '../../images/Logo.svg';
import { Typography } from '@material-ui/core';
//import { AuthContext } from '../../Authentication';

export default function NavigationDesktop() {
    const theme = useTheme();
    const useStyles = makeStyles({
        socialMediaIcons: {
            marginRight: "0.5rem",
            "&:hover": {
                color: 'blue',
            },
        },
        styledLink: {
            color: 'white',
            textDecoration: 'none',
            marginBottom: 0,
            marginLeft: '8px',
            marginRight: '8px',
            paddingTop: '8px',
            paddingBottom: '11px',
            letterSpacing: '3px',
            fontFamily: 'Cinzel',
            fontSize: '21px',
            transition: '0.2s',
            '&:hover': {
                color: theme.palette.secondary.main,
            },
        },
        styledLinkActive: {
            color: theme.palette.secondary.main,
            paddingBottom: '8px',
            paddingTop: '8px',
            borderBottom: '5px',
            borderBottomStyle: 'solid',
        },
        headerContainer: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
        },
        linkContainer: {
            display: 'flex',
            flexDirection: 'row',
            paddingTop: '15px',
            paddingBottom: '15px',
        },
        appBar: {
            marginBottom: 0,
            paddingBottom: 0,
            backgroundColor: theme.palette.quinary.main,
        }, 
        logoContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            color: theme.palette.secondary.main,
        },
        greenBee: {
            fontFamily: 'Cinzel',
        },
        sustainableWeddings: {
            fontFamily: 'Montserrat',
        },
    });
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar style={{ marginBottom: 0, paddingBottom: 0 }}>
                <div className={classes.headerContainer}>
                <div className={classes.linkContainer}>
                    <NavLink className={classes.styledLink} exact activeClassName={classes.styledLinkActive} to='/'>HOME</NavLink>
                    <NavLink className={classes.styledLink} exact activeClassName={classes.styledLinkActive} to='/services'>SERVICES</NavLink>
                </div>
                <div className={classes.logoContainer}>
                <NavLink to='/'>
                    <img alt="Website logo: a plant and a bee in a hexagon outline" src={Logo} style={{ height: "90px", margin: "20px", marginTop: '5px', marginBottom: '-5px' }} />
                </NavLink>
                    <Typography variant="h3" className={classes.greenBee}>Green Bee</Typography>
                    <Typography variant="h4" className={classes.sustainableWeddings}>Sustainable Weddings</Typography>
                </div>

                <div className={classes.linkContainer}>
                    <NavLink className={classes.styledLink} exact activeClassName={classes.styledLinkActive} to='/about'>ABOUT</NavLink>
                    <NavLink className={classes.styledLink} exact activeClassName={classes.styledLinkActive} to='/contact'>CONTACT</NavLink>
                    {/*{!isAuthenticated && <NavLink className={classes.styledLink} exact activeClassName={classes.styledLinkActive}  to='/signin'><Typography variant="p">SIGN IN</Typography></NavLink>}
                        {isAuthenticated && <NavLink className={classes.styledLink} onClick={() => {signOut(); window.location.reload()}} to="/"><Typography variant="p">SIGN OUT</Typography></NavLink>}*/}

                </div>
                </div>
            </Toolbar>
        </AppBar>
    )
}