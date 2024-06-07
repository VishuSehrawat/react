/* eslint-disable react/prop-types */

const Person = (props) => {
  // console.log(props.people)
  const people = props.people;
  console.log(people);
  console.log(people[2].images[0].small.url);
  return (
    <>
      {people.map((person) => {
        console.log(person);
        return (
          <section className="personSection" key={person.id}>
            <h2>name - {person.name}</h2>
            <h5>
              nickname -
              {/* {person.nickName ? ` ${person.nickName}` : " no nickname exists"} */}
              {person.nickName || " no nickname exists"}
            </h5>

            {(person.images && (
              <img
                src={person.images[0].small.url}
                alt={person.name}
                className="personimg"
              />
            )) ||
              "image does not exist"}
            <img src="" alt="" />
          </section>
        );
      })}
    </>
  );
};

export default Person;
