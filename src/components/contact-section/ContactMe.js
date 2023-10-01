import React from "react";
import SectionTitle from "../UI/SectionTitle";
import Button from "../UI/Button";
import Input from "../UI/Input";
import HRule from "../UI/HRule";

function ContactMe() {
  return (
    <section className="relative">
      <SectionTitle>CONTACT ME</SectionTitle>
      <form className="text-white grid gap-5 w-4/5 mx-auto grid-cols-1 sm:w-3/5 md:w-2/5 md:gap-7 lg:gap-10 md:max-w-screen-md md:grid-cols-2">
        <Input placeholder="First Name" />
        <Input placeholder="Last Name" />
        <Input placeholder="Email" className="md:col-span-2" />
        <textarea
          rows="13"
          className="border-2 text-xl border-darkGold p-5 rounded-md shadow-secondary shadow-sm bg-transparent focus:outline-none focus:border-yellow-500 md:col-span-2 md:text-2xl lg:text-3xl"
          placeholder="Message"
        />
        <div className="md:col-span-2 md:justify-self-center">
          <Button type="submit" variant="primary">
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
