import { useSelector } from "react-redux";
import { Header, Logo, Footer } from "../components";
import about1 from "../assets/images/gsu.png";
import about2 from "../assets/images/student.png";
import { Link } from "react-router-dom";

const AboutPageComponent = () => {
  return (
    <div className="flex flex-col items-center mx-auto w-3/4 mb-12">
      <h2 className="font-heading font-bold mt-8 uppercase">About</h2>
      <div className="">
        <div className="mt-6">
          <p>
          The GSU Booking System is a streamlined, user-friendly platform designed to simplify the process of managing and booking facilities for staff and stakeholders.
           Whether it's reserving meeting rooms, booking accommodations, or securing venues for events, 
           the system provides an efficient and centralized solution tailored to the needs of the GSU community.
          </p>
        </div>
        <div className="flex mt-6 justify-center flex-col md:flex-row">
          <div className="md:w-1/2">
            <h4 className="font-bold">General Service Unit</h4>
            <div>
              <p>
              GSU Staff have access to a variety of functionalities within the system, including posting 
              and managing available facilities, creating booking contracts and usage details, 
              managing bookings, registering payments, and viewing payment history. Additionally,
              they can send payment reminders to ensure timely and accurate transactions.
              </p>
            </div>
          </div>
          <div>
            <img src={about1} alt="" />
          </div>
        </div>
        <div className="flex mt-6 justify-center flex-col md:flex-row">
          <div className="hidden md:block">
            <img src={about2} alt="" className="max-w-sm" />
          </div>
          <div className="md:w-1/2">
            <h4 className="font-bold">Student or Staff</h4>
            <div>
              <p>
              Students or staff can browse and book available facilities, such as rooms or venues, based on their requirements. 
              They can save preferred options for future reference and view detailed information about each facility. 
              Once a booking is confirmed, they can review and acknowledge the booking contract. Additionally, 
              they have access to payment details, due dates, payment history, and receive reminders to ensure timely payments.
              </p>
            </div>
          </div>
          <div className="md:hidden">
            <img src={about2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return (
      <div>
        <header className="flex m-1 shadow-sm">
          <Logo />
          <div className="flex flex-col justify-center ml-2">
            <h5 className="font-display">Facility Booking</h5>
            
          </div>
        </header>
        <AboutPageComponent />
        <footer className="p-4 shadow-sm md:px-6 md:py-8 bg-slate-300 mt-auto">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center mb-4 sm:mb-0">
              <Logo />

              <div className="flex flex-col ml-3 justify-center">
                <h1 className="font-display text-xl md:text-2xl">
                General Service Unit Facility Booking
                </h1>
                <p className="text-xs md:text-sm">
                  Prepared by : MCP GROUP
                </p>
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
            <Link to="/" className="hover:underline">
              Property Plus
            </Link>
          </span>
        </footer>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <AboutPageComponent />
      <Footer />
    </div>
  );
};

export default AboutPage;
