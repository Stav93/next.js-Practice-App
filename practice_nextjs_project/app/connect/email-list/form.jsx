"use client";

import postContact from "./post-contact";
import { useState, useTransition } from "react";

export default function Form() {
  const [message, setMessage] = useState("");
  const [displayMessage, setDisplayMessage] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (data) => {
    const name = data.get("name");
    const email = data.get("email");

    startTransition(() => {
      let message;

      postContact({ name, email }).then((json) => {
        console.log(json);

        const errorMessage = json.ErrorMessage;
        if (json.Count > 0) {
          message = "Success";
        } else if (errorMessage && errorMessage.includes("already exists")) {
          message = "Email is already exists";
        } else if (
          errorMessage &&
          errorMessage.includes("properties invalid")
        ) {
          message = "Email is not formatted correctly";
        } else {
          message = "Error. try again";
        }

        setMessage(message);
        setDisplayMessage(true);
      });
    });
  };
  return (
    <form action={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" required />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" email="email" required />
      <button type="submit" disabled={isPending}>
        {isPending ? "Sending..." : "Submit"}
      </button>
      {displayMessage ? message : <></>}
    </form>
  );
}
