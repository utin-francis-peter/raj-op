import Button from "@/components/Button/Button";
import Image from "next/image";
import Link from "next/link";

const Ongoing = () => {
  const projects = [
    {
      name: "Raj Enclave",
      description:
        "Raj Housing Development has one of its project called 'Raj Enclave'. Accessibility is one of the USP of the project. 'It is a perfect blend of tranquility and modernity.' The perfect location, state of the art amenities, excellent specification and breathtaking views make this project worth investing for.",
      location: "Ongoing Project at Mapusa",
      specs: "2BHK, 3BHK Apartments",
      url: "/ongoing-projects/raj-enclave",
      image: "/ongoing-projects/enclave/main-image-final.webp",
      id: 1,
      new: false,
    },
    {
      name: "Raj Elite",
      description:
        "Raj Elite is an exclusive project in Ponda. The Proximity of major Banks, hospitals, clinics and pharmacies, supermarkets, and temples make it perfect place to live, making life convenient. The major focus of this project is to provide spacious dwelling spaces and functional convenience to the residents.",
      location: "Ongoing Project at Sadar, Ponda Goa",
      specs: "Spacious 3BHK Apartments, Shops & Offices",
      url: "ongoing-projects/raj-elite",
      image: "/ongoing-projects/elite/project-images/1200/elite-day.webp",
      id: 2,
      new: true,
    },
    {
      name: "Raj City Plaza",
      description:
        "Raj City Plaza, is in the heart of the Ponda City. The project not only has the high quality specifications which provides a great quality living standards, but it is also surrounded with all the facilities at a stone's throw for you to have access to all the daily essentials that save your time.",
      location: "Ongoing Project at Sadar, Ponda Goa",
      specs: "2BHK Apartments, Shops & Offices",
      url: "ongoing-projects/raj-city-plaza",
      // ! the image is the problem
      image: "/ongoing-projects/city-plaza/project-images/1200/city-plaza.webp",
      // image: "/ongoing-projects/city-plaza/project-images/city-plaza.webp",
      // image: "/ongoing-projects/city-plaza/city-plaza-hero.webp",
      // image: "/raj-durga-homepage-800.webp",
      id: 3,
      new: true,
    },
    {
      name: "Raj Durga Heritage",
      description:
        "'Amidst by beautiful Temples'. Get surrounded by positivity and breath in the bit of Goan Tradition. Town lives calmly in the fast moving world outside. Swinging to the tunes of traditional music and celebrating festivals and fairs related to its temple.",
      location: "Ongoing Project at Ponda",
      specs: "Shops and 1BHK Apartments",
      url: "ongoing-projects/raj-durga-heritage",
      image: "/raj-durga-homepage-800.webp",
      id: 4,
      new: false,
    },
  ];

  return (
    <>
      <div>
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export default Ongoing;

// SINGLE ONGOING PROJECT COMPONENT
export const Project = ({ project }) => {
  return (
    <section className="h-auto lg:h-[600px] overflow-y-hidden mb-20 md:mb-0">
      <div
        className={`w-full h-full lg:flex flex-col md:items-center relative ${
          project.id % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
        } `}
      >
        {/* ongoing project img */}
        <div className="lg:w-[800px] min-h-[200px] md:h-[500px] rounded-tl-[10px] rounded-tr-[10px] lg:rounded-[10px]  overflow-x-hidden flex-1 md:flex-none relative">
          <Image src={project.image} alt={project.name} fill />

          {project.new && (
            <p
              className={`bg-[#ee0000] text-white p-2 absolute top-0 ${
                project.id % 2 === 0 ? "right-0" : "left-0"
              }`}
            >
              New
            </p>
          )}
        </div>

        {/* project desc card */}
        <div
          className={`w-full lg:w-[500px] lg:absolute flex-1 bg-[#0d2b35] text-white z-20 rounded-bl-[10px] rounded-br-[10px] lg:rounded-[10px] p-[20px] md:pt-[30px] md:pr-[40px] md:pb-[40px] md:pl-[40px] ${
            project.id % 2 === 0 ? "left-0" : "right-0"
          }`}
        >
          <h1 className="text-[32px] md:text-[48px] leading-[60px] font-bold">
            {project.name}
          </h1>
          <p className="text-[18px] hidden lg:block font-medium leading-[23px] mt-[20px]">
            {project.description}
          </p>
          <p className="text-[18px] md:my-[20px]">{project.location}</p>
          <div className="md:flex justify-between items-center">
            <p className="md:max-w-[60%]">{project.specs}</p>
            <div className="w-[100px] mt-4 md:mt-0 button ">
              <Button href={project.url} btnHasBorderColor>
                View
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
