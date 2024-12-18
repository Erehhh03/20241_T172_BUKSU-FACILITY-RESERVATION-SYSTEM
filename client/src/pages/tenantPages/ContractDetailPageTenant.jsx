import { useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getContractWithRealEstateID } from "../../features/tenantUser/tenantUserSlice";
import { PageLoading } from "../../components";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import { dateFormatter, format } from "../../utils/valueFormatter";

const ContractDetailPageTenant = () => {
  const dispatch = useDispatch();
  const { realEstateId } = useParams();

  useEffect(() => {
    dispatch(getContractWithRealEstateID({ realEstateId }));
  }, [dispatch, realEstateId]);

  const { contractDetail, isLoading } = useSelector(
    (state) => state.tenantUser
  );

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
    <main className="mb-12 mt-4">
      <h3 className="my-4 font-heading font-bold text-center">
        Contract Detail
      </h3>
      <div className="flex flex-col w-11/12 mx-auto items-center gap-4 sm:flex-row sm:justify-center sm:items-start">
        <div className="flex flex-col gap-2 w-3/5  p-4 items-center text-center">
          <h4 className="font-bold">FACILITY</h4>
          <Link to={`/tenant/real-estate/${contractDetail?.realEstate?.slug}`}>
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
          <h4 className="font-bold">Property Owner</h4>
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
      <div className="flex justify-center mt-6"></div>
    </main>
  );
};

export default ContractDetailPageTenant;
