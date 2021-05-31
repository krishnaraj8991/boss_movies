import React from "react";
import "./header.scss";

function Header() {
  return (
    <nav className='header'>
      <div>
        <h2 id='boss'>BOSS MOVIES</h2>
        <p id='subt'> must watch movies from the ’80s</p>
      </div>
    </nav>
  );
}

export default Header;
