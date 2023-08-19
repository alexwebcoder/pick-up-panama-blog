import "./Feed.css"

const Feed = ({title, link, date, contentSnippet}) => {

    let formatted = { day: "numeric", month: "long", year: "numeric"}
    let articleDate = new Date(date).toLocaleDateString("en-US", formatted)
    return (
        <>
         <a  href={link} target="_blank" rel="noopener noreferrer">
            <h3>{title}</h3>
            <p>{contentSnippet}</p>
            <p className="article-date">{articleDate}</p>
        </a>
        </>
    )
}

export default Feed;