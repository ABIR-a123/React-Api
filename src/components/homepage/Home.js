import React, { useEffect, useState } from "react";
import Nav from "../share/Nav";
import "./home.css";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  });

  return (
    <>
      <Nav />
      <h1>User information:{users.length}</h1>

      <div className="row">
        {users.map((users) => (
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="user-name">UserName:{users.name}</h5>
                <p className="User-email">UserEmail:{users.email}</p>
                <p className="User-email">UserAddress:{users.address.city}</p>
                <p className="User-phone">UserPhone:{users.phone}</p>
                <p className="User-website">UserWebsite:{users.website}</p>
                <p className="User-email">UserCompany:{users.company.name}</p>

                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
