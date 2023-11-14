import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../useFetch";
import { TabTitle, Capitalize } from "../../utils/GeneralFunctions";
import "../Home/BlogDetails.css"

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
          <h1 className="centered post-title">{blog.title}</h1>
          <p className="body intro">{blog.intro}</p>
          <h2>{blog.whyImpH2}</h2>
          <p>{blog.thePanaCanWasBuilt}</p>
          <p>{blog.thisMakes}</p>
          <p>{blog.resulted}</p>
          <h2>{blog.howWorkH2}</h2>
          <p>{blog.throughLocks}</p>
          <p>{blog.waterLevel}</p>
          <p>{blog.beforeShip}</p>
          <p>{blog.locksRaise}</p>
          <p>{blog.locksAreChambers}</p>
          <p>{blog.theGatunLake}</p>
          <p>{blog.waterFlows}</p>
          <p>{blog.whenAShip}</p>
          <p>{blog.theTugboats}</p>
          <p>{blog.afterTheShip}</p>
          <p>{blog.onceInside}</p>
          <p>{blog.itTakesAround}</p>
          <p>{blog.shipIsThen}</p>
          <p>{blog.culebraCut}</p>
          <p>{blog.shipGoesThrough}</p>
          <h2>{blog.droughH2}</h2>
          <p>{blog.lakeRelies}</p>
          <p>{blog.hasCaused}</p>
          <p>{blog.canalAuthor}</p>
          <h2>{blog.WhereSeeH2}</h2>
          <p>{blog.thereAreThree}</p>
          <p>{blog.theGatunLocks}</p>
          <p>{blog.pedroMiguel}</p>
          <p>{blog.theBestWay}</p>
          <p>{blog.directBus}</p>
          <p>{blog.hours}</p>
          <p>{blog.itFeatures}</p>
          <p>{blog.forBestExp}</p>








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
