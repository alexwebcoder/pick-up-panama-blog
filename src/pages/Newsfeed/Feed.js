const Feed = ({title, link, date, contentSnippet}) => {

    let formatted = { day: "numeric", month: "long", year: "numeric"}
    let articleDate = new Date(date).toLocaleDateString("en-US", formatted)
    return (
        <>
          <h3>{title}</h3>
          <p>{contentSnippet}</p>
          <p>{articleDate}</p>
        </>
    )
}

export default Feed;