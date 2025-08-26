import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer bg-dark text-light py-4 mt-5">
      <div className="container">
        {/* Top Section */}
        <div className="row">
          <div className="col-md-3 col-6 mb-3">
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Audio and Subtitles</a></li>
              <li><a href="#" className="text-light text-decoration-none">Media Center</a></li>
              <li><a href="#" className="text-light text-decoration-none">Privacy</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact Us</a></li>
            </ul>
          </div>

          <div className="col-md-3 col-6 mb-3">
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Audio Description</a></li>
              <li><a href="#" className="text-light text-decoration-none">Investor Relations</a></li>
              <li><a href="#" className="text-light text-decoration-none">Legal Notices</a></li>
            </ul>
          </div>

          <div className="col-md-3 col-6 mb-3">
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Help Center</a></li>
              <li><a href="#" className="text-light text-decoration-none">Jobs</a></li>
              <li><a href="#" className="text-light text-decoration-none">Cookie Preferences</a></li>
            </ul>
          </div>

          <div className="col-md-3 col-6 mb-3">
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Gift Cards</a></li>
              <li><a href="#" className="text-light text-decoration-none">Terms of Use</a></li>
              <li><a href="#" className="text-light text-decoration-none">Corporate Information</a></li>
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
