import { useQuery, gql } from '@apollo/client';
import CreateTvSerie from "../components/tv/CreateTvSerie";

const GET_TVSERIES = gql`
    query getTvSeries {
        tvseries {
            _id
            title
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
            return <div
                key={tvserie._id}
            >{ tvserie.title }</div>
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