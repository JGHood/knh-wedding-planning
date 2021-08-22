import HomeCarousel from '../components/HomePage/HomeCarousel';
import OurServices from '../components/HomePage/OurServices';
import HomeBanner from '../components/HomePage/HomeBanner';
import Button from '@material-ui/core/Button';


export default function Home() {
    return (
        <div>
            <HomeCarousel
                ct1="GREEN BEE"
                ct2="Sustainable Wedding Planning"
                ct3="Denver, CO + Beyond"
            />
            <HomeBanner />
            <OurServices/>
        </div>
    )
}