import { useState } from "react";
const Challenge1 = () => {
  // useState();
  // console.log(useState(1));
  // const value = useState(1)[0];
  // const value1 = useState(1)[1];
  // console.log(value);
  // console.log(value1);
  const [count, setCount] = useState(0);

  // const handleClick = () => {
  //   setCount(count + 1)
  //   console.log(count)
  // };

  return (
    <>
      <h1>{count}</h1>
      <button type="button" onClick={() => setCount(count + 1)}>
        increase
      </button>
    </>
  );
};
export default Challenge1;