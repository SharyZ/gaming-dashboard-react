import { Link } from "react-router-dom";

export const TheSignupForm = () => {
  return (
    <div className="mx-auto flex min-h-screen max-w-xs flex-col items-center justify-center">
      <div className="mb-8 text-center">
        <h1 className="mb-6">Signup</h1>
        <p className="mb-2 text-[#9DA1B4]">
          Enter your username, email and password to register.
        </p>
      </div>
      <form className="w-full space-y-6">
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="johndoe"
            required
          />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="johndoe@example.com"
            required
          />
        </div>
        <div>
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            required
          />
        </div>
        <div className="text-center">
          <input type="submit" value="Sginup" />
        </div>
      </form>
      <div className="pt-6">
        <p className="text-[#9DA1B4]">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};
