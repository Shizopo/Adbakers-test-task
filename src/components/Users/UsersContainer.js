import React from "react";
import Users from "./Users";

class UsersContainer extends React.Component {
  state = {
    users: [],
    numberOfPages: 0,
    currentPage: 0,
  };

  componentDidMount() {
    let { currentPage } = this.state;
    this.fetchUsers(currentPage + 1);
  }

  fetchUsers = nextPage => {
    return fetch(`https://reqres.in/api/users?page=${nextPage}`)
      .then(resp => resp.json())
      .then(resp => {
        const { data, total_pages, page } = resp;
        this.setState(() => ({
          users: [...this.state.users, data],
          numberOfPages: total_pages,
          currentPage: page,
        }));
      })
      .catch(err => console.log("An error occured", err));
  };

  renderUsers = arr => {
    return arr.map(({ id, first_name, last_name, avatar }) => (
      <li key={id.toString()}>
        <span>{first_name}</span>
        <span>{last_name}</span>
      </li>
    ));
  };

  render() {
    const { users, currentPage, numberOfPages } = this.state;
    return (
      <>
        <Users
          users={users[currentPage - 1]}
          numberOfPages={numberOfPages}
          currentPage={currentPage}
          renderUsers={this.renderUsers}
        />
      </>
    );
  }
}

export default UsersContainer;
