import { useState } from "react";
import { data } from "../data1";
const UserChallenge = () => {
  const [name, setName] = useState("");
  const [person, setPerson] = useState(data);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      return;
    }
    console.log("form submitted successfully");

    const per = { id: `${name} ${person.length + 1}`, name: name };
    const updatedPerson = [...person, per];
    setPerson(updatedPerson);
    setName("");
  };

  const removeUser = (id) => {
    const updatedPerson = person.filter((per) => {
      return per.id !== id;
    });
    setPerson(updatedPerson);
  };

  return (
    <>
      <form className="form" onSubmit={handleFormSubmit}>
        <h4>User Challenge</h4>
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input
          className="form-input"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        {/* <label className="form-label" htmlFor="email">
          Email
        </label>
        <input className="form-input" id="email" /> */}

        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>

      {person.map((per) => {
        return (
          <div key={per.id} className="personDiv">
            <h4>{per.name}</h4>
            <button
              type="button"
              className="button"
              onClick={() => removeUser(per.id)}
            >
              Remove User
            </button>
          </div>
        );
      })}
    </>
  );
};

export default UserChallenge;
