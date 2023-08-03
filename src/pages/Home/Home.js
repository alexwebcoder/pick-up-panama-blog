import BlogList from "./BlogList";
import useFetch from "../../useFetch";
import "./Home.css"
import Mission from "../../components/Mission/Mission";
import Hero from "../../components/Hero/Hero";

const Home = () => {
    const {data, isPending, error} = useFetch('http://localhost:8000/blogs');

    return ( 
        <main className="home-content">
          <Mission />
          <Hero />
          {/* This get rendered only if we have a value for error(conditionally) */}
          { error && <div>{ error }</div>}
          { isPending && <div>Loading...</div> }
          {data && <BlogList blogs={data} title="All Blogs!" />}
        </main>
     );
}
 
export default Home;