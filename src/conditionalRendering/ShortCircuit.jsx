import { useState } from "react";

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("Vishu");
  const [profile, setProfile] = useState("Programmer");

  return (
    <div>
      Short Circuit
      {console.log(text && name)}
      {/* Output: <empty string> */}
      {console.log(name && text)}
      {/* Output: <empty string> */}
      {console.log(name || text)}
      {/* Output: Vishu */}
      {console.log(text || name)}
      {/* Output: Vishu */}
      {console.log(name && profile)}
      {/* Output: Programmer */}
      {console.log(profile && name)}
      {/* Output: Vishu */}
      {console.log(name || profile)}
      {/* Output: Vishu */}
      {console.log(profile || name)}
      {/* Output: Programmer */}
      {console.log(text && name && profile)}
      {/* Output: <empty string> */}
      {console.log(name && text && profile)}
      {/* Output: <empty string> */}
      {console.log(name && profile && text)}
      {/* Output: <empty string> */}
      {console.log(name || profile || text)}
      {/* Output: Vishu */}
      {console.log(profile || name || text)}
      {/* Output: Programmer */}
      {console.log(text || profile || name)}
      {/* Output: Programmer */}
      {console.log(0 || text || profile || name)}
      {/* Output: Programmer */}
      {console.log(0 && text && profile && name)}
      {/* Output: 0 */}
      {console.log("text" || profile || name)}
      {/* Output: text */}
      {console.log(text || "" || 0)}
      {/* Output: 0 */}
    </div>
  );
};

export default ShortCircuit;
