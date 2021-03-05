import React, {useEffect} from 'react';
import SelectYear from './SelectYear';
import SelectGenres from './SelectGenres';
import {Button} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getTVSeries } from '../../../redux/tv/actions';

const Filters = (props) => {

    const selectedYear = useSelector(state => state.tv.selectedFilters.selectedYear);
    const selectedGenres = useSelector(state => state.tv.selectedFilters.selectedGenres);

    const dispatch = useDispatch();
    
    const loadTVSeries = () => {
        dispatch(getTVSeries({
            year: selectedYear,
            page: 1,
            with_genres: selectedGenres.toString(),
        }));
    }

    useEffect(() => {
        loadTVSeries();
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
            </div>
            <div className="row mb-3">
                <div className="col">
                    <Button color="secondary" onClick={loadTVSeries}>Търси</Button>
                </div>
            </div>
        </>
    );
}

export default Filters;