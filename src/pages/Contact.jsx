import { contactInfo } from "../data/contact";

// contactInfo is shared with ContactCTA — update src/data/contact.js to change
// phone/email/address across both pages at once.
function Contact() {
  return (
    <div className="contact-page">
      <div className="container">
        <header className="contact-header">
          <h1 className="contact-title">Contact</h1>
          <p className="contact-subtitle">
            Contact us using the details below.
          </p>
        </header>

        <div className="row">
          <div className="col-12 col-md-4">
            <a
              href={contactInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <h3 className="contact-card-title">WhatsApp</h3>
              <p className="contact-card-text">{contactInfo.phone}</p>
            </a>
          </div>

          <div className="col-12 col-md-4">
            <a
              href={`mailto:${contactInfo.email}`}
              className="contact-card"
            >
              <h3 className="contact-card-title">Email</h3>
              <p className="contact-card-text">{contactInfo.email}</p>
            </a>
          </div>

          <div className="col-12 col-md-4">
            {/* Address has no link target, so it renders as a plain div */}
            <div className="contact-card">
              <h3 className="contact-card-title">Address</h3>
              <p className="contact-card-text">{contactInfo.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
