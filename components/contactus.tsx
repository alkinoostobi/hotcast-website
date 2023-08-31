"use client";
import React, { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = target.value;

    switch (target.id) {
      case "companyname":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "title":
        setTitle(value);
        break;
      case "body":
        setBody(value);
        break;
    }
  };
  const handleChangeBody = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = event.target;
    const value = target.value;
    setBody(value);
  };
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 relative mb-8 lg:mb-16">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
        Contact Us
      </h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
        Got a technical issue? Want to send feedback about a beta feature? Need
        details about our Business plan? Let us know.
      </p>
      <form action="#" className="space-y-8">
        <label
          htmlFor="companyname"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Company Name
        </label>
        <input
          id="companyname"
          placeholder=""
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          value={name}
          onChange={handleChange}
        />
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Your Email
        </label>
        <input
          id="email"
          placeholder=""
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          value={email}
          onChange={handleChange}
        />
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Message Title
        </label>
        <input
          id="title"
          placeholder=""
          value={title}
          className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          onChange={handleChange}
        />
        <label
          htmlFor="body"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Message Body
        </label>
        <textarea
          id="body"
          value={body}
          rows={6}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Leave a comment..."
          onChange={handleChangeBody}
        />
        <button
          className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
          onClick={() => console.log({ name, email, title, body })}
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
