"use client";
import { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    document.title = "Login Sosmed";
    if (localStorage.getItem("isLogin")) {
      alert("You have already login!");

      location.replace("/");
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/login`, {
        method: "POST",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (res.ok) {
        const resData = await res.json();
        if (resData.status) {
          alert(resData.message);
          localStorage.setItem("username", resData.username);
          localStorage.setItem("isLogin", resData.id_account);
          alert("Selamat datang " + localStorage.getItem("username") + "!");
          location.replace("/");
        } else {
          alert(resData.message);
        }
      } else {
        console.log(res.status);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div className="card shadow">
        <div className="card-header">
          <h1 className="text-center">Login</h1>
        </div>
        <div className="card-body">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                required
              />
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

export default Login;
