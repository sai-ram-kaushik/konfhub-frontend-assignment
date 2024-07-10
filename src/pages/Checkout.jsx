import React from "react";
import CheckoutDetails from "../components/checkoutComponents/CheckoutDetails";
import CheckoutSummary from "../components/checkoutComponents/CheckoutSummary";

const Checkout = () => {
  return (
    <div className="w-full px-5 md:px-10 py-10">
      <div className="flex flex-col md:flex-row items-start justify-center w-full gap-20">
        <CheckoutDetails />
        <CheckoutSummary />
      </div>
    </div>
  );
};

export default Checkout;
