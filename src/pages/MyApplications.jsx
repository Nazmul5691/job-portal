import { useEffect, useState } from "react";
import UseAuth from "../hooks/UseAuth";
import { Link } from "react-router-dom";
import axios from "axios";
import UseAxiosSecure from "../hooks/UseAxiosSecure";


const MyApplications = () => {
    const { user } = UseAuth()
    const [jobs, setJobs] = useState([])

    const axiosSecure = UseAxiosSecure([])

    useEffect(() => {
        // fetch(`https://job-portal-server-lilac-phi.vercel.app/job-applications?email=${user.email}`)
        //     .then(res => res.json())
        //     .then(data => setJobs(data))
        // axios.get(`https://job-portal-server-lilac-phi.vercel.app/job-applications?email=${user.email}`,{withCredentials: true},
        // axios.get(`https://job-portal-server-lilac-phi.vercel.app/job-applications?email=${user.email}`,{withCredentials: true},
        // )
            axiosSecure.get(`/job-applications?email=${user.email}`)
            .then(res => setJobs(res.data))
    }, [user.email])

    return (
        <div>
            <h1>my applications : {jobs.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map(job => <tr key={job._id}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={job.company_logo}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{job.company}</div>
                                            <div className="text-sm opacity-50">{job.location}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Zemlak, Daniel and Leannon
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button className="btn btn-secondary btn-xs">x</button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

            <Link to='/'><button className="btn btn-neutral mt-4">Apply More Jobs</button></Link>
        </div>
    );
};

export default MyApplications;