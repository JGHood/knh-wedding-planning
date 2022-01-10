import HomeCarousel from '../components/HomePage/HomeCarousel';
import OurServices from '../components/HomePage/OurServices';
import HomeBanner from '../components/HomePage/HomeBanner';
import MeetKristenBanner from '../components/HomePage/MeetKristenBanner';
import Button from '@material-ui/core/Button';

export default function Home() {
    return (
        <div>
            <HomeCarousel
                ct1="Planning + Coordinating"
                ct2="Beautiful Weddings for"
                ct3="Eco-Friendly Couples"
                ct4="Serving Denver, CO + oklahoma + beyond"
            />
            <HomeBanner />
            <OurServices/>
            <MeetKristenBanner />
        </div>
    )
}