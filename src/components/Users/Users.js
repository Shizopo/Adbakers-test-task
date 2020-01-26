import React from "react";
import "./Users.sass";

const Users = ({ users, numberOfPages, currentPage, renderUsers }) => {
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
    </div>
  );
};

export default Users;
