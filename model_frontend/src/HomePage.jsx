import './HomePage.css'
import bg2 from './assets/bg2.png'
import { Link } from 'react-router-dom'
export default function HomePage() {
    return (
        <section className="home" id="home">
            <div className="home-text">
                <span>Welcome to</span>
                <h1> Diet Recommender</h1>
                <h2>Your Personalized Diet plan is <br />a tap away</h2>
                <Link to="/model" className="bttn">Proceed</Link>
            </div>
            <div className="home-img">
                <img src={bg2} alt="" />
            </div>
        </section>
    );
}