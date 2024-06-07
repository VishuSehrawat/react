/* eslint-disable react/prop-types */
import { useState } from "react";

const UserChallenge = () => {
  return (
    <>
      <div>
        <h1>User Challenge</h1>
        <Method1 />
        <Method2 />
      </div>
    </>
  );
};

const Method1 = () => {
  const [user, setUser] = useState(null);
  const [loginClicked, setLoginClicked] = useState(false);
  const [logoutClicked, setLogoutClicked] = useState(true);

  const login = () => {
    setLoginClicked(true);
    setLogoutClicked(false);

    const obj = { name: `Vishu` };
    setUser(obj);

    // console.log("i am in login");
  };

  const logout = () => {
    setLogoutClicked(true);
    setLoginClicked(false);

    setUser(null);
    // console.log("i am in logout");
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <h3>Method-1</h3>

      {user
        ? loginClicked && <LoginComponent user={user} logout={logout} />
        : logoutClicked && <LogoutComponent1 login={login} />}
    </div>
  );
};

const Method2 = () => {
  const [user, setUser] = useState(null);
  const [loginClicked, setLoginClicked] = useState(false);
  const [logoutClicked, setLogoutClicked] = useState(true);

  const login = (inputValue) => {
    setLoginClicked(true);
    setLogoutClicked(false);

    const obj = { name: `${inputValue}` };
    setUser(obj);

    // console.log("i am in login");
  };

  const logout = () => {
    setLogoutClicked(true);
    setLoginClicked(false);

    setUser(null);
    // console.log("i am in logout");
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <h3>Method-2</h3>

      {user
        ? loginClicked && <LoginComponent user={user} logout={logout} />
        : logoutClicked && <LogoutComponent login={login} />}
    </div>
  );
};

{
  /*         
      Alternate approach->

      const [user, setUser] = useState(null);
      const [loginClicked, setLoginClicked] = useState(false);
      const [logoutClicked, setLogoutClicked] = useState(true);

      {user && loginClicked && <LoginComponent user={user} logout={logout} />}
      {!user && logoutClicked && <LogoutComponent login={login} />}  */
}

const LoginComponent = ({ user = { name }, logout }) => {
  return (
    <div>
      <h4>hello there, {user.name}</h4>
      <button type="button" className="btn" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

const LogoutComponent = ({ login }) => {
  let nameValue = "";
  const handleInputChange = (inputValue) => {
    nameValue = inputValue;
    return nameValue;
  };

  return (
    <div>
      <h4>Please Login</h4>

      <input
        style={{ width: "10rem", marginRight: "1rem" }}
        type="text"
        id="nameInput"
        name="nameInput"
        placeholder="Enter name and login"
        onChange={(e) => {
          handleInputChange(e.target.value);
        }}
      />

      <button
        type="submit"
        className="btn"
        onClick={() => {
          login(nameValue);
        }}
      >
        Login
      </button>
    </div>
  );
};
const LogoutComponent1 = ({ login }) => {
  return (
    <div>
      <h4>Please Login</h4>

      <button
        type="submit"
        className="btn"
        onClick={() => {
          login();
        }}
      >
        Login
      </button>
    </div>
  );
};

export default UserChallenge;
