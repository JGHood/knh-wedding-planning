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
        } else
        if (window.location.hash === "#plan2") {
            setPlan2(true);
            const plan2 = document.getElementById('plan2');
            window.scroll({ top: plan2.offsetTop, behavior: 'smooth' });
        } else
        if (window.location.hash === "#plan3") {
            setPlan3(true);
            const plan3 = document.getElementById('plan3');
            window.scroll({ top: plan3.offsetTop, behavior: 'smooth' });
        } else
        if (window.location.hash === "#plan4") {
            setPlan4(true);
            const plan4 = document.getElementById('plan4');
            window.scroll({ top: plan4.offsetTop, behavior: 'smooth' });
        } else {
            window.scrollTo(0, 0)
        }
    }, []);
    const classes = accordionStyles();

    return (
        <div className={classes.accordionContainer}>
            <div className={classes.accordionTitleContainer}>
                <Typography className={classes.accordionTitle} variant="h2">Our Packages</Typography>
            </div>
            <div>
                <Typography id="plan1" variant="h3" className={classes.serviceHeader}>Month Of Coordination</Typography>
                <Typography variant="body1">Although commonly called "day-of coordination," we do so much more. On top of coordination, we're there the month before your wedding to help with final vendor selections, get everyone on the same page, and assist with any other final touches you may need.</Typography>
            </div>
            <ServiceAccordion
                expanded={Plan1}
                onChange={() => setPlan1(!Plan1)}
                title="Month of Coordination Details"
                price="Starting at $1300"
            >
                <MonthOfContent/>
            </ServiceAccordion>

            <div>
                <Typography id="plan2" variant="h3" className={classes.serviceHeader}>Full Planning & Coordination</Typography>
                <Typography variant="body1">We're with you every step of the way, from budget creation and vendor management, to coordinating your big day. This is our most hands-on package. Not sure how to make your vision of a dream wedding real while staying in budget? We have all the tools and expertise to make it come to life.</Typography>
            </div>
            <ServiceAccordion
                expanded={Plan2}
                onChange={() => setPlan2(!Plan2)}
                title="Full Planning & Coordination Details"
                price="Starting at $3900"
            >
                <FullPlanningContent/>
            </ServiceAccordion>

            <div>
                <Typography id="plan3" variant="h3" className={classes.serviceHeader}>Virtual Planning</Typography>
                <Typography variant="body1">For our couples on a budget, or those who just need a little support from an expert. You'll gain access to all of our custom planning documents, monthly check-ins, and much more! We'll be available to answer questions you might have about planning and provide resources, but you handle all of the planning and coordination. This is a perfect option for DIY couples!</Typography>
            </div>
            <ServiceAccordion
                expanded={Plan3}
                onChange={() => setPlan3(!Plan3)}
                title="Virtual Planning Details"
                price="Starting at $500"
            >
                <VirtualPlanningContent/>
            </ServiceAccordion>

            <div>
                <Typography id="plan4" variant="h3" className={classes.serviceHeader}>Add-Ons & A La Carte</Typography>
                <Typography variant="body1">Something missing or need something more? We offer a variety of services you can add on to any package.</Typography>
            </div>
            <ServiceAccordion
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