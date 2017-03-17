const React = require('react')

const Showcard = (props) => (
	    	<div className="show-card">
	    		<img src={ `public/img/posters/${props.show.poster} `} alt="" className="show-card-img" />
	    		<div className="show-text">
	    			<h3 className="show-card-title">{props.show.title}</h3>
	    			<h3 className="show-card-year">{props.show.year}</h3>
	    			<p className="show-card-description">{props.show.description}</p>
	    		</div>
	    	</div>
)

Showcard.propTypes = {
	show: React.PropTypes.object.isRequired
}


module.exports = Showcard
