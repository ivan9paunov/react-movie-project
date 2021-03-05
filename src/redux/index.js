import tv from "./tv/reducers";
import movies from "./movies/reducers";
import app from "./app/reducers";
import {combineReducers} from 'redux';

export default combineReducers({movies, tv, app});