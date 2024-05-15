import React from "react";
import ContactForm from "@/components/forms/ContactForm";
import GoogleCaptchaWrapper from "@/components/GoogleCaptchaWrapper";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "Contact Us",
  description:
    "Want to buy a flat in Goa? Contact Raj Housing Development Goa. Raj Housing specialises in residential and commercial buildings. Their ongoing projects are in Mapusa and Ponda city.",
};

const Contact = () => {
  return (
    <Layout>
      <div className="contact-page">
        <section className="md:h-[80vh] pb-8 md:pb-0 bg-[#0d2b35] text-white flex items-center ">
          <div className="grid-container w-full lg:flex justify-between">
            <div>
              <h1 className="text-[38px] md:text-[60px] mt-10 md:mt-0">
                Contact us
              </h1>
              <p className="md:font-semibold text-[18px] md:text-2xl leading-[30px] mb-8 md:mb-0">
                We are here when you need us <br /> Stop by or just give us a
                call
              </p>
            </div>

            <GoogleCaptchaWrapper>
              <ContactForm />
            </GoogleCaptchaWrapper>
          </div>
        </section>

        <section className="leading-[35px] grid-container">
          <div className="py-[25px] lg:py-[90px] flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="font-semibold text-[24px] mb-[8px]">
                Ponda Sales Team
              </h2>
              <p className="text-[18px] ">
                Sameer: <a href="tel:8308806941">8308806941</a> <br /> Prajyoti:{" "}
                <a href="tel:9011044394">9011044394</a>
              </p>
            </div>

            <div className="my-8 lg:my-0">
              <h2 className="font-semibold text-[24px] mb-[8px]">
                Mapusa Sales Team
              </h2>
              <p className="text-[18px] ">
                Swapnil: <a href="tel:8308806934">8308806934</a> <br /> Sameer:{" "}
                <a href="tel:8308806941">8308806941</a>
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-[24px] mb-[8px]">
                Office Address
              </h2>
              <p className="text-[18px] ">
                401, Rajdeep Galleria, Sadar, Ponda-Goa <br /> 403401 <br /> +91
                (832) 2312072 / 2314647
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
