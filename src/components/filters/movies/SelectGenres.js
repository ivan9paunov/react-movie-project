import React, { useEffect } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getGenres, setSelectedGenres } from '../../../redux/movies/actions';
import { createSelector } from 'reselect';
const SelectGenres = (props) => {

    const dispatch = useDispatch();

    const genres = useSelector(state => state.movies.genres);

    useEffect(() => {
        dispatch(getGenres({
            language: 'bg-BG',
        }));
    }, []);

    const selectedFilters = useSelector(state => state.movies.selectedFilters)

    const inputOnChange = (event) => {
        const isChecked = event.target.checked;
        const genreId = event.target.value;
        let currentGenres = selectedFilters.selectedGenres;
        console.log('inputOnChange', isChecked, genreId);
        if(isChecked){
            currentGenres.push(genreId);
        }else {
            currentGenres = currentGenres.filter(id => id !== genreId);
        }
        dispatch(setSelectedGenres(currentGenres));
    }

    const getId = (_, id) => id;
    const getSelectedGenres = state => state.selectedGenres;

    const isGenreSelected = createSelector(
        getSelectedGenres,
        getId,
        (genres, id) => {
            return genres.includes(id)
        }
    )

    const isChecked = (genreId) => {
        const isChecked = isGenreSelected(selectedFilters, genreId);
        return isChecked;
    }

    const getGenresCheckboxes = () => {
        const genresCheckboxes = genres.map(genre => {
            return <FormGroup check inline key={genre.id}>
                <Label check>
                    <Input type="checkbox" 
                    checked={isChecked(genre.id.toString())} 
                    value={genre.id}
                    onChange={inputOnChange}/> 
                    {genre.name}
                </Label>
            </FormGroup>
        })
        return genresCheckboxes;
    }

    return (
        <FormGroup>
            <Label className="genre-label">Избери жанр</Label>
            <div>
                {getGenresCheckboxes()}
            </div>
        </FormGroup>
       
    );
}

export default SelectGenres;