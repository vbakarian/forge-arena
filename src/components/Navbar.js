import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div>
        <Link className="nav-link" to="/stats">
          View Stats <span className="sr-only" />
        </Link>
        <Link className="nav-link" to="/">
          View Users <span className="sr-only" />
        </Link>
      </div>
    );
  }
}

export default Navbar;
