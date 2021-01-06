import { FETCHING_JOKE_START,FETCHING_JOKE_SUCCESS,FETCHING_JOKE_FAIL } from "../actions"

const initialState = {
  Joke: "",
  NewJoke: "",
  isFetching: false,
  error: "",
}

export const rootReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCHING_JOKE_START:
      return {...state, isFetching: true, error: ""}
    case FETCHING_JOKE_SUCCESS:
      return {...state, isFetching: false, NewJoke: action.payload}
    case FETCHING_JOKE_FAIL:
      return {...state, isFetching: false}
    default:
      return state;
  }
}