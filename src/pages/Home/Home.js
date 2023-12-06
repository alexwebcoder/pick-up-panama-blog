import BlogList from "./BlogList";
import useFetch from "../../useFetch";
import "./Home.css"
import Mission from "./Mission";
import Hero from "./Hero";
import Featured from "./Featured";
import FactSlider from "./FactSlider/FactSlider";
import { TabTitle, Capitalize } from '../../utils/GeneralFunctions';

const Home = () => {
    const {data, isPending, error} = useFetch('http://localhost:8000/blogs');
    TabTitle('Pick Up Panama | Learn About Panama');
    Capitalize();

    return ( 
        <main className="home-content">
          <Mission />
          <Hero />
          <Featured />
          { error && <div>{ error }</div>}
          { isPending && <div>Loading...</div> }
          {data && <BlogList blogs={data} title="All Blogs!" />}
          <FactSlider />
        </main>
     );
}
 
export default Home;