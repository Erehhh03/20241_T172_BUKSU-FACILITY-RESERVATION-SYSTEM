import moment from "moment";

export const { format } = new Intl.NumberFormat("en-IN", {
  style: "decimal",
});

export const dateFormatter = (date) => {
  return moment(date).format("MMM Do, YYYY");
};

export const ageCalculator = (date) => {
  return moment().diff(date, "years");
};


// calculate the total rent amount according to payment plan
export const calculateTotalRent = (paymentPlan, price) => {
  if (paymentPlan === "Cash") return price * 1;
  if (paymentPlan === "Gcash") return price * 1;
  if (paymentPlan === "PayMaya") return price * 1;
  if (paymentPlan === "Over the Counter") return price * 1;
  if (paymentPlan === "Others") return price * 1;
};

// calculate number of months according to payment plan
export const calculateNumberOfMonths = (paymentPlan) => {
  if (paymentPlan === "Cash") return "Cash";
  if (paymentPlan === "Gcash") return "Gcash";
  if (paymentPlan === "PayMaya") return "PayMaya";
  if (paymentPlan === "Over the Counter") return "Over the Counter";
  if (paymentPlan === "Others") return "Others";
};

// calculate the added date according to payment plan

export const calculateAddedDate = (paymentPlan, currentRentDate) => {
  if (paymentPlan === "Cash")
    return moment(currentRentDate)
      .add(0, "months")
      .endOf("month")
      .endOf("month")
      .format("YYYY-MM-DD");
  if (paymentPlan === "Gcash")
    return moment(currentRentDate)
      .add(1, "months")
      .endOf("month")
      .format("YYYY-MM-DD");
  if (paymentPlan === "PayMaya")
    return moment(currentRentDate)
      .add(2, "months")
      .endOf("month")
      .format("YYYY-MM-DD");
  if (paymentPlan === "Over the Counter")
    return moment(currentRentDate)
      .add(5, "months")
      .endOf("month")
      .format("YYYY-MM-DD");
  if (paymentPlan === "Others")
    return moment(currentRentDate)
      .add(11, "months")
      .endOf("month")
      .format("YYYY-MM-DD");
};

// calculate the next due date according to last payment date
export const calculateNextDueDate = (lastPaymentDate) => {
  return moment(lastPaymentDate).add(1, "d").format("YYYY-MM-DD");
};
