import OngoingProjects from "@/components/home/OngoingProjects/Ongoing";
import "../style/styles.scss";
import Card from "@/components/home/Card/Card";
import Reviews from "@/components/home/Reviews";
import { getPosts } from "@/utils/sanity-utils";
import Button from "@/components/Button/Button";
import Image from "next/image";

import Instagram from "../public/icons/instagram-logo-512.png";
import Facebook from "../public/icons/facebook.svg";
import FacebookSVG from "@/components/FacebookSVG";
import Layout from "@/components/layout/Layout";
import { getPostsSlugs } from "@/utils/posts-slug";

export default function Home() {
  return (
    <Layout>
      <main className="homepage">
        <section className="fixed top-1/2 -right-5 -trans-y-1/2 hidden md:inline-block z-50 mr-10">
          <a
            className="shadow-lg"
            href="https://www.instagram.com/rajhousingdevelopment/"
          >
            <Image
              className="rounded-full"
              src={Instagram}
              alt="Instagram"
              width={60}
              height={60}
            />
          </a>

          <div className="my-5"></div>

          <a
            className="bg-transparent"
            href="https://www.facebook.com/rajhousingdevelopment/"
            target="_blank"
            rel="noopener"
          >
            <div className="w-[60px] h-[60px] rounded-[30px] shadow-lg bg-white p-[13px] z-[2]">
              <FacebookSVG fill="rgb(59, 89, 152)" />
            </div>
          </a>
          {/* <a
          className="bg-white shadow-lg w-[60px] h-[60px] rounded-full flex items-center justify-center"
          href="https://www.facebook.com/rajhousingdevelopment/"
        >
          <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center relative">
            <FacebookSVG fill="rgb(59, 89, 152)" />
          </div>
        </a> */}
        </section>

        <section className="flex items-center" id="hero">
          <div className="basis-[100%] text-white grid-container">
            <h1 className="cinzel">
              Raj Housing <br />
              <span>Dev. Pvt. Ltd.</span>
            </h1>
            <p className="mt-1">A Perfect Choice for A Perfect Living</p>
          </div>
        </section>

        <section className=" grid-container ">
          <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-[2rem]">
            <Card
              title="Ongoing Projects"
              desc="Have a look at our beautiful ongoing projects. We promise to deliver
          the culture of continuous improvement of our product."
              href="ongoing-projects/index.html"
              btnHasBorderColor={true}
              btnBorderColor="border-white"
              beforeBgGradient="white"
              AOSClassname="fade-left"
            />
            <Card
              title="Completed Projects"
              desc="We have some of the best projects to our credits. Go through all our completed projects."
              href="https://rajhousinggoa.com/completed-projects/"
              btnHasBorderColor={true}
              btnBorderColor="border-white"
              beforeBgGradient="white"
              AOSClassname="fade-left"
            />
          </div>
        </section>

        <section id="banner" className="my-20">
          <div className="grid-container">
            <div className="grid-x grid-margin-x">
              <div className="cell large-12">
                <div className="mb-5">
                  <h3>Why invest in Gated Community?</h3>
                </div>

                <div className="max-w-[368px] md:max-w-[400px] m-auto">
                  <Button
                    href="blog/why-invest-in-gated-community"
                    beforeBgGradient={`linear-gradient(
      90.14deg,
      #c6ab66 1.34%,
      #ffeba2 65.98%,
      #c8a845 98.3%
    )`}
                    twStyles="button"
                    initialColor="#ffeba2"
                  >
                    Read what Raj Group has to say{" "}
                    <svg
                      className="next-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                      width="20px"
                      height="20px"
                      fill="#fff"
                    >
                      <path d="M 19.71875 8.28125 L 18.28125 9.71875 L 33.5625 25 L 18.28125 40.28125 L 19.71875 41.71875 L 35.71875 25.71875 L 36.40625 25 L 35.71875 24.28125 Z" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block toy">
            <div className="round"></div>
            <div className="round2"></div>
          </div>
        </section>

        <div className="grid-container my-20">
          <OngoingProjects />
        </div>

        <section className="pt-[80px] md:pt-[130px] pb-[80px]">
          <h1 className="font-bold text-[32px] md:text-[50px] mb-[30px]  text-center">
            What our clients say
          </h1>

          <Reviews />
        </section>
      </main>
    </Layout>
  );
}
