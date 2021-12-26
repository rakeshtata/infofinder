import React from 'react'


const Result = (props) => {
	const result = props.result
	return(
		<div>
			<p className="content lead" dangerouslySetInnerHTML={{__html:result.Result}}></p>
		</div>
	)


}

export default Result