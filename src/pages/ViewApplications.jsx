import { useLoaderData } from "react-router-dom";


const ViewApplications = () => {
    const applications = useLoaderData()

    const handleChangeStatus = (e, id) =>{
        console.log(e.target.value, id);

        const data = {
            status : e.target.value
        }

        fetch(`http://localhost:5000/job-applications/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount){
                alert('status updated')
            }
        })
    }
    
    return (
        <div>
            <h1>view applications: {applications.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Deadline</th>
                            <th>Status</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            applications.map((app, index) => <tr key={app._id}>
                                <th>{index + 1}</th>
                                <td>{app.applicant_email}</td>
                                <td>{app.title}</td>
                                <td>

                                    <select onChange={(e) => handleChangeStatus(e, app._id)} defaultValue={app.status || "Change Status"} className="select select-xs">
                                        <option disabled={true}>Change Status</option>
                                        <option>Hired</option>
                                        <option>Rejected</option>
                                        <option>Under Review</option>
                                    </select>
                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplications;