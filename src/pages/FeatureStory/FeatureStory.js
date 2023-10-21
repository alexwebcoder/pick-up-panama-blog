import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../useFetch";
import { TabTitle, Capitalize } from "../../utils/GeneralFunctions";

const FeatureStory = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/featured/" + id);

  TabTitle("How Do I Visit the Panama Canal?");
  Capitalize();

  const featureNavigate = useNavigate();
  const goToElCangrejoStory = () => {
    featureNavigate("/blogs/things-to-do-in-el-cangrejo");
  };
  const goToSafetyStoryA = () => {
    featureNavigate("/blogs/is-panama-safe");
  };

  return (
    <main className={`blog-details margin `}>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <section className={blog.className}>
          <div className="line-divider centered wide">
            <p className="diamond-text-box date">
              <span className="left"></span>
              <span className="content caps centered">{blog.date}</span>
              <span className="right"></span>
            </p>
          </div>
          <h1 className="centered">{blog.title}</h1>
          <p className="body intro">{blog.body}</p>
          <div className="button-parent">
            <button title="Things to do in El Cangrejo" onClick={goToElCangrejoStory}>&#60;</button>
            <button title="Is Panama safe?" onClick={goToSafetyStoryA}>&#62;</button>
          </div>
        </section>
      )}
    </main>
  );
};

export default FeatureStory;
