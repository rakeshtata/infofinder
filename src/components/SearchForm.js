import React,{useRef}  from 'react'


const SearchForm = (props) => {

	const setSearchText = props.setSearchText

	const searchRef = useRef()
	const searchText = (e) => {
		e.preventDefault();
		setSearchText(searchRef.current.value.trim());
	}

	return(
		<div>
			<form onSubmit={searchText} className="well">
				<div className="form-group">
					<label>Search For Something...</label>
					<input type="text" className="form-control" ref={searchRef} />
				</div>
			</form>
		</div>
	)
	

}

export default SearchForm;