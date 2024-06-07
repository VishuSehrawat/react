// import { useState } from "react";

const FormDataAPI = () => {
//   const [value, setValue] = useState(0);

    const handleFormSubmit = (e) => {
        e.preventDefault()
        
        const formData = new FormData(e.currentTarget)
        console.log(formData)
        const name = formData.get('name')
        const email = formData.get("email");
        const password = formData.get("password");


        console.log(name)
        console.log(email)
        console.log(password)

        console.log([...formData.entries()])

        const newUser = Object.fromEntries(formData)
        console.log(newUser)

        e.currentTarget.reset()

  };

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <h4>User Challenge</h4>

      {/* name input */}
      <label className="form-label" htmlFor="name">
        Name
      </label>
      <input className="form-input" id="name" name="name" />

      {/* email input */}
      <label className="form-label" htmlFor="email">
        Email
      </label>
      <input type="email" className="form-input" id="email" name="email" />

      {/* password input */}
      <label className="form-label" htmlFor="password">
        Password
      </label>
      <input
        type="password"
        className="form-input"
        id="password"
        name="password"
      />

      <button type="submit" className="btn btn-block">
        Submit
      </button>
    </form>
  );
};

export default FormDataAPI;
