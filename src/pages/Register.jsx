import { useContext, useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Register = () => {
    const { createNewUser, setUser, googleLogin, manageProfile } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!passwordRegex.test(password)) {
            setError("The password must be at least 6 characters long and include at least one uppercase letter and one lowercase letter.");
            toast.error('Please, fillup password requirements')
            return;
        }


        createNewUser(email, password)
            .then(result => {
                const user = result.user;
                manageProfile(name, photo);
                setUser(user);
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Registration Successfull",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => toast.error('Input valid login info'));

    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Registration Successfull",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => toast.error(error.message));
    };

    return (
        <div className="flex-1/2 m-10">
            <div className="">
                <div className="md:w-8/12 mx-auto flex flex-col justify-center items-center text-center gap-4 mb-5 ">
                    <h1 className="text-2xl lg:text-5xl font-extrabold ">Create Account</h1>
                    <p className="font-medium text-gray-600">Create an account today to unlock exclusive cars, rent information, and recommendations for your favorite cars.</p>
                </div>

                <div className="card w-11/12 mx-auto bg-base-300 lg:max-w-screen-md shrink-0 shadow-2xl relative">
                    <form onSubmit={handleSubmit} className="card-body items-center">
                        <div className="flex flex-col w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Enter your name" className="input input-bordered w-full" required />
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="Enter your email" className="input input-bordered w-full" required />
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name="photo" type="text" placeholder="Enter your display photo URL" className="input input-bordered w-full" required />
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type={showPassword ? 'text' : 'password'}
                                placeholder="password" className="input input-bordered w-full" required />

                        </div>
                        <div className="flex flex-col mt-6 w-full">
                            <button type="submit" className="btn bg-primary text-white font-bold">Create Account</button>
                        </div>
                    </form>
                    <p> {
                        error ? <p className="text-red-800 px-6"> The password must be at least 6 characters long and include at least one uppercase letter and one lowercase letter. </p> : ''}</p>

                    <button onClick={() => setShowPassword(!showPassword)} className="btn btn-xs absolute right-10 top-[43.2%] lg:top-[49.4%]">

                        {
                            showPassword ? <FaRegEye></FaRegEye> : <FaEyeSlash></FaEyeSlash>
                        }

                    </button>
                    <div className="divider"></div>

                    <div className="flex flex-col lg:flex-row gap-4 justify-around items-center mb-6">
                        <div className="flex flex-col justify-center">
                            <p>Already have an account ?</p>
                            <Link to='/login' className="btn text-green-800 hover:font-bold"><button>Login</button></Link>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <p>Or</p>
                            <button onClick={handleGoogleLogin} className="btn">Continue with Google
                                <img width="48" height="48" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" />
                            </button>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register