import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <nav className='footer'>
        <h3>Follow us on</h3>
        <div id="social">
        <a href="#facebook" class="facebook">   
        <i class="fa fa-facebook"></i>   
        </a>   
        <a href="#twitter" class="twitter">   
         <i class="fa fa-twitter"></i>   
       </a>
       <a href="#instagram" class="instagram">   
       <i class="fa fa-instagram"></i>   
         </a>     
         </div>
    </nav>
  );
}

export default Footer;
