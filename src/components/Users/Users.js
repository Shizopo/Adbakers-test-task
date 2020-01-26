import React from "react";
import "./Users.sass";

const renderUsers = arr => {
  return arr.map(({ id, first_name, last_name, avatar }) => (
    <li key={id.toString()} className="UsersList_User">
      <span className="UsersList_User_FirstName">{first_name}</span>
      <span className="UsersList_User_LastName">{last_name}</span>
    </li>
  ));
};

const Users = ({ users, handlePageChange }) => {
  if (!users) {
    return (
      <>
        <h1>loading</h1>
      </>
    );
  }

  return (
    <div className="Users">
      <h1>Users page</h1>
      <ul className="UsersList">{renderUsers(users)}</ul>
      <nav className="UsersNavigation">
        <button onClick={() => handlePageChange(false)}>Previous</button>
        <button onClick={() => handlePageChange(true)}>Next</button>
      </nav>
    </div>
  );
};

export default Users;
