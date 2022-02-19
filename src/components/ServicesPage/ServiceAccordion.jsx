import { accordionStyles } from './AccordionStyles';
import Accordion from '@material-ui/core/Accordion';
import { Link } from 'react-router-dom';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function ServiceAccordion({ title, price, id, expanded, onChange, children, noBottom }) {
  const classes = accordionStyles();
  return (
    <Accordion id={id} expanded={expanded} onChange={onChange}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color="secondary" />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        className={classes.accordionSummary}
      >
        <Typography className={classes.heading} variant="h4">{title}</Typography>

      </AccordionSummary>
      <AccordionDetails className={classes.details}>
        <div>
        <Typography variant="body1">
          {children}
        </Typography>
        </div>
        {!noBottom && <div className={classes.packageBottom}>
          <div className={classes.priceLabel}>
            {price}
          </div>
          <Typography className={classes.compareLink} type="body1"><Link className={classes.compareLink} to="services#compare"><em>Compare Packages</em></Link></Typography>
          <Typography type="body1"><Link to="contact"><b>Book Now</b></Link></Typography>
        </div> }
      </AccordionDetails>
    </Accordion>
  );
}