import { useEffect, useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Logo, AlertToast, Footer } from "../components";
import landingImg from "../assets/images/landing1.svg";
import landingImg2 from "../assets/images/landing2.svg";
import landingTitle from "../assets/images/landingTitle.svg";

import { Button } from "@mui/material";
import { clearAlert } from "../features/auth/authSlice";

const Landing = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ref = useRef(null);

  const { user, userType, errorFlag, alertType, errorMsg } = useSelector(
    (store) => store.auth
  );

  // if user is logged in, redirect to home page
  useEffect(() => {
    if (user) {
      navigate(`/${userType}`);
    }
  }, [user, navigate, userType]);

  // function to handle alert close
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
