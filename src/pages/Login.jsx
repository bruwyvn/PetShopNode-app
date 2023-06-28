import { useState } from "react";
import { useLocation } from "react-router-dom";

const Login = () => {
  const location = useLocation()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const json = await response.json();

      localStorage.setItem("token", json.token);
      location.pathname = "/"
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <form onSubmit={handleSubmit}>
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  className="input-bordered input"
                  type="text"
                  placeholder="email"
                  value={email}
                  onChange={({ target }) => setEmail(target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  className="input-bordered input"
                  type="text"
                  placeholder="password"
                  value={password}
                  onChange={({ target }) => setPassword(target.value)}
                />
                <label className="label">
                  <a href="#" className="link-hover label-text-alt link">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn-primary btn">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
