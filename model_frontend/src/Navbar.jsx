import './Navbar.css'
import lg2 from './assets/lg2.png'
import { Link } from 'react-router-dom'
export default function Navbar() {
    window.onscroll = () => {
        let menu = document.getElementById('menu-icon')
        let navi = document.querySelector('.navbar')
        menu.classList.remove('bx-x');
        navi.classList.remove('active');
    }
    const handleClick = () => {
        let menu = document.getElementById('menu-icon')
        let navi = document.querySelector('.navbar')
        menu.classList.toggle('bx-x');
        navi.classList.toggle('active');
    }

    return (
        <header><Link to="/" className="logo"><img src={lg2} alt="" /></Link>
            <div className="bx bx-menu" id="menu-icon" onClick={handleClick}></div>
            <ul className="navbar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/model">Recommender</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </header>
    );
}