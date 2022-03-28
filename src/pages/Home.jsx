import HomeCarousel from '../components/HomePage/HomeCarousel';
import OurServices from '../components/HomePage/OurServices';
import HomeBanner from '../components/HomePage/HomeBanner';
import GreenerWedding from '../components/HomePage/GreenerWedding';
import CongratsBanner from '../components/HomePage/CongratsBanner';
import Helmet from 'react-helmet';

export default function Home() {
    return (
        <div>
            <Helmet>
                <title>Green Bee Weddings- Denver's Sustainable Wedding Planner</title>
                <meta name="description" content="Green Bee Weddings is Colorado's leading sustainable wedding planner, allowing you to celebrate your love for each other and for the environment." />
            </Helmet>
            <HomeCarousel
                ct1="Planning + Coordinating"
                ct2="Beautiful Weddings for"
                ct3="Eco-Friendly Couples"
                ct4="Serving Denver, Colorado + beyond"
            />
            <HomeBanner />
            <CongratsBanner />
            <GreenerWedding />
            <OurServices/>
        </div>
    )
}