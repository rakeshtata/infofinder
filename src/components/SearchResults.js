import React  from 'react'
import Result  from './Result'
import { useSelector } from 'react-redux'

const SearchResults = (props) => {

	const results = useSelector(state => state.results)

	const searchText = props.searchText


	return(
		<div>
			{searchText !== '' && <h2 className="page-header">Results for {searchText}</h2>}
			{
				results && results.map((result, i) => {
					return(
						<Result result={result} key={i} />
					)
				})
			}
		</div>
	)
}

export default SearchResults