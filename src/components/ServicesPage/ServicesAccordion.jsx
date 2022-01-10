import { useState, useEffect } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Accordion from '@material-ui/core/Accordion';
import { Link } from 'react-router-dom';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useMediaQuery from '@material-ui/core/useMediaQuery';

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
    const isDesktop = useMediaQuery('(min-width:768px)');
    const useStyles = makeStyles((theme) => ({
        accordionContainer: {
            width: isDesktop ? '70%' : "98%",
            marginTop: theme.typography.fontSize * 2.5,
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
            display: 'block',
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
        }
    }));
    const classes = useStyles();

    return (
        <div className={classes.accordionContainer}>
            <div className={classes.accordionTitleContainer}>
                <Typography className={classes.accordionTitle} variant="h4">Our Packages</Typography>
            </div>
            <Accordion id="plan1" expanded={Plan1} onChange={() => setPlan1(!Plan1)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon color="secondary" />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={classes.accordionSummary}
                >
                    <Typography className={classes.heading} variant="h3">Month of Coordination</Typography>

                </AccordionSummary>
                <AccordionDetails className={classes.details}>
                    <div>
                        <Typography>
                            <div>
                                <ul>
                                    <li>Up to 2 in-person or virtual coordination meetings</li>
                                    <li>Unlimited emails starting 60 days before your wedding day</li>
                                    <li>Venue walkthrough</li>
                                    <li>Custom budget & payment spreadsheet tracker</li>
                                    <li>Seating and reception diagrams</li>
                                    <li>Music selection assistance</li>
                                    <li>Detailed day-of timeline for wedding party, family, and vendors</li>
                                    <li>Final vendor confirmation and coordination</li>
                                    <li>Wedding rehearsal coordination (one hour)</li>
                                    <li>Setup support*</li>
                                    <li>Up to 8 hours of day-of coordination

                                        <ul>
                                            <li>Single point of contact for the day of your wedding</li>
                                            <li>Ceremony and event coordination (e.g. grand entrance, cake cutting, etc.)</li>
                                        </ul>
                                    </li>

                                </ul>
                                <em>Mileage & hotel accommodations may apply to meetings and events over 30 miles from Denver</em><br />
                                <em>*substantial DIY decor may be subject to additional fees</em>
                            </div>
                        </Typography>
                    </div>
                    <div className={classes.packageBottom}>
                        <div className={classes.priceLabel}>
                            Starting at $1300
                        </div>
                        <Typography className={classes.compareLink} type="body1"><Link className={classes.compareLink} to="services#compare"><em>Compare Packages</em></Link></Typography>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion id="plan2" expanded={Plan2} onChange={() => setPlan2(!Plan2)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon color="secondary" />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    className={classes.accordionSummary}
                >
                    <div>
                        <Typography className={classes.heading} variant="h3">Full Planning & Coordination</Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails className={classes.details}>
                    <div>
                        <Typography>
                            <ul>
                                <li>Up to 8 in-person or virtual coordination meetings</li>
                                <li>Unlimited emails</li>
                                <li>Weekly planning check-ins</li>
                                <li>Vendor recommendations</li>
                                <li>Custom budget & payment spreadsheet tracker</li>
                                <li>Custom month-by-month checklist</li>
                                <li>Guidance establishing a vision and selecting aesthetic details, including custom mood boards</li>
                                <li>Invitation and website design advice</li>
                                <li>Assist with lodging and transportation logistics</li>
                                <li>Venue & vendor selection and contract negotiation</li>
                                <li>Attend site visits, tastings, vendor meetings, etc. as desired</li>
                                <li>Assistance with save-the-date, invitation, and signage selection and production</li>
                                <li>Wedding website building</li>
                                <li>Venue walkthrough (about 30 days before)</li>
                                <li>Seating and reception diagrams</li>
                                <li>Music selection assistance</li>
                                <li>Suggest, coordinate, assemble wedding party gifts, welcome bags and favors</li>
                                <li>Detailed timeline for wedding party, family, and vendors</li>
                                <li>Final vendor confirmation and coordination</li>
                                <li>Wedding rehearsal coordination (one hour)</li>
                                <li>Setup [and breakdown?] support*</li>
                                <li>Up to 8 hours of day-of coordination

                                    <ul>
                                        <li>Single point of contact for the day of your wedding</li>
                                        <li>Ceremony and event coordination (e.g. grand entrance, cake cutting, etc.)</li>
                                        <li>Emergency kit</li>
                                    </ul>
                                </li>
                            </ul>
                            <em>Mileage & hotel accommodations may apply to meetings and events over 30 miles from Denver</em><br />
                            <em>*substantial DIY decor may be subject to additional fees</em>
                        </Typography>
                    </div>
                    <div className={classes.packageBottom}>
                        <div className={classes.priceLabel}>
                            Starting at $3900
                        </div>
                        <Typography className={classes.compareLink} type="body1"><Link className={classes.compareLink} to="services#compare"><em>Compare Packages</em></Link></Typography>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion id="plan3" expanded={Plan3} onChange={() => setPlan3(!Plan3)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon color="secondary" />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    className={classes.accordionSummary}
                >
                    <Typography className={classes.heading} variant="h3">Virtual Planning</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.details}>
                    <Typography>
                        <ul>
                            <li>Access to our custom budget & payment spreadsheet tracker</li>
                            <li>A customized month-by-month checklist</li>
                            <li>Monthly check-ins</li>
                            <li>Our personal vendor recommendations</li>
                            <li>Day-of timeline template</li>
                            <li>Vendor checklists for meetings (questions to ask, things to cover, etc.)</li>
                            <li>Unlimited email consultations</li>

                        </ul>
                    </Typography>
                    <div className={classes.packageBottom}>
                        <div className={classes.priceLabel}>
                            Starting at $500
                        </div>
                        <Typography className={classes.compareLink} type="body1"><Link className={classes.compareLink} to="services#compare"><em>Compare Packages</em></Link></Typography>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion id="plan4" expanded={Plan4} onChange={() => setPlan4(!Plan4)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon color="secondary" />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    className={classes.accordionSummary}
                >
                    <Typography className={classes.heading} variant="h3">Add-Ons & A La Carte</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.details}>
                    <div>
                        <Typography variant="body1">
                            <ul>
                                <li>Extra hours day-of</li>
                                <li>Rehearsal dinner coordination</li>
                                <li>Day after brunch coordination</li>
                                <li>Bridal/Wedding shower coordination</li>
                                <li>Bachelor/Bachelorette party planning</li>
                            </ul>
                            <em>Contact us for a quote on your a la carte package!</em>
                        </Typography>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}