/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-img-element  */

import Link from "next/link";
import '../styles/Home.module.css'

function pricing() {
  return (
    <>

      {/* Nav Start */}
      <nav className="border-red-200 px-2 sm:px-4 flex flex-wrap py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link href="" className="flex items-center">
            <img src="a.jpg" className="mr-3 sm:h-97 w-40" alt="Flowbite Logo" />
          </Link>

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
                href="/pricingcopy"
                className="block py-2 pl-3 pr-4 text-2xl text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
              >
                <img className="h-10 w-10" src="darktheme.png" alt="" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>


      {/* Nav End */}

      <center>
        <div className="flex justify-evenly flex-wrap">

          <div className="bg-red-300 h-96 w-64 rounded-2xl pricing-plan">
            <img src="/icon1.png" alt="" className="h-40 hover:shadow-blue-600 hover:rounded-full hover:shadow-2xl" />
            <h2 className="pricing-header text-2xl text-blue-700">Enterprise</h2>
            <br />
            <hr />

            <ul className="pricing-features">
              <li className="pricing-features-item">Custom domains</li>
            <hr />

          
              <li className="pricing-features-item">Sleeps after 30 mins of inactivity</li>
            <hr />
            <li className="pricing-features-item">Custom domains</li>
            <hr />
            </ul>
        <br />
        <button className="text-2xl bg-slate-400 h-10 w-32 rounded-2xl hover:shadow-blue-600 hover:shadow-2xl hover:text-white">
           Buy Now
          </button>

          </div>

          <br /><br />

          <div className="bg-red-300 h-96 w-64 rounded-2xl pricing-plan">
            <img src="/icon2.png" alt="" className="h-40 hover:shadow-blue-600 hover:rounded-full hover:shadow-2xl" />
            <h2 className="pricing-header text-2xl text-blue-700">Professional</h2>
            <br />
            <hr />

            <ul className="pricing-features">
              <li className="pricing-features-item">Custom domains</li>
            <hr />

              <li className="pricing-features-item">Sleeps after 30 mins of inactivity</li>
            <hr />
            <li className="pricing-features-item">Custom domains</li>
            <hr />
            </ul>
            <br />
            <button className="text-2xl bg-slate-400 h-10 w-32 rounded-2xl hover:shadow-blue-600 hover:shadow-2xl hover:text-white">
           Buy Now
          </button>
          </div>
          <br /><br />


          <div className="bg-red-300 h-96 w-64 rounded-2xl pricing-plan">
            <img src="/icon3.png" alt="" className="h-40 hover:shadow-blue-600 hover:rounded-full hover:shadow-2xl" />
            <h2 className="pricing-header text-2xl text-blue-700">Standard</h2>
            <br />
           
            <hr />

            <ul className="pricing-features">
              <li className="pricing-features-item">Custom domains</li>
            <hr />

              <li className="pricing-features-item">Sleeps after 30 mins of inactivity</li>
            <hr />
            <li className="pricing-features-item">Custom domains</li>
            <hr />
            </ul>
            <br />
            <button className="text-2xl bg-slate-400 h-10 w-32 rounded-2xl hover:shadow-blue-600 hover:shadow-2xl hover:text-white">
           Buy Now
          </button>
          </div>

          <div className="bg-red-300 h-96 w-64 rounded-2xl pricing-plan">
            <img src="/icon4.png" alt="" className="h-40 hover:shadow-blue-600 hover:rounded-full hover:shadow-2xl" />
            <h2 className="pricing-header text-2xl text-blue-700">Basic</h2>
            <br />
            
            <hr />
            <ul className="pricing-features">
              <li className="pricing-features-item">Custom domains</li>
            <hr />

              <li className="pricing-features-item">Sleeps after 30 mins of inactivity</li>
            <hr />
            <li className="pricing-features-item">Custom domains</li>
            <hr />
            </ul>
            <br />
            <button className="text-2xl bg-slate-400 h-10 w-32 rounded-2xl hover:shadow-blue-600 hover:shadow-2xl hover:text-white">
           Buy Now
          </button>
          </div>
        </div>
      </center>


      {/* Footer Start */}


      <div className="mt-10 bottom-0 bg-slate-400 h-10 text-center">
        <h4 className="text-sm font-semibold text-white ">
          {" "}
          &copy; 2023 This Site Is Proudly Built By Ranaverse
        </h4>
      </div>
      <br />
      {/* Footer End */}

    </>
  )
}

export default pricing;