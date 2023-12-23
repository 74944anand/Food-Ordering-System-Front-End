import React from "react";

const Login = () => {
  return (
    <>
      <form method="post">
        <div className="row mb-3 mt-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-3">
            <input type="email" className="form-control" id="inputEmail3" />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-3">
            <input
              type="password"
              className="form-control"
              id="inputPassword3"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck1"
              />
              <label className="form-check-label" htmlFor="gridCheck1">
                Remeber Me
              </label>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary mr-3">
          Sign in
        </button>
        <a className="btn btn-primary ml-3" href="/SignUp">
          SignUp
        </a>
      </form>
    </>
  );
};

export default Login;
