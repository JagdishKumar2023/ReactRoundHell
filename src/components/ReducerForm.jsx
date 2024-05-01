import React, { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      return state;
  }
};

const ReducerForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const trimed = value.trim();
    dispatch({ type: "CHANGE", field: name, value: trimed });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputValue", state);
  };

  return (
    <div>
      <h1>Form </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter you name"
          name="name"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Enter password"
          password="password"
          name="password"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReducerForm;
