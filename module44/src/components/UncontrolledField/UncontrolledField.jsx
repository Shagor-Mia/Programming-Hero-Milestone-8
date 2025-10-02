import React from "react";
import { useRef } from "react";

const UncontrolledField = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="border-1 border-red-100 "
          type="email"
          name="email"
          ref={emailRef}
          placeholder="enter your mail"
          required
        />
        <br />
        <br />
        <input
          className="border-1 border-red-100 "
          type="password"
          name="password"
          ref={passwordRef}
          placeholder="enter your password"
          required
        />
        <br />
        <br />

        <input
          className="border-1 border-red-100"
          type="submit"
          value={"Submit"}
        />
      </form>
    </div>
  );
};

export default UncontrolledField;
