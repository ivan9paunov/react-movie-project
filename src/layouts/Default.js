import Navbar from '../components/navbar/Navbar';

function DefaultLayout(props) {
    return <>
        <Navbar/>
        <div className="container mt-5">
            {props.children}
        </div>
    </>
}
export default DefaultLayout;
   