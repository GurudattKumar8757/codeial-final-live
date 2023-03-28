import React from 'react';

function Navbar(props) {
  return (
    <nav className="nav">
      <div className="left-div">
        <img
          src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
          alt="logo"
        />
      </div>
      <div className="search-container">
        <img
          className="search-icon"
          src="https://cdn-icons-png.flaticon.com/128/954/954591.png"
          alt="search-icon"
        />
        <input placeholder="Search" />
        <div className="search-results">
          <ul>
            <li className="search-results-row">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
                alt="user-dp"
              />
              <span>John Doe</span>
            </li>
            <li className="search-results-row">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
                alt="user-dp"
              />
              <span>John Doe</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="right-nav">
        <div className="user">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
            alt="user-dp"
            id="user-dp"
          />
          <span>John Doe</span>
        </div>
        <div className="nav-links">
          <ul>
            <li>Login</li>
            <li>Logout</li>
            <li>Register</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
