import HomeCarousel from '../components/HomePage/HomeCarousel';
import OurServices from '../components/HomePage/OurServices';
import Button from '@material-ui/core/Button';


export default function Home() {
    return (
        <div>
            <HomeCarousel
                ct1="Sustainable Wedding Planning"
                ct2="Denver, CO"
                ct3="Potato"
                ct4="Book Your Day Now"
            />
            <OurServices/>
            <div style={{display:"flex", justifyContent:"center"}}>
            <Button size="large" variant="contained" color="primary">Compare Services</Button>
            </div>
        </div>
    )
}