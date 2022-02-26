import { accordionStyles } from "../AccordionStyles";
import Typography from '@material-ui/core/Typography';
export default function FullPlanningContent() {
  const classes = accordionStyles();
  return (
    <div className={classes.content}>
<Typography variant="body1" className={classes.listItem}>Eight planning sessions and unlimited email availability</Typography><Typography variant="body1" className={classes.listItem}>
Weekly email check-ins</Typography><Typography variant="body1" className={classes.listItem}>
Vendor recommendations, selection, and contract negotiation; serve as contact for all vendors</Typography><Typography variant="body1" className={classes.listItem}>
Wedding website design</Typography><Typography variant="body1" className={classes.listItem}>
Coordination of tastings, site visits, and vendor meetings</Typography><Typography variant="body1" className={classes.listItem}>
Guidance establishing a vision and selecting aesthetic details, including custom mood boards</Typography><Typography variant="body1" className={classes.listItem}>
Assistance with save-the-date, invitation, and signage design and production</Typography><Typography variant="body1" className={classes.listItem}>
Suggest, coordinate, assemble wedding party gifts, welcome bags and favors</Typography><Typography variant="body1" className={classes.listItem}>
Assist with lodging and transportation logistics</Typography><Typography variant="body1" className={classes.listItem}>
Detailed timeline for wedding VIPs and vendors</Typography><Typography variant="body1" className={classes.listItem}>
Up to 8 hours of day-of coordination</Typography><Typography variant="body1" className={classes.listItem}>
Recycling and composting coordination at all events</Typography><Typography variant="body1" className={classes.listItem}>
<b>PLUS All month-of</b> <em>services (see above)</em></Typography>

      <em>Mileage & hotel accommodations may apply to meetings and events</em><br />
      <em>*substantial DIY decor may be subject to additional fees</em>
    </div>
  );
}