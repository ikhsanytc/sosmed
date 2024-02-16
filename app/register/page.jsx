"use client";

import { useEffect, useState } from "react";

const Register = () => {
  const [errorValidate, setErrorValidate] = useState({});
  useEffect(() => {
    document.title = "Register Sosmed";
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const agree = confirm(
      "Dengan ini anda menyetujui aturan aturan yang ada di app ini?"
    );
    if (agree) {
      const email = document.getElementById("email").value;
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/register`, {
          cache: "no-store",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            username,
            password,
          }),
        });
        if (res.ok) {
          const resData = await res.json();
          if (resData.message === "not validate") {
            setErrorValidate(resData.error);
          }
          if (resData.message === "sukses") {
            alert("sukses untuk register, sekarang login!");
            location.replace("/login");
          }
        } else {
          console.log(res.status);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("abort");
    }
  };
  return (
    <div className="container">
      <div className="card shadow">
        <div className="card-header">
          <h1 className="text-center">Register</h1>
        </div>
        <div className="card-body">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className={`form-control ${
                  errorValidate.email ? "is-invalid" : ""
                }`}
                id="email"
                aria-describedby="emailHelp"
                required
              />
              {errorValidate.email && (
                <div className="invalid-feedback">{errorValidate.email}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className={`form-control ${
                  errorValidate.username ? "is-invalid" : ""
                }`}
                id="username"
                required
                minLength={"4"}
              />
              {errorValidate.username && (
                <div className="invalid-feedback">{errorValidate.username}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className={`form-control ${
                  errorValidate.password ? "is-invalid" : ""
                }`}
                id="password"
                required
                minLength={"8"}
              />
              {errorValidate.password && (
                <div className="invalid-feedback">{errorValidate.password}</div>
              )}
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: "100%" }}
            >
              Submit
            </button>
          </form>
        </div>
        <div className="card-footer">
          <div className="p-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
