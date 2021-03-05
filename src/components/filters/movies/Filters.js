import React, {useEffect} from 'react';
import SelectYear from './SelectYear';
import SelectGenres from './SelectGenres';
import {Button} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../../redux/movies/actions';

const Filters = (props) => {

    const selectedYear = useSelector(state => state.movies.selectedFilters.selectedYear);
    const selectedGenres = useSelector(state => state.movies.selectedFilters.selectedGenres);

    const dispatch = useDispatch();
    
    const loadMovies = () => {
        dispatch(getMovies({
            year: selectedYear,
            page: 1,
            with_genres: selectedGenres.toString(),
        }));
    }

    useEffect(() => {
        loadMovies();
    }, []);

    

    return (
        <>
            <div className="row">
                <div className="col-md-4">
                    <SelectYear/>
                </div>
                <div className="col-md-4">
                    <SelectGenres/>
                </div>
                <div className="col-md-4">
                    
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <Button color="secondary" onClick={loadMovies}>Търси</Button>
                </div>
            </div>
        </>
    );
}

export default Filters;