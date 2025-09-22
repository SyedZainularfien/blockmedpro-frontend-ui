import React, { useState } from "react";
import emailjs from '@emailjs/browser';

// Files Import
// import Button from "../Button/Button";
import { toast } from 'react-toastify';
import { content } from "../../data";

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const validEmail = (email) => {
  return emailRegex.test(email);
};

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [companyDetails, setCompanyDetails] = useState("");
  // const [subject, setSubject] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [message, setMessage] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [locationError, setLocationError] = useState(false);
  const [companyDetailsError, setCompanyDetailsError] = useState(false);
  // const [subjectError, setSubjectError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  // eslint-disable-next-line
  const [countryCodeError, setCountryCodeError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e,
    setState,
    setErrorState,
    validationFunc = null
  ) => {
    const value = e.target.value;
    const name = e.target.name;
    setState(value);
    if (name !== "phoneNumber") {
      setErrorState(
        value.length < 3 || (validationFunc && !validationFunc(value))
      );
    } else {
      setErrorState(
        value.length < 6 || (validationFunc && !validationFunc(value))
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic
    if (
      !validEmail(email) ||
      firstName.length < 3 ||
      lastName.length < 3 ||
      // subject.length < 3 ||
      phoneNumber.length < 6
      // ||
      // message.length < 3
    ) {
      toast("Form validation failed.")
      return;
    }
    const templateParams = {
      firstName,
      lastName,
      email,
      mobile: `${countryCode} ${phoneNumber}`,
      location,
      companyDetails,
      message,
      timestamp: new Date().toLocaleString(),
    };
    setLoading(true);
    emailjs
      .send(
        "service_n8olc2i",
        "template_alzepms",
        templateParams,
        "B62GjdF7TvjAyx7xU"
      )
      .then(
        (response) => {
          toast.success("Message sent successfully!");
          setFirstName("");
          setLastName("");
          setEmail("");
          setLocation("");
          setCompanyDetails("");
          setPhoneNumber("");
          setCountryCode("");
          setMessage("");
          setFirstNameError(false);
          setLastNameError(false);
          setEmailError(false);
          setCompanyDetailsError(false);
          setPhoneNumberError(false);
          setCountryCodeError(false);
          setMessageError(false);
          setLoading(false)
        },
        (error) => {
          console.log("error", error);
          toast.error("Failed to send message. Please try again.");
          setLoading(false)
        }
      );

  };


  return (
    <form className="mx-auto space-y-5" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="first-name"
            className="block text-lg leading-6 text-river-blue"
          >
            First name <span className="text-red-500">*</span>
          </label>
          <div className="mt-1">
            <input
              required
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              placeholder="John"
              maxLength={30}
              value={firstName}
              onChange={(e) =>
                handleInputChange(e, setFirstName, setFirstNameError)
              }
              className={`block w-full rounded-md px-3.5 py-2 shadow-sm sm:text-lg sm:leading-6 outline-none bg-transparent border ${firstNameError ? "border-red-500" : "border-vavid-gray"
                } text-river-blue`}
            />
            {firstNameError && (
              <p className="text-sm text-red-500">Minimum characters: 3</p>
            )}
          </div>
        </div>
        <div>
          <label
            htmlFor="last-name"
            className="block text-lg leading-6 text-river-blue"
          >
            Last name <span className="text-red-500">*</span>
          </label>
          <div className="mt-1">
            <input
              required
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              placeholder="Deo"
              maxLength={30}
              value={lastName}
              onChange={(e) =>
                handleInputChange(e, setLastName, setLastNameError)
              }
              className={`block w-full rounded-md px-3.5 py-2 shadow-sm sm:text-lg sm:leading-6 outline-none bg-transparent border ${lastNameError ? "border-red-500" : "border-vavid-gray"
                } text-river-blue`}
            />
            {lastNameError && (
              <p className="text-sm text-red-500">Minimum characters: 3</p>
            )}
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="email"
            className="block text-lg leading-6 text-river-blue"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <div className="mt-1">
            <input
              required
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              placeholder="johndoe@gmail.com"
              maxLength={50}
              value={email}
              onChange={(e) =>
                handleInputChange(e, setEmail, setEmailError, validEmail)
              }
              className={`block w-full rounded-md px-3.5 py-2 shadow-sm sm:text-lg sm:leading-6 outline-none bg-transparent border ${emailError ? "border-red-500" : "border-vavid-gray"
                } text-river-blue`}
            />
            {emailError && (
              <p className="text-sm text-red-500">Invalid email address</p>
            )}
          </div>
        </div>
        {/* <div className="sm:col-span-2">
          <label
            htmlFor="subject"
            className="block text-lg leading-6 text-river-blue"
          >
            Subject <span className="text-red-500">*</span>
          </label>
          <div className="mt-1">
            <input
              required
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              value={subject}
              onChange={(e) =>
                handleInputChange(e, setSubject, setSubjectError)
              }
              className={`block w-full rounded-md px-3.5 py-2 shadow-sm sm:text-lg sm:leading-6 outline-none bg-transparent border ${subjectError ? "border-red-500" : "border-vavid-gray"
                } text-river-blue`}
            />
            {subjectError && (
              <p className="text-sm text-red-500">Minimum characters: 3</p>
            )}
          </div>
        </div> */}
        <div className="sm:col-span-2">
          <label
            htmlFor="phoneNumber"
            className="block text-lg leading-6 text-river-blue"
          >
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <div className="mt-1">
            <div className="flex items-center gap-2">
              <select
                required
                name="countryCode"
                id="countryCode"
                value={countryCode || content.contactUs.countryCodes[0]}
                onChange={(e) => handleInputChange(e, setCountryCode, setCountryCodeError)}
                className={` h-[42px] w-[100px] block rounded-md px-3.5 py-2 shadow-sm sm:text-lg sm:leading-6 outline-none appearance-none border ${phoneNumberError ? "border-red-500" : "border-vavid-gray"
                  } text-river-blue`}
              >
                <option value="" disabled>
                  Select Code
                </option>
                {content.contactUs.countryCodes.map(({ code, country }) => (
                  <option key={code} value={code}>
                    {code}
                  </option>
                ))}
              </select>
              <input
                required
                type="text" // Change to "text" to avoid browser issues
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Enter Number"
                maxLength={20}
                value={phoneNumber}
                onChange={(e) => {
                  const numericValue = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                  handleInputChange({ target: { name: "phoneNumber", value: numericValue } }, setPhoneNumber, setPhoneNumberError);
                }}
                onKeyDown={(e) => {
                  if (["e", "E", "+", "-", "."].includes(e.key)) {
                    e.preventDefault(); // Prevent typing non-numeric characters
                  }
                }}
                className={`block w-full rounded-md px-3.5 py-2 shadow-sm sm:text-lg sm:leading-6 outline-none bg-transparent border ${phoneNumberError ? "border-red-500" : "border-vavid-gray"
                  } text-river-blue`}
              />
            </div>
            {phoneNumberError && (
              <p className="text-sm text-red-500">Minimum characters: 6</p>
            )}
          </div>
        </div>
        <div>
          <label
            htmlFor="location"
            className="block text-lg leading-6 text-river-blue"
          >
            Location
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="location"
              id="location"
              placeholder="City, Country"
              maxLength={50}
              value={location}
              onChange={(e) =>
                handleInputChange(e, setLocation, setLocationError)
              }
              className={`block w-full rounded-md px-3.5 py-2 shadow-sm sm:text-lg sm:leading-6 outline-none bg-transparent border ${locationError ? "border-red-500" : "border-vavid-gray"
                } text-river-blue`}
            />
            {locationError && (
              <p className="text-sm text-red-500">Minimum characters: 3</p>
            )}
          </div>
        </div>
        <div>
          <label
            htmlFor="company-details"
            className="block text-lg leading-6 text-river-blue"
          >
            Company/Business Details
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="company-details"
              id="company-details"
              placeholder="Enter Details"
              maxLength={50}
              value={companyDetails}
              onChange={(e) =>
                handleInputChange(e, setCompanyDetails, setCompanyDetailsError)
              }
              className={`block w-full rounded-md px-3.5 py-2 shadow-sm sm:text-lg sm:leading-6 outline-none bg-transparent border ${companyDetailsError ? "border-red-500" : "border-vavid-gray"
                } text-river-blue`}
            />
            {companyDetailsError && (
              <p className="text-sm text-red-500">Minimum characters: 3</p>
            )}
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-lg leading-6 text-river-blue"
          >
            Questions/comments
            {/* <span className="text-red-500">*</span> */}
          </label>
          <div className="mt-1">
            <textarea
              name="message"
              id="message"
              rows="4"
              placeholder="Write here"
              value={message}
              onChange={(e) =>
                handleInputChange(e, setMessage, setMessageError)
              }
              className={`block w-full rounded-md px-3.5 py-2 shadow-sm sm:text-lg sm:leading-6 outline-none bg-transparent border ${messageError ? "border-red-500" : "border-vavid-gray"
                } text-river-blue min-h-48`}
            ></textarea>
            {messageError && (
              <p className="text-sm text-red-500">Minimum characters: 3</p>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button disabled={loading} type="submit"
          className={`button-gradient px-[40px] py-[18px] md:px-[47px] md:py-[21px] rounded-[10px] justify-center items-center gap-2.5 inline-flex text-white text-base !font-bold leading-[14.40px]`}
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
