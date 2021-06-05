import {
    Card, 
    CardImg,
    CardText,
    CardBody,
    CardTitle,
} from 'reactstrap';
import Rating from "./Rating";

import constants from '../../constants';

const AddMovieItem = props => {

    const getMovieImage = () => {
      if(!props.image){
        return null;
      }
      return <CardImg 
        top 
        width="100%" 
        src={`${constants.addMoviePoster}${props.image}`} 
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
            <div className="d-flex align-items-center mb-2">
                
                <CardTitle tag="h5" className="text-truncate mb-0">{props.title}</CardTitle>
            </div>
            <CardText className="movie-description">{props.description}</CardText>
            <Rating rating={props.rating}/>
          </CardBody>
          </div>
          </div>
        </Card>
      </div>
    );
  };
  
export default AddMovieItem;