import React, {useState} from "react";
import SectionTitle from "../UI/SectionTitle";
import Button from "../UI/Button";
import HRule from "../UI/HRule";

function ContactMe() {
  const recipientEmail = "itsahmedlukman@gmail.com";
  const [emailSubject, setEmailSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");

  const handleSubjectChange = (e) => {
    //Input validation

    setEmailSubject(e.target.value)
  };
  const handleMessageChange = (e) => {
    //Input validation

    setEmailBody(e.target.value)
  };
  const sendEmail = (e) => {
    //Prevents browser default of refreshing
    e.preventDefault();

    //Creating a variable to store my mail and user's message subject and body
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    //Opening mail with the inserted heading and body directed to my email
    window.location.href = mailtoLink;
  };

  return (
    <section className="relative" id="contacts">
      <SectionTitle>CONTACT ME</SectionTitle>
      <form className="text-white grid gap-5 w-4/5 mx-auto grid-cols-1 sm:w-3/5 md:w-2/5 md:gap-7 lg:gap-10 md:max-w-screen-md md:grid-cols-2">
        <input
          onChange={handleSubjectChange}
          type="text"
          className="p-5 text-xl col-span-2 shadow-secondary shadow-sm  bg-transparent border-2 border-darkGold rounded-md focus:outline-none focus:border-yellow-500 md:text-2xl lg:p-6 lg:text-3xl"
          placeholder="Subject"
        />
        <textarea
          onChange={handleMessageChange}
          rows="13"
          className="border-2 text-xl border-darkGold p-5 rounded-md shadow-secondary shadow-sm bg-transparent focus:outline-none focus:border-yellow-500 col-span-2 md:text-2xl lg:text-3xl"
          placeholder="Message"
        />
        <div className="col-span-2 md:justify-self-center">
          <Button onSendEmail={sendEmail} type="submit" variant="primary">
            Submit
          </Button>
        </div>
      </form>
      <div className="absolute -z-50 w-full flex-col hidden items-end md:flex md:-right-0 -bottom-24 ">
        <img src="/assets/images/handshake.png" alt="" className="md:w-[25%]" />
        <HRule />
      </div>
    </section>
  );
}

export default ContactMe;
