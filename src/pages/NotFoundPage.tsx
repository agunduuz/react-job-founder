import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
      <FaExclamationTriangle className="text-yellow-400 text-6xl mb-4" />
      <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
      <p className="text-xl mb-5">This page does not exist</p>
      <Link
        to="/"
        className="text-[#fff] bg-[#00D4F5] hover:bg-[#00d4f5d4] rounded px-3 py-2 mt-4"
      >
        Go Home
      </Link>
    </section>
  );
};

export default NotFoundPage;
