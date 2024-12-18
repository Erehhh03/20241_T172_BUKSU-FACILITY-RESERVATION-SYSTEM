import { useEffect, useCallback, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  getContractWithID,
  clearAlert,
  approveContract,
} from "../../features/tenantUser/tenantUserSlice";
import { useDispatch, useSelector } from "react-redux";
import { PageLoading, AlertToast, ConfirmModal } from "../../components";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { dateFormatter, format } from "../../utils/valueFormatter";
import { Button, CircularProgress } from "@mui/material";
import contractApprovedImg from "../../assets/images/contractApproved.svg";

const ContractAgreementPage = () => {
  const { contractId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getContractWithID({ contractId }));
  }, [dispatch, contractId]);

  const {
    contractDetail,
    isLoading,
    isProcessing,
    alertFlag,
    alertType,
    alertMsg,
  } = useSelector((state) => state.tenantUser);

  const handleAlertClose = useCallback(
    (event, reason) => {
      if (reason === "clickaway") {
        return;
      }
      dispatch(clearAlert());
    },
    [dispatch]
  );

  //modal
  const [open, setOpen] = useState(false);
  const handleModalOpen = useCallback(() => setOpen(true), []);
  const handleModalClose = useCallback(() => setOpen(false), []);

  const handleApproveContract = useCallback(() => {
    dispatch(approveContract({ contractId }));
    handleModalClose();
  }, [dispatch, contractId, handleModalClose]);

  // calculate the total rent amount according to payment plan
  const calculateTotalRent = useCallback(() => {
    const { paymentPlan, rentAmount } = contractDetail;
    if (paymentPlan === "Cash") return rentAmount;
    if (paymentPlan === "Gcash") return rentAmount;
    if (paymentPlan === "PayMaya") return rentAmount;
    if (paymentPlan === "Over the Counter") return rentAmount;
    if (paymentPlan === "Others") return rentAmount;
  }, [contractDetail]);
  
  

  if (isLoading) return <PageLoading />;

  if (!contractDetail)
    return (
      <div className="flex justify-center items-start h-screen mt-10">
        <h1>Contract Does not Exists!</h1>
      </div>
    );

  return (
    <main className="mb-12">
      {contractDetail?.status === "Pending" && (
        <>
          <h3 className="my-4 font-heading font-bold text-center">
            Contract Agreement Page
          </h3>
          <div className="flex flex-col w-11/12 mx-auto items-center gap-4 sm:flex-row sm:justify-center sm:items-start">
            <div className="flex flex-col gap-2 w-3/5  p-4 items-center text-center">
              <h4 className="font-bold">FACILITY</h4>
              <Link
                to={`/tenant/real-estate/${contractDetail?.realEstate?.slug}`}
              >
                <h5 className="font-robotoNormal hover:text-primaryDark duration-300 ease-in-out cursor-pointer">
                  {contractDetail?.realEstate?.title}
                </h5>
              </Link>
              <p>{contractDetail?.realEstate?.category}</p>
              <p className="">
                <LocationOnOutlinedIcon color="success" />{" "}
                {contractDetail?.realEstate?.address.location},{" "}
                {contractDetail?.realEstate?.address?.streetName}
              </p>
            </div>

            <div className="flex flex-col gap-2 w-3/5  p-4 items-center text-center">
              <h4 className="font-bold">FACILITY OWNER</h4>
              <Link to={`/tenant/owner-user/${contractDetail?.owner?.slug}`}>
                <h5 className="font-robotoNormal hover:text-primaryDark duration-300 ease-in-out cursor-pointer">
                  {contractDetail?.owner?.firstName}{" "}
                  {contractDetail?.owner?.lastName}
                </h5>
              </Link>
              <div className="flex gap-2 items-center">
                <LocalPhoneRoundedIcon sx={{ color: "#6D9886" }} />
                <p className="">{contractDetail?.owner?.phoneNumber}</p>
              </div>
              <div className="flex gap-2 items-center">
                <EmailRoundedIcon sx={{ color: "#E7AB79" }} />
                <p className="lowercase overflow-clip">
                  {contractDetail?.owner?.email}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center mt-4 text-center">
            <h4 className="font-bold">Contract Details</h4>
            <div>
              <h5 className="font-robotoNormal">
                <span className="font-medium">Contract Start Date</span>:{" "}
                {dateFormatter(contractDetail?.startDate)}
              </h5>
            </div>
            <div>
              <h5 className="font-robotoNormal">
                <span className="font-medium">Payment Plan</span>:{" "}
                {contractDetail?.paymentPlan}
              </h5>
            </div>
            <div>
              <h5 className="font-robotoNormal">
                <span className="font-medium">Rent Amount</span>: PHP{" "}
                {format(contractDetail?.rentAmount)} per USE
              </h5>
            </div>
          </div>
          <div className="w-11/12 mx-auto text-justify mt-6">
            <h4>Booking Agreement Contract</h4>
            <p>
              This Booking Agreement Contract is applicable from{" "}
              <strong>{dateFormatter(contractDetail?.startDate)}</strong>,
              created by the facility{" "}
              <strong>
                {contractDetail?.owner?.firstName}{" "}
                {contractDetail?.owner?.lastName}
              </strong>
              , for the rental of the facility located at{" "}
              <strong>
                {contractDetail?.realEstate?.address?.location},{" "}
                {contractDetail?.realEstate?.address?.streetName}
              </strong>{" "}
              with {" "}
              <strong>
                {contractDetail?.tenant?.firstName}{" "}
                {contractDetail?.tenant?.lastName}
              </strong>
              .
            </p>
            <br />
            <h5>1. Booking Fee and Payment Terms</h5>
            <p>
            The Facility User shall pay a booking fee of{" "}
              <strong>PHP{format(contractDetail?.rentAmount)}</strong> per
              Use. Total amount of{" "}
              <strong>PHP{format(calculateTotalRent())}</strong> shall be due
              and payable through <strong>{contractDetail?.paymentPlan}</strong> on the
               day of payment and shall be considered late if
              not received by the Facility or after usage. 
            </p>
            <br />
            <h5>2. Late Fees</h5>
            <p>
              If payment is not received after or during use of the facility, a late fee of
              5% shall be added to the total amount due.
            </p>
            <br />
            <h5>3. Termination of Agreement</h5>
            <p>
            This Agreement constitutes the entire understanding between the parties and supersedes all prior negotiations, communications, or agreements, whether written or oral.
            </p>
            <br />
            <h5>4. Entire Agreement</h5>
            <p>
              This Agreement constitutes the entire agreement between the
              parties and supersedes all prior negotiations, understandings, and
              agreements between the parties, whether written or oral.
            </p>
            <br />
            <h5>5. Amendments</h5>
            <p>
            This Agreement can only be amended through a written document signed by both parties.
            </p>
            <br />
            <h5>6. Governing Law</h5>
            <p>
            This Agreement shall be governed and interpreted in accordance with the laws of the jurisdiction where the facility is located.
            </p>
            <br />
            <h5>7. Assignment and Binding Effect</h5>
            <p>
            The Facility User shall not assign this Agreement or sublease the facility without prior written consent from the Facility Owner. This Agreement shall be binding upon and inure to the benefit of both parties, their heirs, legal representatives, successors, and assigns.


            </p>
            <br />
          </div>
          <div className="flex justify-center mt-6">
            <Button
              onClick={handleModalOpen}
              variant="contained"
              size="large"
              color="tertiary"
              sx={{ color: "#fff" }}
              disabled={isProcessing}
              startIcon={<CheckCircleRoundedIcon />}
            >
              {isProcessing ? (
                <CircularProgress
                  size={26}
                  sx={{
                    color: "#fff",
                  }}
                />
              ) : (
                "Accept Contract"
              )}
            </Button>
          </div>
        </>
      )}

      {contractDetail?.status === "Active" && (
        <div className="flex flex-col items-center mt-10 gap-2">
          <h1 className="text-center">Contract is active</h1>
          <Button
            onClick={() => navigate("/tenant")}
            variant="text"
            color="primary"
            size="large"
          >
            Go Home
          </Button>
          <div className="w-56">
            <img
              src={contractApprovedImg}
              className="w-full"
              alt="login banner"
            />
          </div>
        </div>
      )}

      <div>
        <ConfirmModal open={open} handleModalClose={handleModalClose}>
          <h3 className="text-center">Agree to Contract?</h3>
          <p className="text-center my-4">
            Are you sure you want to agree to this contract? Once you agree to
            this contract, you will not be able to cancel it. You will be
            agreeing to the terms and conditions of this contract.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <Button onClick={handleModalClose} color="error">
              Close
            </Button>

            <Button
              onClick={handleApproveContract}
              color="success"
              variant="contained"
            >
              Confirm
            </Button>
          </div>
        </ConfirmModal>
      </div>

      <AlertToast
        alertFlag={alertFlag}
        alertMsg={alertMsg}
        alertType={alertType}
        handleClose={handleAlertClose}
      />
    </main>
  );
};

export default ContractAgreementPage;
