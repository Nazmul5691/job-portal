import { useState } from "react";
import HotJobsCard from "../components/HotJobsCard";
import useJobs from "../hooks/UseJobs";


const AllJobs = () => {
    
    const [sort, setSort] = useState(false)
    const { jobs, loading } = useJobs(sort)

    if (loading) {
        return <h4>Data loading</h4>
    }

    return (
        <div>
            <h1>All Jobs Here</h1>
            <div className="w-11/12 mx-auto bg-base-300 py-5 p-3 my-5">
                <button onClick={() => setSort(!sort)} className={`btn btn-neutral ${sort && "btn-success"}`}>
                    {sort == true ? 'Sorted by Salary' : 'Sort by Salary'}
                </button>
            </div>
            <div className="grid grid-cols-4 gap-4 ">
                {
                    jobs.map(job => <HotJobsCard key={job._id} job={job}></HotJobsCard>)
                }
            </div>
        </div>
    );
};

export default AllJobs;