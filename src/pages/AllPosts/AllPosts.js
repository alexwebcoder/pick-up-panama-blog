import BlogList from "../Home/BlogList";
import useFetch from "../../hooks/useFetch";
import './AllPosts.css';


import { TabTitle, Capitalize } from '../../utils/GeneralFunctions';
import Featured from "../Home/Featured";

const AllPosts= () => {
  const {data, isPending, error} = useFetch('https://pick-705a9-default-rtdb.firebaseio.com/blogs/.json');
  TabTitle('Pick Up Panama Blog Posts');
  Capitalize();

  return (
    <main id='main-element' className='all-posts'>
        <h1>All Blog Posts</h1>
                <Featured />
          { error && <div>{ error }</div>}
          { isPending && <div>Loading...</div> }
          {data && <BlogList blogs={data} title="All Blogs!" />}
    </main>
  );
};

export default AllPosts;
