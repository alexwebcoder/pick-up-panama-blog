import "./Feed.css";
import { TabTitle } from "../../utils/GeneralFunctions";


const Feed = ({title, link, date, contentSnippet}) => {
    TabTitle('Panama News Feed');

    let formatted = { day: "numeric", month: "long", year: "numeric"}
    let articleDate = new Date(date).toLocaleDateString("en-US", formatted)
    return (
        <>
         <a  href={link} target="_blank" rel="noopener noreferrer">
            <h2>{title}</h2>
            <p>{contentSnippet}</p>
            <p className="article-date">{articleDate}</p>
        </a>
        </>
    )
}

export default Feed;