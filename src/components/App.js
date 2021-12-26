import React,{ useState , useEffect}  from 'react'
import SearchForm  from './SearchForm'
import SearchResults  from './SearchResults'
import { useDispatch } from 'react-redux'
import findText from '../services/appAPI'


const App = () => {
	const dispatch = useDispatch();
	const [searchText,setSearchText] = useState("")
	useEffect(() => {
		if(searchText !== '') {
			dispatch(findText(searchText))
		}
	},[searchText])
	return(
		<div>
			<SearchForm setSearchText = {setSearchText}/>
			<SearchResults searchText = {searchText} />
		</div>
	)
}

export default App