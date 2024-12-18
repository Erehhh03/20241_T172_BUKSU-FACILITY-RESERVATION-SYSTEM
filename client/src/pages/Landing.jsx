import { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Logo, AlertToast, Footer } from "../components";
import { Button } from "@mui/material";
import { clearAlert } from "../features/auth/authSlice";

const Landing = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedRole, setSelectedRole] = useState("");

  const { user, userType, errorFlag, alertType, errorMsg } = useSelector(
    (store) => store.auth
  );

  // Redirect if user is already logged in
  useEffect(() => {
    if (user) {
      navigate(`/${userType}`);
    }
  }, [user, navigate, userType]);

  // Handle alert close
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
