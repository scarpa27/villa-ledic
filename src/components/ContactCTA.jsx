import { contactInfo } from "../data/contact";

// ContactCTA is a simple call-to-action inviting visitors to get in touch.
// The actual phone/email/link values come from src/data/contact.js so they
// only ever need to be updated in one place.
function ContactCTA() {
  return (
    <section className="contact-cta">
      <div className="container">
        <h2 className="contact-cta-heading">Ready to plan your stay?</h2>

        <p className="contact-cta-text">
          Send us a message and we will help you find the right apartment
          for your stay in Krvavica.
        </p>

        <div className="contact-cta-buttons">
          <a
            href={contactInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lg contact-cta-btn-primary"
          >
            WhatsApp Inquiry
          </a>

          <a
            href={`mailto:${contactInfo.email}`}
            className="btn btn-lg btn-outline-secondary contact-cta-btn-secondary"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;
