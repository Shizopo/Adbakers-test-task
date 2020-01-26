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

  handlePageChange = async button => {
    let { users, currentPage, numberOfPages } = this.state;
    let nextPage = currentPage + 1;
    let prevPage = currentPage - 1;
    if (button && nextPage > numberOfPages) {
      this.setState({
        currentPage: 1,
      });
    } else if (!button && prevPage <= 0) {
      this.setState({
        currentPage: numberOfPages,
      });
    } else if (!button) {
      this.setState({
        currentPage: prevPage,
      });
    } else if (button) {
      users.length < numberOfPages
        ? await this.fetchUsers(nextPage)
        : this.setState({
            currentPage: currentPage + 1,
          });
    }
  };

  render() {
    const { users, currentPage, numberOfPages } = this.state;
    return (
      <>
        <Users
          users={users[currentPage - 1]}
          handlePageChange={this.handlePageChange}
        />
      </>
    );
  }
}

export default UsersContainer;
