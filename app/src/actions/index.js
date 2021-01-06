import axios from "axios"

export const FETCHING_JOKE_START = "FETCHING_JOKE_START"
export const FETCHING_JOKE_SUCCESS = "FETCHING_JOKE_SUCCESS"
export const FETCHING_JOKE_FAIL = "FETCHING_JOKE_FAIL"

const headers = {
  Accept: "application/json"
}

export const Joke = () => dispatch => {
  dispatch({ type: FETCHING_JOKE_START})
  axios
  .get("https://icanhazdadjoke.com/", {headers: headers})
  .then(res => {
    console.log(res)
    dispatch({ type: FETCHING_JOKE_SUCCESS, payload: res.data.joke})
  })
  .catch(err => {
    console.log(err)
    dispatch({ type: FETCHING_JOKE_FAIL, payload: `${err.respoonse.code} code: ${err.response.code}` })
  })
}