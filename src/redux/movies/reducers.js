import actions from './action-types';
import {combineReducers} from 'redux';

function movies(state = [], action) {
    switch(action.type) {
        case actions.SET_MOVIES: {
            return [...action.payload]
        }
        default: 
            return state;
    }
}

function movie(state = {}, action) {
    switch(action.type) {
        case actions.SET_MOVIE: {
            return action.payload
        }
        default: 
            return state;
    }
}

function genres(state = [], action) {
    switch(action.type) {
        case actions.SET_GENRES: {
            return [...action.payload]
        }
        default: 
            return state;
    }
}

function selectedFilters(state = {
    selectedYear: '2021',
    selectedGenres: [],
}, action) {
    switch(action.type) {
        case actions.SET_SELECTED_YEAR: {
            return {
                ...state, 
                ...{
                    selectedYear: action.payload,
                }
            }
        }
        case actions.SET_SELECTED_GENRES: {
            return {
                ...state,
                ...{
                    selectedGenres: [...action.payload]
                }
            }
        }
        default: 
            return state;
    }
}

export default combineReducers({movies, movie, genres, selectedFilters});
