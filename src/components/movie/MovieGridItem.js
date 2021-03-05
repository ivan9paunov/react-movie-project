import {
    Card, 
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button,
  } from 'reactstrap';
import {Link} from 'react-router-dom';

import constants from '../../constants';

const MovieGridItem = props => {

    const getMovieImage = () => {
      if(!props.poster_path){
        return null;
      }
      return <CardImg 
        top 
        width="100%" 
        src={`${constants.posterPath}${props.poster_path}`} 
      />
    }

    return (
      <div className="col-md-3">
        <Card className="mb-3">
          {getMovieImage()}
          <CardBody>
            <CardTitle tag="h5" className="movie-title text-truncate text-center">{props.title}</CardTitle>
            <CardText className="text-center">{props.overview}</CardText>
            <Link to={`/movie/${props.id}`} className="btn btn-secondary d-block">
              Детайли
            </Link>
          </CardBody>
        </Card>
      </div>
    );
  };
  
export default MovieGridItem;
  