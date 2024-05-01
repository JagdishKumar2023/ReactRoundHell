import React, { createContext } from "react";

export const FormContext = createContext();

const ContextForm = ({ children }) => {
  const [inputValue, setInputValue] = {
    name: "",
    email: "",
    password: "",
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <FormContext.Provider value={(handleChange, handleSubmit, inputValue)}>
      {children}
    </FormContext.Provider>
  );
};

export default ContextForm;
