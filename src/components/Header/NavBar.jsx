import React from 'react';
import NavLinks from './Links'
import { Link, Links } from 'react-router';
import { getAuth } from 'firebase/auth';

const NavBar = ({user}) => {
  const auth = getAuth();

  const links =  <NavLinks user={user}></NavLinks>;
    return (
      <div className="navbar bg-base-100 px-[135px] my-[50px]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li>
          <a className='font-bold'>Listed Books</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Pages to Read</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end">

  {auth.currentUser === null ? (
  <>
    <Link
      to="/login"
      className="btn mr-4 bg-[#23BE0A] text-white"
    >
      Sign In
    </Link>

    <Link
      to="/sign-up"
      className="btn bg-[#59C6D2] text-white"
    >
      Sign Up
    </Link>
  </>
) : (
  <figure className="flex justify-center items-center gap-2">
    <img
      src={auth.currentUser.photoURL}
      alt={auth.currentUser.displayName || "User"}
      className="inline-block size-10 rounded-full ring-2 ring-white outline -outline-offset-1 outline-black/5"
    />
    <figcaption>
      <p>{auth.currentUser.displayName}</p>
    </figcaption>
  </figure>
)  }
  </div>
</div>
    );
};

export default NavBar;