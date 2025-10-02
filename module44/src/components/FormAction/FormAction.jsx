import React from "react";

const FormAction = () => {
  const handleFormData = (formData) => {
    console.log(formData.get("name"));
    console.log(formData.get("email"));
  };
  return (
    <div>
      <form action={handleFormData}>
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

export default FormAction;
