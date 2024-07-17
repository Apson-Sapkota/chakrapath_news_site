import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <p>३१ असार, २०८१</p>
            </div>
            <div className="col-lg-8">
              <p>Monday, July 15, 2024, 8:30 PM</p>
            </div>
            <div className="col-lg-2">
              <div className="icons">
                <div>
                  <i className="bi bi-facebook" />
                  <i className="bi bi-twitter" />
                  <i className="bi bi-youtube" />
                  <i className="bi bi-instagram" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="bottom py-3">
          <img
            src="https://api.chakrapath.com/Content/AdImages/20245711871_nnnnnnnn.jpg"
            alt="image"
          />
        </div>
        <div className="bottom2">
          <div className="row">
            <div className="col-lg-3">
              <img
                src="https://www.chakrapath.com/assets/img/chakrapath/chakrapath-logo.png"
                alt="image"
              />
            </div>
            <div className="col-lg-4">
              <ul>
                <li>
                  <h6>आवरण</h6>
                </li>
                <li>
                  <h6>भिडियो</h6>
                </li>
                <li>
                  <h6>ग्यालरी</h6>
                </li>

                <li class="  position-relative">
                  सूचना
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    नयाँ
                    <span class="visually-hidden">unread messages</span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 position-relative">
              <input
                type="text"
                placeholder="खोज्नुहोस्"
                
              />
              <span className="searcha">
             <i className="bi bi-search" />

              </span>
              </div>
              <div className="col-lg-2 ">
                
                <button>English</button>
              </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
