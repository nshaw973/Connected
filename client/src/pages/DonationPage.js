import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { CREATE_CHECKOUT_SESSION } from '../utils/mutations';
import Auth from '../utils/auth';

const stripePromise = loadStripe(
  'pk_test_51NGXgmCtW3aeeYMOwh1BqDyFTgiXxZ3vbu85fbsRUERwgFxq3XSewfEFe91He9Mb4RC4eIY4hj4ewMwDx9ykBKcm00abJzkEkX'
);

const Donation = () => {
  const [amount, setAmount] = useState('1.00');

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const [createCheckoutSession] = useMutation(CREATE_CHECKOUT_SESSION);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await createCheckoutSession({
        variables: {
          amount: parseFloat(amount) * 100,
        },
      });

      const sessionId = data.createCheckoutSession;

      const stripe = await stripePromise;
      await stripe.redirectToCheckout({
        sessionId,
      });
    } catch (error) {
      console.error('Incorrect value entered');
    }

    setAmount('1.00');
  };

  return (
    <>
      {Auth.loggedIn() ? (
        <div className="hero min-h-screen">
          <div className="hero-content flex-col">
            <img
              src="https://www.wildapricot.com/wp-content/uploads/2022/10/how-to-get-donations-18-ways.png"
              className="max-w-sm rounded-lg shadow-2xl"
              alt="donation"
            />
            <div>
              <div className="max-w-md mx-auto">
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <h2 className="text-2xl font-semibold mb-6">
                    A donation would help us grow and help create a much better
                    product for everyone! So every little bit goes a long way so
                    thank you!
                  </h2>
                  <div className="mb-6">
                    <label
                      htmlFor="amount"
                      className="text-sm font-medium text-gray-700 block bg-white"
                    >
                      Amount
                    </label>
                    <input
                      type="text"
                      id="amount"
                      className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-white text-center"
                      value={amount}
                      onChange={handleAmountChange}
                      required
                    />
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
                    >
                      Donate
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1> Please <Link to="/login">login</Link> if you'd like to donate! :) </h1>
      )}
    </>
  );
};

export default Donation;
