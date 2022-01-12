
import { useState, useEffect } from 'react';
import { useMediaQuery, useTheme } from '@material-ui/core';
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
    guideBtn: {
        maxWidth: '95%',
    },
    ourServices: {
        paddingBottom: '200px',
        overflow: 'hidden',
    }
});
export default function OurServices() {
    const theme = useTheme();
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
            <div className={classes.ourServices}>
                <div className={classes.hexRow}>
                    <Hexagon size={windowSize} color={theme.palette.quaternary.main} />
                    <Hexagon size={windowSize} color={theme.palette.quaternary.main} />
                    <Hexagon size={windowSize} color={theme.palette.primary.main}
                        ourServices
                        text="white"
                        header="Our Services"
                        body="We've assembled three different packages to serve every budget and need when it comes to your wedding. We recommend booking as early as possible to get the most use out of our resources, expertise, and advice."
                    />
                    <Hexagon size={windowSize} color={theme.palette.quaternary.main} />
                    <Hexagon size={windowSize} color={theme.palette.quaternary.main} />
                </div>
                <div className={classes.hexRow}>
                    <Hexagon size={windowSize} color={theme.palette.quaternary.main} />
                    <Hexagon size={windowSize} color={theme.palette.secondary.main}
                        header="Month-Of Coordination"
                        body="We do more than just ensure your big day goes as smoothly as possible--we 
                        help with those final vendor decisions and make sure everyone is on the same page."
                        link="/services#plan1"
                    />
                    <Hexagon size={windowSize} color={theme.palette.secondary.main}
                        header="Planning & Coordination"
                        body="We're with you every step of the way, from budget creation to vendor management, to coordinating your big day."
                        link="/services#plan2"
                    />
                    <Hexagon size={windowSize} color={theme.palette.quaternary.main} />
                </div>
                <div className={classes.hexRow}>
                    <Hexagon size={windowSize} color={theme.palette.quaternary.main} />
                    <Hexagon size={windowSize} color={theme.palette.quaternary.main} />
                    <Hexagon size={windowSize} color={theme.palette.secondary.main}
                        header="Virtual Planning"
                        body="For our couples on a budget, or those who just need some help getting started. You'll gain access to custom documents, monthly check-ins, and much more!"
                        link="/services#plan3"
                    />
                    <Hexagon size={windowSize} color={theme.palette.quaternary.main} />
                    <Hexagon size={windowSize} color={theme.palette.quaternary.main} />
                </div>
            </div>
        )
    }
    return (
        <>
        </>
    )
}