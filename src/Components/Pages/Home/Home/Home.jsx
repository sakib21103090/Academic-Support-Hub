import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Paper from "../Paper/Paper";
import PopularColleges from "../PopularColleges/PopularColleges";
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
       <Helmet>
        <title>Academic SupportHub | Home</title>
      </Helmet>
            <Banner></Banner>
            <PopularColleges></PopularColleges>
            <Paper></Paper>
        <Gallery></Gallery>
        </div>
        
    );
};

export default Home;