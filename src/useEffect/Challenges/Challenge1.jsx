import { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const Fetch = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data);
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  return (
    <>
      <section>
        <h3>GitHub Users</h3>
        <ul className="users">
          {users.map((ele) => {
            return <UserComponent {...ele} key={ele.id} />;
          })}
        </ul>
      </section>
    </>
  );
};

const UserComponent = (user) => {
  const { login, html_url, avatar_url } = user;
  return (
    <>
      {
        <li>
          <img src={avatar_url} alt={login} />
          <div>
            <h5>{login}</h5>
            <a href={html_url}>Profile</a>
          </div>
        </li>
      }
    </>
  );
};

export default Fetch;
