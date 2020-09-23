import React from 'react';
import './menu.css';
import { Link } from 'react-navi';

function Menu() {
  return (
    <ul className="nav flex-column nav-menu">
      <li className="nav-item">
        <Link
          className="nav-link"
          activeStyle={{ backgroundColor: '#007bff', color: '#fff' }}
          href={'/categories'}
        >
          <i className="nav-item-icon fas fa-home"></i>
          <span>Quản lý các loại đồ dùng</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link"
          activeStyle={{ backgroundColor: '#007bff', color: '#fff' }}
          href={'/item'}
        >
          <i className="nav-item-icon fas fa-desktop"></i>
          <span>Quản lý các đồ dùng</span>
        </Link>
      </li>
    </ul>
  );
}
export default Menu;
