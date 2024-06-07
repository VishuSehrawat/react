/* eslint-disable react/prop-types */
import { useState } from "react";

const ShortCircuitExamples = () => {
  //falsy value
  const [text, setText] = useState("");

  //truthy value
  const [name, setName] = useState("Vishu");
  const [user, setUser] = useState({ name: "Vishu" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {/* using || -> looks for truthy value, for controlling text displayed */}
      <h2>{text || "default value"}</h2>
      <h2>{!text || "default value"}</h2>

      {/* using && -> looks for falsy value, for controlling what is returned */}
      {/* returning element using && */}
      {text && (
        <div>
          <h3>Returning element</h3>
          <h3>{name}</h3>
        </div>
      )}

      {!text && (
        <div>
          <h3>Returning element</h3>
          <h3>{name}</h3>
        </div>
      )}

      {/* returning component using && */}
      {user && <SomeComponent name={user.name} />}

      {/* using ternary operator -> 
            syntax= condition ?expression1 :expression2
          */}

      <h2 style={{ margin: "1rem 0" }}>Ternary Operator</h2>

      <button type="button" className="btn">
        {isEditing ? "Edit" : "Add"}
      </button>

      <button style={{ marginLeft: "1rem" }} type="button" className="btn">
        {!isEditing ? "Edit" : "Add"}
      </button>

      {user ? (
        <div>
          <h4>Hello {user.name}</h4>
        </div>
      ) : (
        <div>Please Login</div>
      )}
    </div>
  );
};
const SomeComponent = ({ name }) => {
  return (
    <div>
      <h3>Returning component</h3>
      <h3>{name}</h3>
    </div>
  );
};

export default ShortCircuitExamples;
