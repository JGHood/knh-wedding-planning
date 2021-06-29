import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Typography, Grid, Button, SvgIcon } from '@material-ui/core';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../images/home-carousel/1.jpg';
import img2 from '../images/home-carousel/2.jpg';
import img3 from '../images/home-carousel/3.jpg';
import img4 from '../images/home-carousel/4.jpg';
import { styled, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const StyledCarousel = styled(Carousel)({
    opacity: 0.55,
});

const useStyles = makeStyles({
    "@keyframes fadeIn1": {
        "0%": {
            opacity: 0,
            transform: "translateY(1rem)"
        },
        "100%": {
            opacity: 1,
            transform: "translateY(0)"
        }
    },
    "@keyframes fadeIn2": {
        "0%": {
            opacity: 0,
            transform: "translateY(1rem)"
        },
        "50%": {
            opacity: 0,
            transform: "translateY(1rem)"
        },
        "100%": {
            opacity: 1,
            transform: "translateY(0)"
        }
    },
    "@keyframes fadeIn3": {
        "0%": {
            opacity: 0,
            transform: "translateY(1rem)"
        },
        "67%": {
            opacity: 0,
            transform: "translateY(1rem)"
        },
        "100%": {
            opacity: 1,
            transform: "translateY(0)"
        }
    },
    "@keyframes fadeIn4": {
        "0%": {
            opacity: 0,
            transform: "translateY(1rem)"
        },
        "75%": {
            opacity: 0,
            transform: "translateY(1rem)"
        },
        "100%": {
            opacity: 1,
            transform: "translateY(0)"
        }
    },
    carouselText: {
        position: "absolute",
        zIndex: 2,
        display: "flex",
        color: "white",

    },
    carouselContainer: {
        backgroundColor: "black",
        width: "auto",
        zIndex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    carouselImageContainer: {
        maxHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    ct1: {
        animation: "$fadeIn1 0.75s ease-in-out",
    },
    ct2: {
        animation: "$fadeIn2 1.5s ease-in-out",
    },
    ct3: {
        animation: "$fadeIn3 2.25s ease-in-out",
    },
    ct4: {
        marginTop: "3rem",
        animation: "$fadeIn4 3s ease-in-out",
    }
});

export default function HomeCarousel(props) {
    const classes = useStyles();
    return (
            <div className={classes.carouselContainer}>
                <Grid
                    className={classes.carouselText}
                    container
                    direction="column"
                    justify="space-evenly"
                    alignItems="center"
                >
                    <Grid item className={classes.ct1}><Typography variant="h4">{props.ct1}</Typography></Grid>
                    <Grid item className={classes.ct2}><Typography variant="h4">{props.ct2}</Typography></Grid>
                    <Grid item className={classes.ct3}><Typography variant="h4">{props.ct3}</Typography></Grid>
                    <Grid item className={classes.ct4}><Button variant="outlined" color="secondary"><Typography variant="button2">{props.ct4}</Typography></Button></Grid>
                </Grid>
                <StyledCarousel style={{ height: "60vh" }} autoPlay interval={5000} transitionTime={3000} showStatus={false} showArrows={false} showThumbs={false} infiniteLoop>
                    <div className={clsx(classes.carouselImageContainer)}>
                        <img src={img1} />
                    </div>
                    <div className={classes.carouselImageContainer}>
                        <img src={img2} />
                    </div>
                    <div className={classes.carouselImageContainer}>
                        <img src={img3} />
                    </div>
                    <div className={classes.carouselImageContainer}>
                        <img src={img4} />
                    </div>
                </StyledCarousel>
            </div>
    )
}