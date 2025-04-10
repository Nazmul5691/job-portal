



import Lottie from 'lottie-react';
import registration from '../assets/registration.json'
import { Form } from 'react-router-dom';

export default function Register() {

    const handleRegister = e =>{
        e.preventDefault();

        const from = e.target;
        const name = from.name.value;
        const password = from.password.value;

        console.log(name, password);

    }
    
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                   <Lottie animationData={registration}></Lottie>
                </div>
                <Form onSubmit={handleRegister} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-2xl font-bold p-6 text-center">Register Now</h1>
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input type="email" name="name" className="input" placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </div>
                </Form>
            </div>
        </div>
    );
}