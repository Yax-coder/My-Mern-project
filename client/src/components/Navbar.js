import React from "react";
import { Fragment } from 'react'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "actions/auth";

function Navbar({ transparent, logout, auth: { isAuthenticated, loading } }) {
  // eslint-disabled-next-line
  const [navbarOpen] = React.useState(false);

  const guestLinks = (
    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
      <li className="flex items-center">
        <Link
          className={
            (transparent
              ? "lg:text-dark lg:hover:text-gray-300 text-gray-800"
              : "text-gray-800 hover:text-gray-600") +
            " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
          }
          to="/developers"
        >
          Developers
        </Link>
      </li>

      <li className="flex items-center">
        <Link
          className={
            (transparent
              ? "lg:text-dark lg:hover:text-gray-300 text-gray-800"
              : "text-gray-800 hover:text-gray-600") +
            " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
          }
          to="/register"
        >
          Register
        </Link>
      </li>
    </ul>
  )

  const authLinks = (
    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
      <li className="flex items-center">
        <Link
          className={
            (transparent
              ? "lg:text-dark lg:hover:text-gray-300 text-gray-800"
              : "text-gray-800 hover:text-gray-600") +
            " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
          }
          to="/dashboard"
        >
          Dashboard
        </Link>
      </li>
      <li className="flex items-center">
        <Link
          className={
            (transparent
              ? "lg:text-dark lg:hover:text-gray-300 text-gray-800"
              : "text-gray-800 hover:text-gray-600") +
            " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
          }
          to="/developers"
        >
          Developers
        </Link>
      </li>
      <li className="flex items-center">
        <Link
          className={
            (transparent
              ? "lg:text-dark lg:hover:text-gray-300 text-gray-800"
              : "text-gray-800 hover:text-gray-600") +
            " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
          }
          to="/posts"
        >
          Posts
        </Link>
      </li>
      <li className="flex items-center">
        <Link
          className={
            (transparent
              ? "lg:text-dark lg:hover:text-gray-300 text-gray-800"
              : "text-gray-800 hover:text-gray-600") +
            " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
          }
          to="/login"
          onClick={logout}
        >
          <i className="fas fa-sign-out-alt"></i> Logout
        </Link>
      </li>
    </ul>
  )



  return (
    <>
      <nav
        className={
          (transparent
            ? "top-0 absolute z-50 w-full"
            : "relative shadow-lg bg-white shadow-lg") +
          " flex flex-wrap items-center justify-between px-2 py-3 "
        }
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            {!loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
          </div>
        </div>
      </nav>

    </>
  );
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mappStateToProps = state => ({
  auth: state.auth,
})

export default connect(mappStateToProps, { logout })(Navbar) 
