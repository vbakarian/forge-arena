import React, { Component } from "react";
import SortableTbl from 'react-sort-search-table';
import Navbar from "./Navbar.js"
class UserTable extends Component {
  constructor() {
    super();
    this.state = {
      statsData: [],
    };
    
  }
  componentDidMount() {
    fetch("/getStats")
      .then(x => x.json())
      .then(response => {
        this.setState({ statsData: response });
      });
  }
  render() {
    const { statsData } = this.state;
    let col = [
        "id",
        "userId",
        "kills",
        "deaths",
        "headShots",
        "gunShots",
        "won",
        "lost"
	];
    let tHead = [
        "id",
        "User ID",
        "Kills",
        "Deaths",
        "Head Shots",
        "Gun Shots",
        "Won",
        "Lost"
	];
    return (
      <div>
        <Navbar/>
        <SortableTbl tblData={statsData}
            tHead={tHead}
            dKey={col}
			search={true}
			defaultCSS={true}
		/>
      </div>
    );
  }
}

export default UserTable;