import UserProfile from '../components/profile/UserProfile';
import { Alert } from 'reactstrap';

function Profile(props) {
    return <>
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <div className="row">
                        <UserProfile/>
                    </div>
                </div>
                <div className="col-9 align-self-center">
                    <div className="row">
                        <Alert color="secondary" className="text-center p-5 w-100">
                            Трябва да влезете в профила си, за да извършвате промени.
                        </Alert>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Profile;