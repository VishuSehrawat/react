import { useState } from "react";

// import { people1, people2 } from "../data";
import { people } from "../data";

const Challenge3 = () => {
  //   const [name, setName] = useState(people1);
  const [person, setPerson] = useState(people[0]);

  const handleClick = (id) => {
    // const nextPerson = { id: 2, name: 'John',age:28, hobby: 'screaming at the computer' };
    // setName(nextPerson);
    // setName(people2);

    if (id === people.length) {
      id = 0;
    }

    const nextPerson = people.find((person) => {
      if (person.id === id + 1) {
        return person;
      } else {
        return null;
      }
    });
    // console.log(nextPerson);
    setPerson(nextPerson);
  };

  return (
    <div>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <h3>Enjoys: {person.hobby}</h3>
      {/* {name.map((name1) => {
        return (
          <div key={name1.id}>
            <h1>{name1.name}</h1>
            <h2>{name1.age}</h2>
            <h3>{name1.hobby}</h3>
          </div>
        );
      })} */}
      <button
        className="nextBtn"
        key={person.id}
        type="button"
        onClick={() => {
          handleClick(person.id);
        }}
      >
        Show next
      </button>
    </div>
  );
};

export default Challenge3;
