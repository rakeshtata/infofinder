import axios from 'axios'
import {receiveResults} from '../redux/reducer'

const findText = (searchText) => (dispatch) => {
	const url = `http://api.duckduckgo.com/?q=${searchText}&format=json&pretty=1`
	axios.get(url).then((results) => {
		console.log(results.data.Results)
		dispatch(receiveResults(results.data.RelatedTopics))
	}).catch(err => {
		console.log(err)
	})
}
export default findText