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
      default: "Cash",
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
