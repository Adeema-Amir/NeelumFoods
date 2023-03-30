/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

function about() {
  return (
    <>
<link rel="shortcut icon" href="/a.jpg" type="image/x-icon" />

      {/* Nav Start */}
      <nav className="bg-black border-red-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="" className="flex items-center">
            <img src="a.jpg" className="mr-3 sm:h-97 w-40" alt="Flowbite Logo" />
          </a>
      <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/"
                  className="block py-2 pl-3 pr-4 text-2xl text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 pl-3 pr-4 text-2xl text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="block py-2 pl-3 pr-4 text-2xl text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="block py-2 pl-3 pr-4 text-2xl text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 pl-3 pr-4 text-2xl text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 pl-3 pr-4 text-2xl text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                >
                  <img className="h-10 w-10" src="lightmode.png" alt="" />
                </Link>
              </li>
            </ul>
          </div>
      </nav>
      {/* Nav End */}

      {/* Card Start */}
      <div className="m-7 bg-black">
        <div className="flex">
          <div className="">
            <h1 className="text-4xl text-red-600">Main</h1>
            <p className="text-2xl text-blue-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
              officia ipsum accusantium amet perspiciatis? Temporibus ducimus
              distinctio quibusdam dolore tempore inventore possimus hic minus,
              deserunt esse voluptatem assumenda in non?
            </p>
            <br />
            <p className="text-2xl text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
              officia ipsum accusantium amet perspiciatis? Temporibus ducimus
              distinctio quibusdam dolore tempore inventore possimus hic minus,
              deserunt esse voluptatem assumenda in non?
            </p>
          </div>
          <div className="">
            <img
              src="17landcape.jpg"
              className="rounded-full hover:shadow-red-600 shadow-2xl"
              alt="hello cup"
            />
          </div>
        </div>
      </div>
      <div className="m-7 bg-black">
        <div className="flex">
          <div className="">
            <img
              src="/5.jpg"
              className="rounded-full hover:shadow-blue-600 shadow-2xl "
              alt="hello cup"
            />
          </div>
          <div>
            <h1 className="text-4xl text-red-600">Main</h1>
            <p className="text-2xl text-blue-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
              officia ipsum accusantium amet perspiciatis? Temporibus ducimus
              distinctio quibusdam dolore tempore inventore possimus hic minus,
              deserunt esse voluptatem assumenda in non?
            </p>
            <br />
            <p className="text-2xl text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
              officia ipsum accusantium amet perspiciatis? Temporibus ducimus
              distinctio quibusdam dolore tempore inventore possimus hic minus,
              deserunt esse voluptatem assumenda in non?
            </p>
          </div>
        </div>
      </div>
      {/* Card End */}


      {/* Footer Start */}
      <div className="mt-10 bottom-0 bg-slate-400 h-10 text-center">
            <h4 className="text-sm font-semibold text-white ">
              {" "}
              &copy; 2023 This Site Is Proudly Built By Ranaverse
            </h4>
          </div>
      <br />
      {/* Footer End */}
      
      {/* Script Start */}
      <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.css" rel="stylesheet" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.js"></script>
      {/* Script End */}
    </>
  );
}
export default about;