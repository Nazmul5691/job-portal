import { Form, useLocation, useNavigate } from "react-router-dom";
import registration from '../assets/registration.json'
import Lottie from "lottie-react";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import SocialLogin from "../shared/SocialLogin";


const SignIn = () => {

    const { signInUser } = useContext(AuthContext)
    
    const navigate = useNavigate();
    const location = useLocation()
    const from = location?.state || '/'



    const handleSignIn = e => {
        e.preventDefault()

        const form = e.target
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                console.log('sign in user', result.user);
                navigate(from)
            })
            .catch(error => {
                console.log(error.message);
            })
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie animationData={registration}></Lottie>
                </div>
                <Form onSubmit={handleSignIn} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-2xl font-bold p-6 text-center">Sign In</h1>
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input type="email" name="email" className="input" placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input type="password" id='password' name='password' className="input" placeholder="Password" />


                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </div>
                    <div className="divider">OR</div>

                    <SocialLogin />

                </Form>


            </div>
        </div>
    );
};

export default SignIn;