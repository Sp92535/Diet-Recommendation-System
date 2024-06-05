import './Footer.css'
export default function Footer() {
    return (
        <section className="contact" id="contact">
            <div className="social">
                <a href="https://www.facebook.com/DwayneJohnson" target='_t'><i className='bx bxl-facebook'></i></a>
                <a href="https://twitter.com/JohnCena?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target='_t'><i className='bx bxl-twitter'></i></a>
                <a href="https://www.instagram.com/johncena/?hl=en" target='_t'><i className='bx bxl-instagram'></i></a>
                <a href="https://www.youtube.com/watch?v=zsBkPmF7L8w" target='_t'><i className='bx bxl-youtube'></i></a>
            </div>
            <div className="links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Use</a>
                <a href="#">Our Company</a>
            </div>
            <p>&#169; SNS All Rights Reserved.</p>
        </section>
    );
}