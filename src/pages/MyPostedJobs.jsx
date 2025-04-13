import React, { useEffect, useState } from 'react';
import UseAuth from '../hooks/UseAuth';

const MyPostedJobs = () => {
    const {user} = UseAuth()
    console.log(user.email);

    const [jobs, setJobs] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/jobs?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setJobs(data))
    },[user?.email])


    return (
        <div>
            <h1>myPostedJobs:{jobs.length}</h1>
        </div>
    );
};

export default MyPostedJobs;