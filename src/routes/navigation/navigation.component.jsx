import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
    return (
      <Fragment>
        <div className="navigattion">
          <Link className='logo-container' to='/'>
              <div>Logo</div>
          </Link>
          <div className="nav-links-container">
            <Link className='nav-link-container' to='/shop'>
                SHOP
            </Link>
          </div>
        </div>
        <Outlet/>
      </Fragment>
    );
  }

export default Navigation;