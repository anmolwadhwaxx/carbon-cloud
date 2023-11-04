"use client";
import React, { useTransition, useState } from "react";
import Wrapper from "../../components/Wrapper";
import TabButton from "../../components/TabButton";
import { CiLocationOn } from "react-icons/ci";
import TransitionEffect from "../../components/TransitionEffect";
const Dashboard = () => {
  const [tab, setTab] = useState("Delhi Pune");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  const Route_Tab_Data = [
    {
      title: "Delhi Pune",
      id: "Delhi Pune",
      start: "Delhi",
      destination: "Pune",
      content: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121058.93192430925!2d73.78039436534952!3d18.524761299972962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699064320610!5m2!1sen!2sin"
          width="600"
          height="450"
          // style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      ),
    },

    {
      title: "Delhi Gujarat",
      id: "Delhi Gujarat",
      start: "Delhi",
      destination: "Gujarat",
      content: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777316.944988922!2d68.68031256921884!3d22.39942054700541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959051f5f0ef795%3A0x861bd887ed54522e!2sGujarat!5e0!3m2!1sen!2sin!4v1699064234947!5m2!1sen!2sin"
          width="600"
          height="450"
          // style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      ),
    },

    {
      title: "Maharastra MP",
      id: "Maharastra MP",
      content: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733735.001046555!2d75.77443072023003!3d23.95246180666062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39667381d35aea05%3A0xe0106b0d4e701c1e!2sMadhya%20Pradesh!5e0!3m2!1sen!2sin!4v1699065596364!5m2!1sen!2sin"
          width="600"
          height="450"
          // style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      ),
    },
  ];

  return (
    <div className="w-full py-20">
      <TransitionEffect />
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-3xl md:text-4xl mb-5 font-semibold leading-tight">
            Your Carbon Footprint Report
          </div>
        </div>

        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-3xl md:text-4xl mb-5 font-semibold leading-tight">
            Your Carbon Heatmap
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-between py-10">
          <div className="flex flex-col  items-center justify-center gap-16 mt-5">
            <TabButton
              selectTab={() => handleTabChange("Delhi Pune")}
              active={tab === "Delhi Pune"}>
              <div className="flex items-center gap-5">
                <div className="flex flex-col items-center">
                  <CiLocationOn size={40} />
                  <p>Delhi</p>
                </div>

                <div className="flex flex-col items-center">
                  <p>----------------------------</p>
                </div>

                <div className="flex flex-col items-center">
                  <CiLocationOn size={40} />
                  <p>Pune</p>
                </div>
              </div>
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Delhi Gujarat")}
              active={tab === "Delhi Gujarat"}>
              <div className="flex items-center gap-5">
                <div className="flex flex-col items-center">
                  <CiLocationOn size={40} />
                  <p>Delhi</p>
                </div>

                <div className="flex flex-col items-center">
                  <p>----------------------------</p>
                </div>

                <div className="flex flex-col items-center">
                  <CiLocationOn size={40} />
                  <p>Gujarat</p>
                </div>
              </div>
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("Maharastra MP")}
              active={tab === "Maharastra MP"}>
              <div className="flex items-center gap-5">
                <div className="flex flex-col items-center">
                  <CiLocationOn size={40} />
                  <p>Maharastra</p>
                </div>

                <div className="flex flex-col items-center">
                  <p>----------------------------</p>
                </div>

                <div className="flex flex-col items-center">
                  <CiLocationOn size={40} />
                  <p>Madhya Pradesh</p>
                </div>
              </div>
            </TabButton>
          </div>
          <div>{Route_Tab_Data.find((t) => t.id === tab).content}</div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Dashboard;