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

<<<<<<< HEAD

// calculate the total rent amount according to payment plan
export const calculateTotalRent = (paymentPlan, price) => {
  if (paymentPlan === "Cash") return price * 1;
  if (paymentPlan === "Gcash") return price * 1;
  if (paymentPlan === "PayMaya") return price * 1;
  if (paymentPlan === "Over the Counter") return price * 1;
  if (paymentPlan === "Others") return price * 1;
=======
// calculate the total rent amount according to payment plan
export const calculateTotalRent = (paymentPlan, price) => {
  if (paymentPlan === "Monthly") return price;
  if (paymentPlan === "Every 2 Months") return price * 2;
  if (paymentPlan === "Every 3 Months") return price * 3;
  if (paymentPlan === "Every 6 Months") return price * 6;
  if (paymentPlan === "Every 12 Months") return price * 12;
>>>>>>> 4786f39bb399142a28edc51e6a1b9c61edc071b0
};

// calculate number of months according to payment plan
export const calculateNumberOfMonths = (paymentPlan) => {
<<<<<<< HEAD
  if (paymentPlan === "Cash") return "Cash";
  if (paymentPlan === "Gcash") return "Gcash";
  if (paymentPlan === "PayMaya") return "PayMaya";
  if (paymentPlan === "Over the Counter") return "Over the Counter";
  if (paymentPlan === "Others") return "Others";
};

// calculate the added date according to payment plan

export const calculateAddedDate = (paymentPlan, currentRentDate) => {
  if (paymentPlan === "Cash")
=======
  if (paymentPlan === "Monthly") return "1 month";
  if (paymentPlan === "Every 2 Months") return "2 months";
  if (paymentPlan === "Every 3 Months") return "3 months";
  if (paymentPlan === "Every 6 Months") return "6 months";
  if (paymentPlan === "Every 12 Months") return "12 months";
};

// calculate the added date according to payment plan
export const calculateAddedDate = (paymentPlan, currentRentDate) => {
  if (paymentPlan === "Monthly")
>>>>>>> 4786f39bb399142a28edc51e6a1b9c61edc071b0
    return moment(currentRentDate)
      .add(0, "months")
      .endOf("month")
      .endOf("month")
      .format("YYYY-MM-DD");
<<<<<<< HEAD
  if (paymentPlan === "Gcash")
=======
  if (paymentPlan === "Every 2 Months")
>>>>>>> 4786f39bb399142a28edc51e6a1b9c61edc071b0
    return moment(currentRentDate)
      .add(1, "months")
      .endOf("month")
      .format("YYYY-MM-DD");
<<<<<<< HEAD
  if (paymentPlan === "PayMaya")
=======
  if (paymentPlan === "Every 3 Months")
>>>>>>> 4786f39bb399142a28edc51e6a1b9c61edc071b0
    return moment(currentRentDate)
      .add(2, "months")
      .endOf("month")
      .format("YYYY-MM-DD");
<<<<<<< HEAD
  if (paymentPlan === "Over the Counter")
=======
  if (paymentPlan === "Every 6 Months")
>>>>>>> 4786f39bb399142a28edc51e6a1b9c61edc071b0
    return moment(currentRentDate)
      .add(5, "months")
      .endOf("month")
      .format("YYYY-MM-DD");
<<<<<<< HEAD
  if (paymentPlan === "Others")
=======
  if (paymentPlan === "Every 12 Months")
>>>>>>> 4786f39bb399142a28edc51e6a1b9c61edc071b0
    return moment(currentRentDate)
      .add(11, "months")
      .endOf("month")
      .format("YYYY-MM-DD");
};

// calculate the next due date according to last payment date
export const calculateNextDueDate = (lastPaymentDate) => {
  return moment(lastPaymentDate).add(1, "d").format("YYYY-MM-DD");
};
