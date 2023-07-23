import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext);
  const handleLogOut = () => {
      logOut()
          .then()
          .catch(error => console.log(error));
  }
    return (
        
            <div className="navbar bg-nav fixed z-10 bg-opacity-30 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-nav mr-2 lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow font-bold  bg-violet-400 rounded-box w-52">
            <li><Link className='text-black-300 ' to="/">Home</Link> </li>
            <li><Link className='text-black-300' to="/colleges">Colleges</Link> </li>
            <li><Link className='text-black-300' to="/admission">Admission</Link> </li>
            <li><Link className='text-black-300' to="/myCollege">My College</Link> </li>
            
            <div className=" navbar-end">
          {user && <img className='rounded-full w-[30px] md:m-4' src={user.photoURL}  /> }
           {user ? <button onClick={handleLogOut} className="c-btn">Log Out</button>:<Link to="/login" className="c-btn md:mx-4">Login</Link> }
        </div>
              
            
            </ul>
          </div>
           
          <button className="lg:text-2xl  font-bold sm:text-1xl"> <Link to="/"><span className="bg-academy">Academic SupportHub</span> 
          </Link> </button>
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li><NavLink className='text-white ' to="/">Home</NavLink> </li>
            <li><NavLink className='text-black-300 text-bold text-white ' to="/colleges">Colleges</NavLink> </li>
            <li><NavLink className='text-black-300 text-bold text-white ' to="/admission">Admission</NavLink> </li>
            <li><NavLink className='text-black-300 text-bold text-white ' to="/myCollege">My College</NavLink> </li>
          </ul>
          <div className="hidden md:block ">
          {user ? <button onClick={handleLogOut} className="c-btn md:m-2">Log Out</button>:<NavLink to="/login" className="c-btn md:mx-4">Login</NavLink> }
          </div>
        </div>
        <div>     
        </div>
        <div className=" navbar-end  ">
          <div className="hidden md:block">
          {user && <img className='rounded-full w-[40px] md:m-2' src={user.photoURL}  /> }
        </div>
        
        </div>
        </div>
     
     
    );
};

export default Navbar;