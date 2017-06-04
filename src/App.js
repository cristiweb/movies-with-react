import React, { Component } from 'react';

const movies =[ 
	{
		id: 1,
		title: "Bad boys 2",
		year: "2003"
	},
	{
		id: 2,
		title: "Armagedon",
		year: "1998"
	},
	{
		id: 3,
		title: "The Matrix",
		year: "1999"
	},
	{
		id: 4,
		title: "X-men",
		year: "2016"
	},
	{
		id: 5,
		title: "Deadpool",
		year: "2016"
	},
	{
		id: 6,
		title: "World War Z",
		year: "2013"
	},
	{
		id: 7,
		title: "Salt",
		year: "2010"
	},
	{
		id: 8,
		title: "50/50",
		year: "2011"
	},
	{
		id: 9,
		title: "Shrek",
		year: "2001"
	},
	{
		id: 10,
		title: "Prometheus",
		year: "2012"
	},
	{
		id: 11,
		title: "The Prestige",
		year: "2006"
	},
	{
		id: 12,
		title: "A series of Unfortunate Events",
		year: "2004"
	},
	{
		id: 13,
		title: "Up",
		year: "2009"
	},
	{
		id: 14,
		title: "The boys from Brazil",
		year: "1979"
	}
]

function searchingFor(term){
	return function(x){
		return x.title.toLowerCase().includes(term.toLowerCase()) || !term;
	}
}

class App extends Component {

	constructor (props){
   		super(props);
   		this.state={
   			movies: movies,
   			term: '',
   		}
   		this.searchHandler = this.searchHandler.bind(this);
   }
  
   searchHandler(event){
   		this.setState({term: event.target.value})
   }

    render() {
        return (
            <div className="app col-sm-6 col-md-6">
        		<div>
        			<h1 className="titlu">Movies with react</h1>
        		</div>
        		<h1>Looking for a specific movie?</h1>
        		<form className="form">
        			 <input type="text"
        				   onChange={this.searchHandler}
        				   value={this.term}
        				   max="30"
        				   size="40"
        				   placeholder="Search..."
        			/>

        		</form>
	        	{
	        		this.state.movies.filter(searchingFor(this.state.term)).map( movie =>
	        					<div key={movie.id} className="col-sm-6 col-md-6">
	        						<ul className="filme">
	        							<li>{movie.title}</li>
	        							<li>{movie.year}</li>
	        						</ul>
	        					</div>
	        				)
	        	}
	        	
     		</div>
        );
    }
}

export default App;
