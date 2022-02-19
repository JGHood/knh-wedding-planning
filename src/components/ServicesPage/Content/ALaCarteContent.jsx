import { accordionStyles } from "../AccordionStyles";
export default function ALaCarteContent() {
  const classes = accordionStyles();
  return (
    <div className={classes.content}>
      <p>Extra hours day-of</p>
      <p>Rehearsal dinner coordination</p>
      <p>Day after brunch coordination</p>
      <p>Bridal/Wedding shower coordination</p>
      <p>Bachelor/Bachelorette party planning</p>
    </div>
  );
}