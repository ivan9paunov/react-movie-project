import React, {useEffect} from 'react';
import {
    useParams
  } from "react-router-dom";

import {useDispatch, useSelector} from 'react-redux';
import {getTV, setTV} from '../redux/tv/actions';
import {
    Card, 
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
  } from 'reactstrap';
import constants from '../constants';

function TVSeriesDetails(props) {

    const tv = useSelector(state => state.tv);
    const dispatch = useDispatch();
    const { id } = useParams();
   
    // Equivalent to componentDidMount
    useEffect(()=>{
        dispatch(getTV({
            tvId: id
        }))

        //Equivalent to componentWillUnmount
        return () => {
            dispatch(setTV({}))
        }
    },[])

    const getTVImage = () => {
        if(!tv.poster_path){
          return null;
        }
        return <CardImg 
          top 
          width="100%" 
          src={`${constants.posterPath}${tv.poster_path}`} 
        />
      }
    return <>
        <div className="container">
            <div className="row">
                <div className="col">
                <Card className="mb-3">
                    <div className="row">
                    <div className="col-3">
                        {getTVImage()}
                    </div>
                    <div className="col">
                        <CardBody>
                            <CardTitle tag="h5" className="text-truncate">{tv.name}</CardTitle>
                            <CardSubtitle>{tv.release_date}</CardSubtitle>
                            <CardText className="movie-description">{tv.overview}</CardText>
                        </CardBody>
                    </div>
                    </div>
                </Card>
                </div>
            </div>
        </div>
   
    </>
}
export default TVSeriesDetails;