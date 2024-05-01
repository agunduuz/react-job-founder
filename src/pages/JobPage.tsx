import {
  useParams,
  useLoaderData,
  LoaderFunctionArgs,
  useNavigate,
} from "react-router-dom";
import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

interface Job {
  id: number;
  title: string;
  type: string;
  description: string;
  location: string;
  salary: string;
  company: {
    name: string;
    description: string;
    contactEmail: string;
    contactPhone: string;
  };
}

interface JobPageProps {
  deleteJob: (jobId: number) => void;
}

const JobPage = ({ deleteJob }: JobPageProps) => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const job = useLoaderData() as Job;

  const onDeleteClick = (jobId: number) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this listing?"
    );
    if (!confirm) return;

    deleteJob(jobId);
    toast.success("Job Deleted Successfully!");
    navigate("/jobs");
  };

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/jobs"
            className="text-[#6D7BDC] flex items-center  hover:text-[#2A469F]"
          >
            <FaArrowLeft className="mr-2" />
            Back to Job Listings
          </Link>
        </div>
      </section>
      <section>
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-[#9FA0A2] mb-4">{job.type}</div>
                <h1 className="text-3xl font-bold mb-4 text-[#001966]">
                  {job.title}
                </h1>
                <div className="text-[#9FA0A2] mb-4 flex items-center justify-center md:justify-start">
                  <FaMapMarker className="text-red-500 mr-1" />
                  <p className="text-red-500">{job.location}</p>
                </div>
              </div>
              <div className="p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-[#001966] text-lg font-bold mb-6">
                  Job Description
                </h3>
                <p className="text-[#9FA0A2] mb-4">{job.description}</p>
                <h3 className="text-lg text-[#001966] font-bold mb-2">
                  Salary
                </h3>
                <p className="mb-4 text-[#6D7BDC]">{job.salary} / Year</p>
              </div>
            </main>
            <aside>
              <div className="p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6 text-[#001966]">
                  Company Info
                </h3>
                <h2 className="text-2xl text-[#2A469F]">{job.company.name}</h2>
                <p className="my-2 text-[#9FA0A2]">{job.company.description}</p>
                <hr className="my-2" />
                <div className="flex items-center">
                  <h3 className="text-m font-bold text-[#001966]">
                    Contact Email:
                  </h3>
                  <p className="p-2  text-[#9FA0A2]">
                    {job.company.contactEmail}
                  </p>
                </div>
                <div className="flex items-center">
                  <h3 className="text-m font-bold text-[#001966]">
                    Contact Phone:
                  </h3>
                  <p className="p-2  text-[#9FA0A2]">
                    {job.company.contactPhone}
                  </p>
                </div>
              </div>
              <div className="p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6 text-[#001966]">
                  Manage Job
                </h3>
                <Link
                  to={`/edit-job/${job.id}`}
                  className="bg-[#6D7BDC] text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block hover:bg-[#2A469F]"
                >
                  Edit Job
                </Link>
                <button
                  onClick={() => onDeleteClick(job.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

const jobLoader = async ({ params }: LoaderFunctionArgs) => {
  const response = await fetch(`http://localhost:8000/jobs/${params.id}`);
  const data = await response.json();
  return data;
};

export { JobPage as default, jobLoader };
