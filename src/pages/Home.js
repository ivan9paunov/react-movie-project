import Carousel from '../components/carousel/Carousel';
import ContactForm from '../components/contact/ContactForm';
import Adds from '../reklama.png';

function Home(props) {
    return <>
        <div className="container">
            <div className="row">
                <Carousel/>
            </div>
            <div className="row mb-5">
                <div className="col-8">
                    <img src={Adds} className="adds" alt="reklama"/>
                </div>
                <div className="col-4"><ContactForm/></div>
            </div>
        </div>
   
    </>
}
export default Home;