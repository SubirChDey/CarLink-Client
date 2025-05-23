import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../provider/AuthProvider"
import { FaUserTie } from "react-icons/fa"
import { Tooltip } from "react-tooltip"
import { RxHamburgerMenu } from "react-icons/rx";
import 'react-tooltip/dist/react-tooltip.css';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <div>
            <div className="navbar bg-[#191919] text-white shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>                            
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow bg-black">
                            <NavLink to={'/'} className={({ isActive }) => isActive ? "block py-2 px-3 text-white bg-red-600 rounded md:bg-transparent md:text-[#FF3500] md:p-0" : "block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-[#FF3500] md:p-0"} >Home</NavLink>

                            <NavLink to={'/available-cars'} className={({ isActive }) => isActive ? "block py-2 px-3 text-white bg-red-600 rounded md:bg-transparent md:text-[#FF3500] md:p-0" : "block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-[#FF3500] md:p-0"} >Available Cars</NavLink>
                            {
                                user && user?.email ?
                                    <NavLink to={'/add-cars'} className={({ isActive }) => isActive ? "block py-2 px-3 text-white bg-red-600 rounded md:bg-transparent md:text-[#FF3500] md:p-0" : "block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-[#FF3500] md:p-0"}> Add Car</NavLink> : ""
                            }
                            {
                                user && user?.email ? <NavLink to={'/my-cars'} className={({ isActive }) => isActive ? "block py-2 px-3 text-white bg-red-600 rounded md:bg-transparent md:text-[#FF3500] md:p-0" : "block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-[#FF3500] md:p-0"}> My Cars</NavLink> : ""
                            }
                            {
                                user && user?.email ? <NavLink to={'/my-bookings'} className={({ isActive }) => isActive ? "block py-2 px-3 text-white bg-red-600 rounded md:bg-transparent md:text-[#FF3500] md:p-0" : "block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-[#FF3500] md:p-0"}> My Bookings</NavLink> : ""
                            }

                        </ul>
                    </div>
                    <Link to={'/'} className="font-bold text-xl flex items-center justify-center"> <img src="logo.webp" className="w-8 h-8" alt="CarLink" /><span>Car</span><span className="text-[#FF3600]">Link</span></Link>
                    
                    
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-6">
                        <NavLink to={'/'} className={({ isActive }) => isActive ? "block py-2 px-3 text-white bg-red-600 rounded md:bg-transparent md:text-[#FF3500] md:p-0" : "block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-[#FF3500] md:p-0"} >Home</NavLink>

                        <NavLink to={'/available-cars'} className={({ isActive }) => isActive ? "block py-2 px-3 text-white bg-red-600 rounded md:bg-transparent md:text-[#FF3500] md:p-0" : "block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-[#FF3500] md:p-0"} >Available Cars</NavLink>
                        {
                            user && user?.email ?
                                <NavLink to={'/add-cars'} className={({ isActive }) => isActive ? "block py-2 px-3 text-white bg-red-600 rounded md:bg-transparent md:text-[#FF3500] md:p-0" : "block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-[#FF3500] md:p-0"}> Add Car</NavLink> : ""
                        }
                        {
                            user && user?.email ? <NavLink to={'/my-cars'} className={({ isActive }) => isActive ? "block py-2 px-3 text-white bg-red-600 rounded md:bg-transparent md:text-[#FF3500] md:p-0" : "block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-[#FF3500] md:p-0"}> My Cars</NavLink> : ""
                        }
                        {
                            user && user?.email ? <NavLink to={'/my-bookings'} className={({ isActive }) => isActive ? "block py-2 px-3 text-white bg-red-600 rounded md:bg-transparent md:text-[#FF3500] md:p-0" : "block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-[#FF3500] md:p-0"}> My Bookings</NavLink> : ""
                        }

                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && user?.email ? <div className="flex gap-2 items-center"> <img className="rounded-full w-10 h-10 hidden md:block" data-tooltip-id="tooltip-settings"
                            data-tooltip-content={`Hi ${user.displayName || 'User'}! `} src={user?.photoURL} alt="" /> <Link to='/' className="btn text-white bg-gradient-to-r from-[#FF3600] to-[#ff3700d7]  hover:bg-[#ff3700b4]" onClick={logOut}> Log Out</Link></div> : <div className="flex gap-2 items-center"><FaUserTie className="w-10 h-10 hidden md:block"></FaUserTie> <Link to='/login' className="btn btn-success text-white bg-gradient-to-r from-[#FF3600] to-[#ff3700d7] hover:bg-[#ff3700b4]">Login</Link></div>
                    }
                    <Tooltip id="tooltip-settings" place="bottom" effect="solid" />
                </div>
            </div>
        </div>
    )
}

export default NavBar