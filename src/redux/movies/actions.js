import actions from './action-types';
import networkClient from '../../network/network-client';

export function setMovies(movies){
    return {type: actions.SET_MOVIES, payload: movies};
}

export const getMovies = params => async dispatch => {
    try {
        const response = await networkClient.get(
            'discover/movie',
            params,
        )
        dispatch(setMovies(response.results));
    } catch (error) {
        console.log(error)
    }
}

export const getMovie = params => async dispatch => {
    try {
        const response = await networkClient.get(
            `movie/${params.movieId}`,
        )
        dispatch(setMovie(response));
    } catch (error) {
        console.log(error)
    }
}

export function setMovie(movie){
    return {type: actions.SET_MOVIE, payload: movie};
}

export const getGenres = params => async dispatch => {
    try {
        const response = await networkClient.get(
            'genre/movie/list',
            params,
        )
        dispatch(setGenres(response.genres));
    } catch (error) {
        console.log(error)
    }
}

export function setGenres(genres){
    return {type: actions.SET_GENRES, payload: genres};
}

export function setSelectedYear(year){
    return {type: actions.SET_SELECTED_YEAR, payload: year};
}

export function setSelectedGenres(genres){
    return {type: actions.SET_SELECTED_GENRES, payload: genres};
}