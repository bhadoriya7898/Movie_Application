import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer py-4 mt-5">
      <div className="container">
        {/* Top Section */}
        <div className="row">
          <div className="col-md-3 col-6 mb-3">
            <ul className="list-unstyled">
              <li><a href="#">Audio and Subtitles</a></li>
              <li><a href="#">Media Center</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div className="col-md-3 col-6 mb-3">
            <ul className="list-unstyled">
              <li><a href="#">Audio Description</a></li>
              <li><a href="#">Investor Relations</a></li>
              <li><a href="#">Legal Notices</a></li>
            </ul>
          </div>

          <div className="col-md-3 col-6 mb-3">
            <ul className="list-unstyled">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Cookie Preferences</a></li>
            </ul>
          </div>

          <div className="col-md-3 col-6 mb-3">
            <ul className="list-unstyled">
              <li><a href="#">Gift Cards</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Corporate Information</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-4">
          <p className="mb-1">&copy; {new Date().getFullYear()} MYFLIX</p>
          <p className="small">Made with ❤️ using React & Bootstrap</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
