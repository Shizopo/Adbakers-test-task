import React from "react";
import Users from "./Users";
import UsersCard from "./UserCard";

class UsersContainer extends React.Component {
  state = {
    isLoading: true,
    users: [],
    numberOfPages: 0,
    currentPage: 0,
    isModalShown: false,
    selectedUser: {},
    selectedId: 0,
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
          isLoading: false,
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

  handleClick = (id, arr) => {
    const selectedUser = arr.find(el => {
      if (el.id === +id) {
        return el;
      }
      return null;
    });
    this.setState({ isModalShown: true, selectedUser });
  };

  closeModal = () => {
    this.setState({ isModalShown: false });
  };

  render() {
    const {
      isLoading,
      users,
      currentPage,
      numberOfPages,
      isModalShown,
      selectedUser,
    } = this.state;
    if (isLoading) {
      return <h1>loading</h1>;
    } else {
      return (
        <>
          <Users
            users={users[currentPage - 1]}
            currentPage={currentPage}
            numberOfPages={numberOfPages}
            handlePageChange={this.handlePageChange}
            handleClick={this.handleClick}
          />
          <UsersCard
            isShown={isModalShown}
            user={selectedUser}
            closeModal={this.closeModal}
          />
        </>
      );
    }
  }
}

export default UsersContainer;
