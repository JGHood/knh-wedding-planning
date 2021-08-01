import { Carousel } from 'react-responsive-carousel';
import { NavLink } from 'react-router-dom';
import { Typography, Grid, Button, useMediaQuery } from '@material-ui/core';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import makeStyles from '@material-ui/core/styles/makeStyles';
var ArborS = "https://firebasestorage.googleapis.com/v0/b/knh-wedding-planning.appspot.com/o/carousel-images%2FArbor%2FArbor-S.jpg?alt=media&token=348f8485-5434-4126-863b-2bbf01a19591";
var ArborM = "https://firebasestorage.googleapis.com/v0/b/knh-wedding-planning.appspot.com/o/carousel-images%2FArbor%2FArbor-M.jpg?alt=media&token=38783197-0ca3-4fe0-9996-03fe4e4bf877";
var ArborL = "https://firebasestorage.googleapis.com/v0/b/knh-wedding-planning.appspot.com/o/carousel-images%2FArbor%2FArbor-L.jpg?alt=media&token=9d56a145-c5c5-436a-b7df-e6077605aa56";
var ArborXL = "https://firebasestorage.googleapis.com/v0/b/knh-wedding-planning.appspot.com/o/carousel-images%2FArbor%2FArbor-XL.jpg?alt=media&token=9d0ee07c-3e4d-474e-b304-0cc43bea8d7b";
var ShoesS = "https://firebasestorage.googleapis.com/v0/b/knh-wedding-planning.appspot.com/o/carousel-images%2FShoes%2FShoes-S.jpg?alt=media&token=b5747ab5-04aa-4d27-a742-19a3727ea5a0";
var ShoesM = "https://firebasestorage.googleapis.com/v0/b/knh-wedding-planning.appspot.com/o/carousel-images%2FShoes%2FShoes-M.jpg?alt=media&token=dc95a839-4600-47e7-9542-1abb0ed262ef";
var ShoesL = "https://firebasestorage.googleapis.com/v0/b/knh-wedding-planning.appspot.com/o/carousel-images%2FShoes%2FShoes-L.jpg?alt=media&token=e4ffe625-89cf-42ae-aa6d-c85458d882e0";
var ShoesXL = "https://firebasestorage.googleapis.com/v0/b/knh-wedding-planning.appspot.com/o/carousel-images%2FShoes%2FShoes-XL.jpg?alt=media&token=93f00ee2-c361-4781-bbfd-8ffbab29cf58";
var BouquetsS = "https://firebasestorage.googleapis.com/v0/b/knh-wedding-planning.appspot.com/o/carousel-images%2FBouquets%2FBouquets-S.jpg?alt=media&token=d4f5af11-b7de-4da4-b4a7-f47fc645b8c1";
var BouquetsM = "https://firebasestorage.googleapis.com/v0/b/knh-wedding-planning.appspot.com/o/carousel-images%2FBouquets%2FBouquets-M.jpg?alt=media&token=4b64fed6-1013-4f2f-821a-265496d9f7d7";
var BouquetsL = "https://firebasestorage.googleapis.com/v0/b/knh-wedding-planning.appspot.com/o/carousel-images%2FBouquets%2FBouquets-L.jpg?alt=media&token=74a2b249-13c1-4478-b7b2-0a4a25e5429a";
var BouquetsXL = "https://firebasestorage.googleapis.com/v0/b/knh-wedding-planning.appspot.com/o/carousel-images%2FBouquets%2FBouquets-XL.jpg?alt=media&token=cba1c091-0d95-4345-b23b-e030ce4fc7cc";

export default function HomeCarousel(props) {
    const isDesktop = useMediaQuery('(min-width:768px)');
    
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
        justifyContent: "center",
    },
    carouselImageContainer: {
        maxHeight: isDesktop ? "60vh" : "30vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    ct1: {
        animation: "$fadeIn1 0.5s ease-in-out",
    },
    ct2: {
        animation: "$fadeIn2 1.0s ease-in-out",
    },
    ct3: {
        animation: "$fadeIn3 1.5s ease-in-out",
    },
    ct4: {
        marginTop: "3rem",
        animation: "$fadeIn4 2.0s ease-in-out",
    },
    carousel: {
        
    },
    image: {
        width: "100%",
        minHeight: isDesktop ? "60vh" : "40vh",
        opacity: 0.6
    }
    });
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
                <Grid item className={classes.ct1}><Typography variant="h5">{props.ct1}</Typography></Grid>
                <Grid item className={classes.ct2}><Typography variant="h5">{props.ct2}</Typography></Grid>
                <Grid item className={classes.ct3}><Typography variant="h5">{props.ct3}</Typography></Grid>
                <Grid item className={classes.ct4}><NavLink exact to='/services'><Button variant="outlined" color="secondary"><Typography variant="button2">{props.ct4}</Typography></Button></NavLink></Grid>
            </Grid>
            

                <Carousel swipeable autoPlay interval={10000} transitionTime={3000} showStatus={false} showArrows={false} showThumbs={false} showIndicators={isDesktop ? true : false} infiniteLoop>
                <div className={classes.carouselImageContainer}>
                            <img className={classes.image} alt="shoes of a groom and bride standing side by sdie" src={ShoesS} srcSet={`${ShoesS} 400w, ${ShoesM} 1000w, ${ShoesL} 2000w ${ShoesXL} 4000w`} sizes="100vw" />
                        </div>
                        <div className={classes.carouselImageContainer}>
                            <img className={classes.image} alt="wedding arbor with flowers on it" src={ArborS} srcSet={`${ArborS} 400w, ${ArborM} 1000w, ${ArborL} 2000w ${ArborXL} 4000w`} sizes="100vw" />
                        </div>
                        <div className={classes.carouselImageContainer}>
                            <img className={classes.image} alt="four flower bouqets laying on wooden table" src={BouquetsS} srcSet={`${BouquetsS} 400w, ${BouquetsM} 1000w, ${BouquetsL} 2000w ${BouquetsXL} 4000w`} sizes="100vw" />
                        </div>
                </Carousel>
        </div>
    )
}