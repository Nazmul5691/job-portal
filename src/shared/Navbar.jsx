import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

export default function Navbar() {

    const { user, logOutUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogOutUser = () => {
        logOutUser()
            .then(result => {
                console.log('user log out');
                navigate('/')
            })
            .catch(error => {
                console.log(error.message);
            })
    }


    const navItems = <>
        <li><NavLink to='/'> Home </NavLink></li>
        <li><NavLink to='/myApplications'> My Applications </NavLink></li>
        <li><NavLink to='/addJobs'> Add Jobs </NavLink></li>
        <li><NavLink to='/myPostedJobs'> My Posted Jobs </NavLink></li>

    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Job Portal</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end flex gap-3 ">
                {
                    user ? <button onClick={handleLogOutUser} className="btn btn-soft btn-primary">Logout</button> :
                        <>
                            <Link className='hover:underline hover:text-blue-600' to='/register'>Register</Link>
                            <Link to='/signIn'><button className="btn btn-soft btn-primary">Sign In</button></Link>
                        </>
                }

            </div>
        </div>
    );
}