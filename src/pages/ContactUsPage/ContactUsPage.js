import React from "react";

// Files Import
import ContactUsSection from "../../sections/ContactUs/ContactUsSection";
import ContactFormSection from "../../sections/AboutUs/ContactFormSection/ContactFormSection";

const ContactUsPage = () => {
  return (
    <div className="max-w-site">
      <ContactUsSection />
      <ContactFormSection />
    </div>
  );
};

export default ContactUsPage;
