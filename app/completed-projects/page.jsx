// "use client";

import Card from "@/components/Card";
import Layout from "@/components/layout/Layout";
import React from "react";

export const metadata = {
  title: "Completed Projects",
  description:
    "The list of all the commercial and residential projects by Raj Housing Development. The projects are spread across Goa, mainly in Ponda and Mapusa. The projects are equipped with shops, 1BHK, and 2BHK flats. ",
};

const CompletedProjects = () => {
  const completedProjects = [
    {
      id: "1",
      title: "Ganaraj Arcade",
      desc: "This project is located at Upper Bazaar - Ponda, near the Kamat Nursing home.",
      img: "/completed-projects/ganaraj.webp",
    },
    {
      id: "2",
      title: "Raj Aguiar Enclave",
      desc: "Raj Aguiar Enclace is located in quite & cool location at Dhawali - Ponda. One can experience a peace of mind in the lap of nature with melodies of birds and lush green lawn to relax.",
      img: "/completed-projects/aguiar2.webp",
    },
    {
      id: "3",
      title: "Raj Madhurangan",
      desc: "Scenic exuberance of Goa, divine environs of Mardol - Mangeshi and tryst with a home in your dreams.",
      img: "/completed-projects/madhurangan2.webp",
    },
    {
      id: "4",
      title: "Raj Exellency",
      desc: "Raj Excellency located in a beaufitul hilly regions of Ribandar overlooking the pristine Mandovi River & lively Panjim city.",
      img: "/completed-projects/excellency.webp",
    },
    {
      id: "5",
      title: "Rajdeep Galleria",
      desc: "Experience the immensely energeting business environment where sky is the limit at Rajdeep Galleria located at Sadar Ponda, opposite Municipality.",
      img: "/completed-projects/rajdeep.webp",
    },
    {
      id: "6",
      title: "Sairaj Residency",
      desc: "This building is located at Portvaddo Siolim",
      img: "/completed-projects/ganaraj.webp",
    },
    {
      id: "7",
      title: "Raj Braganca Residency",
      desc: "This building gives a scenic beauty and one may expect the luxurious lifestyle.",
      img: "/completed-projects/braganza.webp",
    },
    {
      id: "8",
      title: "Raj Krishna Towers",
      desc: "This beaufitul project is located at Shantinagar Ponda, opposite Kamat Nursing.",
      img: "/completed-projects/raj_krishna.webp",
    },
    {
      id: "9",
      title: "Raj Mudra",
      desc: "Raj Mudra - Heart of the city, in harmony with nature' is more like a paradise that is completely enveloped with greenery on one side.",
      img: "/completed-projects/rajmudra.webp",
    },
    {
      id: "10",
      title: "Raj Vatika",
      desc: "This Villa is located at Dabolim, Vasco near the airport road.",
      img: "/completed-projects/vatika.webp",
    },
    {
      id: "11",
      title: "Sairaj Park",
      desc: "The Row Houses have taken the form of Rat-Rani. Add a ting of luster to your life in the twin bungalows Jai-Jui. Let the mesmeric fragrance cradle you in the independent bungalows Kevda.",
      img: "/completed-projects/sairaj_park.webp",
    },
  ];

  return (
    <Layout>
      <div className="grid-container">
        <h1 className="font-black text-[38px] md:text-[60px] mt-10 md:mt-20">
          Completed Projects
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8  py-10">
          {completedProjects?.map((project) => (
            <Card
              key={project?.id}
              tw="text-[24px]"
              image={project?.img}
              title={project?.title}
              desc={project.desc}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CompletedProjects;
