import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from '../../../context/AuthContext';


import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      {/* <nav>
        <header className="bg-gray-900 border-b-2 border-white z-40 py-2 overflow-visible motion-safe:transition-all  backdrop-blur-lg sticky top-0 left-0 right-0 transform-cpu w-full">
          <div className="mx-auto max-w-7xl px-5 grid h-16 grid-flow-col items-center justify-between ">
            <Link to="/">
              <img
                src="/images/CUTMLogo.png"
                className="w-32 h-auto rounded-md"
                alt=""
              />
            </Link>

            <button onClick={handleNavToggle}>Toggle Navigation</button>
            {
              isNavOpen && (


                <div>
                  {isAuthenticated ? (
                    <button
                      onClick={() =>
                        logout({ logoutParams: { returnTo: window.location.origin } })
                      }
                    >
                      Log Out
                    </button>

                  ) : (
                    <button onClick={() => loginWithRedirect()}>Log In</button>
                  )}
                </div>
              )
            }
          </div>
        </header>
      </nav> */}
      <nav className="bg-gray-800">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/">
                <img
                  src="/images/CUTMLogo.png"
                  className="w-32 h-auto rounded-md"
                  alt=""
                />
              </Link>
            </div>
            <div className="flex sm:hidden">
              <button
                onClick={handleNavToggle}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isNavOpen ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
            <div className="hidden sm:flex sm:items-center">
              <ul className="flex space-x-4">
                <li>
                  <Link
                    to="/"
                    className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/team"
                    className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  {user?.displayName ? (
                    <button onClick={handleSignOut} className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Logout</button>
                  ) : (
                    <Link to='/signin' className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Sign in</Link>
                  )}
                </li>
                {/* <li>{
              isNavOpen && (


                <div>
                  {isAuthenticated ? (
                    <button
                      onClick={() =>
                        logout({ logoutParams: { returnTo: window.location.origin } })
                      }
                    >
                      Log Out
                    </button>

                  ) : (
                    <button onClick={() => loginWithRedirect()}>Log In</button>
                  )}
                </div>
              )
            }</li> */}
                {/* <li>
                  {isAuthenticated ? (
                    <NavLink className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" onClick={() =>
                      logout({ logoutParams: { returnTo: window.location.origin } })
                    }>
                      Logout
                    </NavLink>
                  ) : (
                    <NavLink className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" onClick={() => loginWithRedirect()}>
                      Login
                    </NavLink>
                  )

                  }
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        {isNavOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <ul className="pt-2 pb-3 space-y-1">
              <li>
                <Link
                  to="/"
                  className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Team
                </Link>
              </li>
              {/* <li>
                  {isAuthenticated ? (
                    <NavLink className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" onClick={() =>
                      logout({ logoutParams: { returnTo: window.location.origin } })
                    }>
                      Logout
                    </NavLink>
                  ) : (
                    <NavLink className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" onClick={() => loginWithRedirect()}>
                      Login
                    </NavLink>
                  )

                  }
                </li> */}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
