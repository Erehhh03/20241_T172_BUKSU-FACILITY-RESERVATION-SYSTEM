import { Logo } from "./";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Footer = () => {
  const { userType } = useSelector((store) => store.auth);

  return (
    <footer className="p-4 shadow-sm md:px-6 md:py-8 bg-slate-300 mt-auto">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center mb-4 sm:mb-0">
          <Logo />

          <div className="flex flex-col ml-3 justify-center">
<<<<<<< HEAD
            <h1 className="font-display text-xl md:text-2xl"> General Service Unit Facility Booking</h1>
=======
            <h1 className="font-display text-xl md:text-2xl">Facility Booking</h1>
>>>>>>> 4786f39bb399142a28edc51e6a1b9c61edc071b0
            
          </div>
        </div>
        <ul className="flex flex-wrap items-center mb-6 text-sm sm:mb-0">
          <li>
            <Link to="/about" className="mr-4 hover:underline md:mr-6 ">
              About
            </Link>
          </li>
          <li>
            <Link to="/privacy" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-700 sm:mx-auto  lg:my-8" />
      <span className="block text-sm  sm:text-center ">
        2024 |{" "}
        <Link to={`/${userType}`} className="hover:underline">
<<<<<<< HEAD
          General Service Unit Facility Booking 
=======
          Facility Booking
>>>>>>> 4786f39bb399142a28edc51e6a1b9c61edc071b0
        </Link>
      </span>
    </footer>
  );
};

export default Footer;
