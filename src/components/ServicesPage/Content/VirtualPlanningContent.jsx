import { accordionStyles } from "../AccordionStyles";
export default function VirtualPlanningContent() {
  const classes = accordionStyles();
  return (
    <div className={classes.content}>
      <p>Access to our customized budget and payment spreadsheet tracker</p><p>
        Customized month-by-month planning checklist</p><p>
        Monthly email check-ins</p><p>
        Our trusted vendor recommendations</p><p>
        Tips for communicating with vendors, including meeting checklists</p><p>
        Day-of timeline template</p>
    </div>
  );
}