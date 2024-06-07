import { useState, useRef,useEffect } from "react";

const UseRef = () => {
  const [value, setValue] = useState(0);
  const isMounted = useRef(false)
  const refContainer = useRef(null);
    console.log(refContainer); //etting value of useRef ourselves
    
    useEffect(() => {
        refContainer.current.focus()
    })

    
    useEffect(() => {
        console.log(refContainer)
        if (!isMounted.current) {
            isMounted.current = true
            return
      }
      
        console.log(isMounted)
    },[value])
    

  const handleSubmit = (e) => {
      e.preventDefault();
      const name = refContainer.current.value
      console.log(name)
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" id="name" className="form-input" ref={refContainer}/>
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className="btn">
        increase
      </button>
    </div>
  );
};



export default UseRef;
