import  { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { AuthContext } from '../../../Providers/AuthProvider';
import GoogleLogin from '../GoogleLogin';
import { Helmet } from 'react-helmet';

const Login = () => {
    const [error ,setError]=useState('');
    const{SignIn}=useContext(AuthContext);
    const navigate=useNavigate();
    const location=useLocation();
  
  
    const from =location.state?.from?.pathname || '/';
    
    const HandelLogin=event=>{
      event.preventDefault();
      const form =event.target;
      const email=form.email.value;
      const password=form.password.value;
      console.log(email,password);
      Swal.fire('Hey', 'login successful', 'success');
      setError('')

  
      
      SignIn(email,password)
      .then(result => {
      
          const LoggedUser = result.user;
          console.log(LoggedUser);
          form.reset();
          navigate(from,{replace :true});
         
        })
        .catch(error => {
          console.log(error);
          setError('wrong input please input valid data');
          
        });
    
    }
    return (
        <div>
            
            <Helmet>
        <title>Academic SupportHub | Login </title>
      </Helmet>
            <div className="hero Body-Background min-h-screen pt-16">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img className='w-[600px]  rounded-2xl' src={`https://i.ibb.co/WP3KGrK/logoad.png`} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-3xl text-white  text-center font-bold">Login Please</h1>
                        <form onSubmit={HandelLogin }>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white ">Email</span>
                                </label>
                                <input type="text" name='email' placeholder=" Enter email" className="input input-bordered"  required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white ">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" required/>
                                <label className="label">
                                    <a href="#" className="label-text-alt text-white  link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-purple-700 text-white " type="submit" value="Login" />
                            </div>
                        </form>
                        <p className=' mx-4 text-white  text-center '>Don't have an account <Link className='text-black  font-bold' to="/SignUp">Sign Up</Link> </p>
                        <div>
                        <p className=' text-white  bg-orange-400 text-center rounded border fw-bold mt-2'> <small>{error}</small></p>
                        </div>
                        <div>
                           <GoogleLogin></GoogleLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};


export default Login;