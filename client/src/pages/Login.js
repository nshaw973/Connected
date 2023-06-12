import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const LoginForm = () => {
  const [loginForm, setLoginState] = useState({
    email: '',
    password: '',
  });

  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setLoginState({
      ...loginForm,
      [name]: value,
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...loginForm },
      });
      console.log(data);

      Auth.login(data.login.token);

      setLoginState({
        email: '',
        password: '',
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="max-w-lg mx-auto flex justify-center items-center flex-col flex-grow rounded-lg">
      {data ? (
        <p>
          Success! You may now head <Link to="/">back to the homepage.</Link>
          <span className="loading loading-bars loading-lg"></span>
        </p>
      ) : (
        <div className="hero w-max h-max ">
          <div className="hero-content flex-col lg:flex-row-reverse rounded bg-violet-500">
            <div className="text-center lg:text-left text-amber-50">
              <h1 className="text-5xl font-bold text-amber-50">Login now!</h1>
              <p className="py-6 text-amber-50">
                Not a member? click <Link to="/signup">Here</Link> to signup!
              </p>
            </div>
            <form
              onSubmit={handleLogin}
              className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 min-w-[50%]"
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 "
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="input input-bordered w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white border-1 border-black"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={loginForm.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="input input-bordered w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white border-1 border-black"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={loginForm.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  );
};

export default LoginForm;
