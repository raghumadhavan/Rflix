const React = require('react')
const { Link } = require('react-router')

const Showcard = (props) => (
	<Link to={`/details/${props.show.imdbID}`}>
	    	<div className="show-card">
	    		<img src={ `img/posters/${props.show.poster} `} alt="" className="show-card-img" />
	    		<div className="show-text">
	    			<h3 className="show-card-title">{props.show.title}</h3>
	    			<h3 className="show-card-year">{props.show.year}</h3>
	    			<p className="show-card-description">{props.show.description}</p>
	    		</div>
	    	</div>
	 </Link>
)
const { string } = React.PropTypes
Showcard.propTypes = {
	title : string.isRequired,
	description : string.isRequired,
	year : string.isRequired,
	poster : string.isRequired,
	imdbID : string.isRequired
}


module.exports = Showcard
