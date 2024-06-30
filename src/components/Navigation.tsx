import { Outlet } from "react-router-dom";
import { routes } from "../routes";

export default function Navigation() {
  const sectionNames = routes[0].children?.map((item) => item.path);

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            Band Bank
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">&nbsp;</ul>
            <form className="d-flex my-2 my-lg-0">
              <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" href="#" aria-current="page">
                    Home
                    <span className="visually-hidden">(current)</span>
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="dropdownId"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Sections
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownId">
                    {sectionNames &&
                      sectionNames?.map((item) => (
                        <a
                          key={item}
                          className="dropdown-item"
                          href={`/${item}`}
                        >
                          {`${item?.charAt(0).toUpperCase()}${item?.slice(1)}`}
                        </a>
                      ))}
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="dropdownId"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Language
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownId">
                    <a className="dropdown-item" href="#">
                      Portuguese
                    </a>
                    <a className="dropdown-item" href="#">
                      English
                    </a>
                  </div>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}
