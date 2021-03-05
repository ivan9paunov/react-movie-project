import actions from '../tv/action-types';
import networkClient from '../../network/network-client';

export function setTVSeries(tvseries){
    return {type: actions.SET_TVSERIES, payload: tvseries};
}

export const getTVSeries = params => async dispatch => {
    try {
        const response = await networkClient.get(
            'discover/tv',
            params,
        )
        dispatch(setTVSeries(response.results));
    } catch (error) {
        console.log(error)
    }
}


export const getTV = params => async dispatch => {
    try {
        const response = await networkClient.get(
            `tv/${params.tvId}`,
        )
        dispatch(setTV(response));
    } catch (error) {
        console.log(error)
    }
}

export function setTV(tv){
    return {type: actions.SET_TV, payload: tv};
}

export const getGenres = params => async dispatch => {
    try {
        const response = await networkClient.get(
            'genre/tv/list',
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