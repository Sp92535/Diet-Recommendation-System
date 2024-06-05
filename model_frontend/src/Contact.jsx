import './Contact.css'
export default function Contact() {
    return (
        <div className="contact-container">
            <form action="https://api.web3forms.com/submit" method="POST" className="contact-sec">
                <div className="contact-sec-title">
                    <h2>Get in touch</h2>
                    <hr />
                </div>
                <input type="hidden" name="access_key" value="04de4d86-6dc2-4266-97fd-97a92fc809a5" />
                <input type="text" name="name" placeholder="Your Name" className="contact-input" required />
                <input type="email" name="email" placeholder="Your Email" className="contact-input" required />
                <textarea name="message" placeholder="Your Message" className="contact-input" required></textarea>
                <button type="submit">Submit </button>
            </form>
        </div>
    );
}