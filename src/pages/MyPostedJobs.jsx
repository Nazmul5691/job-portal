import React, { useEffect, useState } from 'react';
import UseAuth from '../hooks/UseAuth';
import { Link } from 'react-router-dom';

const MyPostedJobs = () => {
    const { user } = UseAuth()
    // console.log(user.email);

    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/jobs?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [user?.email])


    return (
        <div>
            <h1>myPostedJobs:{jobs.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Deadline</th>
                            <th>Application Count</th>
                            <th>View Application</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            jobs.map((job, index) => <tr key={job._id}>
                                <th>{index + 1}</th>
                                <td>{job.title}</td>
                                <td>{job.applicationDeadline}</td>
                                <td>{job.applicationCount}</td>
                                <td><Link to={`/viewApplications/${job._id}`}>View Applications</Link></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedJobs;