import { useQuery, gql } from '@apollo/client';
import CreateTvSerie from "../components/tv/CreateTvSerie";
import AddTvSerieItem from "../components/tv/AddTvSerieItem";

const GET_TVSERIES = gql`
    query getTvSeries {
        tvseries {
            _id
            title
            description
            rating 
            image
        }
    }
`;

function AddTvSeries(props) {

    const { loading, error, data } = useQuery(GET_TVSERIES);

    const getTvSeries = () => {
        if(!data){
            return null;
        }
        const tvseriesList = data.tvseries.map(tvserie => {
            return <AddTvSerieItem
            key={tvserie._id}
            title={tvserie.title}
            description={tvserie.description}
            rating={tvserie.rating}
            image={tvserie.image}
            ></AddTvSerieItem>
        })
        return tvseriesList;
    }

    return <>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <CreateTvSerie/>
                </div>
                <div className="col">
                    { getTvSeries() }
                </div>
            </div>
        </div>
    </>
}
export default AddTvSeries;