
import { useState, useEffect } from 'react';
import { Hidden, Typography, Card, CardContent, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Hexagon from '../Hexagon';

const useStyles = makeStyles({
    hexRow: {
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        justifyContent: 'center',
        marginBottom: (windowSize) => -windowSize * 0.51,
    },
    ourServicesHeader: {
        textAlign: 'center',
        fontFamily: 'Cinzel',
        color: '#344F1F',
        marginTop: '128px',
        marginBottom: '64px',
    },
});
export default function OurServices() {
    const isDesktop = useMediaQuery('(min-width:768px)');
    const [windowSize, setWindowSize] = useState(1);
    const handleResize = () => {
        const root = document.getElementById("root");
        if(isDesktop) {
            setWindowSize(root.offsetWidth / 6.2);
        }
        else {
            setWindowSize(root.offsetWidth / 5);
        }

    }
    useEffect(() => {
        handleResize()
    }, []);
    window.addEventListener('resize', handleResize);
    const classes = useStyles(windowSize);
    return (
        <div className="Our Services">
            <Typography variant="h1" className={classes.ourServicesHeader}>
                Our Services
            </Typography>
            <div className={classes.hexRow}>
                <Hidden xsDown><Hexagon size={windowSize} color={'#e2d5a0'} /></Hidden>
                <Hexagon size={windowSize} color={'#e2d5a0'} />
                <Hexagon size={windowSize} color={'#344F1F'}
                    header="Full-Service Planning & Coordination"
                    body="We're with you every step of the way, from budget creation to your big day."
                    link="/services"
                />
                <Hexagon size={windowSize} color={'#e2d5a0'} />
                <Hidden xsDown><Hexagon size={windowSize} color={'#e2d5a0'} /></Hidden>
            </div>
            <div className={classes.hexRow}>
                <Hexagon size={windowSize} color={'#e2d5a0'} />
                <Hexagon size={windowSize} color={'#e2d5a0'} />
                <Hexagon size={windowSize} color={'#344F1F'}
                    header="Month-Of Coordination"
                    body="We do more than just ensure your big day goes as smoothly as possible—we 
                    help with those final vendor decisions and make sure everyone is on the same page. 
                    With us serving as the point of contact for your wedding day, that leaves you free
                    to enjoy the celebrations!"
                    link="/services"
                />
                <Hexagon size={windowSize} color={'#344F1F'}
                    header="Virtual Planning"
                    body="For our couples on a tight budget, or those who 
                    just need some help getting started. You'll gain access to custom timelines, spreadsheets, 
                    and worksheets to get your planning process rolling, as well as monthly check-ins to answer
                     all of your planning & coordination questions!"
                    link="/services"
                />
                <Hexagon size={windowSize} color={'#e2d5a0'} />
                <Hexagon size={windowSize} color={'#e2d5a0'} />
            </div>
            <div className={classes.hexRow}>
            <Hidden xsDown><Hexagon size={windowSize} color={'#e2d5a0'} /></Hidden>
                <Hexagon size={windowSize} color={'#e2d5a0'} />
                <Hexagon size={windowSize} color={'#344F1F'}
                    header={<span>Add-Ons & <br /> A La Carte  </span>}
                    body="These can be added on to any package or purchased a la carte. 
                     Need help planning a bachelor/bachelorette party? Want someone to coordinate 
                     your rehearsal dinner or a post-wedding brunch? We've got you covered!"
                    link="/services"
                />
                <Hexagon size={windowSize} color={'#e2d5a0'} />
                <Hidden xsDown><Hexagon size={windowSize} color={'#e2d5a0'} /></Hidden>
            </div>
        </div>
    )
}