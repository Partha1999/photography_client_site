import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import logo from "../../../assets/images/logo.png";

const Navber = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <div className="navbar bg-base-100 py-5 w-[95%] mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              {user?.photoURL ? (
                <>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/myReviwes">My Reviwes</Link>
                  </li>
                  <li>
                    <Link to="/addServices">Add Services</Link>
                  </li>
                  <Link
                    onClick={logout}
                    to="/"
                    className="items-center flex-shrink-0 lg:flex ml-3"
                  >
                    <button className="self-center px-5 py-3 font-semibold rounded hover:bg-blue-600 hover:text-white">
                      LogOut
                    </button>
                  </Link>
                </>
              ) : (
                <>
                  <div className="items-center flex-shrink-0 lg:flex ml-3">
                    <li>
                      <Link to="/services">Services</Link>
                    </li>
                    <Link to="/login">
                      <button className="self-center px-5 py-3 rounded font-semibold hover:bg-blue-600 hover:text-white">
                        Login
                      </button>
                    </Link>
                    <Link to="/signup">
                      <button className="self-center px-5 py-3 font-semibold rounded hover:bg-blue-600 hover:text-white">
                        SignUp
                      </button>
                    </Link>
                  </div>
                </>
              )}
            </ul>
          </div>
          <div className="flex items-center">
            <img src={logo} className="w-10 h-10" alt="" />
            <Link to="/" className="btn btn-ghost normal-case text-xl">
              Photography
            </Link>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            {user?.photoURL ? (
              <>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/myReviwes">My Reviwes</Link>
                </li>
                <li>
                  <Link to="/addServices">Add Services</Link>
                </li>

                <label
                  htmlFor="my-drawer"
                  className=" self-center px-5 py-3 cursor-pointer rounded font-semibold hover:bg-blue-600 hover:text-white  drawer-button"
                >
                  Setting
                </label>
                <Link
                  onClick={logout}
                  to="/"
                  className="items-center flex-shrink-0 lg:flex ml-3"
                >
                  <button className="self-center px-5 py-3 font-semibold rounded hover:bg-blue-600 hover:text-white">
                    LogOut
                  </button>
                </Link>
              </>
            ) : (
              <>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                
                <div className="items-center flex-shrink-0 lg:flex ml-3">
                  <Link to="/login">
                    <button className="self-center px-5 py-3 rounded font-semibold hover:bg-blue-600 hover:text-white">
                      Login
                    </button>
                  </Link>
                  <Link to="/signup">
                    <button className="self-center px-5 py-3 font-semibold rounded hover:bg-blue-600 hover:text-white">
                      SignUp
                    </button>
                  </Link>
                </div>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;
