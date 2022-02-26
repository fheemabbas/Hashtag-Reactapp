  
import React from "react";
function Footer() {
  return (
    <footer className="page-footer font-small stylish-color-dark pt-4">
      <div className="container text-center text-md-left">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Footer Content</h5>
            <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
              consectetur
              adipisicing elit.</p>
    
          </div>
          <hr className="clearfix w-100 d-md-none"/>
          <div className="col-md-2 mx-auto">
            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>    
          </div>
          
          <hr className="clearfix w-100 d-md-none"/>
          <div className="col-md-2 mx-auto">
            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
    
          </div>
    
          <hr className="clearfix w-100 d-md-none"/>
          <div className="col-md-2 mx-auto">
            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>    
          </div>
    
        </div>
    
      </div>
      <div className="footer-copyright text-center py-3">© 2022 Copyright:
        <a href="#"> hastagApp</a>
      </div>
    
    </footer>
  );
}

export default Footer;