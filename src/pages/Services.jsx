import makeStyles from '@material-ui/core/styles/makeStyles';
import ServicesTable from '../components/ServicesPage/ServicesTable';
import ServicesAccordion from '../components/ServicesPage/ServicesAccordion';
const useStyles = makeStyles({
    flexContainer: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
    }
});


export default function Services() {
    const classes = useStyles();

    return (
        <div className={classes.flexContainer}>
            <ServicesAccordion/>
            <ServicesTable/>
        </div>
    );
}