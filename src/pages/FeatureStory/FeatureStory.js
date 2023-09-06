import { useParams } from "react-router-dom";
import useFetch from '../../useFetch';
import { TabTitle, Capitalize } from '../../utils/GeneralFunctions';


const FeatureStory = () => {

    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/featured/' + id);

    TabTitle('How Do I Visit the Panama Canal?');
    Capitalize();

    return (
        <main className={`blog-details margin `}>
           { isPending && <div>Loading...</div> } 
            { error && <div>{ error }</div> }
            { blog && (

                <section className={blog.className}>
                     <div className="line-divider centered wide">
                        <p className="diamond-text-box date">
                        <span className="left"></span>
                        <span className="content caps centered">{ blog.date }</span>
                        <span className="right"></span>
                        </p>
                     </div>
                     <h1 className="centered caps">{ blog.title }</h1>
                     <p className="body intro">
                        { blog.body }
                    </p>
                </section>
            )
            
            }

        </main>
    )
}



export default FeatureStory;