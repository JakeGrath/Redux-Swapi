// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCH_CHARACTER_START = 'FETCH_CHARACTER_START';
export const FETCH_CHARACTER_SUCCESS = 'FETCH_CHARACTER_SUCCESS';
export const FETCH_CHARACTER_ERROR = 'FETCH_CHARACTER_ERROR';

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator


export const getCharacter = () => dispatch => {
    axios
    .get(`https://swapi.co/api/people/`)
    .then(({ data }) =>{
        dispatch({ 
            type: FETCH_CHARACTER_SUCCESS, 
            payload: data.results
        })
    })
    .catch(err => {
        dispatch({ type: FETCH_CHARACTER_ERROR, payload: err})
    })
}
