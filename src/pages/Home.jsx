import HomeCarousel from '../components/HomeCarousel';
import {Grid, Typography, Card, CardContent } from '@material-ui/core';
import {makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
        minWidth: 350,
        marginLeft: "1rem",
        marginRight: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "1.5rem"
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

export default function Home() {
    const classes = useStyles();
    return (
        <div>
            <HomeCarousel
                ct1="Sustainable Wedding Planning"
                ct2="Denver, CO"
                ct3="Potato"
                ct4="Book Your Day Now"
            />
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
                            <Typography className={classes.cardTitle} variant="h5">Card Title</Typography>
                            <CardContent>
                                This is just placefiller content! But, some cool info could go here.
                                Really, whatever you want it to be. Lorem ipsum? Never heard of her.
                                But really, put your real content here! Just try it! Congrats on the
                                website!
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item lg={3}>
                        <Card className={classes.card}>
                            <Typography className={classes.cardTitle} variant="h5">Card Title</Typography>
                            <CardContent>
                            This is just placefiller content! But, some cool info could go here.
                                Really, whatever you want it to be. Lorem ipsum? Never heard of her.
                                But really, put your real content here! Just try it! Congrats on the
                                website!
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item lg={3}>
                        <Card className={classes.card}>
                            <Typography className={classes.cardTitle} variant="h5">Card Title</Typography>
                            <CardContent>
                                This is just placefiller content! But, some cool info could go here.
                                Really, whatever you want it to be. Lorem ipsum? Never heard of her.
                                But really, put your real content here! Just try it! Congrats on the
                                website!
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}