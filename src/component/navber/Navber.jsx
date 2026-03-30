import React from 'react';

const Navber = () => {
    return (
        <div className='shadow'>
            <div className="navbar bg-base-100  sm:w-11/12 mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>
                    <a className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold text-3xl">DigiTools</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-5 px-1">
                        <li><a href="/products">Products</a></li>
                        <li><a href="/features">Features</a></li>
                        <li><a href="/pricing">Pricing</a></li>
                        <li><a href="/pricing">Testimonials</a></li>
                        <li><a href="/pricing">FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end gap-1 sm:gap-3">
                    <div class="dropdown dropdown-end">
                        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                            <div class="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                                <span class="badge badge-sm indicator-item">8</span>
                            </div>
                        </div>
                        <div
                            tabindex="0"
                            class="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                            <div class="card-body">
                                <span class="text-lg font-bold">8 Items</span>
                                <span class="text-info">Subtotal: $999</span>
                               
                            </div>
                        </div>
                    </div>
                    <a href="/pricing">Login</a>
                    <a className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]  text-white font-semibold">Get Started</a>
                </div>
            </div>
        </div>

        //         <div class="navbar bg-base-100 shadow-sm">
        //   <div class="flex-1">
        //     <a class="btn btn-ghost text-xl">daisyUI</a>
        //   </div>
        //   <div class="flex-none">
        //     <div class="dropdown dropdown-end">
        //       <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
        //         <div class="indicator">
        //           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
        //           <span class="badge badge-sm indicator-item">8</span>
        //         </div>
        //       </div>
        //       <div
        //         tabindex="0"
        //         class="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
        //         <div class="card-body">
        //           <span class="text-lg font-bold">8 Items</span>
        //           <span class="text-info">Subtotal: $999</span>
        //           <div class="card-actions">
        //             <button class="btn btn-primary btn-block">View cart</button>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //     {/* <div class="dropdown dropdown-end">
        //       <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
        //         <div class="w-10 rounded-full">
        //           <img
        //             alt="Tailwind CSS Navbar component"
        //             src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        //         </div>
        //       </div>

        //     </div> */}
        //   </div>
        // </div>
    );
};

export default Navber;