import "./SearchResults.css"

const SearchResults = ({ results }) => {

   return <div className="results-list">
     {
        results.map((result, id) => {
            return <div key={id}>{result.body}</div>
        })
     }

   </div>
}
 
export default SearchResults;