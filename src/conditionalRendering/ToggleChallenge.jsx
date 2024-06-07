import { useState } from "react";

const ToggleChallenge = () => {
  const [toggle, setToggle] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const toggleState = () => {
    setIsButtonClicked(true);
    // setToggle(!toggle)
    setToggle((prevValue) => {
      const newValue = !prevValue;
      // console.log("new value: ", newValue);
      return newValue;
    });
  };
  return (
    <div>
      <h2>Method-1</h2>
      <button type="button" className="btn" onClick={() => toggleState()}>
        Render Component on basis of {toggle ? "false" : "true"}
      </button>
      {toggle
        ? isButtonClicked && <TrueComponent />
        : isButtonClicked && <FalseComponent />}
    </div>
  );
};
const TrueComponent = () => {
  return (
    <div style={{ marginTop: "1rem" }}>
      <h2>True state rendered</h2>
      <h3 style={{ color: "green" }}>Success!!</h3>
    </div>
  );
};
const FalseComponent = () => {
  return (
    <div style={{marginTop:'1rem'}}>
      <h2>False state rendered</h2>
      <h3 style={{ color: "red" }}>Try Again!!</h3>
    </div>
  );
};

export default ToggleChallenge;
