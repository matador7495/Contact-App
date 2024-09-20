import React from "react";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <h1>Contact App</h1>
      <p>
        <a href="https://gitlab.com/matador7495">GitLab</a> | React.js
      </p>
    </div>
  );
}

export default Header;
