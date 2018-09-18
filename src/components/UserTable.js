import React, { Component } from "react";
import "react-table/react-table.css";
import SortableTbl from 'react-sort-search-table';
import Navbar from "./Navbar.js"
class UserTable extends Component {
  constructor() {
    super();
    this.state = {
      userData: [],
    };
    
  }
  componentDidMount() {
    fetch("/getUsers")
      .then(x => x.json())
      .then(response => {
        this.setState({ userData: response });
      });
  }
  render() {
    const { userData } = this.state;
    let col = [
        "id",
        "fullName",
        "username",
        "avatar",
        "email"
	];
    let tHead = [
        "id",
        "Full Name",
        "Username",
        "Avatar",
        "Email"
	];
    return (
      <div>
        <Navbar/>
        <SortableTbl tblData={userData}
            tHead={tHead}
            dKey={col}
			search={true}
			defaultCSS={true}
		/>
        {/* <ReactTable
          data={userData}
          columns={[
            {
              columns: [
                {
                  Header: "id",
                  accessor: "id"
                },
                {
                  Header: "Full Name",
                  accessor: "fullName"
                },
                {
                  Header: "Username",
                  accessor: "username"
                },
                {
                  Header: "Avatar",
                  accessor: "avatar"
                },
                {
                  Header: "Email address",
                  accessor: "email"
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        /> */}
      </div>
    );
  }
}

export default UserTable;
