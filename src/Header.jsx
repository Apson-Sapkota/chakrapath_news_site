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
            <div className="col-lg-3 inputs">
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
      <div className="navs">
      <div className="container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">राजनीति</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">प्रशासन</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">समाज</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">अपराध</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">बिचार</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">अन्तरवार्ता</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">अर्थ</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">विश्व</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">खेल</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">कला/साहित्य</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">सम्पादकीय</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">सूचना प्रविधि</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">स्वास्थ्य, शिक्षा</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">अध्यात्म/दर्शन</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">समसामयिक</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">रोचक खबर</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">चक्रपथ संवाद</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">विविध</a>
        </li>
        
       
      </ul>
      
    </div>
  </div>
</nav>
</div>
</div>
    </>
  );
}

export default Header;
