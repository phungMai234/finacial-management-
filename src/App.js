import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'jquery';
import '@fortawesome/fontawesome-free/css/all.css';

import './App.css';
import Header from './components/header/header';
import Menu from './components/menu/menu';
import BreadCrumb from './components/BreadCrumb/BreadCrumb';

function App({ children }) {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="sidenav">
        <Menu />
      </div>
      <div className="content">
        <main>
          <BreadCrumb />
          {children}
        </main>
      </div>
    </div>
  );
}

export default App;
