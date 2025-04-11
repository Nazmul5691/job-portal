
import Lottie from 'lottie-react';
import registration from '../assets/registration.json'
import { Form } from 'react-router-dom';
import { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';

export default function Register() {
    // const [registerError , setRegisterError] = useState('')

    const {createUser} = useContext(AuthContext)

    // function validatePassword() {
    //     var p = document.getElementById('password').value,
    //         errors = [];
    //     if (p.length < 8) {
    //         errors.push("Your password must be at least 8 characters"); 
    //     }
    //     if (p.search(/[a-z]/i) < 0) {
    //         errors.push("Your password must contain at least one letter.");
    //     }
    //     if (p.search(/[0-9]/) < 0) {
    //         errors.push("Your password must contain at least one digit."); 
    //     }
    //     if (errors.length > 0) {
    //         alert(errors.join("\n"));
    //         return false;
    //     }
    //     return true;
    // }



    const handleRegister = e => {
        e.preventDefault();

        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;

        console.log(email, password);

        createUser(email, password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error.message);
        })
        

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
                            <input type="email" name="email" className="input" placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input type="password" id='password' name='password' className="input" placeholder="Password" />

                           {/* {
                            registerError && <p>{registerError}</p>
                           } */}

                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                    </div>
                </Form>
            </div>
        </div>
    );
}










// import Lottie from 'lottie-react';
// import registration from '../assets/registration.json'
// import { Form } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// // import { useForm } from 'react-hook-form';

// export default function Register() {

//     // const {register, reset, handleSubmit, formState: { errors } } = useForm()
//     const {register, reset, handleSubmit, formState:{errors}} = useForm();


//     const onSubmit = data =>{
//         console.log(data.email, data.password);
//     }

//     return (
//         <div className="hero bg-base-200 min-h-screen">
//             <div className="hero-content flex-col lg:flex-row-reverse">
//                 <div className="text-center lg:text-left">
//                     <Lottie animationData={registration}></Lottie>
//                 </div>
//                 <Form onSubmit={handleSubmit(onSubmit)} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//                     <h1 className="text-2xl font-bold p-6 text-center">Register Now</h1>
//                     <div className="card-body">
//                         <fieldset className="fieldset">

//                             <label className="fieldset-label">Email</label>
//                             <input type="email" name="name" className="input" placeholder="Email"
//                                 {...register("email", { required: true })} />
//                             {errors.email && (
//                                 <p>Email is required</p>
//                             )}

//                             <label className="fieldset-label">Password</label>
//                             <input type="password" id='password' name='password' className="input" placeholder="Password"
//                                 {...register("password", { required: true, minLength: 6, maxLength: 10, pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/ })} />
//                             {
//                                 errors.password?.type === 'required' && (
//                                     <p>Password is required</p>
//                                 )
//                             }

//                             {
//                                 errors.password?.type === 'minLength' && (
//                                     <p>Password Must be 6 Characters</p>
//                                 )
//                             }

//                             {
//                                 errors.password?.type === 'maxLength' && (
//                                     <p>Password must be less then 10 Characters</p>
//                                 )
//                             }

//                             {
//                                 errors.password?.type === 'pattern' && (
//                                     <p>Password must have one uppercase character, one lowercase
//                                         character, one number and one special character</p>
//                                 )
//                             }

//                             <div><a className="link link-hover">Forgot password?</a></div>
//                             <button className="btn btn-neutral mt-4">Login</button>
//                         </fieldset>
//                     </div>
//                 </Form>
//             </div>
//         </div>
//     );
// }