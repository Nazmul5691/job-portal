import { useState } from "react";
import HotJobsCard from "../components/HotJobsCard";
import useJobs from "../hooks/UseJobs";
import { BiSearch, BiSearchAlt } from "react-icons/bi";


const AllJobs = () => {

    const [sort, setSort] = useState(false)
    const [search, setSearch] = useState('')
    const [minSalary, setMinSalary] = useState('')
    const [maxSalary, setMaxSalary] = useState('')
    const { jobs, loading } = useJobs(sort, search, minSalary, maxSalary)

    if (loading) {
        return <h4>Data loading</h4>
    }

    return (
        <div>
            <h1>All Jobs Here</h1>
            <div className="w-11/12 mx-auto bg-base-300 py-5 p-3 my-5 flex">
                <button onClick={() => setSort(!sort)} className={`btn btn-neutral ${sort && "btn-success"} mr-3`}>
                    {sort == true ? 'Sorted by Salary' : 'Sort by Salary'}
                </button>

                <div className="flex  items-center  gap-2 w-full max-w-2xl">
                    <BiSearch />
                    <input type="text"
                        onKeyUp={(e) => setSearch(e.target.value)}
                        className="input w-full max-w-2xl"
                        placeholder="search by location"
                    />
                </div>
                <div className="space-y-2">
                    <input type="number"
                        onKeyUp={(e) => setMinSalary(e.target.value)}
                        className="input w-full max-w-2xl"
                        placeholder="min salary"
                    />
                    <input type="number"
                        onKeyUp={(e) => setMaxSalary(e.target.value)}
                        className="input w-full max-w-2xl"
                        placeholder="max salary"
                    />
                </div>
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