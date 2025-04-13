import { CiLocationOn } from "react-icons/ci";
import { IoFileTraySharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const HotJobsCard = ({ job }) => {
    const { _id, title, location, jobType, salaryRange, description, company, requirements, company_logo } = job

    

    return (
        <div className="card bg-base-100 py-4 px-3 flex flex-col justify-between gap-5 shadow-lg">
            <div className="flex flex-col gap-5">
                <div className="flex gap-3">
                    <div>
                        <figure>
                            <img
                                className="w-12"
                                src={company_logo}
                                alt="Shoes" />
                        </figure>
                    </div>
                    <div>
                        <h3>{company}</h3>
                        <p className="flex gap-1 items-center"><CiLocationOn /> {location}</p>
                    </div>

                </div>
                <div>
                    <h2 className="card-title">{title}</h2>
                    <p className="flex gap-1 items-center"> <IoFileTraySharp />{jobType}</p>
                </div>
                <div>
                    <p className="text-justify">{description}</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                    {
                        requirements.map((skill, index) => <p key={index} className="border-[1px] text-center px-3 py-1 bg-slate-200 rounded-md">{skill}</p>)
                    }
                </div>
                <div>
                    <p>Salary: {salaryRange.min}- {salaryRange.max}</p>
                </div>
            </div>
            <div className="">
                <div className="flex justify-end">
                    <Link to={`/jobs/${_id}`}>
                        <button className="btn btn-primary">Apply</button>
                    </Link>
                </div>
            </div>
        </div>



    );
};

export default HotJobsCard;