import { Form, useNavigate } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";


const AddJobs = () => {
    const {user} = UseAuth()
    const navigate = useNavigate()

    const handleAddJob = e => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const initialData = Object.fromEntries(formData.entries())
        console.log(initialData);
        const { min, max, currency, ...newJob } = initialData
        newJob.salaryRange = { min, max, currency }
        newJob.requirements = newJob.requirements.split('\n')
        newJob.responsibilities = newJob.responsibilities.split('\n')
        // newJob.hr_email = user.email
        console.log(newJob);

        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    alert('job has been added')
                    navigate('/myPostedJobs')
                }
            })
    }

    return (
        <div className="hero bg-base-200">
            <div className="hero-content w-full">
                <Form onSubmit={handleAddJob} className="card bg-base-100 w-full shadow-2xl">
                    <h1 className="text-2xl font-bold pt-6 text-center">Add A Job</h1>
                    <div className="card-body">
                        <fieldset className="fieldset">
                            {/* Title */}
                            <label className="fieldset-label">Title</label>
                            <input type="text" name="title" className="input w-full" placeholder="Job title" required />

                            {/* Location */}
                            <label className="fieldset-label mt-2">Location</label>
                            <input type="text" name="location" className="input w-full" placeholder="Location" required />

                            {/* Job Type Dropdown */}
                            <label className="fieldset-label mt-2">Job Type</label>
                            <select name="jobType" defaultValue='Select Job Type' className="select w-full" required>
                                <option disabled>Select Job Type</option>
                                <option value="Onsite">Onsite</option>
                                <option value="Remote">Remote</option>
                                <option value="Hybrid">Hybrid</option>
                                <option value="Contract">Contract</option>
                            </select>

                            {/* Category Dropdown */}
                            <label className="fieldset-label mt-2">Category</label>
                            <select name="category" defaultValue='Select Category' className="select w-full" required>
                                <option disabled >Select Category</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Design">Design</option>
                                <option value="Sales">Sales</option>
                                <option value="HR">HR</option>
                                <option value="Support">Support</option>
                                <option value="Product">Product</option>
                                <option value="Finance">Finance</option>
                            </select>

                            {/* Application Deadline */}
                            <label className="fieldset-label mt-2">Application Deadline</label>
                            <input type="date" name="applicationDeadline" className="input w-full" required />

                            {/* Salary Range */}
                            <label className="fieldset-label mt-2">Salary Range</label>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                <input type="text" name="min" className="input w-full" placeholder="Minimum Salary" required />
                                <input type="text" name="max" className="input w-full" placeholder="Maximum Salary" required />
                                <select name="currency" defaultValue='Select Currency' className="select w-full" required>
                                    <option disabled >Select Currency</option>
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
                                    <option value="BDT">BDT</option>
                                    <option value="INR">INR</option>
                                    <option value="GBP">GBP</option>
                                </select>
                            </div>

                            {/* Description */}
                            <label className="fieldset-label mt-2">Job Description</label>
                            <textarea name="description" className="textarea w-full" placeholder="Job Description" required></textarea>

                            {/* Company */}
                            <label className="fieldset-label mt-2">Company</label>
                            <input type="text" name="company" className="input w-full" placeholder="Company Name" required />

                            {/* Requirements */}
                            <label className="fieldset-label mt-2">Requirements (Put each Requirement in new line)</label>
                            <textarea
                                name="requirements"
                                className="textarea w-full"
                                placeholder="e.g., React\nNode.js\nMongoDB"
                                rows={4}
                                required
                            />

                            {/* Responsibilities */}
                            <label className="fieldset-label mt-2">Responsibilities (Put each Responsibility in new line)</label>
                            <textarea
                                name="responsibilities"
                                className="textarea w-full"
                                placeholder="e.g., Write clean code\nCollaborate with team"
                                rows={4}
                                required
                            />

                            {/* Status */}
                            <label className="fieldset-label mt-2">Status</label>
                            <select name="status" defaultValue='Select Status' className="select w-full" required>
                                <option disabled >Select Status</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>

                            {/* HR Name */}
                            <label className="fieldset-label mt-2">HR Name</label>
                            <input type="text" name="hr_name" className="input w-full" placeholder="HR Name" required />

                            {/* HR Email */}
                            <label className="fieldset-label mt-2">HR Email</label>
                            <input type="email" name="hr_email" className="input w-full" defaultValue={user?.email} placeholder="HR Email" required />

                            {/* Company Logo URL */}
                            <label className="fieldset-label mt-2">Company Logo URL</label>
                            <input type="url" name="company_logo" className="input w-full" placeholder="Company Logo URL" required />

                            {/* Submit Button */}
                            <button className="btn btn-neutral mt-6">Add Job</button>
                        </fieldset>
                    </div>
                </Form>
            </div>
        </div>



    );
};

export default AddJobs;