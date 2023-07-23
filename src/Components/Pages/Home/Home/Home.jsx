import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Paper from "../Paper/Paper";
import PopularColleges from "../PopularColleges/PopularColleges";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularColleges></PopularColleges>
            <Paper></Paper>
        <Gallery></Gallery>
        </div>
        
    );
};

export default Home;