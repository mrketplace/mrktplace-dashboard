import './App.css';
import Header from './components/base/Header';
import Sidebar from './components/base/Sidebar';
import UpdateBtn from './components/UpdateBtn';
import { Outlet } from 'react-router-dom';
import Footer from './components/base/Footer';

export default function App(): JSX.Element {
  return (
    <div>
      {/* <!-- Layout wrapper --> */}
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          {/* <!-- Menu --> */}
          <Sidebar />
          {/* <!-- / Menu --> */}
          {/* <!-- Layout container --> */}
          <div className="layout-page">
            {/* <!-- Navbar --> */}
            <Header />
            {/* <!-- / Navbar --> */}
            {/* <!-- Content wrapper --> */}
            <div className="content-wrapper">
              {/* <!-- Content --> */}

              <Outlet />
              {/* <!-- / Content --> */}

              {/* <!-- Footer --> */}
              <Footer />
              {/* <!-- / Footer --> */}

              <div className="content-backdrop fade"></div>
            </div>
            {/* <!-- Content wrapper --> */}
          </div>
          {/* <!-- / Layout page --> */}
        </div>
        {/* <!-- Overlay --> */}
        <div className="layout-overlay layout-menu-toggle"></div>
      </div>
      {/* <!-- / Layout wrapper --> */}
      {/* <UpdateBtn /> */}
    </div>
  );
}

