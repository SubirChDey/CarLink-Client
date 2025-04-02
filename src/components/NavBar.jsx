import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../provider/AuthProvider"
import { FaUserTie } from "react-icons/fa"
import { Tooltip } from "react-tooltip"

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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <NavLink>Home</NavLink>
                            <NavLink>Available Cars</NavLink>
                            <NavLink> Add Car</NavLink>
                            <NavLink> My Cars</NavLink>
                            <NavLink> My Bookings</NavLink>

                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost text-xl">CarLink</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-6">
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'/available-cars'}>Available Cars</NavLink>
                        <NavLink to={'/add-cars'}> Add Car</NavLink>
                        <NavLink to={'/my-cars'}> My Cars</NavLink>
                        <NavLink to={'/my-bookings'}> My Bookings</NavLink>
                    </ul>
                </div>
                <div className="navbar-end">                    
                    {
                        user && user?.email ? <div className="flex gap-2 items-center"> <img className="rounded-full w-10 h-10 hidden md:block" data-tooltip-id="tooltip-settings"
                            data-tooltip-content={`Hi ${user.displayName || 'User'}! `} src={user?.photoURL} alt="" /> <Link to='/' className="btn btn-success text-white" onClick={logOut}> Log Out</Link></div> : <div className="flex gap-2 items-center"><FaUserTie className="w-10 h-10 hidden md:block"></FaUserTie> <Link to='/login' className="btn btn-success text-white">Login</Link></div>
                    }
                    <Tooltip id="tooltip-settings" place="bottom" effect="solid" />
                </div>
            </div>
        </div>
    )
}

export default NavBar