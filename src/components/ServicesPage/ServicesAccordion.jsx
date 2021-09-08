import { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function SimpleAccordion() {
    const [Plan1, setPlan1] = useState(false);
    const [Plan2, setPlan2] = useState(false);
    const [Plan3, setPlan3] = useState(false);
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
        heading: {
            fontSize: theme.typography.h5.fontSize,
            fontWeight: theme.typography.fontWeightBold,
        },
        accordionSummary: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
            marginTop: "1rem"
        },
        previewText: {
            marginTop: "1rem",
        },
    }));
    const classes = useStyles();

    return (
        <div className={classes.accordionContainer}>
            <div className={classes.accordionTitleContainer}>
                <Typography className={classes.accordionTitle} variant="h2">View Our Plans</Typography>
            </div>
            <Accordion expanded={Plan1} onChange={() => setPlan1(!Plan1)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon color="secondary" />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={classes.accordionSummary}
                >
                    <Typography className={classes.heading}>Full Service Plan</Typography>

                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <ul>
                            <li>Up to 8 in-person or virtual coordination meetings</li>
                            <li>Unlimited emails, calls, and texts</li>
                            <li>Weekly planning check-ins</li>
                            <li>Vendor recommendations</li>
                            <li>Custom budget & payment spreadsheet tracker</li>
                            <li>Custom month-by-month checklist</li>
                            <li>Custom mood boards to help ensure we and all vendors are on the same page</li>
                            <li>Invitation and website design advice</li>
                            <li>Hotel block and transportation logistics</li>
                            <li>Venue and vendor assistance and management (contracts, meetings, etc.; I serve as primary contact)</li>
                            <li>Attend site visits, tastings, vendor meetings, etc. as desired</li>
                            <li>Paper goods design</li>
                            <li>Wedding website building</li>
                            <li>Venue walkthrough (about 30 days before)</li>
                            <li>Seating and reception diagrams</li>
                            <li>Music selection assistance</li>
                            <li>Detailed day-of timeline for wedding party, family, and vendors</li>
                            <li>Final vendor confirmation and coordination</li>
                            <li>Wedding rehearsal coordination (one hour)</li>
                            <li>Setup support*</li>
                            <li>Up to 12 hours of day-of coordination</li>

                        </ul>

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={Plan2} onChange={() => setPlan2(!Plan2)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon color="secondary" />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    className={classes.accordionSummary}
                >
                    <div>
                        <Typography className={classes.heading}>Middle Plan</Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={Plan3} onChange={() => setPlan3(!Plan3)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon color="secondary" />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    className={classes.accordionSummary}
                >
                    <Typography className={classes.heading}>Day Of Plan</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}