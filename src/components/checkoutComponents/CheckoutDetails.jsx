import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import ticketsData from "../../data/ticket.json";
import useDebounce from "../../hooks/useDebounce";

const CheckoutDetails = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const filteredTickets = ticketsData.tickets.filter((ticket) =>
    ticket.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  const handleAddClick = (index) => {
    setSelectedTicket(index);
  };

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + change;
      if (newQuantity < 1) {
        setSelectedTicket(null);
        return 1;
      }
      return newQuantity;
    });
  };

  return (
    <div>
      <div className="flex flex-col items-start gap-2">
        <h2 className="text-2xl font-bold">KonfHub Frontend Evaluation Task</h2>
        <p className="text-xl font-semibold">
          31st Jul, 2034 at 6:00 AM IST to 31st Aug, 2034 at 6:00 PM IST
        </p>

        <div className="flex flex-col items-start w-full">
          <div className="flex w-full gap-2 bg-gray-100 p-2 rounded-xl items-center">
            <IoIosSearch />
            <input
              type="search"
              className="bg-transparent outline-none w-full"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col items-start mt-10 gap-5 px-5 md:px-0">
          {filteredTickets.map((ticket, index) => (
            <div
              key={index}
              className="flex flex-col items-start bg-background shadow-2xl p-5 rounded-xl border gap-2"
            >
              <h3 className="text-3xl font-bold">{ticket.title}</h3>
              <p className="text-xl">{ticket.desc}</p>
              <div className="flex items-center gap-2 text-xl">
                <FaLocationDot />
                <p className="text-secondary">{ticket.location}</p>
              </div>
              <p>{ticket.venueDetails}</p>
              <p className="p-3 bg-[#F0F0F0] rounded-lg">
                Available Till: {ticket.availableTill}
              </p>
              <div className="flex items-center justify-between w-full">
                <h3 className="text-3xl font-bold">{ticket.tag}</h3>
                {selectedTicket === index ? (
                  <div className="flex items-center gap-2">
                    <button onClick={() => handleQuantityChange(-1)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => handleQuantityChange(1)}>+</button>
                  </div>
                ) : (
                  <button
                    className="bg-primary text-background px-5 py-3 rounded-lg text-2xl"
                    onClick={() => handleAddClick(index)}
                  >
                    Add
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckoutDetails;
