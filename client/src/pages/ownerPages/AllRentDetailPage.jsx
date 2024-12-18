import { useEffect } from "react";
import { getAllRentDetailsOwnerView } from "../../features/rentDetailOwner/rentDetailOwnerSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { PageLoading, RentDetailComponent, Footer } from "../../components";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const AllRentDetailPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { allRentDetails, isLoading } = useSelector(
    (state) => state.rentDetailOwner
  );

  useEffect(() => {
    dispatch(getAllRentDetailsOwnerView());
  }, [dispatch]);

  if (isLoading) return <PageLoading />;

  if (allRentDetails?.length === 0)
    return (
      <div className="flex flex-col items-center h-screen mt-12 gap-4">
<<<<<<< HEAD
        <h1 className="text-center">No Booking details found</h1>
=======
        <h1 className="text-center">No rent details found</h1>
>>>>>>> 4786f39bb399142a28edc51e6a1b9c61edc071b0
        <Button
          variant="contained"
          onClick={() => navigate("/owner/rentDetail/create")}
          sx={{ color: "#fff" }}
          startIcon={<AddCircleOutlineIcon />}
        >
<<<<<<< HEAD
          Create Booking Detail
=======
          Create Rent Detail
>>>>>>> 4786f39bb399142a28edc51e6a1b9c61edc071b0
        </Button>
      </div>
    );

  return (
    <>
      <main className="flex flex-col mb-12 mt-6 md:items-start md:ml-10">
        <div className="self-center md:self-start">
          <Button
            variant="contained"
            onClick={() => navigate("/owner/rentDetail/create")}
            sx={{ color: "#fff" }}
            size="small"
            startIcon={<AddCircleOutlineIcon />}
          >
            Create Rent Detail
          </Button>
        </div>
        <h3 className="my-4 font-heading font-bold text-center">
          Rent Details
        </h3>
        <div className="flex flex-wrap gap-8 justify-center mx-4 md:justify-start md:mx-0">
          {allRentDetails?.map((rentDetail) => (
            <>
              <RentDetailComponent key={rentDetail._id} {...rentDetail} />
            </>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AllRentDetailPage;
