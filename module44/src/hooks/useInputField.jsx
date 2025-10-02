import React, { useState } from "react";

const useInputField = (defaultValue) => {
  const [inputValue, setInputValue] = useState(defaultValue);
  const handleInputFieldOnchange = (e) => {
    setInputValue(e.target.value);
  };
  return [inputValue, handleInputFieldOnchange];
};

export default useInputField;
