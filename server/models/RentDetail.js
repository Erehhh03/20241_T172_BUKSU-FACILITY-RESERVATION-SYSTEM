import mongoose from "mongoose";

const RentDetailSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Types.ObjectId,
      ref: "OwnerUser",
      required: true,
    },
    tenant: {
      type: mongoose.Types.ObjectId,
      ref: "TenantUser",
      required: true,
    },
    realEstate: {
      type: mongoose.Types.ObjectId,
      ref: "RealEstate",
      required: true,
    },
    
    
    paymentPlan: {
      type: String,
      enum: {
        values: [
          "Cash",
          "Gcash",
          "PayMaya",
          "Over the Counter",
          "Others",
        ],
        message: "{VALUE} is not supported",
      },
      required: [true, "Please provide a plan"],
      default: "Monthly",
    },
    startDate: {
      type: String,
      required: [true, "Please provide a start date"],
    },
    currentRentDate: {
      from: {
        type: String,
        required: [true, "Please provide a start date"],
      },
      to: {
        type: String,
        required: [true, "Please provide an end date"],
      },
    },
  },
  { timestamps: true }
);

//check if rent is paid for current month
RentDetailSchema.methods.isRentPaid = async function () {
  const rentDeadline = new Date(this.currentRentDate.to);
  const today = new Date();
  return today <= rentDeadline;
};

export default mongoose.model("RentDetail", RentDetailSchema);
