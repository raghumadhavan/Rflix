const React = require('react')
const Showcard = require('./Showcard')
const {arrayOf , object, string } = React.PropTypes
const Header = require('./Header')
const { connector } = require('./Store')

const Search = React.createClass({
	
	propTypes: {
		route : object,
		searchTerm: string
	},
	render() {
		return(
		  <div className="container">
		  		<Header showSearch /> 
			  	<div className="shows">
				    {this.props.route.shows
				    	.filter((show) => `${show.title} ${show.description}`.toUpperCase
				    		().indexOf(this.props.searchTerm.toUpperCase())>=0)
				    	.map((show) => (
				    	<Showcard show={show} key={show.imdbID}/>
				    ))}
				</div>    
		  </div> 
  		)
	 }
  	})

module.exports = connector(Search)
