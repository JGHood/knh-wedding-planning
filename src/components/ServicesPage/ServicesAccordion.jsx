import { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import ServiceAccordion from './ServiceAccordion';
import { accordionStyles } from './AccordionStyles';
import MonthOfContent from './Content/MonthOfContent';
import FullPlanningContent from './Content/FullPlanningContent';
import VirtualPlanningContent from './Content/VirtualPlanningContent';
import ALaCarteContent from './Content/ALaCarteContent';


export default function SimpleAccordion() {
    const [Plan1, setPlan1] = useState(false);
    const [Plan2, setPlan2] = useState(false);
    const [Plan3, setPlan3] = useState(false);
    const [Plan4, setPlan4] = useState(false);
    useEffect(() => {
        if (window.location.hash === "#plan1") {
            setPlan1(true);
            const plan1 = document.getElementById('plan1');
            window.scroll({ top: plan1.offsetTop, behavior: 'smooth' });
        }
        if (window.location.hash === "#plan2") {
            setPlan2(true);
            const plan2 = document.getElementById('plan2');
            window.scroll({ top: plan2.offsetTop, behavior: 'smooth' });
        }
        if (window.location.hash === "#plan3") {
            setPlan3(true);
            const plan3 = document.getElementById('plan3');
            window.scroll({ top: plan3.offsetTop, behavior: 'smooth' });
        }
        if (window.location.hash === "#plan4") {
            setPlan4(true);
            const plan4 = document.getElementById('plan4');
            window.scroll({ top: plan4.offsetTop, behavior: 'smooth' });
        }
    }, []);
    const classes = accordionStyles();

    return (
        <div className={classes.accordionContainer}>
            <div className={classes.accordionTitleContainer}>
                <Typography className={classes.accordionTitle} variant="h2">Our Packages</Typography>
            </div>
            <ServiceAccordion
                id="plan1"
                expanded={Plan1}
                onChange={() => setPlan1(!Plan1)}
                title="Month of Coordination Details"
                price="Starting at $1300"
            >
                <MonthOfContent/>
            </ServiceAccordion>
            <ServiceAccordion
                id="plan2"
                expanded={Plan2}
                onChange={() => setPlan2(!Plan2)}
                title="Full Planning & Coordination Details"
                price="Starting at $3900"
            >
                <FullPlanningContent/>
            </ServiceAccordion>
            <ServiceAccordion
                id="plan3"
                expanded={Plan3}
                onChange={() => setPlan3(!Plan3)}
                title="Virtual Planning Details"
                price="Starting at $500"
            >
                <VirtualPlanningContent/>
            </ServiceAccordion>
            <ServiceAccordion
                id="plan4"
                expanded={Plan4}
                onChange={() => setPlan4(!Plan4)}
                title="Add-Ons & A La Carte Details"
                noBottom
            >
                <ALaCarteContent/>
            </ServiceAccordion>
        </div>
    );
}