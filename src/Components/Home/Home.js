
import Footer from "../Footer/Footer";
import HomeContent from "./HomeContent";
import Slider from "./Slider";

function Home() {
    return (
        <>
        <div>
            <Slider/>
        </div>
        <div>
            <HomeContent/>
        </div>
        <div style={{marginTop: "400vh"}}>
            <Footer/> 
        </div>
        </>
    )
}

export default Home;