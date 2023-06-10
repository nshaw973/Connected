import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const SignupForm = () => {
  const [isRecruiter, setIsRecruiter] = useState(false);
  const [signupForm, setFormState] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    recruiter: isRecruiter,
  });

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...signupForm,
      [name]: value,
    });
  };

  const handleCheckboxChange = (event) => {
    setIsRecruiter(event.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addUser({
        variables: {
          ...signupForm,
        },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="max-w-lg mx-auto flex justify-center items-center flex-col flex-grow">
      {data ? (
        <p>
          Success! You may now head <Link to="/">back to the homepage.</Link>
        </p>
      ) : (
        <div className="hero bg-white w-100vw lg:w-max h-max">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center text-amber-50">
              <h1 className="text-5xl font-bold text-amber-50">Welcome!</h1>
              <p className="py-6 text-amber-50 whitespace-normal">
                Hello and Welcome to Connected! Please fill out the form to
                create an account with us. Make sure to check the checkbox if
                your a recruiter or a developer!
              </p>
              <p className="py-6 text-amber-50">
                Already a member? <Link to="/login">Here</Link> to login to your
                account!
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full "
            >
              <div className="flex justify-center items-center flex-col lg:items-start lg:flex-row w-full">
                {/* personal info */}
                <section>
                  <div className="mb-4 mx-2 flex justify-center flex-col">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      className="input input-bordered w-full max-w-xs text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white border-1 border-black"
                      id="first-name"
                      name="firstName"
                      type="text"
                      placeholder="Enter your first name"
                      value={signupForm.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-4 mx-2 flex justify-center flex-col">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="firstName"
                    >
                      Last Name
                    </label>
                    <input
                      className="input input-bordered w-full max-w-xs text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white border-1 border-black"
                      id="last-name"
                      name="lastName"
                      type="text"
                      placeholder="Enter your last name"
                      value={signupForm.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </section>
                {/* credentials */}
                <section>
                  <div className="mb-4 mx-2 flex justify-center flex-col ">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Username
                    </label>
                    <input
                      className="input input-bordered w-full max-w-xs text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white border-1 border-black"
                      id="name"
                      name="username"
                      type="text"
                      placeholder="Enter your name"
                      value={signupForm.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-4 mx-2 flex justify-center flex-col">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="input input-bordered w-full max-w-xs text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white border-1 border-black"
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={signupForm.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-4 mx-2 flex justify-center flex-col">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className="input input-bordered w-full max-w-xs text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white border-1 border-black"
                      id="password"
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      value={signupForm.password}
                      onChange={handleChange}
                      required
                    />
                    <div>
                      <label>
                        <input
                          type="checkbox"
                          checked={isRecruiter}
                          onChange={handleCheckboxChange}
                        />
                        Are you a recruiter?
                      </label>
                    </div>
                  </div>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    style={{ cursor: 'pointer' }}
                    type="submit"
                  >
                    Sign Up
                  </button>
                </section>
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

export default SignupForm;
