import Banner from "../components/Banner";
import HotJobs from "../components/HotJobs";


const Home = () => {
    return (
        <div className="flex flex-col gap-10">
            <Banner />
            <HotJobs />
        </div>
    );
};

export default Home;