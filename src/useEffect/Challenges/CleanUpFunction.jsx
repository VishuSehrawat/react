import { useEffect, useState } from "react";

const CleanUpFunction = () => {
  const [value, setValue] = useState(true);

  return (
    <div>
      <h2>CleanUp Function</h2>
      <button type="button" className="btn" onClick={() => setValue(!value)}>
        Toggle State
      </button>

      {value && <Component2 />}
    </div>
  );
};

const Component2 = () => {6
  useEffect(() => {
    console.log("State is true");

    //setInterval example
    // const intervalId=setInterval(() => {
    //     console.log('hello from inteval')
    // }, 1000);

    //eventlistener example
    const someFunc =()=>{
        console.log('event listener is active')
    }
    window.addEventListener('scroll',someFunc)
     return ()=>{
        // clearInterval(intervalId)
        window.removeEventListener('scroll',someFunc)
        console.log("Component is being unmounted");

     }
  }, []);
  return <h3>hello there</h3>
};

export default CleanUpFunction;
