import { accordionStyles } from "../AccordionStyles";
import Typography from '@material-ui/core/Typography';
export default function VirtualPlanningContent() {
  const classes = accordionStyles();
  return (
    <div className={classes.content}>
      <Typography  variant="body1" className={classes.listItem}>Access to our customized budget and payment spreadsheet tracker</Typography><Typography  variant="body1" className={classes.listItem}>
        Customized month-by-month planning checklist</Typography><Typography  variant="body1" className={classes.listItem}>
        Monthly email check-ins</Typography><Typography  variant="body1" className={classes.listItem}>
        Our trusted vendor recommendations</Typography><Typography  variant="body1" className={classes.listItem}>
        Tips for communicating with vendors, including meeting checklists</Typography><Typography  variant="body1" className={classes.listItem}>
        Day-of timeline template</Typography>
    </div>
  );
}