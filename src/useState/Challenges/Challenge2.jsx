import { useState } from "react";
import { data } from "../../../03-advanced-react/src/data";

const Challenge2 = () => {
  // console.log(data)
  const [name, setName] = useState(data);
//   console.log(name);

  const handleSingleItem = (id) => {
    const newNames = name.filter((name) => name.id != id);
    // console.log(newNames);
    setName(newNames);
  };

  return (
    <div>
      {name.map((ele) => {
        return (
          <div key={ele.id}>
            <h3>{ele.name}</h3>
            <button
              type="button"
              onClick={() => {
                handleSingleItem(ele.id);
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
      <button
        type="button"
        onClick={() => {
          setName([]);
        }}
        style={{ marginTop: "10px" }}
      >
        Clear
      </button>
    </div>
  );
};
export default Challenge2;