import React from "react";

const CheckoutSummary = () => {
  return (
    <div className="border p-4 rounded-lg">
      <h2 className="text-xl font-bold">Ticket Summary</h2>
      <div className="flex justify-between mt-4">
        <span>Free</span>
        <span>x 1</span>
      </div>
      <div className="flex justify-between mt-4">
        <span>Total</span>
        <span className="font-bold">NaN</span>
      </div>
      <button className="mt-4 p-2 bg-black text-white rounded-lg w-full">
        Proceed
      </button>
    </div>
  );
};

export default CheckoutSummary;
