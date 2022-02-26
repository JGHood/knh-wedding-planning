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
    const tableScroll = useMediaQuery('(min-width:370px)');
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
            fontFamily: ['Cinzel', 'serif'],
        },
        flexContainer: {
            display: "flex",
            justifyContent: "center"
        },
        styledTableHeader: {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.common.gray,
            textAlign: 'center',
            margin: 0,
            [theme.breakpoints.down('xs')]: {
                maxWidth: '90px',
                fontSize: '13px',
              },
        },
        styledTableHeaderServices: {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.common.gray,
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
        labelCell: {
            [theme.breakpoints.down('xs')]: {
                maxWidth: '110px',
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
        createData('In-person or Virtual Planning Sessions',2,8,0),
        createData('Regular planning check-ins','Monthly','Weekly','Monthly'),
        createData('Full access to our online planning program',<Check />,<Check />,<Check />),
        createData('Custom budget & payment tracker and month-by-month checklist',<Check />,<Check />,<Check />),
        createData('Our trusted vendor recommendations',<Check />,<Check />,<Check />),
        createData('Vendor contract review',<Check />,<Check />,''),
        createData('Our expert tips for working with vendors, including meeting checklists',<Check />,<Check />,<Check />),
        createData('Aid music selection and seating & reception diagrams',<Check />,<Check />,''),
        createData('Detailed timeline for wedding VIPs and vendors',<Check />,<Check />,<Check />),
        createData('Final communications with vendors and wedding VIPs',<Check />,<Check />,''),
        createData('Vendor payment distribution',<Check />,<Check />,''),
        createData('Coordinate wedding rehearsal the day before or day of.(up to one hour)',<Check />,<Check />,''),
        createData('Setup support (substantial DIY decor may be subject to additional fees)',<Check />,<Check />,''),
        createData('Up to 8 hours of day-of coordination, serving as the single point of contact for the day',<Check />,<Check />,''),
        createData('Oversee execution of all day-of events (ceremony, grand entrance, cake cutting, etc.)',<Check />,<Check />,''),
        createData('Our expert emergency kit',<Check />,<Check />,''),
        createData('Recycling and composting coordination at all events',<Check />,<Check />,''),
        createData('Vendor contract negotiation; serve as contact for all vendors','',<Check />,''),
        createData('Wedding website design','',<Check />,''),
        createData('Coordination of tastings, site visits, and vendor meetings','',<Check />,''),
        createData('Guidance establishing a vision and selecting aesthetic details, including custom mood boards','',<Check />,''),
        createData('Assistance with save-the-date, invitation, and signage design, and production','',<Check />,''),
        createData('Assist with lodging and transportation logistics','',<Check />,''),
        createData('Investment Starts at','$1300','$3900','$500'),
    ];

    return (
        <>
        <Typography id="compare" className={classes.tableTitle} variant="h2">Compare Packages</Typography>
        {!tableScroll && <Typography variant="body1"><ArrowBackIosIcon fontSize="inherit" /> Swipe table to view all plan details <ArrowForwardIosIcon fontSize="inherit"/></Typography>}
        {!tableScroll && <Typography className={classes.rotate} variant="body1">(or, rotate your device)</Typography>}
            <TableContainer className={classes.tableContainer} component={Paper}>
                <Table className={classes.table} size="small" aria-label="Table comparison of plans">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.styledTableHeaderServices}><Typography variant="body1">Services Included</Typography></TableCell>
                            <TableCell className={classes.styledTableHeader} align="center"><Typography variant="body1">Day/Month Of Planning</Typography></TableCell>
                            <TableCell className={classes.styledTableHeader} align="center"><Typography variant="body1">Full Planning</Typography></TableCell>
                            <TableCell className={classes.styledTableHeader} align="center"><Typography variant="body1">Virtual Planning</Typography></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow className={classes.styledTableRow} key={row.label}>
                                <TableCell className={classes.labelCell} component="main" scope="row">
                                    <Typography variant="body1">
                                        {row.label}
                                    </Typography>
                                </TableCell>
                                <TableCell className={classes.styledTableCell} align="center"><Typography variant="body1">{row.DayOfPlan}</Typography></TableCell>
                                <TableCell className={classes.styledTableCell} align="center"><Typography variant="body1">{row.MiddlePlan}</Typography></TableCell>
                                <TableCell className={classes.styledTableCell} align="center"><Typography variant="body1">{row.FullServicePlan}</Typography></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </>
    );
}