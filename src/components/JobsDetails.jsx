import { Link, useLoaderData } from "react-router-dom";


const JobsDetails = () => {

    const job = useLoaderData();

    const { _id, title, company } = job


    return (
        <div>
            <h1>job details page here: {company}</h1>
            <h1>title: {title}</h1>
            <Link to={`/jobApply/${_id}`}>
                <button className="btn btn-primary">Apply Now</button>
            </Link>
        </div>
    );
};

export default JobsDetails;