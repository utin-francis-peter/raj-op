"use client";

import { ongoingProjectsContents } from "@/data";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useClickOutside } from "@/hooks/useClickOutside";
import Link from "next/link";
import Button from "@/components/Button/Button";

const OngoingProjectBySlug = ({ slug }) => {
  const project = ongoingProjectsContents.find(
    (project) => project.slug === slug
  );

  const [showGallery, setShowGallery] = useState(false);
  const [activeGalleryList, setActiveGalleryList] = useState([]);
  const [initialSlide, setInitialSlide] = useState();
  const [activeSlideIndex, setActiveSlideIndex] = useState(initialSlide);

  // console.log("active slide:", activeSlide);
  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.activeIndex);
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      const body = document?.body;

      showGallery
        ? (body.style.overflowY = "hidden")
        : (body.style.overflowY = "visible");
    }
  }, [showGallery]);

  const overviewContent = (
    <div className="h-full md:flex flex-wrap items-center ">
      {/* left filler */}
      <div
        className="h-full md:absolute top-0 left-0 "
        style={{ width: `calc(((100% - 1200px) / 2) + 50px)` }}
      ></div>

      {/* desc container */}
      <div className="flex-1 mx-[20px] md:mx-0 py-[40px] md:py-0">
        <Image
          className="mb-[10px]"
          src={project.details.logo}
          width={100}
          height={100}
          alt={`${project.hero.title.toLowerCase()} logo`}
        />

        <div data-aos="fade-up" className="text-lg leading-[35px]">
          <p className="mb-2 md:max-w-[670px] text-[18px] leading-[35px]">
            {project.details.overview}
          </p>
          {project.details.blogPost && (
            <Link
              className="font-bold text-[#302e97] underline"
              href={project.details.blogPost.href}
            >
              {project.details.blogPost.title}{" "}
            </Link>
          )}
          <p className="mt-8">
            RERA Number <br />{" "}
            {project.details.reraNo.map((item) => (
              <span key={item}>
                {item} <br />
              </span>
            ))}
          </p>
        </div>
      </div>

      {/* specs container */}
      <div
        style={{
          background: `${project.details.bgColor} ${project.details.bgImg}`,
          backgroundSize: "80%",
          backgroundPosition: "bottom left",
          backgroundRepeat: "no-repeat",
          paddingTop: "60px",
          paddingBottom: "60px",
        }}
        className="md:basis-[35%] h-full flex items-center px-[20px] md:px-3 md:pl-[40px] text-white "
      >
        <div className="flex flex-col gap-[15px]">
          <p className="">
            <span className="text-lg font-extrabold">Location</span> <br />{" "}
            <span>{project.details.location.address}</span> <br />
            {project.details.location.map && (
              <span className="flex items-center gap-2">
                <Image
                  src="/icons/gmap.svg"
                  alt="Google map icon"
                  width={20}
                  height={20}
                />
                <a
                  className="underline"
                  href={project.details.location.map}
                  target="_blank"
                >
                  Get the location
                </a>
              </span>
            )}
          </p>
          <p className="">
            <span className="text-lg font-extrabold">Nearby</span> <br />{" "}
            {project.details.nearby.map((item) => (
              <>
                <span key={item}>{item}</span>
              </>
            ))}
          </p>
          <p className="">
            <span className="text-lg font-extrabold">Typology</span> <br />{" "}
            <span>{project.details.typology}</span>
          </p>
          <p>
            <span className="text-lg font-extrabold">Sales Team</span> <br />{" "}
            {project.details.salesTeam.map((item) => (
              <>
                <span key={item}>{item}</span> <br />
              </>
            ))}
          </p>
        </div>
      </div>

      {/* right filler */}
      <div
        className={`h-full md:absolute top-0 right-0`}
        style={{
          width: `calc(((100% - 1200px) / 2) + 50px)`,
          backgroundColor: project?.details?.bgColor,
        }}
      ></div>
    </div>
  );

  return (
    <>
      <div
        className={`z-10 overflow-hidden ${
          showGallery ? "overflow-y-hidden" : ""
        }`}
      >
        {/* hero */}
        <section
          style={{ background: `url(${project.hero.img}) center/cover` }}
          className="h-[90vh]"
        >
          <div className="h-full grid-container relative">
            <div className="text-white absolute bottom-40 mr-[20px] md:mr-0">
              <h1
                style={{ textShadow: "0px 4px 72px black" }}
                className=" font-black text-[38px] md:text-6xl mb-3"
              >
                {project.hero.title}
              </h1>
              <p className="inline-block px-3 bg-[rgba(0,0,0,0.8)] text-xl font-medium">
                {project.hero.desc}
              </p>
            </div>
          </div>
        </section>

        {/* ongoing project overview */}
        <section className="relative md:h-[552px] bg-[#ecf5ff]">
          <div className="md:hidden h-full">{overviewContent}</div>
          <div className="hidden md:block h-full grid-container">
            {overviewContent}
          </div>
        </section>

        {
          project.youtube && (
            <section id="youtube-video">
              <div className="grid-container">
                <div className="grid-x grid-padding-x">
                  {project.youtube?.videos.map((v, i) => (
                    <div key={i} className="cell large-6 medium-6">
                      <div className="video-container" data-aos="fade-up">
                        <iframe
                          width="560"
                          height="315"
                          src={v.src}
                          title={v.title}
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen=""
                        ></iframe>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="video-info-container">
                <h2>Raj Enclave</h2>
                <p>A Perfect blend of Modernity and Tranquility</p>
              </div>
            </section>
          )

          /* <section id="youtube">
           <div className="filler"></div>
          <div className="video-info-container">
            <div className="grid-container videos-container">
              {project.youtube?.videos.map((v, i) => (
                <div className="video-wrapper" key={i}>
                  <iframe
                    data-aos="fade-up"
                    src={v.src}
                    title={v.title}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>

            <div className="desc-container">
              <h2>Raj Enclave</h2>
              <p>A Perfect blend of Modernity and Tranquility</p>
            </div>
          </div> 
        </section>*/
        }

        <section className="grid-container">
          <div className="my-20">
            <h1 className="font-bold text-[32px] md:text-5xl mb-10">
              Amenities
            </h1>
            <div className="grid md:grid-cols-4 gap-10">
              {project.amenities.map((amenity) => (
                <div
                  data-aos="fade-up"
                  key={amenity}
                  style={{
                    background: "#ecf5ff url(/ongoing-projects/graphic.svg)",
                    backgroundSize: "contain",
                    backgroundPosition: "bottom right",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="border border-[rgba(48, 46, 151, 0.05)] rounded-[10px] flex items-center justify-center p-5"
                >
                  <div className="flex flex-col justify-center items-center text-center">
                    {amenity.img && (
                      <Image
                        className="mb-[15px]"
                        src={amenity.img}
                        alt={`${amenity.text}`}
                        width={40}
                        height={40}
                      />
                    )}
                    <p className="font-medium text-[18px] leading-[24px]">
                      {amenity.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#ecf5ff] pt-[80px] pb-[90px]">
          <div className="grid-container">
            <h1 className="font-bold text-[32px] md:text-5xl mb-10">
              Specifications
            </h1>

            <div className="md:flex gap-20 font-medium text-[18px]">
              <ul>
                {project.specs.one.map((spec) => (
                  <li
                    data-aos="fade-up"
                    className="list-none mb-[40px]"
                    key={spec}
                  >
                    - {spec}
                  </li>
                ))}
              </ul>
              <ul>
                {project.specs.two.map((spec) => (
                  <li data-aos="fade-up" className="mb-[40px]" key={spec}>
                    - {spec}
                  </li>
                ))}
              </ul>
            </div>

            <p>*Provided for residential units only.</p>
          </div>
        </section>

        {/* TODO: furniture image */}
        {project.glimpse && (
          <section className="h-[450px] relative">
            <Image
              src={project.glimpse}
              alt={`${project.hero.title} glimpse `}
              fill
              objectFit="cover"
            />
          </section>
        )}

        {project.projectImgs?.length && (
          <section className="grid-container ">
            <div className="py-20">
              <h1 className="font-bold text-[32px] md:text-5xl mb-10">
                Project Images
              </h1>

              <div data-aos="fade-up" className="grid md:grid-cols-3 gap-10">
                {project.projectImgs?.map((p, i) => (
                  <div className="w-full md:w-[356px] h-[267px] relative">
                    <Image
                      onClick={() => {
                        setActiveGalleryList(project.projectImgs);
                        setInitialSlide(i);
                        setShowGallery(true);
                      }}
                      className="rounded-[10px] cursor-pointer"
                      key={i}
                      src={p.img}
                      alt={`${project.hero.title}`}
                      fill
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {project.floorPlans && (
          <section className=" bg-[#ecf5ff] py-20">
            <div className="grid-container">
              <div className="mb-10 md:flex items-center justify-between">
                <h1 className="font-bold text-[32px] md:text-5xl ">
                  Floor Plans
                </h1>
                {project.floorPlans.downloadURL && (
                  <div data-aos="fade-left">
                    <Button
                      beforeBgGradient={`linear-gradient(
      90.14deg,
      #c6ab66 1.34%,
      #ffeba2 65.98%,
      #c8a845 98.3%
    )`}
                      initialColor="#ffeba2"
                      isTargetBlank={true}
                      href={project.floorPlans.downloadURL}
                    >
                      Download floor plan
                    </Button>
                  </div>
                )}
              </div>

              <div
                data-aos="fade-up"
                className="grid md:grid-cols-3 gap-10 mt-10 md:mt-0"
              >
                {project.floorPlans?.images.map((p, i) => (
                  <div className="w-full md:w-[356px] h-[267px] relative">
                    <Image
                      onClick={() => {
                        setActiveGalleryList(project.floorPlans.images);
                        setInitialSlide(i);
                        setShowGallery(true);
                      }}
                      className="rounded-[10px] cursor-pointer"
                      key={p.img}
                      src={p.img}
                      alt={`${project.hero.title}`}
                      fill
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {project.sitePlan?.length && (
          <section className=" bg-[#ecf5ff] py-20">
            <div className="grid-container">
              <h1 className="font-bold text-[32px] md:text-5xl mb-10">
                Site Plan
              </h1>

              <div data-aos="fade-up" className="md:grid grid-cols-3 gap-10">
                {project.sitePlan?.map((p, i) => (
                  <div className="w-full md:w-[356px] h-[267px] relative">
                    <Image
                      onClick={() => {
                        setActiveGalleryList(project.sitePlan);
                        setInitialSlide(i);
                        setShowGallery(true);
                      }}
                      className="rounded-[10px] cursor-pointer"
                      key={p.img}
                      src={p.img}
                      alt={`${project.hero.title}`}
                      fill
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {project.bankLoans && (
          <section className="bg-[#ecf5ff] pt-[80px] pb-[90px]">
            <div className="grid-container">
              <h1 className="font-bold text-[32px] md:text-5xl mb-10">
                Home Loans
              </h1>
              <p className="text-[18px] mb-[30px]">
                The following banks provide the home loans
              </p>

              <div className="md:flex gap-40 font-medium text-[18px]">
                <ul>
                  {project.bankLoans.one.map((bank) => (
                    <li
                      data-aos="fade-up"
                      className="list-none mb-[40px]"
                      key={bank}
                    >
                      - {bank}
                    </li>
                  ))}
                </ul>
                <ul>
                  {project.bankLoans.two.map((bank) => (
                    <li data-aos="fade-up" className="mb-[40px]" key={bank}>
                      - {bank}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        <section>
          {showGallery && (
            <ImageGallery
              activeGalleryList={activeGalleryList}
              initialSlide={initialSlide}
              activeSlideIndex={activeSlideIndex}
              handleSlideChange={handleSlideChange}
              setShowGallery={setShowGallery}
            />
          )}
        </section>
      </div>
    </>
  );
};

export default OngoingProjectBySlug;

/*
====================================================
ImageGallery for OngoingProject
================================================
*/
export const ImageGallery = ({
  activeGalleryList,
  initialSlide,
  activeSlideIndex,
  handleSlideChange,
  setShowGallery,
}) => {
  const underlayRef = useRef();
  // console.log("active slide index:", activeSlideIndex);

  useClickOutside(underlayRef, () => setShowGallery(false));

  return (
    <div className="fixed left-0 top-0 w-full h-full" style={{ zIndex: 100 }}>
      <div className="relative h-full w-full">
        <div className="absolute w-full h-full left-0 top-0 bg-[rgba(0,0,0,.8)] backdrop-blur-sm z-0"></div>

        <div
          ref={underlayRef}
          className="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col md:flex-row justify-between md:justify-normal"
        >
          <div className="md:w-[17.5%] md:h-[50px] p-5 mb-5 md:mb-0 flex items-center justify-between">
            <h3
              className="text-white text-xl"
              style={{ textShadow: "0 0 2px #000" }}
            >
              {activeGalleryList[activeSlideIndex]?.title}
            </h3>

            <button
              className="md:hidden text-white text-2xl"
              onClick={() => setShowGallery(false)}
            >
              <i className="fa-solid fa-close"></i>
            </button>
          </div>

          <div className="w-full md:w-[65%] h-[40%] md:h-full self-center md:self-auto">
            <ImageGallerySwipers
              activeGalleryList={activeGalleryList}
              initialSlide={initialSlide}
              handleSlideChange={handleSlideChange}
            />
          </div>

          {/* TODO: custom pagination */}
          <div className="md:hidden"></div>

          <div className="hidden md:flex items-center justify-end w-[17.5%] h-[40px] p-5 text-white text-2xl ">
            <button onClick={() => setShowGallery(false)}>
              <i className="fa-solid fa-close"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ImageGallerySwipers = ({
  activeGalleryList,
  initialSlide,
  handleSlideChange,
}) => {
  return (
    <div className="img-gallery-swiper h-full">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        navigation={{
          enabled: true,
        }}
        keyboard={{
          enabled: true,
        }}
        onSlideChange={handleSlideChange}
        initialSlide={initialSlide}
        modules={[Pagination, Keyboard, Navigation]}
        className="h-full"
      >
        {activeGalleryList.map((item, i) => (
          <SwiperSlide key={i} className="h-full relative">
            <Image src={item.img} alt={`${item.title}`} fill />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* TODO: figure out how to show swiperSlide image as swiper-pagination-bullet bg-img */}
    </div>
  );
};
