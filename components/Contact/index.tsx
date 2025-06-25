"use client";

import { FormEvent } from "react";

const Contact = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("fullName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    const text = `📬 New Contact Form Message\n\n👤 Name: ${name}\n📧 Email: ${email}\n📱 Phone: ${phone}\n📝 Message: ${message}`;
    const encodedText = encodeURIComponent(text);
    const phoneNumber = "6281289784331"; // Ganti dengan nomormu
    e.currentTarget.reset();
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, "_blank");
  };

  return (
    <section id="contact" className="relative py-20 md:py-[120px]" style={{padding: "50px"}}>
      {/* ...semua bagian tetap seperti aslinya... */}
      <form onSubmit={handleSubmit}>
        <div className="mb-[22px]">
          <label
            htmlFor="fullName"
            className="mb-4 block text-sm text-body-color dark:text-dark-6"
          >
            Full Name*
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Adam Gelius"
            className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
          />
        </div>
        <div className="mb-[22px]">
          <label
            htmlFor="email"
            className="mb-4 block text-sm text-body-color dark:text-dark-6"
          >
            Email*
          </label>
          <input
            type="email"
            name="email"
            placeholder="example@yourmail.com"
            className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
          />
        </div>
        <div className="mb-[22px]">
          <label
            htmlFor="phone"
            className="mb-4 block text-sm text-body-color dark:text-dark-6"
          >
            Phone*
          </label>
          <input
            type="text"
            name="phone"
            placeholder="+885 1254 5211 552"
            className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
          />
        </div>
        <div className="mb-[30px]">
          <label
            htmlFor="message"
            className="mb-4 block text-sm text-body-color dark:text-dark-6"
          >
            Message*
          </label>
          <textarea
            name="message"
            rows={1}
            placeholder="type your message here"
            className="w-full resize-none border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
          ></textarea>
        </div>
        <div className="mb-0">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md bg-primary px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-primary/90"
          >
            Send
          </button>
        </div>
      </form>
      {/* ...sisanya juga tetap seperti aslinya... */}
    </section>
  );
};

export default Contact;
