import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CheckIcon from '@material-ui/icons/Check';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Typography } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Check() {
    return (
        <CheckIcon alt="check mark" style={{ color: "green" }} />
    )
}

function createData(label, DayOfPlan, MiddlePlan, FullServicePlan) {
    return { label, DayOfPlan, MiddlePlan, FullServicePlan };
}


export default function ServicesTable() {
    const isDesktop = useMediaQuery('(min-width:768px)');
    const tableScroll = useMediaQuery('(min-width:360px)');
    const useStyles = makeStyles((theme) => ({
        table: {
            fontSize: "300px"
        },
        tableContainer: {
            width: isDesktop ? "70%" : "97%",
            marginTop: theme.typography.fontSize,
        },
        tableTitle: {
            marginTop: theme.typography.fontSize * 2.5,
        },
        flexContainer: {
            display: "flex",
            justifyContent: "center"
        },
        styledTableHeader: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
            textAlign: 'center',
            margin: 0,
            [theme.breakpoints.down('xs')]: {
                maxWidth: '90px',
                fontSize: '13px',
              },
        },
        styledTableCell: {
            [theme.breakpoints.down('xs')]: {
                maxWidth: '90px',
                fontSize: '13px',
              },
        },
        styledTableRow: {
            '&:nth-of-type(odd)': {
                backgroundColor: "#f7f7f7",
              },
              margin: 0,
        },
        rotate: {
            fontSize: '12px',
        }
    }));
    const classes = useStyles();

    const rows = [
        createData('In person consultations', 2, 8, 0),
        createData('Emails, calls, and texts', 'Unlimited', 'Unlimited', 'Unlimited'),
        createData('Venue walkthrough', <Check />, <Check />, ''),
        createData('Seating & Reception Diagrams', <Check />, <Check />, ''),
        createData('Music Selection Assistance', <Check />, <Check />, <Check />),
        createData('Detailed day-of timeline', <Check />, <Check />, <Check />),
        createData('Wedding Rehearsal Coordination', <Check />, <Check />, ''),
        createData('Setup/Decor Support', <Check />, <Check />, ''),
        createData('Vendor Recs', <Check />, <Check />, <Check />),
        createData('Day-Of Coordination', '8 hrs', '12 hrs', ''),
        createData('Custom Budget & Payment Spreadsheet', '', <Check />, <Check />),
        createData('Custom Mood Boards', '', <Check />, ''),
        createData('Custom monthly checklist', '', <Check />, <Check />),
        createData('Planning Check-Ins', '', 'Weekly', 'Monthly'),
        createData('Venue and vendor assistance', '', <Check />, <Check />),
        createData('Vendor Management', '', <Check />, ''),
        createData('Attend vendor meetings, tastings, etc.', '', <Check />, ''),
        createData('Hotel Block and Transportation Logistics', '', <Check />, ''),
        createData('Wedding Website Building', '', <Check />, ''),
        createData('Paper goods design', '', <Check />, ''),

        createData('Pricing starting at', "$1300", "$3900", "$500")
    ];

    return (
        <>
        <Typography className={classes.tableTitle} variant="h2">Compare Plans</Typography>
        {!tableScroll && <Typography variant="body1"><ArrowBackIosIcon fontSize="inherit" /> Swipe table to view all plan details <ArrowForwardIosIcon fontSize="inherit"/></Typography>}
        {!tableScroll && <Typography className={classes.rotate} variant="body1">(or, rotate your device)</Typography>}
            <TableContainer className={classes.tableContainer} component={Paper}>
                <Table className={classes.table} size="small" aria-label="Table comparison of plans">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.styledTableHeader}>Services Included</TableCell>
                            <TableCell className={classes.styledTableHeader} align="center">Day/Month Of Planning</TableCell>
                            <TableCell className={classes.styledTableHeader} align="center">Full Planning</TableCell>
                            <TableCell className={classes.styledTableHeader} align="center">Virtual Planning</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow className={classes.styledTableRow} key={row.label}>
                                <TableCell className={classes.styledTableCell} component="main" scope="row">
                                    {row.label}
                                </TableCell>
                                <TableCell className={classes.styledTableCell} align="center">{row.DayOfPlan}</TableCell>
                                <TableCell className={classes.styledTableCell} align="center">{row.MiddlePlan}</TableCell>
                                <TableCell className={classes.styledTableCell} align="center">{row.FullServicePlan}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </>
    );
}