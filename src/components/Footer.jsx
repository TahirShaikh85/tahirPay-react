import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h2>Company</h2>
                  <ul>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">Investor Relations</a>
                    </li>
                    <li>
                      <a href="#">Legal Notices</a>
                    </li>
                    <li>
                      <a href="#">Security Information</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Support</h2>
                  <ul>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Customer Portal</a>
                    </li>
                    <li>
                      <a href="#">Paid Support</a>
                    </li>
                    <li>
                      <a href="#">Pricing</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Services</h2>
                  <ul>
                    <li>
                      <a href="#">No cost EMI</a>
                    </li>
                    <li>
                      <a href="#">Pay</a>
                    </li>
                    <li>
                      <a href="#">Delivery</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Follow Us</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                      <i className="fab fa-facebook-f fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <a
                        href="https://www.instagram.com/_tahir_shaikh_85/"
                        target="_blank">
                        <i className="fab fa-instagram fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <i className="fab fa-youtube fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <i className="fab fa-twitter fontawesome-style"></i>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  Copyright @ 2022 Tahir Shaikh. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;