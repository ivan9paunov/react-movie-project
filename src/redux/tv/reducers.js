import actions from './action-types';
import {combineReducers} from 'redux';

function tvseries(state = [], action) {
    switch(action.type) {
        case actions.SET_TVSERIES: {
            return [...action.payload]
        }
        default: 
            return state;
    }
}

function tv(state = {}, action) {
    switch(action.type) {
        case actions.SET_TV: {
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

export default combineReducers({tvseries, tv, genres, selectedFilters});
