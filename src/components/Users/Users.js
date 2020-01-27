import React from "react";
import "./Users.sass";

const renderUsers = (arr, handleClick) => {
  return arr.map(({ id, email, first_name, last_name, avatar }, index, arr) => (
    <li
      key={id.toString()}
      id={id.toString()}
      tabIndex="0"
      className="UsersList_User"
      onClick={e => handleClick(e.currentTarget.id, arr)}
    >
      <span className="UsersList_User_FirstName">{first_name}</span>{" "}
      <span className="UsersList_User_LastName">{last_name}</span>
    </li>
  ));
};

const Users = ({
  users,
  currentPage,
  numberOfPages,
  handlePageChange,
  handleClick,
}) => {
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
      <ul className="UsersList">{renderUsers(users, handleClick)}</ul>
      <nav className="UsersNavigation">
        <button
          className={
            currentPage === 1
              ? "UsersNavigation_Button UsersNavigation_Button_disabled"
              : "UsersNavigation_Button"
          }
          onClick={() => handlePageChange(false)}
        >
          Previous
        </button>
        <button
          className={
            currentPage === numberOfPages
              ? "UsersNavigation_Button UsersNavigation_Button_disabled"
              : "UsersNavigation_Button"
          }
          onClick={() => handlePageChange(true)}
        >
          Next
        </button>
      </nav>
    </div>
  );
};

export default Users;
