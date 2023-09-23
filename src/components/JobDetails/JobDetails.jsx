import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localstorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const job = jobs.find(job => job.id === parseInt(id));
    console.log(job);

    const handleApplyJob = () =>{
        saveJobApplication(parseInt(id));
        toast('You have applied successfully');
    }

    return (
        <div>
            
            <div className="grid md:grid-cols-4 gap-4">
                <div className="border md:col-span-3">
                    <h2 className="text-2xl">Details coming here</h2>
                    <h2>Job Details of: {job.job_title} </h2>
                </div>
                <div className="border">
                    <h2>Side things</h2>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;