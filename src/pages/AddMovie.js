import { useQuery, gql } from '@apollo/client';
import CreateMovie from "../components/movie/CreateMovie";
import AddMovieItem from "../components/movie/AddMovieItem";

const GET_MOVIES = gql`
    query getMovies {
        movies {
            _id
            title
            description
            rating 
            image
        }
    }
`;

function AddMovies(props) {

    const { loading, error, data } = useQuery(GET_MOVIES);

    const getMovies = () => {
        if(!data){
            return null;
        }
        const moviesList = data.movies.map(movie => {
            return <AddMovieItem
                key={movie._id}
                title={movie.title}
                description={movie.description}
                rating={movie.rating}
                image={movie.image}
            ></AddMovieItem>
        })
        return moviesList;
    }

    return <>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <CreateMovie/>
                </div>
                <div className="col">
                    { getMovies() }
                </div>
            </div>
        </div>
    </>
}
export default AddMovies;