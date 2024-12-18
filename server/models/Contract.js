import mongoose from "mongoose";

const ContractSchema = new mongoose.Schema(
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
    startDate: {
      type: String,
      required: [true, "Please provide a start date"],
    },

    rentAmount: {
      type: Number,
      required: [true, "Please provide a rent amount"],
    },
<<<<<<< HEAD
    
=======
>>>>>>> 4786f39bb399142a28edc51e6a1b9c61edc071b0
    paymentPlan: {
      type: String,
      enum: {
        values: [
<<<<<<< HEAD
          "Cash",
          "Gcash",
          "PayMaya",
          "Over the Counter",
          "Others",
=======
          "Monthly",
          "Every 2 Months",
          "Every 3 Months",
          "Every 6 Months",
          "Every 12 Months",
>>>>>>> 4786f39bb399142a28edc51e6a1b9c61edc071b0
        ],
        message: "{VALUE} is not supported",
      },
      required: [true, "Please provide a plan"],
<<<<<<< HEAD
      default: "Cash",
=======
      default: "Monthly",
>>>>>>> 4786f39bb399142a28edc51e6a1b9c61edc071b0
    },
    status: {
      type: String,
      enum: {
        values: ["Active", "Inactive", "Pending"],
        message: "{VALUE} is not supported",
      },
      default: "Pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Contract", ContractSchema);
