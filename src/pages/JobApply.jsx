import { useNavigate, useParams } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";


const JobApply = () => {
    const { id } = useParams()
    // console.log(id);
    const {user} = UseAuth()
    console.log(user);
    const navigate = useNavigate()


    const handleApply = e =>{
        e.preventDefault()
        const form = e.target
        const linkedIn = form.linkedIn.value
        const gitHub = form.gitHub.value
        const resume = form.resume.value

        console.log(linkedIn, gitHub, resume);

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedIn,
            gitHub,
            resume

        }

        fetch('http://localhost:5000/job-applications',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                alert('apply success')
                navigate('/myApplications')
            }
        })
    }
    return (
        <div>
            <h1>job apply page here</h1>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content">
                   
                    <div className="card bg-base-100 w-full shadow-2xl">
                        <div className="card-body">
                        <h1 className="text-2xl text-blue-500"> Apply Job</h1>
                            <form onSubmit={handleApply} className="fieldset">
                                <label className="fieldset-label">LinkedIn</label>
                                <input type="url" name="linkedIn" className="input" placeholder="LinkedIn" />
                                <label className="fieldset-label">GitHub</label>
                                <input type="url" name="gitHub" className="input" placeholder="LinkedIn" />
                                <label className="fieldset-label">Resume</label>
                                <input type="url" name="resume" className="input" placeholder="Resume" />
                               
                                <button className="btn btn-neutral mt-4">Apply</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobApply;