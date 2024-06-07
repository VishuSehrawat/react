import { useState } from "react";

const Challenge4 = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    console.log("clicked the button");

      /*
    setValue((prevValue) => {
        const newState = prevValue + 2
         console.log(newState);
        return newState
      })
      
      */
      
      //normal approach
      /*
    setTimeout(() => {
      setValue(value + 1);
    }, 3000);
    */
      
      //functional approach
      setTimeout(() => {
          setValue((prevState) => {
              return prevState+1
          })
      },3000)
  };
  return (
    <div>
      <h1>{value}</h1>
      <button type="button" onClick={handleClick}>
        Increase
      </button>
    </div>
  );
};

export default Challenge4;
