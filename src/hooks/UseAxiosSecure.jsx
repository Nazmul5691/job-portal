import axios from "axios";
import { useEffect } from "react";
import UseAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

const UseAxiosSecure = () => {

    // const {logOutUser}  = UseAuth()
    // const navigate = useNavigate()

    // useEffect(() =>{
    //     axiosInstance.interceptors.response.use(response =>{
    //         return response;
    //     }, error =>{
    //         console.log('error caught in interceptor', error);

    //         if(error.status === 401 || error.status === 403){
    //             console.log('need to logout the user');
    //             logOutUser()
    //             .then(res => {
    //                 console.log(res.data)
    //                 navigate('/signIn')
    //             })
    //             .catch(error => console.log(error.message))
    //         }
    //         return Promise.reject(error)
    //     })
    // },[])

    const {logOutUser} = UseAuth();
    const navigate = useNavigate()

    useEffect(()=>{
        axiosInstance.interceptors.response.use(response =>{
            return response;
        }, error =>{
            if(error.status === 401 || error.status === 403){
                logOutUser()
                .then(res =>{
                    navigate('/signIn')
                })
                .catch(err => console.log(err))
            }
            return Promise.reject(error)
        })
    },[])


    return axiosInstance;
};

export default UseAxiosSecure;