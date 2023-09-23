import { CiLocationOn, CiDollar } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {

    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card  card-compact  bg-base-100 shadow-xl">
            <figure><img className="" src={logo} alt="Shoes" /></figure>
            <div className="card-body flex flex-col justify-start items-start">
                <h2 className="card-title">{job_title}</h2>
                <p className="">{company_name}</p>
                <div className="">
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]"> {job_type} </button>
                </div>
                <div className='flex justify-between gap-10'>
                    <p className='flex gap-2 items-center'>
                        <CiLocationOn></CiLocationOn> {location}
                    </p>
                    <p className='flex gap-2 items-center'>
                        <CiDollar className='text-lg'></CiDollar> Salary: {salary}
                    </p>
                </div>
                <div className="card-actions ">
                    <Link to={`/job/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;