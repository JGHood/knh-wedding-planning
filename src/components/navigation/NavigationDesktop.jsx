import { useContext } from 'react';
import NavLink from 'react-router-dom/NavLink';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { signOut } from '../../firebase';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import Logo from '../../images/logo.png';
import PinterestIcon from '@material-ui/icons/Pinterest';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { AuthContext } from '../../Authentication';

export default function NavigationDesktop() {
    const largeDesktop = useMediaQuery('(max-width:1279px)');
    console.log(largeDesktop);
    const {isAuthenticated} = useContext(AuthContext);
    const theme = useTheme();
    const StyledLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    margin-bottom: 0;
    margin-left: 8px;
    margin-right: 8px;
    font-size: 16px;

    &:hover{
        color: ${theme.palette.secondary.main}
    }
    &.${props => props.activeClassName} {
    color: ${theme.palette.secondary.main};
    padding-bottom: 15px;
    border-bottom: 5px;
    border-bottom-style: solid;
    }
    `;

    const useStyles = makeStyles({
    socialMediaIcons: {
        marginRight: "0.5rem",
        "&:hover": {
            color: theme.palette.secondary.main,
        },
    },
    styledLink: {
        textDecoration: "none",
        color: "white",
    }
        });
    const classes = useStyles();
    return (
        <AppBar position="static" style={{marginBottom:0, paddingBottom:0}}>
            <Toolbar style={{marginBottom:0, paddingBottom:0}}>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item lg={3} >
                        <div>
                           <a className={classes.styledLink} rel="noreferrer" href="https://www.pinterest.com" target="_blank"><PinterestIcon fontSize="large" className={classes.socialMediaIcons}></PinterestIcon></a>
                           <a className={classes.styledLink} rel="noreferrer" href="https://www.twitter.com" target="_blank"><TwitterIcon fontSize="large" className={classes.socialMediaIcons}/></a>
                           <a className={classes.styledLink} rel="noreferrer" href="https://www.facebook.com" target="_blank"><FacebookIcon fontSize="large" className={classes.socialMediaIcons}/></a>
                           <a className={classes.styledLink} rel="noreferrer" href="https://www.instagram.com" target="_blank"><InstagramIcon fontSize="large" className={classes.socialMediaIcons}/></a>
                        </div>
                    </Grid>
                    <Grid
                        container
                        item
                        lg={6}
                        direction="row"
                        alignItems="center"
                        justify="center"
                    >
                        <Grid 
                            item 
                            xs={4}
                            container
                            direction="row"
                            alignItems="baseline"
                            justify="flex-end">
                            <Typography variant="h4" color="secondary">Green Bee</Typography>
                        </Grid>
                        <Grid 
                            item 
                            container
                            xs={2}
                            direction="row"
                            alignItems="center"
                            justify="center"
                        >
                            <img src={Logo} style={{ height: "120px", margin: "20px" }} />
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="h4" color="secondary">Weddings</Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        item
                        lg={3}
                        direction="row"
                        alignItems="baseline"
                        justify={largeDesktop ? "center" : "flex-end"}
                        style={{ height: "100%" }}
                    >
                        <StyledLink exact activeClassName="any" exact to='/'><Typography variant="p">HOME</Typography></StyledLink>
                        <StyledLink exact activeClassName="any" exact to='/matcher'><Typography variant="p">TOOLS</Typography></StyledLink>
                        {!isAuthenticated && <StyledLink exact activeClassName="any" exact to='/signin'><Typography variant="p">SIGN IN</Typography></StyledLink>}
                        {isAuthenticated && <StyledLink onClick={() => {signOut(); window.location.reload()}} to="/"><Typography variant="p">SIGN OUT</Typography></StyledLink>}
                    </Grid>
                </Grid>

            </Toolbar>
        </AppBar>
    )
}