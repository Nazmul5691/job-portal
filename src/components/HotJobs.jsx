import { useEffect } from "react";
import { useState } from "react";
import HotJobsCard from "./HotJobsCard";


const HotJobs = () => {

    const [jobs, setJobs] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])


    return (
        <div className="bg-gray-100">
            <h1>All Hot Jobs Here</h1>
            <div className="grid grid-cols-4 gap-4 ">
                {
                    jobs.map(job => <HotJobsCard key={job._id} job={job}></HotJobsCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;