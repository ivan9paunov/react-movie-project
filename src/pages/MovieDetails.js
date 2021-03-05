import React, {useEffect} from 'react';
import {
    useParams
  } from "react-router-dom";

import {useDispatch, useSelector} from 'react-redux';
import {getMovie, setMovie} from '../redux/movies/actions';
import {
    Card, 
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
  } from 'reactstrap';
import constants from '../constants';

function MovieDetails(props) {

    const movie = useSelector(state => state.movie);
    const dispatch = useDispatch();
    const { id } = useParams();
   
    // Equivalent to componentDidMount
    useEffect(()=>{
        dispatch(getMovie({
            movieId: id
        }))

        //Equivalent to componentWillUnmount
        return () => {
            dispatch(setMovie({}))
        }
    },[])

    const getMovieImage = () => {
        if(!movie.poster_path){
          return null;
        }
        return <CardImg 
          top 
          width="100%" 
          src={`${constants.posterPath}${movie.poster_path}`} 
        />
      }
    return <>
        <div className="container">
            <div className="row">
                <div className="col">
                <Card className="mb-3">
                    <div className="row">
                    <div className="col-3">
                        {getMovieImage()}
                    </div>
                    <div className="col">
                        <CardBody>
                            <CardTitle tag="h5" className="text-truncate">{movie.title}</CardTitle>
                            <CardSubtitle>{movie.release_date}</CardSubtitle>
                            <CardText className="movie-description">{movie.overview}</CardText>
                        </CardBody>
                    </div>
                    </div>
                </Card>
                </div>
            </div>
        </div>
   
    </>
}
export default MovieDetails;