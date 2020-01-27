import React from "react";

const UserCard = ({ isShown, user, closeModal }) => {
  const { email, first_name, last_name, avatar } = user;
  const visibilityClassName = isShown ? "UserCard_active" : "UserCard";

  return (
    <div className={visibilityClassName}>
      <button className="UserCard_Close" onClick={closeModal}>
        Close
      </button>
      <img
        src={avatar}
        className="UserCard_Avatar"
        alt={`${first_name} ${last_name} avatar`}
      />
      <div className="UserCard_Details">
        <div>
          First name:{" "}
          <span className="UserCard_Details_UserInfo">{first_name}</span>
        </div>
        <div>
          Last name:{" "}
          <span className="UserCard_Details_UserInfo">{last_name}</span>
        </div>
        <div>
          Email: <span className="UserCard_Details_UserInfo">{email}</span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
