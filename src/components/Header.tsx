import { NavLink } from "react-router-dom";
import Logo from "../assets/image/react-jobs-founder-logo.svg";

type ActiveProps = {
  isActive: boolean;
};

const Header = () => {
  const linkClass = ({ isActive }: ActiveProps) =>
    isActive
      ? "bg-[#6D7BDC] text-[#FBFBFB] hover:bg-[#2A469F] rounded-md px-3 py-2"
      : "text-[#353535] hover:bg-[#2A469F] hover:text-[#fbfbfb] rounded-md px-3 py-2";
  return (
    <header className="bg-[#fff] ">
      <nav className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4 " to="/">
              <img className="h-20" src={Logo} alt="React Jobs Founder Logo" />
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
                <NavLink to="jobs" className={linkClass}>
                  Jobs
                </NavLink>
                <NavLink to="/add-job" className={linkClass}>
                  Add Jobs
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
