import { Link } from "react-router-dom";

export const TheLoginForm = () => {
  return (
    <div className="mx-auto flex min-h-screen max-w-xs flex-col items-center justify-center">
      <div className="mb-8 text-center">
        <h1 className="mb-6">Login</h1>
        <p className="mb-2 text-[#9DA1B4]">Enter your username and password.</p>
      </div>
      <form className="w-full space-y-6">
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="johndoe@example.com"
          />
        </div>
        <div>
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
        </div>
        <div className="text-center">
          <input type="submit" value="Login" />
        </div>
      </form>
      <div className="pt-6">
        <p className="text-[#9DA1B4]">
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
};
