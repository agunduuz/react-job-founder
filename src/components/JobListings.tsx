import { useState, useEffect } from "react";
import JobListing from "./JobListing";
import Spinner from "./Spinner";

type PagesProps = {
  isHome: boolean;
};
interface JobProps {
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

const JobListings = ({ isHome }: PagesProps) => {
  const [jobs, setJobs] = useState<JobProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <section className="bg-[#fff] px-4 py-10">
      <article className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-[#fff] mb-5 pl-4">
          {isHome ? "Browse Jobs" : "All Jobs"}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <aside className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </aside>
        )}
      </article>
    </section>
  );
};

export default JobListings;
