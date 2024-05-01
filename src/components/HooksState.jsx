import React, { useState } from "react";

const HooksState = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputValue", inputValue);
  };

  return (
    <div>
      <form onClick={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          value={inputValue.name}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          value={inputValue.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          value={inputValue.password}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default HooksState;
