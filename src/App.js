import React, { useState } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid'
import Filter from './Components/Filter'
import MovieList from './Components/MovieList'
import Adder from './Components/Adder'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MovieDetails from './Components/MovieDetails'

function App() {  

  let [movies,setMovies] = useState([{
    "title": "Interstellar",
    "description": 120,
    "posterUrl": "https://bit.ly/3jzo1eL",
    "rate": 4,
    "trailerURL": "zSWdZVtXT7E",
    "key": uuidv4()
},{
    "title": "Ad Astra",
    "description": 120,
    "posterUrl": "https://bit.ly/3iBK4jD",
    "rate": 5,
    "trailerURL": "P6AaSMfXHbA",
    "key": uuidv4()
},{
    "title": "Solaris",
    "description": 120,
    "posterUrl": "https://bit.ly/2F7E5FS",
    "rate": 3,
    "trailerURL": "9LMMn8czq2w",
    "key": uuidv4()      
},{
    "title": "Star Wars",
    "description": 120,
    "posterUrl": "https://bit.ly/3nkJ07q",
    "rate": 2,
    "trailerURL": "1g3_CFmnU7k",
    "key": uuidv4()
}])

let [input,setInput] = useState('')
let [rating,setRating] = useState(0)

  const inputHandler = (e) => {
    setInput(e)
  }
  const rateHandler = (e) => {
    setRating(e)
  }
  const movieHandler = (e) => {
    setMovies([...e,...movies])
  }  
  return (
    <Router>    
      <div className="App">
        
        <Switch>
        <Route path="/:movieId"><MovieDetails movies={movies}/></Route> 
        <Route path="/" exact>
          <Filter inputHandler={inputHandler} rateHandler={rateHandler}/>
          <MovieList movies={movies.filter(el=>(el.title.toLowerCase().trim().includes(input.toLowerCase().trim()) && el.rate >= rating )?el:'')}/>
          <Adder movieHandler={movieHandler}/>
          </Route>
        </Switch>
        
      </div>    
    </Router>
  )
}

export default App;




