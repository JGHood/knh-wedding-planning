
import { useState, useEffect } from 'react';
import { Hidden, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Hexagon from '../Hexagon';
import GBWButton from '../GBWButton';

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
        marginTop: '32px',
        marginBottom: '64px',
    },
    buttonContainer: {
        marginTop: '64px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    downloadButtonContainer: {
        marginTop: '156px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '32px',
    },
});
export default function OurServices() {
    const isDesktop = useMediaQuery('(min-width:768px)');
    const [windowSize, setWindowSize] = useState(0);
    function debounce(fn, ms) {
        let timer
        return _ => {
          clearTimeout(timer)
          timer = setTimeout(_ => {
            timer = null
            fn.apply(this, arguments)
          }, ms)
        };
      }
    const handleResize = () => {

        const root = document.getElementById('root');
        if (isDesktop) {
            setWindowSize(root.offsetWidth / 7);
        }
        else {
            setWindowSize(root.offsetWidth / 3.3);
        }
        return _ => {
            window.removeEventListener('resize', handleResize);
        }

    }
    useEffect(() => {
        debounce(handleResize(), 1000);
    }, [isDesktop]);
    window.addEventListener('resize', handleResize);

    const classes = useStyles(windowSize);
    if (windowSize > 1) {
        return (
            <div className="Our Services">
                <div className={classes.buttonContainer}>
                    <GBWButton variety="solid">Book a free meet + greet!</GBWButton>
                </div>
                <Typography variant="h2" className={classes.ourServicesHeader}>
                    Our Services
                </Typography>
                <div className={classes.hexRow}>
                    <Hidden xsDown><Hexagon size={windowSize} color={'#e2d5a0'} /></Hidden>
                    <Hexagon size={windowSize} color={'#e2d5a0'} />
                    <Hexagon size={windowSize} color={'#344F1F'}
                        header="Full-Service Planning & Coordination"
                        body="We're with you every step of the way, from budget creation to your big day."
                        link="/services#plan2"
                    />
                    <Hexagon size={windowSize} color={'#e2d5a0'} />
                    <Hidden xsDown><Hexagon size={windowSize} color={'#e2d5a0'} /></Hidden>
                </div>
                <div className={classes.hexRow}>
                    <Hidden xsDown><Hexagon size={windowSize} color={'#e2d5a0'} /></Hidden>
                    <Hexagon size={windowSize} color={'#e2d5a0'} />
                    <Hexagon size={windowSize} color={'#344F1F'}
                        header="Month-Of Coordination"
                        body="We do more than just ensure your big day goes as smoothly as possible--we 
                        help with those final vendor decisions and make sure everyone is on the same page."
                        link="/services#plan1"
                    />
                    <Hexagon size={windowSize} color={'#344F1F'}
                        header="Virtual Planning"
                        body="For our couples on a budget, or those who just need some help getting started. 
                        You'll gain access to custom documents, monthly check-ins, and much more!"
                        link="/services#plan3"
                    />
                    <Hexagon size={windowSize} color={'#e2d5a0'} />
                    <Hidden xsDown><Hexagon size={windowSize} color={'#e2d5a0'} /></Hidden>
                </div>
                <div className={classes.hexRow}>
                    <Hidden xsDown><Hexagon size={windowSize} color={'#e2d5a0'} /></Hidden>
                    <Hexagon size={windowSize} color={'#e2d5a0'} />
                    <Hexagon size={windowSize} color={'#344F1F'}
                        header={<span>Add-Ons & <br /> A La Carte  </span>}
                        body="These can be added on to any package or purchased a la carte.
                        Need an extra hand or another event planned? We've got you covered!"
                        link="/services#plan4"
                    />
                    <Hexagon size={windowSize} color={'#e2d5a0'} />
                    <Hidden xsDown><Hexagon size={windowSize} color={'#e2d5a0'} /></Hidden>
                </div>
                <div className={classes.downloadButtonContainer}>
                    <GBWButton className={classes.squishBtn} type="solid">Download your FREE Green Wedding Guide!</GBWButton>
                </div>
            </div>
        )
    }
    return (
        <>
        </>
    )
}