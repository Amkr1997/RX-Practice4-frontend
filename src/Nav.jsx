import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-white">
        <div className="container">
          <NavLink className="mx-auto navbar-brand fs-2 py-0 fw-medium" to="/">
            <span className="text-success">Movie</span>-App
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"></li>
            </ul>
          </div> */}
        </div>
      </nav>
    </>
  );
};

export default Nav;
