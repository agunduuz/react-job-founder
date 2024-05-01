import React from "react";
import { Link } from "react-router-dom";
import ToggleDescription from "./ToggleDescription";
import { FaMapMarker } from "react-icons/fa";

type Job = {
  id: number;
  title: string;
  type: string;
  description: string;
  location: string;
  salary: string;
};

type JobListingProps = {
  job: Job;
};

const JobListing: React.FC<JobListingProps> = ({ job }) => {
  return (
    <div className="bg-[#F4F5F9] rounded-xl shadow-md relative ">
      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <span className="text-[#9FA0A2] my-2">{job.type}</span>
          <h3 className="text-xl font-bold text-[#061A66]">{job.title}</h3>
        </div>
        <ToggleDescription description={job.description} />
        <span className="text-[#6D7BA5] mb-2">{job.salary} / Year</span>
        <div className="border border-[#6D7BA5] rounded my-3"></div>
        <div className="flex flex-col lg:flex-row justify-between ">
          <div className="text-red-300 flex items-center">
            <FaMapMarker className="text-red-500 text-lg inline mr-2" />
            <span className="text-red-500">{job.location}</span>
          </div>
          <Link
            to={`/jobs/${job.id}`}
            className="h-[36px] bg-[#6D7BDC] hover:shadow-custom text-[#fff] px-2 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
