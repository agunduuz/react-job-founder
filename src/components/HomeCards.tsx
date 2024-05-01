import { Link } from "react-router-dom";
import Card from "./Card";

const HomeCards = () => {
  return (
    <section className="py-4 bg-[#fff]">
      <article className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-lg p-4">
          <Card>
            <h2 className="text-2xl font-bold colors-text">For Developers</h2>
            <p className="mt-2 mb-4 text-[#353535]">
              Browse our React Jobs and start your career today!
            </p>
            <Link
              to="/jobs"
              className="inline-block bg-[#B3BCD9]  text-[#353535] rounded-lg px-4 py-2 hover:-translate-y-1"
            >
              Browse Jobs
            </Link>
          </Card>
          <Card bg="bg-[#E1E3F4]">
            <h2 className="text-2xl font-bold text-[#202020]">For Employers</h2>
            <p className="mt-2 mb-4 text-[#202020]">
              List your job to find the perfect developer for the role
            </p>
            <Link
              to="/add-job"
              className="inline-block bg-[#6D7BDC] text-[#FBFBFB] rounded-lg px-4 py-2  hover:-translate-y-1 hover:shadow-custom"
            >
              Add Jobs
            </Link>
          </Card>
        </div>
      </article>
    </section>
  );
};

export default HomeCards;
