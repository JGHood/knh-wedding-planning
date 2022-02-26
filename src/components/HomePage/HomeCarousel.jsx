//import { Carousel } from 'react-responsive-carousel';
import { Typography, Grid, useMediaQuery } from '@material-ui/core';
import GBWButton from '../GBWButton';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import makeStyles from '@material-ui/core/styles/makeStyles';
var TableSet = "https://firebasestorage.googleapis.com/v0/b/knh-wedding-planning.appspot.com/o/carousel-images%2FTableSet.webp?alt=media&token=dae9d535-6fd2-4531-bbda-6f323bb02760";

export default function HomeCarousel(props) {
    const isDesktop = useMediaQuery('(min-width:768px)');

    const useStyles = makeStyles((theme) => ({
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
            justifyContent: "center",
        },
        carouselImageContainer: {
            maxHeight: isDesktop ? "60vh" : "20vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        ct1: {
            animation: "$fadeIn1 0.5s ease-in-out",
            fontSize: '48px',
        },
        ct2: {
            animation: "$fadeIn2 1.0s ease-in-out",
            fontSize: '32px',
        },
        ct3: {
            animation: "$fadeIn3 1.5s ease-in-out",
            fontSize: '32px',
        },
        ct4: {
            width: '80%',
            marginTop: "3rem",
            animation: "$fadeIn4 1.0s ease-in-out",
            textTransform: 'uppercase',
        },
        carousel: {

        },
        image: {
            width: "100%",
            minHeight: isDesktop ? "60vh" : "40vh",
            opacity: 0.6
        },
        text: {
            textAlign: 'center',
        },
        img: {
            background: `url(${TableSet}) no-repeat center center`,
            backgroundSize: 'cover',
            opacity: 0.6,
            minHeight: '500px',
            width: '100%',
            [theme.breakpoints.down('sm')]: {
                minHeight: '280px',
                transform: 'translate3d(0,0,0)',
            },
            [theme.breakpoints.up('sm')]: {
                backgroundAttachment: 'fixed',
            }
        },
        btn: {
            color: 'white',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80%',
            marginTop: "3rem",
            animation: "$fadeIn4 1.5s ease-in-out",
            textTransform: 'uppercase',
        }
    }));
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
                <Grid item className={classes.ct1}><Typography className={classes.text} variant="h2">{props.ct1}</Typography></Grid>
                <Grid item className={classes.ct1}><Typography className={classes.text} variant="h2">{props.ct2}</Typography></Grid>
                <Grid item className={classes.ct1}><Typography className={classes.text} variant="h2">{props.ct3}</Typography></Grid>
                {props.ct4 && <Grid item className={classes.ct4}><Typography className={classes.text} variant="h5">{props.ct4}</Typography></Grid>}
                <Grid item className={classes.btn}><GBWButton variety="outline" to="/services" className={classes.btn} variant="h2">View Our Plans</GBWButton></Grid>
            </Grid>

            <div className={classes.img} />
            { /* <Carousel swipeable autoPlay interval={10000} transitionTime={3000} showStatus={false} showArrows={false} showThumbs={false} showIndicators={isDesktop ? true : false} infiniteLoop>
                <div className={classes.carouselImageContainer}>
                    <img className={classes.image} alt="shoes of a groom and bride standing side by sdie" src={ShoesS} srcSet={`${ShoesS} 400w, ${ShoesM} 1000w, ${ShoesL} 2000w ${ShoesXL} 4000w`} sizes="100vw" />
                </div>
                <div className={classes.carouselImageContainer}>
                    <img className={classes.image} alt="wedding arbor with flowers on it" src={ArborS} srcSet={`${ArborS} 400w, ${ArborM} 1000w, ${ArborL} 2000w ${ArborXL} 4000w`} sizes="100vw" />
                </div>
                <div className={classes.carouselImageContainer}>
                    <img className={classes.image} alt="four flower bouqets laying on wooden table" src={BouquetsS} srcSet={`${BouquetsS} 400w, ${BouquetsM} 1000w, ${BouquetsL} 2000w ${BouquetsXL} 4000w`} sizes="100vw" />
                </div>
    </Carousel> */ }
        </div>
    )
}