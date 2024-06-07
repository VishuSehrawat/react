import { useState } from "react";

const MultipleInputs = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(user);
     
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log("value of input has witnessed a change");
  };

  return (
    <>
      <form className="form" onSubmit={handleFormSubmit}>
        <h4>User Challenge</h4>

        {/* name input */}
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input
          className="form-input"
          id="name"
          name="name"
          value={user.name}
          onChange={handleChange}
        />

        {/* email input */}
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          className="form-input"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />

        {/* password input */}
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          className="form-input"
          id="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />

        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </>
  );
};

export default MultipleInputs;
