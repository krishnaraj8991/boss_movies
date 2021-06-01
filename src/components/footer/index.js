import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <nav className='footer'>
      <h3>Follow us on</h3>
      <div id='social'>
        <a href='#facebook' className='facebook'>
          <i className='fa fa-facebook'></i>
        </a>
        <a href='#twitter' className='twitter'>
          <i className='fa fa-twitter'></i>
        </a>
        <a href='#instagram' className='instagram'>
          <i className='fa fa-instagram'></i>
        </a>
      </div>
    </nav>
  );
}

export default Footer;
