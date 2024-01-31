import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../context/Context";

const Navbar = () => {
  const { user,logout } = useContext(MainContext);
  const [menu,setMenu] = useState(false)

  return (
    <nav class="bg-white border-gray-200 dark:bg-gray-900 text-xl mb-2 mt-2">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-8"
            alt="Flowbite Logo"
          />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Quiz
          </span>
        </a>

        
        
        <div class=" w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex gap-3  p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/listing"
                class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                Listing
              </Link>
            </li>
            <li>
              <Link
                to="/create"
                class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                Create
              </Link>
            </li>

            {user == null ? (
              <li>
                <Link
                  to="/login"
                  class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Login
                </Link>
              </li>
            ) : (
              <li className="flex gap-4">
                <li>
                  <Link
                    onClick={logout}
                    class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Logout
                  </Link>
                </li>

                <li>
                  <Link
                    to="/play"
                    class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Play
                  </Link>
                </li>
              </li>
            )}
          </ul>
        </div>

      
      </div>
    </nav>
  );
};

export default Navbar;
