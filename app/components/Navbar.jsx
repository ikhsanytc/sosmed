"use client";
import { useEffect, useState } from "react";
import "bootstrap/dist/js/bootstrap.js";

const Navbar = () => {
  const [title, setTitle] = useState(null);
  useEffect(() => {
    setTitle(document.title);
  }, []);
  const logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("isLogin");
    location.replace("/");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            Sos<span style={{ color: "red" }}>med</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a
                className={`nav-link ${title == "Sosmed" ? "active" : ""}`}
                href="/"
              >
                Home
              </a>
              {!localStorage.getItem("isLogin") && (
                <>
                  <a
                    className={`nav-link ${
                      title == "Login Sosmed" ? "active" : ""
                    }`}
                    href="/login"
                  >
                    Login
                  </a>
                  <a
                    className={`nav-link ${
                      title == "Register Sosmed" ? "active" : ""
                    }`}
                    href="/register"
                  >
                    Register
                  </a>
                </>
              )}
              {localStorage.getItem("isLogin") && (
                <>
                  <a
                    className="nav-link"
                    style={{ cursor: "pointer" }}
                    data-bs-toggle="modal"
                    data-bs-target="#logoutModal"
                  >
                    Logout
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
      {localStorage.getItem("isLogin") && (
        <div className="modal fade" id="logoutModal" tabIndex={"-1"}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Logout</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  Yah {localStorage.getItem("username")} ingin logout atau
                  keluar?
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => logout()}
                  className="btn btn-danger"
                >
                  Iya nih
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="p-5"></div>
    </>
  );
};

export default Navbar;
