import React, { useState, useTransition } from "react";
import TabButton from "../../utils/TabButton";
import data from "../../data/ticket.json";
import { FaLocationDot } from "react-icons/fa6";

const EventDescription = ({ eventDesc }) => {
  const [tab, setTab] = useState("About");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const Event_Tab_Data = [
    {
      title: "About",
      id: "About",
      content: (
        <div className="flex flex-col items-start mt-10 gap-5 px-5 md:px-0">
          <h2 className="text-xl font-bold">ABOUT EVENT</h2>
          <div className="max-w-[350px] md:max-w-[900px] overflow-hidden">
            <div dangerouslySetInnerHTML={{ __html: eventDesc.description }} />
          </div>
        </div>
      ),
    },

    {
      title: "Tickets",
      id: "Tickets",
      content: (
        <div className="flex flex-col items-start mt-10 gap-5 px-5 md:px-0">
          {data.tickets.map((ticket, index) => {
            return (
              <div key={index} className="flex flex-col items-start bg-background shadow-2xl p-5 rounded-xl border gap-2">
                <h3 className="text-3xl font-bold">{ticket.title}</h3>
                <p className="text-xl">{ticket.desc}</p>
                <div className="flex items-center gap-2 text-xl">
                  <FaLocationDot />
                  <p className="text-secondary">{ticket.location}</p>
                </div>
                <p>{ticket.venueDetails}</p>
                <p className="p-3 bg-[#F0F0F0] rounded-lg">Available Till: {ticket.availableTill}</p>
                <div className="flex items-center justify-between w-full">
                  <h3 className="text-3xl font-bold">{ticket.tag}</h3>
                  <button className="bg-primary text-background px-5 py-3 rounded-lg text-2xl">Register</button>
                </div>
              </div>
            );
          })}
        </div>
      ),
    },

    {
      title: "Reviews",
      id: "Reviews",
      content: (
        <div className="flex items-center justify-center mt-10 text-center">
          <p className="text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
            voluptatibus reprehenderit, nihil laudantium nemo saepe alias itaque
            deserunt? Quasi tenetur quibusdam dolorum dolores. Earum nostrum
            pariatur, impedit repellat ipsam beatae aliquam! Placeat tenetur
            reprehenderit quam vel corrupti labore facere illum maiores nemo
            consectetur expedita, accusamus aperiam voluptatem, pariatur eius
            ratione?
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="">
      <div className="flex flex-col items-start">
        <div className="p-3 md:p-5 shadow-2xl rounded-xl">
          <img src={eventDesc.event_poster_url} className="rounded-xl" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 mt-5 md:text-2xl">
          <TabButton
            selectTab={() => handleTabChange("About")}
            active={tab === "About"}
          >
            About
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("Tickets")}
            active={tab === "Tickets"}
          >
            Tickets
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("Speakers")}
            active={tab === "Speakers"}
          >
            Speakers
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("Workshop")}
            active={tab === "Workshop"}
          >
            Workshop
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("Event Sponsor")}
            active={tab === "Event Sponsor"}
          >
            Event Sponsor
          </TabButton>
        </div>

        <div>{Event_Tab_Data.find((t) => t.id === tab).content}</div>
      </div>
    </div>
  );
};

export default EventDescription;
