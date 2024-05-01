import { Link } from "react-router-dom";

const ViewAllJobs = () => {
  return (
    <section className="m-auto max-w-lg my-10 px-6">
      <Link
        to="/jobs"
        className="block bg-[#6D7BDC] text-[#fff] text-center py-4 px-6 rounded-xl  border-[#6D7BDC] border-2 hover:shadow-custom hover:-translate-y-1"
      >
        View All Jobs
      </Link>
    </section>
  );
};

export default ViewAllJobs;
