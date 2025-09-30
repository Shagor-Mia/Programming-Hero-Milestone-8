import React from "react";

const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="border-1 border-red-100 "
          type="text"
          name="name"
          placeholder="enter your name"
        />
        <br />
        <br />
        <input
          className="border-1 border-red-100 "
          type="email"
          name="email"
          placeholder="enter your mail"
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

export default SimpleForm;
