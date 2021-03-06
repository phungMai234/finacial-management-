import React from "react"
import "./header.css"
import { Link } from "react-navi";
import logo from "../../img/logo.png"

function Header() {
  return (
    <>
      <Link href="/" className="header-left">
        <img src={logo} alt="logo" className="logo-img"/>
        <span className="logo-txt">UET Financial Management</span>
      </Link>
      <div className="header-right">
        <ul className="nav">
          <li className="nav-item">
            <i className="fas fa-bell nav-link"></i>
          </li>
          <li className="nav-item">
            <div className="dropdown">
              <button className="btn dropdown-toggle btn-primary btn-cs" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Phùng Thị Tuyết Mai
              </button>
              <div className="dropdown-menu">
                <button className="dropdown-item fz" type="button">Change password</button>
                <button className="dropdown-item fz" type="button">Log out</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}
export default Header;