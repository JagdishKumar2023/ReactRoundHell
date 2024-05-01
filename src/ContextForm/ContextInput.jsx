import React, { useContext } from "react";
import { FormContext } from "./ContextForm";

const ContextInput = () => {
  const { handleChange, handleSubmit, inputValue } = useContext(FormContext);

  return (
    <div>
      <form onClick={handleSubmit}>
        <h1>Context form</h1>
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          onChange={handleChange}
          value={inputValue.name}
        />
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={handleChange}
          value={inputValue.email}
        />
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          onChange={handleChange}
          value={inputValue.password}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ContextInput;
