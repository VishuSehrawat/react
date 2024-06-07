import { useEffect, useState } from "react";

const CodeExample = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  // setValue(value+2)
  const sayHello = () => {
    console.log("component re rendered");
    // setValue(value+1)
  };
  sayHello();

  //   useEffect(() => {
  //     console.log("useEffect that runs on each render");
  //   });
  //   useEffect(() => {
  //     console.log("useEffect running on initial render only");
  //   }, []);
  useEffect(() => {
    console.log("useEffect that runs when value of button 1 and 2 changes");
  }, [value, secondValue]);

  //using async and await
  //as useEffect doesn't return promise, async and await can't be used inside callback function
  useEffect(() => {
    const usingAsyncAwait = async () => {
      await console.log("something");
    };
    usingAsyncAwait();
  }, []);

  return (
    <>
      <h1>{value}</h1>
      <button
        type="button"
        className="button"
        onClick={() => setValue(value + 1)}
      >
        Button1
      </button>
      <h1>{secondValue}</h1>
      <button
        type="button"
        className="button"
        onClick={() => setSecondValue(secondValue + 2)}
      >
        Button2
      </button>
    </>
  );
};

const UseEffectBasics = () => {
  return (
    <div>
      UseEffectBasics
      <CodeExample />
    </div>
  );
};

export default UseEffectBasics;
