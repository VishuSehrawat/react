import { useState } from "react";

const OtherInputs = () => {
    const [shipping, setShipping] = useState(false);
    
    const frameworks = ['react', 'angular', 'vue', 'svelte']
    
    const [framework, setFramework] = useState(frameworks[0])

  const handleShipping = (e) => {
    setShipping(e.target.checked);
    };
    
    const handleFramework = (e) => {
        setFramework(e.target.value)
    }

  return (
    <div>
      <form className="form">
        <h4>Other Inputs</h4>

        {/* checkbox input */}

        <div
          className="form-row"
          style={{
            textAlign: "left",
          }}
        >
          <label htmlFor="shipping">Free Shipping</label>
          <input
            type="checkbox"
            name="shipping"
            id="shipping"
            checked={shipping}
            onChange={handleShipping}
          />

          <div className="form-row">
            <label htmlFor="framework">Framework</label>
            <select
              name="framework"
              id="framework"
              value={framework}
              onChange={handleFramework}
                      >
                          {frameworks.map((framework) => {
                              return <option key={framework}>{framework}</option>
                          })}
            </select>
          </div>
        </div>

        {/* select input */}

        <button className="btn btn-block">Submit</button>
      </form>
    </div>
  );
};

export default OtherInputs;
