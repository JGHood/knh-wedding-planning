
import { Grid, Typography, Card, CardContent, Button } from '@material-ui/core';
import {makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
        minWidth: 350,
        marginLeft: "1rem",
        marginRight: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    cardTitle: {
        marginTop:"0.5rem"
    },
    cardContainer: {
        marginBottom: "5rem",
        marginTop: "1.5rem",
        width: "90%"
    },
});

export default function OurServices() {
    const classes = useStyles();
    return (
        <div className="Our Services Section">
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Typography variant="h1">Our Services</Typography>
            </div>

            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>

                <Grid
                    className={classes.cardContainer}
                    container
                    direction="row"
                    justify="center"
                    alignItems="space-evenly"
                >
                    <Grid item lg={3}>
                        <Card className={classes.card}>
                            <Typography className={classes.cardTitle} variant="h5">Day Of</Typography>
                            <CardContent>
                                This is just placefiller content! But, some cool info could go here.
                                Really, whatever you want it to be. Lorem ipsum? Never heard of her.
                                But really, put your real content here! Just try it! Congrats on the
                                website!
                            </CardContent>
                            <Button variant="outlined" color="primary">View Plan Details</Button>
                        </Card>
                    </Grid>
                    <Grid item lg={3}>
                        <Card className={classes.card}>
                            <Typography className={classes.cardTitle} variant="h5">Full Plan</Typography>
                            <CardContent>
                                This is just placefiller content! But, some cool info could go here.
                                Really, whatever you want it to be. Lorem ipsum? Never heard of her.
                                But really, put your real content here! Just try it! Congrats on the
                                website!
                            </CardContent>
                            <Button variant="outlined" color="primary">Other Plans</Button>
                        </Card>
                    </Grid>
                    <Grid item lg={3}>
                        <Card className={classes.card}>
                            <Typography className={classes.cardTitle} variant="h5">Other Plans</Typography>
                            <CardContent>
                                This is just placefiller content! But, some cool info could go here.
                                Really, whatever you want it to be. Lorem ipsum? Never heard of her.
                                But really, put your real content here! Just try it! Congrats on the
                                website!
                            </CardContent>
                            <Button variant="outlined" color="primary">View Plan Details</Button>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}