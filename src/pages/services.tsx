/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

function services() {
  return (
    <>
<link rel="shortcut icon" href="/a.jpg" type="image/x-icon" />


      {/* Nav Start */}
 
<nav className="border-red-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
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
                    href="/servicescopy"
                    className="block py-2 pl-3 pr-4 text-2xl text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  >
                    <img className="h-10 w-10" src="lightmode.png" alt="" />
                  </Link>
                </li>
              </ul>
            </div>

        </nav>
        {/* Nav End */}


{/* Main Card start */}
      <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                <span className="text-primary mb-2 block text-lg font-semibold">
                  Our Services
                </span>
                <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                  What We Offer
                </h2>
                <p className="text-body-color text-base">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
                <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                  <img
                    src="https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/rainbow-cake760x580.jpg?ext=.jpg"
                    className="w-36"
                    alt=""
                  />
                </div>
                <h4 className="text-dark mb-3 text-xl font-semibold">Cake</h4>
                <p className="text-body-color">
                  We dejoy working with discerning clients, people for whom
                  qualuty, service, integrity & aesthetics.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
                <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                  <img
                    src="https://www.bakerstable.in/wp-content/uploads/2020/09/b8.jpg"
                    className="w-36"
                    alt=""
                  />
                </div>
                <h4 className="text-dark mb-3 text-xl font-semibold">
                bun
                </h4>
                <p className="text-body-color">
                  We dejoy working with discerning clients, people for whom
                  qualuty, service, integrity & aesthetics.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
                <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                  <img
                    src="https://static.toiimg.com/thumb/84133579.cms?imgsize=195445&width=800&height=800"
                    className="w-36"
                    alt=""
                  />
                </div>
                <h4 className="text-dark mb-3 text-xl font-semibold">candy</h4>
                <p className="text-body-color">
                  We dejoy working with discerning clients, people for whom
                  qualuty, service, integrity & aesthetics.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
                <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                  <img
                    src="https://www.tastingtable.com/img/gallery/can-you-get-sick-from-eating-2-year-old-chocolate/intro-1654198813.jpg"
                    className="w-36"
                    alt=""
                  />
                </div>
                <h4 className="text-dark mb-3 text-xl font-semibold">
                chocolate
                </h4>
                <p className="text-body-color">
                  We dejoy working with discerning clients, people for whom
                  qualuty, service, integrity & aesthetics.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
                <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                <img
                    src="https://tastesbetterfromscratch.com/wp-content/uploads/2020/03/Bread-Recipe-5-2.jpg"
                    className="w-36"
                    alt=""
                  />
                </div>
                <h4 className="text-dark mb-3 text-xl font-semibold">
                bread
                </h4>
                <p className="text-body-color">
                  We dejoy working with discerning clients, people for whom
                  qualuty, service, integrity & aesthetics.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
                <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                <img
                    src="https://i0.wp.com/www.ParsiCuisine.com/wp-content/uploads/2019/08/Sheermal_bread_made_in_Iran.jpg?fit=600%2C600"
                    className="w-36"
                    alt=""
                  />
                </div>
                <h4 className="text-dark mb-3 text-xl font-semibold">
                taftan sheermal
                </h4>
                <p className="text-body-color">
                  We dejoy working with discerning clients, people for whom
                  qualuty, service, integrity & aesthetics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* Main Card end*/}

{/* footer start */}
<div className="mt-10 bottom-0 bg-slate-400 h-10 text-center">
            <h4 className="text-sm font-semibold text-white ">
              {" "}
              &copy; 2023 This Site Is Proudly Built By Ranaverse
            </h4>
          </div>
{/* footer end */}
       {/* Script Start */}
        {/* Script End */}  
    </>
  );
}

export default services;