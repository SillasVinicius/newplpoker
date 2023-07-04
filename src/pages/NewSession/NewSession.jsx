import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function NewSession() {
  const navigate = useNavigate();

  const safeSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const nameSession = event.target[0].value;
    const nameUser = event.target[1].value;

    console.log({ nameSession, nameUser });

    navigate("/PlanningPoker");
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-10 font-bold">PL Poker</h1>
      <h1 className="text-xl font-bold">New Session</h1>

      <form
        onSubmit={safeSubmit}
        className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm space-y-6"
      >
        <div>
          <label
            htmlFor="nameSession"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Session Name
          </label>
          <div className="mt-2">
            <input
              id="nameSession"
              name="nameSession"
              type="text"
              minLength={3}
              required
              className="block w-full pl-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 outline-none invalid:focus:ring-red-400"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="nameUser"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Your Name
          </label>
          <div className="mt-2">
            <input
              id="nameUser"
              name="nameUser"
              type="text"
              minLength={3}
              required
              className="block w-full rounded-md pl-1.5 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 outline-none invalid:focus:ring-red-400"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-teal-600 px-4 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 outline-none"
          >
            Create
          </button>
          <Link
            to="/"
            className="flex w-full mt-2 justify-center rounded-md bg-teal-900 px-4 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-900 outline-none"
          >
            Back to Home
          </Link>
        </div>
      </form>
    </div>
  );
}
