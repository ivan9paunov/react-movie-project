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

const MovieListItem = props => {

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
      <div className="col-12">
          <Card className="mb-3">
            <div className="row">
              <div className="col-3">
                {getMovieImage()}
              </div>
              <div className="col">
                <CardBody>
                  <CardTitle tag="h5" className="movie-title text-truncate">{props.title}</CardTitle>
                  <CardText className="movie-description">{props.overview}</CardText>
                  <Link to={`/movie/${props.id}`} className="btn btn-secondary">
                      Детайли
                  </Link>
                </CardBody>
              </div>
            </div>
          </Card>
      </div>
    );
  };
  
export default MovieListItem;
  