import { FormGroup, Label, Input } from 'reactstrap';
import { setSelectedYear } from '../../../redux/movies/actions';
import { useDispatch, useSelector } from 'react-redux';

const SelectYear = (props) => {

    const selectedYear = useSelector(state => state.movies.selectedFilters.selectedYear);
    const dispatch = useDispatch();

    const changeSelectedYear = (event) => {
        dispatch(setSelectedYear(event.target.value));
    }
    return (
        <FormGroup>
            <Label className="genre-label" for="select-year">Избери година</Label>
            <Input 
            onChange={changeSelectedYear} 
            value={selectedYear}
            type="select" 
            name="select" 
            id="select-year"
            >
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            </Input>
        </FormGroup>
    );
}

export default SelectYear;