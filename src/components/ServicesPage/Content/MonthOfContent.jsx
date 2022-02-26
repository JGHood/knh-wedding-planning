import { accordionStyles } from "../AccordionStyles";
import Typography from '@material-ui/core/Typography';
export default function MonthOfContent() {
  const classes = accordionStyles();
  return (
    <div className={classes.content}>
      <Typography variant="body1" className={classes.listItem}>Two planning sessions and unlimited email availability</Typography><Typography variant="body1" className={classes.listItem}>
        Full access to our online planning program</Typography><Typography variant="body1" className={classes.listItem}>
        Custom budget & payment tracker and month-by-month checklist</Typography><Typography variant="body1" className={classes.listItem}>
        Vendor contract review</Typography><Typography variant="body1" className={classes.listItem}>
        Aid music selection and seating & reception diagrams</Typography><Typography variant="body1" className={classes.listItem}>
        Detailed timeline for wedding VIPs and vendors</Typography><Typography variant="body1" className={classes.listItem}>
        Final communications with vendors and wedding VIPs</Typography><Typography variant="body1" className={classes.listItem}>
        Vendor payment distribution</Typography><Typography variant="body1" className={classes.listItem}>
        Coordinate wedding rehearsal the day before or day of.(up to one hour)</Typography><Typography variant="body1" className={classes.listItem}>
        Setup support (substantial DIY decor may be subject to additional fees)</Typography><Typography variant="body1" className={classes.listItem}>
        Up to 8 hours of day-of coordination, serving as the single point of contact for the day</Typography><Typography variant="body1" className={classes.listItem}>
        Oversee execution of all day-of events (ceremony, grand entrance, cake cutting, etc.)</Typography><Typography variant="body1" className={classes.listItem}>
        Our expert emergency kit</Typography><Typography variant="body1" className={classes.listItem}>
        Recycling and composting coordination at all events</Typography>
      <em>Mileage & hotel accommodations may apply to meetings and events</em><br />
      <em>*substantial DIY decor may be subject to additional fees</em>
    </div>
  );
}