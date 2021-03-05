import MovieGridItem from '../components/movie/MovieGridItem';
import MovieListItem from '../components/movie/MovieListItem';
import Filters from '../components/filters/movies/Filters';
import {useSelector, useDispatch} from "react-redux";
import { Button, Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faList } from '@fortawesome/free-solid-svg-icons';
import { setListView } from '../redux/app/actions';


function Movies(props) {

    const movies = useSelector(state => state.movies.movies);
    const isListView = useSelector(state => state.app.listView);

    const dispatch = useDispatch();

    const getMovies = () => {

        if(!movies.length){
            return <div className="col">
                <Alert color="secondary" className="text-center p-5 mt-3">
                    Няма филми за показване от избраните категории
                </Alert>
            </div>
        }

        //TODO render pagination?

        if(isListView){
            const movieList = movies.map(movie => {
                return <MovieListItem
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    overview={movie.overview}
                    poster_path={movie.poster_path}
                />
            })
            return movieList;
        }
     
        const movieGridList = movies.map(movie => {
            return <MovieGridItem
                key={movie.id}
                id={movie.id}
                title={movie.title}
                overview={movie.release_date}
                poster_path={movie.poster_path}
            />
        })
        return movieGridList;
    }

    const toggleListView = () => {
        dispatch(setListView(!isListView));
    }
    const getListIcon = () => {
        if(isListView){
            return faList
        }
        return faTh
    }
    return <>
        <div className="container">
            <Filters/>
            <div className="row">
                <div className="col">
                    <div className="d-flex justify-content-end pb-1">
                        <Button color="light" onClick={toggleListView}>
                            <FontAwesomeIcon icon={getListIcon()}/>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="row">
                {getMovies()}
            </div>
        </div>
    </>
}
export default Movies;