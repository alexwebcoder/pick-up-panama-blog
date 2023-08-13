import BlogList from "./BlogList";
import useFetch from "../../useFetch";
import "./Home.css"
import Mission from "./Mission";
import Hero from "./Hero";
import Featured from "./Featured";
import Quotes from "./Facts/Facts";
import Carousel from "./Carousel/Carousel";

const Home = () => {
    const {data, isPending, error} = useFetch('http://localhost:8000/blogs');

    return ( 
        <main className="home-content">
          <Mission />
          <Hero />
          <Featured />
          {/* This get rendered only if we have a value for error(conditionally) */}
          { error && <div>{ error }</div>}
          { isPending && <div>Loading...</div> }
          {data && <BlogList blogs={data} title="All Blogs!" />}
          <Quotes />
        </main>
     );
}
 
export default Home;