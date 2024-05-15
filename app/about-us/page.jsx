import React from "react";
import Image from "next/image";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "About Us",
  description:
    "Raj Housing is a real estate development company based in Goa. We are your one-stop solution to shops, 1BHK, and 2BHK flats in Ponda and Mapusa. Raj Housing specialises in residential and commercial buildings with state of the art amenities. Raj Housing Goa has earned a hard-earned reputation for good construction and design values, superior specifications and prompt after sales service. Our strong sense of commitment to the customer is shared by our team of architects, Engineers and other professionals.",
};

const AboutUs = () => {
  return (
    <Layout>
      <div className="text-[18px] leading-[30px] md:text-[20px] font-normal about-us">
        <section className="about-hero md:h-[540px] relative md:pt-[86px] bg-[#0d2b35] md:bg-transparent">
          <div className="absolute h-full md:w-[60%] left-0 top-0 bg-[#0d2b35] -z-10"></div>
          <div className=" grid-container md:flex gap-20">
            <div className="text-white ">
              <h1 className="text-[38px] md:text-[60px] md:mb-[0.5rem] mt-10 md:mt-0">
                About Us
              </h1>
              <p className=" md:max-w-[444px] pt-[20px] pb-[40px]">
                We have earned a hard-earned reputation for good construction
                and design values, superior specifications and prompt after
                sales service. Our strong sense of commitment to the customer is
                shared by our team of architects, Engineers and other
                professionals.
              </p>
            </div>

            <div
              data-aos="fade-up"
              className="hidden md:block relative rounded-[10px] overflow-hidden h-[400px] flex-1"
            >
              <Image
                src={"/raj-family-two.webp"}
                alt="Raj Family"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          {/* <div className="relative h-full">
          <Image
            src={"/raj-family-two.webp"}
            alt="Raj Family"
            layout="fill"
            objectFit="cover"
          />
        </div> */}
        </section>

        <section className="md:hidden grid-container">
          <div className="relative rounded-[10px] overflow-hidden h-[300px] mt-[20px] mb-[45px]">
            <Image
              src={"/raj-family-two.webp"}
              alt="Raj Family"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>

        <section className=" text-justify text-lg font-medium grid-container">
          <div className="md:py-[90px] md:flex gap-10">
            <p className="md:w-1/2">
              Over past the 17 years, we have fostered a culture of continuous
              improvement of our product. To date, we have completed 27 projects
              with more than 13 lakh sq. ft. built-up area in various parts of
              Goa such as Ponda, Mapusa, Siolim, Ribander, Vasco, etc. We have
              more than 1500+ happy families in our Raj Parivar with some of
              them having their second and third homes with us. Raj Housing is
              built on the strong pillars of Credibility and Capability &
              possesses a hard-earned reputation for good construction, design
              values, excellent specifications, and prompt after-sales service.
              We strongly believe that the actual relationship starts after the
              possession.
            </p>

            <p data-aos="fade-up" className="md:w-1/2">
              We have a special maintenance team that makes sure that the
              onboarding process of the new customer in our family is a smooth
              one. <br />
              <br /> Our Philosophy is that “Customers invest with us not only
              because they have money, but they also do because they trust us
              and we have to live up to their trust”. We have this value imbibed
              in our team and they work on the same principle as well.
            </p>
          </div>
        </section>

        <section className="flex items-center justify-center mt-4 md:mt-0 good-life-in-goa">
          <div className="grid-container">
            <p
              data-aos="zoom-in"
              className="py-[90px] text-[24px] md:text-4xl leading-[38px] md:leading-[45px] font-semibold max-w-[720px] text-center text-white "
            >
              Live the good life in Goa, the smarter choice for home-buyers and
              investors. Enjoys a higher quality of life in a home built by Raj
              Group
            </p>
          </div>
        </section>

        <section
          className="grid-container leading-[30px] text-lg"
          style={{ paddingTop: "95px", paddingBottom: "50px" }}
        >
          <h1 className="mb-[8px] font-bold text-[48px]">Our Story</h1>
          <p data-aos="fade-up" className="md:w-[560px] my-[40px]">
            Grit and determination are primary ingredients to be successful in
            life. The Managing Director of Raj Housing Dev. Pvt. Ltd, Sandip
            Nigalye, has a success story like none other. Born and bought up in
            a small town of Ponda to a farmer’s family, life came with a lot of
            difficulties. In his childhood he would help his parents in the day
            to day farming activities while simultaneously working on his
            studies.
          </p>

          <div className="md:flex">
            <div className="md:my-[47.5px] md:mx-[155px]">
              <div className="w-[70%] md:w-[250px] h-[350px] md:h-[375px] mx-auto md:mx-0 relative">
                <Image
                  src="/sandip-sir.webp"
                  alt="Sandip Sir"
                  layout="fill"
                ></Image>
              </div>
            </div>
            <p
              data-aos="fade-up"
              className="md:w-[560px] md:h-[390px] my-[40px]"
            >
              After completing his initial schooling in Ponda he got admission
              in the Government Polytechnic College, Panaji. The schooling phase
              was a difficult one while adjusting with the cash crunch, but
              things changed as he completed his education. Nigalye immediately
              got a job as an engineer with the Sanguem Municipal Council. Life
              and finances began to get stable but Mr. Nigalye wouldn’t settle
              for just that much. He had bigger plans. After working for eleven
              years he thought for venturing into business, and along with his
              friend, planned his first real estate project in the year 1994. It
              was a courageous decision. When asked about it he smiles and say,
              “Life is about evolving, no matter which field you are in. If you
              are in the same position or situation even after say 4-5 years,
              then you need to seriously introspect.”
            </p>
          </div>

          <p data-aos="fade-up" className="md:w-[560px] my-[40px]">
            The new dream did come with some challenges. Gathering funds for his
            first project was a major hurdle. His mother, who had been
            depositing small savings throughout her life, trusted her son and
            gave him all of the rupees 60,000 worth of her life’s saving backed
            by his determination and his parents’ blessings. Nigalye completed
            his first project of 34 flats. It was no looking back from there.
            Today he is the MD of the Raj Group, one of the largest business
            groups of Goa.
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default AboutUs;
