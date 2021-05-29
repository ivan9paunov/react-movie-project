import { useQuery, gql } from '@apollo/client';
import CreateMovie from "../components/movie/CreateMovie";

const GET_MOVIES = gql`
    query getMovies {
        movies {
            _id
            title
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
            return <div
                key={movie._id}
            >{ movie.title }</div>
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