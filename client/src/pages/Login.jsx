import { useEffect, useState, useCallback } from "react";
<<<<<<< HEAD
import ReCAPTCHA from "react-google-recaptcha"; // Add reCAPTCHA import
=======
>>>>>>> 4786f39bb399142a28edc51e6a1b9c61edc071b0
import {
  Logo,
  FormPasswordField,
  FormTextField,
  AlertToast,
} from "../components";
import { useDispatch, useSelector } from "react-redux";
import {
  clearAlert,
  loginOwner,
  loginTenant,
  stateClear,
} from "../features/auth/authSlice";
import { useNavigate, useParams, Link } from "react-router-dom";
<<<<<<< HEAD
import loginImg from "../assets/images/loginpic.png";
=======
import loginImg from "../assets/images/loginImg.svg";
>>>>>>> 4786f39bb399142a28edc51e6a1b9c61edc071b0
import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const Login = () => {
  const {
    user,
    accountStatus,
    success,
    userType,
    errorMsg,
    errorFlag,
    alertType,
    isLoading,
  } = useSelector((store) => store.auth);
<<<<<<< HEAD

=======
>>>>>>> 4786f39bb399142a28edc51e6a1b9c61edc071b0
  const navigate = useNavigate();
  const param = useParams();
  const dispatch = useDispatch();

  const [values, setFormValues] = useState({ email: "", password: "" });
<<<<<<< HEAD
  const [captchaToken, setCaptchaToken] = useState(null);

  // Handle reCAPTCHA verification
  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };
=======
>>>>>>> 4786f39bb399142a28edc51e6a1b9c61edc071b0

  useEffect(() => {
    if (user) {
      navigate(`/${userType}`);
    }
  }, [user, navigate, userType]);

  useEffect(() => {
    if (success && accountStatus) {
      navigate(`/${userType}`);
    } else if (success && !accountStatus) {
      navigate(`/account-created/${userType}`);
      dispatch(stateClear());
    }
  }, [accountStatus, success, navigate, userType, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
    if (!captchaToken) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

=======
>>>>>>> 4786f39bb399142a28edc51e6a1b9c61edc071b0
    const { email, password } = values;
    const userInfo = {
      email,
      password,
      role: param.role,
<<<<<<< HEAD
      captchaToken, // Send token to backend for verification
    };

=======
    };
>>>>>>> 4786f39bb399142a28edc51e6a1b9c61edc071b0
    if (param.role === "owner") {
      dispatch(loginOwner({ userInfo }));
    } else if (param.role === "tenant") {
      dispatch(loginTenant({ userInfo }));
    }
  };

  const handleClose = useCallback(
    (event, reason) => {
      if (reason === "clickaway") {
        return;
      }
      dispatch(clearAlert());
    },
    [dispatch]
  );

  const handleChange = useCallback(
    (e) => {
      setFormValues({ ...values, [e.target.name]: e.target.value });
    },
    [values]
  );

  return (
    <div>
      <header className="flex m-1 shadow-sm">
        <Logo />
        <div className="flex flex-col justify-center ml-2">
<<<<<<< HEAD
          <h5 className="font-bold text-lg">General Service Unit Facility Booking</h5>
=======
          <h5 className="font-display">Facility Booking </h5>
          <p className="hidden text-xs md:block md:text-sm"></p>
>>>>>>> 4786f39bb399142a28edc51e6a1b9c61edc071b0
        </div>
      </header>

      <main className="px-6 h-full mt-12">
        <div className="flex lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <img src={loginImg} className="w-full" alt="login banner" />
          </div>
          <div className="lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <form onSubmit={handleSubmit}>
              <div className="flex justify-center mb-6">
                <h3 className="text-center">Login to your account</h3>
              </div>

              <div className="flex flex-col gap-6 mb-2">
                <FormTextField
                  value={values.email}
                  name={"email"}
                  type={"email"}
                  label={"Email"}
                  handleChange={handleChange}
                  autoFocus={true}
                />
                <FormPasswordField
                  value={values.password}
                  handleChange={handleChange}
                />
                <div className="self-end">
                  <Link
                    to={`/forgot-password/${param.role}`}
                    className="text-sm text-tertiary font-robotoNormal hover:text-tertiaryDark transition duration-200 ease-in-out"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>

<<<<<<< HEAD
              {/* Add reCAPTCHA */}
              <div className="flex justify-center my-4">
                <ReCAPTCHA
                  sitekey="6LemtJ4qAAAAAFSZyhkALSE1KFF-PT0tSa0cWCzs" // Replace with actual site key
                  onChange={handleCaptchaChange}
                />
              </div>

=======
>>>>>>> 4786f39bb399142a28edc51e6a1b9c61edc071b0
              <div className="text-center">
                <div className="mx-auto w-3/4 md:w-1/3">
                  <Button
                    variant="contained"
                    type="submit"
                    size="medium"
                    color="primary"
                    disabled={isLoading}
                    sx={{
                      color: "white",
                      width: "100%",
                      "&:hover": {
                        backgroundColor: "primary.dark",
                        opacity: [0.9, 0.8, 0.7],
                      },
                    }}
                  >
                    {isLoading ? (
                      <CircularProgress
                        size={26}
                        sx={{
                          color: "#fff",
                        }}
                      />
                    ) : (
                      "Login"
                    )}
                  </Button>
                </div>
                <p className="text-sm font-medium mt-4 pt-1 mb-0 md:text-base">
                  Don't have an account?{" "}
                  <Link
                    to={`/register/${param.role}`}
                    className="text-secondary hover:text-secondaryDark transition duration-200 ease-in-out"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
      <AlertToast
        alertFlag={errorFlag}
        alertMsg={errorMsg}
        alertType={alertType}
        handleClose={handleClose}
      />
    </div>
  );
};

export default Login;
