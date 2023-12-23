const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="d-flex justify-content-between"></div>
          <a className="navbar-brand" href="/">
            <img
              src="https://img.icons8.com/color/48/food-bar.png"
              alt="Bootstrap"
              width="30"
              height="24"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-c"
            aria-controls="navbar-c"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-c">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Products">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Hotels">
                  Hotels
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Orders">
                  Orders
                </a>
              </li>
              <div className="container-fluid">
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-3 w-4"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
              <li className="nav-item">
                <a className="nav-link" href="/Cart">
                  Cart
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Login">
                  Login/SignUp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
