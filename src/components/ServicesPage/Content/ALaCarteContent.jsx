import { accordionStyles } from "../AccordionStyles";
import Typography from '@material-ui/core/Typography';
export default function ALaCarteContent() {
  const classes = accordionStyles();
  return (
    <div className={classes.content}>
      <Typography variant="body1">Extra hours day-of</Typography>
      <Typography variant="body1">Rehearsal dinner coordination</Typography>
      <Typography variant="body1">Day after brunch coordination</Typography>
      <Typography variant="body1">Bridal/Wedding shower coordination</Typography>
      <Typography variant="body1">Bachelor/Bachelorette party planning</Typography>
    </div>
  );
}