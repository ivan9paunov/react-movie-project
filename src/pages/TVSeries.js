import TvGridItem from '../components/tv/tvGridItem';
import TvListItem from '../components/tv/tvListItem';
import Filters from '../components/filters/tv/Filters';
import {useSelector, useDispatch} from "react-redux";
import { Button, Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faList } from '@fortawesome/free-solid-svg-icons';
import { setListView } from '../redux/app/actions';


function TVSeries(props) {

    const tvseries = useSelector(state => state.tv.tvseries);
    const isListView = useSelector(state => state.app.listView);

    const dispatch = useDispatch();

    const getTVSeries = () => {

        if(!tvseries.length){
            return <div className="col">
                <Alert color="secondary" className="text-center p-5 mt-3">
                    Няма филми за показване от избраните категории
                </Alert>
            </div>
        }

        //TODO render pagination?

        if(isListView){
            const tvList = tvseries.map(tv => {
                return <TvListItem
                    key={tv.id}
                    id={tv.id}
                    title={tv.name}
                    overview={tv.overview}
                    poster_path={tv.poster_path}
                />
            })
            return tvList;
        }
     
        const tvGridList = tvseries.map(tv => {
            return <TvGridItem
                key={tv.id}
                id={tv.id}
                title={tv.name}
                overview={tv.first_air_date}
                poster_path={tv.poster_path}
            />
        })
        return tvGridList;
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
                {getTVSeries()}
            </div>
        </div>
    </>
}
export default TVSeries;