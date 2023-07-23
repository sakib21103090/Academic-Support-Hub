import  { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { AuthContext } from '../../../Providers/AuthProvider';


const SignUp = () => {
    const [error ,setError]=useState('');

    const {createUser}=useContext(AuthContext);
    const HandelRegister=event=>{
        event.preventDefault();
        const form =event.target;
        const name=form.displayName.value;
        const email=form.email.value;
        const photo=form.photo.value;
        const password=form.password.value;
        console.log(name,photo,email,password)
        Swal.fire('Hey', 'Account Create successful', 'success');
        setError('')
        if (password.length <6){
          setError('please set password up to six character')
          return
      }

        createUser(email,password)
        .then(result => {
        
            const createdUser = result.user;
            console.log(createdUser);
          })
          .catch(error => {
            console.log(error);
            setError('wrong input please input valid data');
          });
    }
    return (
     
        <div>
            <div className="hero min-h-screen pt-16 Body-Background ">
    <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
        <img className='w-[600px] rounded-3xl' src={`https://i.ibb.co/WP3KGrK/logoad.png`} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
            <div className="card-body">
                <h1 className="text-3xl text-center text-white font-bold"> Please Sign Up</h1>
                <form onSubmit={HandelRegister}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <input type="text" name='displayName' placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo url</span>
                        </label>
                        <input type="text" name='photo' placeholder="Enter photo url" className="input input-bordered"  required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="text" name='email' placeholder=" Enter email" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white"> Password</span>
                        </label>
                        <input type="text" name='password' placeholder="password" className="input input-bordered" required/>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn  text-black" type="submit" value="Create Account" />
                    </div>
                </form>
                <p className='mx-4 text-center text-white'> Already Have an Account? <Link className='text-black font-bold' to="/login">Login</Link> </p>
                <div>
                        <p className='text-white bg-purple-700 text-center rounded border fw-bold mt-2'> <small>{error}</small></p>
                        </div>
            </div>
        </div>
    </div>
</div>
        </div>
    );
};

export default SignUp;