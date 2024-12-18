<<<<<<< HEAD
import { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Logo, AlertToast, Footer } from "../components";
=======
import { useEffect, useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Logo, AlertToast, Footer } from "../components";
import landingImg from "../assets/images/landing1.svg";
import landingImg2 from "../assets/images/landing2.svg";
import landingTitle from "../assets/images/landingTitle.svg";

>>>>>>> 4786f39bb399142a28edc51e6a1b9c61edc071b0
import { Button } from "@mui/material";
import { clearAlert } from "../features/auth/authSlice";

const Landing = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
<<<<<<< HEAD
  const [selectedRole, setSelectedRole] = useState("");
=======
  const ref = useRef(null);
>>>>>>> 4786f39bb399142a28edc51e6a1b9c61edc071b0

  const { user, userType, errorFlag, alertType, errorMsg } = useSelector(
    (store) => store.auth
  );

<<<<<<< HEAD
  // Redirect if user is already logged in
=======
  // if user is logged in, redirect to home page
>>>>>>> 4786f39bb399142a28edc51e6a1b9c61edc071b0
  useEffect(() => {
    if (user) {
      navigate(`/${userType}`);
    }
  }, [user, navigate, userType]);

<<<<<<< HEAD
  // Handle alert close
=======
  // function to handle alert close
>>>>>>> 4786f39bb399142a28edc51e6a1b9c61edc071b0
  const handleAlertClose = useCallback(
    (event, reason) => {
      if (reason === "clickaway") {
        return;
      }
      dispatch(clearAlert());
    },
    [dispatch]
  );

  return (
<<<<<<< HEAD
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <header className="bg-white shadow-sm py-4 border-b border-gray-200">
        <div className="container mx-auto flex items-center px-4 justify-start">
          <Logo />
          <div className="text-gray-700 ml-4">
            <h5 className="font-bold text-lg">General Service Unit Facility Booking</h5>
            
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center py-16">
        <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-8 text-center max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight">
          Easily Reserve and Manage <span className="text-primaryDark">Facility</span> in One Place
          </h1>
          <p className="mt-6 text-gray-600 text-lg">
          A Facility Reservation system is a tool or platform that allows users to book, reserve, or manage the use of a specific facility for a particular period. 
          </p>
        </div>

        {/* Removed the first set of features */}

        {/* New Features section in grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-8 px-4 max-w-7xl mx-auto">
  {[
    { title: "Real-Time Availability", description: "Stay up-to-date with live availability updates, ensuring you never double-book or miss a slot.", icon: "📅" },
    { title: "Instant Notifications", description: "Receive immediate updates and reminders for your reservations, keeping you informed every step of the way.", icon: "🔔" },
    { title: "Easy Booking Process", description: "Quickly reserve facilities with a simple, user-friendly interface, making bookings effortless.", icon: "📝" },
    { title: "Custom Setup Options", description: "Tailor your reservation experience by choosing specific setup preferences and requirements for your booking.", icon: "⚙️" },
    { title: "Hassle-Free Management", description: "Manage your bookings with ease, including cancellations, modifications, and tracking of past reservations.", icon: "🔄" }
  ].map((feature, index) => (
    <div
      key={index}
      className="bg-white border border-gray-300 rounded-lg shadow-md p-6 text-center"
    >
      <h3 className="text-lg font-semibold text-gray-800">{feature.icon} {feature.title}</h3>
      <p className="text-gray-600 mt-2">{feature.description}</p>
    </div>
  ))}
</div>


        <div className="flex mt-12 gap-4 flex-wrap justify-center">
          <Button
            variant={selectedRole === "owner" ? "contained" : "outlined"}
            onClick={() => setSelectedRole("owner")}
            color="primary"
            size="large"
            sx={{ borderRadius: "8px", borderWidth: "2px" }}
          >
            Admin
          </Button>
          <Button
            variant={selectedRole === "tenant" ? "contained" : "outlined"}
            onClick={() => setSelectedRole("tenant")}
            color="secondary"
            size="large"
            sx={{ borderRadius: "8px", borderWidth: "2px" }}
          >
           Staff/Student
          </Button>
        </div>

        <div className="flex mt-8 gap-6 flex-wrap justify-center">
          <Button
            onClick={() => navigate(`/login/${selectedRole}`)}
            variant="contained"
            size="large"
            color="primary"
            disabled={!selectedRole}
            sx={{
              borderRadius: "8px",
              color: "white",
              padding: "12px 24px",
              fontSize: "16px",
              borderWidth: "2px",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            Login
          </Button>
          <Button
            onClick={() => navigate(`/register/${selectedRole}`)}
            variant="contained"
            size="large"
            color="secondary"
            disabled={!selectedRole}
            sx={{
              borderRadius: "8px",
              color: "white",
              padding: "12px 24px",
              fontSize: "16px",
              borderWidth: "2px",
              "&:hover": {
                backgroundColor: "secondary.dark",
              },
            }}
          >
            Register
          </Button>
        </div>
      </main>

      <Footer />

=======
    <div>
      <header className="flex m-1 shadow-sm">
        <Logo />
        <div className="flex flex-col justify-center ml-2">
          <h5 className="font-display">Facility Booking</h5>
          <p className="hidden text-xs md:block md:text-sm">
       
          </p>
        </div>
      </header>
      <main className="flex flex-col items-center my-16">
        <div className="md:w-2/3">
          <h1 className="text-2xl md:text-4xl font-heading text-center font-extrabold">
          Hassle-Free 
            <span className="text-primaryDark"> Facility Booking </span>
          </h1>
          <p className="mt-8 text-center text-gray-700 w-4/5 mx-auto">
            A simple and easy to use The System demonstrate easy and efficient 
            the booking process for Students, staff, and faculty that can book university spaces like the Auditorium, 
            Gymnasium, and Quadrangle for a variety of events. Our platform simplifies event planning.
          </p>
        </div>
        <div className="flex mt-8 gap-8 flex-wrap w-2/3 justify-center">
          <Button
            variant="contained"
            sx={{
              color: "white",
              "&:hover": {
                backgroundColor: "primary.dark",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
            onClick={() => {
              ref.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get Started
          </Button>
          <Button
            color="secondary"
            variant="outlined"
            onClick={useCallback(() => navigate("/about"), [navigate])}
          >
            Learn More
          </Button>
        </div>
        <div className="md:w-2/4">
          <img src={landingTitle} alt="landing title" className="w-full" />
        </div>
        <main className="" ref={ref}>
          <section className="flex gap-16">
            <img className="hidden md:block" src={landingImg2} alt="" />
            <div className="flex flex-col self-center mx-auto p-4 w-full">
              <h3 className="font-display mb-2">Are you a GSU Staff Member?</h3>
              <p className="">
              Post available facilities online for easy booking.
              </p>
              <p className="">Manage all bookings in one place.</p>
              <p className="">Easily track bookings and stay organized.</p>
              <div className="flex justify-start mt-7">
                <Button
                  onClick={useCallback(
                    () => navigate("/login/owner"),
                    [navigate]
                  )}
                  variant="contained"
                  size="medium"
                  color="secondary"
                  sx={{
                    color: "white",
                    "&:hover": {
                      backgroundColor: "secondary.dark",
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                >
                  Login
                </Button>
                <span className="mx-3 sm:text-2xl">|</span>

                <Button
                  onClick={useCallback(
                    () => navigate("/register/owner"),
                    [navigate]
                  )}
                  variant="contained"
                  size="medium"
                  color="primary"
                  sx={{
                    color: "white",
                    "&:hover": {
                      backgroundColor: "primary.dark",
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                >
                  Register
                </Button>
              </div>
            </div>
          </section>

          <hr className="my-4" />

          <section className="flex gap-16 mt-5">
            <img className="hidden md:block" src={landingImg} alt="" />
            <div className="flex flex-col self-center mx-auto p-4 w-full">
              <h3 className="font-display mb-2">Are you a Student/Staff?</h3>
              <p className="">
                Browse through all kinds of Facility available
              </p>
              <p className="">Book Facility Easily.</p>
              <p className="">Book Facility Hassle Free</p>
              <div className="flex justify-start mt-7">
                <Button
                  onClick={useCallback(
                    () => navigate("/login/tenant"),
                    [navigate]
                  )}
                  variant="contained"
                  size="medium"
                  color="secondary"
                  sx={{
                    color: "white",
                    "&:hover": {
                      backgroundColor: "secondary.dark",
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                >
                  Login
                </Button>
                <span className="mx-3 sm:text-2xl">|</span>
                <Button
                  onClick={useCallback(
                    () => navigate("/register/tenant"),
                    [navigate]
                  )}
                  variant="contained"
                  size="medium"
                  color="primary"
                  sx={{
                    color: "white",
                    "&:hover": {
                      backgroundColor: "primary.dark",
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                >
                  Register
                </Button>
              </div>
            </div>
          </section>
        </main>
      </main>
      <Footer />
>>>>>>> 4786f39bb399142a28edc51e6a1b9c61edc071b0
      <AlertToast
        alertFlag={errorFlag}
        alertMsg={errorMsg}
        alertType={alertType}
        handleClose={handleAlertClose}
      />
    </div>
  );
};

export default Landing;
