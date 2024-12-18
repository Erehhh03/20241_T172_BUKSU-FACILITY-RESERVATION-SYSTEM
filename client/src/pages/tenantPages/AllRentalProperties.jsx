import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllTenantRentalProperties } from "../../features/realEstateTenant/realEstateTenantSlice";
import { PageLoading, Footer } from "../../components";
import {
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Avatar,
} from "@mui/material";
import { format } from "../../utils/valueFormatter";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const AllRentalProperties = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { allRentalProperties, isLoading } = useSelector(
    (state) => state.realEstateTenant
  );
  useEffect(() => {
    dispatch(getAllTenantRentalProperties());
  }, [dispatch]);

  if (isLoading) return <PageLoading />;

  if (allRentalProperties?.length === 0)
    return (
      <div className="mx-auto text-center mt-8">
<<<<<<< HEAD
        <h4 className="mb-4">You do not have any active Facility Booking</h4>
=======
        <h4 className="mb-4">You do not have any active Rental Properties</h4>
>>>>>>> 4786f39bb399142a28edc51e6a1b9c61edc071b0
        <Button
          onClick={() => navigate("/tenant")}
          variant="contained"
          sx={{ color: "#fff" }}
        >
<<<<<<< HEAD
          Browse Facility
=======
          Browse Properties
>>>>>>> 4786f39bb399142a28edc51e6a1b9c61edc071b0
        </Button>
      </div>
    );
  return (
    <>
      <main className="flex flex-col mb-12 mt-8 md:items-start md:ml-10">
        <h3 className="my-4 font-heading font-bold text-center">
<<<<<<< HEAD
          Your Booked{" "}
          {allRentalProperties?.length > 1 ? "Properties" : "Facilities"}
=======
          Your Rental{" "}
          {allRentalProperties?.length > 1 ? "Properties" : "Property"}
>>>>>>> 4786f39bb399142a28edc51e6a1b9c61edc071b0
        </h3>
        <div className="flex flex-wrap gap-8 justify-center mx-4 md:justify-start md:mx-0">
          {allRentalProperties?.map((item) => {
            const {
              title,
              category,
              price,
              address,
              realEstateImages,
              propertyOwner,
              slug,
            } = item?.realEstate;
            return (
              <Card
                sx={{
                  width: 345,

                  bgcolor: "transparent",
                  boxShadow: "none",
                  "&:hover": {
                    boxShadow: "0 2px 5px 0 rgba(0,0,0,0.2)",
                  },
                  color: "#102a43",
                }}
                key={item._id}
              >
                <Link to={`/tenant/rental-properties/${slug}`}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      sx={{ maxHeight: 150 }}
                      image={realEstateImages[0]}
                      alt={title}
                    />
                    <CardContent>
                      <h4
                        className="mb-1 overflow-hidden overflow-ellipsis whitespace-nowrap hover:text-primaryDark duration-300 ease-in-out"
                        style={{ maxWidth: "31ch" }}
                      >
                        {title}
                      </h4>
                      <p className="text-sm text-gray-400">{category}</p>
                      <p className="font-semibold">
<<<<<<< HEAD
                        PHP <span className="">{format(price)}</span> / month
=======
                        NPR. <span className="">{format(price)}</span> / month
>>>>>>> 4786f39bb399142a28edc51e6a1b9c61edc071b0
                      </p>
                      <p className="text-base">
                        <LocationOnOutlinedIcon color="secondary" />{" "}
                        {address?.location}, {address?.streetName}
                      </p>
                    </CardContent>
                  </CardActionArea>
                </Link>
                <div className="flex p-2">
                  <div className="flex items-center gap-1">
                    <Avatar
                      src={propertyOwner?.profileImage}
                      alt={propertyOwner?.firstName}
                      sx={{ width: 36, height: 36 }}
                    />
                    <span className="font-semibold text-xs text-gray-600">
                      {propertyOwner?.firstName} {propertyOwner?.lastName}
                    </span>
                  </div>
                  <Link
                    to={`/tenant/owner-user/${propertyOwner?.slug}`}
                    className="ml-auto"
                  >
                    <Button
                      size="small"
                      color="tertiary"
                      variant="outlined"
                      sx={{
                        color: "#0496b4",
                      }}
                    >
                      Owner Details
                    </Button>
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AllRentalProperties;
