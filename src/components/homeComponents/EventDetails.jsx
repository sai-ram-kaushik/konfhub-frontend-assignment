import React from "react";
import {
  FaVideo,
  FaMoneyBill,
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaPhone,
} from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";
import { Link } from "react-router-dom";

const EventDetails = ({ eventDetails }) => {
  return (
    <div className="px-5 md:px-0 sticky top-3">
      <div className="flex flex-col items-start md:max-w-[400px] border p-5 rounded-xl gap-5">
        <h3 className="text-[18px] md:text-[30px] font-bold">
          {eventDetails.name}
        </h3>

        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2 text-2xl">
            <FaVideo />
            <p>Online</p>
          </div>

          <div className="flex items-center gap-2 text-2xl">
            <FaMoneyBill />
            <p>Paid</p>
          </div>
        </div>

        <h3 className="text-xl">
          <strong>Event Live Link:</strong>{" "}
          <a
            href={eventDetails.event_live_link}
            target="_blank"
            className="text-secondary"
          >
            Open streaming website
          </a>{" "}
        </h3>

        <h3 className="text-xl">
          <strong>Date:</strong> {eventDetails.start_date} -{" "}
          {eventDetails.end_date}
        </h3>
      </div>

      <Link to="/checkout">
        <button className="w-full mt-5 p-2 bg-primary text-background rounded-lg text-xl">
          Buy Now
        </button>
      </Link>

      <button className="w-full mt-5 p-2 bg-background border border-primary rounded-lg shadow-lg">
        Official Website
      </button>

      <div className="mt-5">
        <h2 className="text-2xl font-bold">HOSTED BY</h2>
        <div className="flex flex-col items-start md:max-w-[400px] border p-5 rounded-xl gap-5">
          <div className="flex items-center gap-3">
            <img
              src={eventDetails.organiser_image_url}
              width={50}
              height={50}
              className="rounded-full"
            />
            <h3 className="text-2xl font-bold">
              {eventDetails.organiser_name}
            </h3>
          </div>

          <p
            dangerouslySetInnerHTML={{ __html: eventDetails.organiser_info }}
          />

          <h3 className="text-2xl font-bold">Contact Us On</h3>
          <div className="flex items-center gap-3 text-2xl">
            <FaFacebookF className=" bg-primary text-background rounded-full" />
            <FaXTwitter className=" bg-primary text-background rounded-full" />
            <FaLinkedinIn className=" bg-primary text-background rounded-full" />
            <TbWorldWww className=" bg-primary text-background rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
