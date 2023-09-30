import React from "react";
import SectionTitle from "./UI/SectionTitle";
import Button from "./UI/Button";
import Input from "./UI/Input";

function ContactMe() {
  return (
    <section>
      <div>
        <SectionTitle>CONTACT ME</SectionTitle>
        <form className="text-white grid gap-5 w-4/5 mx-auto grid-cols-1 sm:w-3/5 md:w-2/5 md:gap-7 lg:gap-10 md:max-w-screen-md md:grid-cols-2">
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Email" className="md:col-span-2" />
          <textarea
            rows="13"
            className="border-2 text-lg border-darkGold p-5 rounded-md shadow-secondary shadow-sm bg-transparent md:col-span-2 lg:text-2xl"
            placeholder="Message"
          />
          <div className="md:col-span-2 md:justify-self-center">
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactMe;
