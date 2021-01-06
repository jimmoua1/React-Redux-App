import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { Joke } from "../actions/index"

const Title = ({ Joke, NewJoke, isFetching, error}) => {
  useEffect(() => {
    Joke()
  }, [Joke])

  if(isFetching){
    return <h2>Loading...</h2>
  }

  return(
    <div>
      <h1>Come to get some Dad Jokes!!</h1>
      <h2>Dad Joke: {NewJoke}</h2>
      <button onClick={Joke}>New Dad Joke</button>
    </div>
  )
}


const mapStateToProps = state => {
  return{
    Joke: state.Joke,
    NewJoke: state.NewJoke,
    isFetching: state.isFetching,
    error: state.error
  }
}

const mapDispatchStateToProps = { Joke }

export default connect(mapStateToProps, mapDispatchStateToProps)(Title);