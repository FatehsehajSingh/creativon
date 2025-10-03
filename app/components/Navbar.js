"use client"

import React, { useState } from "react"
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"

function Navbar() {
  const { data: session } = useSession()
  const [showdropdown, setshowdropdown] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-gray-900 text-white px-4 py-2 flex justify-between items-center relative">
      {/* Logo */}
      <Link className="flex items-center gap-3" href={"/"}>
        <img className="invert w-10 h-10" src="/next.svg" alt="logo" />
        <span className="font-bold text-lg md:text-xl">Get Me a Snack</span>
      </Link>

      {/* Hamburger for mobile */}
      <button
        className="md:hidden flex flex-col gap-[5px]"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="block w-6 h-[2px] bg-white"></span>
        <span className="block w-6 h-[2px] bg-white"></span>
        <span className="block w-6 h-[2px] bg-white"></span>
      </button>

      <div className="hidden md:flex items-center gap-4">
        {session ? (
          <>
            <div className="relative">
              <button
                onBlur={() =>
                  setTimeout(() => {
                    setshowdropdown(false)
                  }, 300)
                }
                onClick={() => setshowdropdown(!showdropdown)}
                className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg flex items-center"
              >
                Welcome {session.user.email}
                <svg
                  className="w-3 h-3 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <div
                className={`absolute right-0 mt-2 w-44 bg-slate-700 text-white rounded-lg shadow-lg ${
                  showdropdown ? "block" : "hidden"
                }`}
              >
                <ul className="py-2 text-sm">
                  <li>
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 hover:bg-slate-500"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${session.user.name}`}
                      className="block px-4 py-2 hover:bg-slate-500"
                    >
                      Your Page
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => signOut()}
                      className="w-full text-left px-4 py-2 hover:bg-slate-500"
                    >
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <button
              className="bg-gradient-to-br from-purple-600 to-blue-500 px-4 py-2 rounded-lg"
              onClick={() => signOut()}
            >
              SignOut
            </button>
          </>
        ) : (
          <Link href="/login">
            <button className="bg-gradient-to-br from-purple-600 to-blue-500 px-4 py-2 rounded-lg">
              Login
            </button>
          </Link>
        )}
      </div>

     
      {menuOpen && (
        <div className="absolute top-14 left-0 w-full bg-gray-800 flex flex-col items-center py-4 gap-4 md:hidden z-20">
          {session ? (
            <>
              <Link
                href="/dashboard"
                className="px-4 py-2 hover:bg-gray-700 rounded-lg w-[90%] text-center"
              >
                Dashboard
              </Link>
              <Link
                href={`/${session.user.name}`}
                className="px-4 py-2 hover:bg-gray-700 rounded-lg w-[90%] text-center"
              >
                Your Page
              </Link>
              <button
                className="bg-gradient-to-br from-purple-600 to-blue-500 px-4 py-2 rounded-lg w-[90%]"
                onClick={() => signOut()}
              >
                SignOut
              </button>
            </>
          ) : (
            <Link href="/login">
              <button className="bg-gradient-to-br  from-purple-600 to-blue-500 px-4 py-2 rounded-lg w-[90%]">
                Login
              </button>
            </Link>
          )}
        </div>
      )}
    </nav>
  )
}

export default Navbar
