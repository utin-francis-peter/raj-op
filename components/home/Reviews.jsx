"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";

const Reviews = () => {
  const reviewsList = [
    {
      id: 1,
      name: "Louis Vernal",
      project: "Raj Mudra",
      review: `When I was the Principal at Jawahar Navodaya Vidyalaya at Valpoi
              in 1993, I came into contact with Mr Sandeep Nigalye who was an
              engineer in the PWD. It was a happy meeting once again in 2012
              when I booked a flat in his proposed “Raj Mudra”. After that, the
              complex - the first of its kind in Ponda – progressed at a steady
              pace and I was able to move in January 2016. The complex has been
              provided with almost all the amenities. The Director Mr Nigalye
              and the entire staff have been efficient and professional. I did
              not face any difficulty. The relationship between the company and
              Raj Mudra Society has been cordial. It was my good fortune to be
              part of this housing complex.`,
      image: "/people-new/louis.jpg",
    },
    {
      id: 2,
      name: "Vidhya Rohan Aroskar",
      project: "Raj Ryle Residency",
      review: `Raj Ryle residency is one of the best projects if you are planning
              to reside in such a busy town like Mapusa yet want to be in close
              the proximity of nature. We were fascinated by this residential
              project and purchased a flat on the top floor, for its spectacular
              lush green hilly view from the living room. I wake up early
              morning with the chirping sounds of birds which is very pleasant
              to listen and also get to watch beautiful feathered creatures of
              various species every day. Special mention of the French windows
              where wind braces us up in all the rooms, this is the part of the
              flat which I liked the most. With all the other amenities one
              would enjoy and relax at the end of the day. Yes, a place away
              from the usual traffic yet closer to the main town with nature at
              its best in the vicinity.`,
      image: "/people-new/vidhya.jpg",
    },
    {
      id: 3,
      name: "Yogesh Coutoncar",
      project: "Raj Ryle Residency",
      review: `Finally, it is almost 1 year since I started staying in this
              project and believe me, you won't regret your decision to invest
              your hard earned money on a project that is so close to nature
              which has ample amount of greenery and pollution free fresh air.
              Beautiful apartments which are neatly planned and are well
              equipped with recreation facilities. All the staff is helpful, I
              would specifically like to thank Mr. Swapnil and Mr. Ambrish who
              are so professional and dedicated towards their work and at the
              same time amiable and approachable. Happy to be part of Raj Ryle
              Residency !!`,
      image: "/people-new/yogesh.jpg",
    },
    {
      id: 4,
      name: "Sagar Kale",
      project: "Raj Mudra",
      review: ` The first builder in Ponda I think with all the amenities like
              swimming pool, clubhouse, gym, garden, lawn area, etc. is of Raj
              developers. It brought a modern look to our Ponda area. I also
              remember when purchasing the flat I was short of some amount and
              Mr. Sandeep Nigalye the builder gave me the same discount. Such a
              genuine and kind person he is and the same attitude he keeps in
              his building projects.`,
      image: "/people-new/sagar.jpg",
    },
    {
      id: 5,
      name: "Varun and Manisha Bhatiya",
      project: "Raj Aguiar Enclave",
      review: `The team at Raj Housing is very cooperative. All the documentation
              regarding the purchase of flat were taken care of very neatly.
              It's a pleasure dealing with such cordial staff. Regarding the
              construction, the flat, as well as the area of the premises, is
              very spacious.`,
      image: "/people-new/varun.jpg",
    },
    {
      id: 6,
      name: "Rohit Regea",
      project: "Raj Mudra",
      review: `When I was contemplating buying a flat in Ponda, I came across
              numerous small builders. But after interacting with the sales
              staff and other office staff of Raj Housing, I decided to go ahead
              with Raj housing. I was happy with the decision and was delighted
              to get on time possession with the top-notch build quality. Post
              sales service was also excellent and the staff took care of all my
              questions and issues. Happy to be a proud resident of Rajmudra.
              May Raj housing reach greater heights in the years to come.`,
      image: "/people-new/rohit.jpg",
    },
    {
      id: 7,
      name: "Pearl Saldhana",
      project: "Raj Ryle Residency",
      review: ` Raj Housing Development has a solid reputation for delivering an
              excellent product. The entire team was beyond accommodating
              throughout our build and we could not be more than happier with
              the finished product, a truly beautiful home that we can raise our
              family in. The rooms are very spacious, well-ventilated everything
              is perfectly done.`,
      image: "/people-new/pearl.jpg",
    },
    {
      id: 8,
      name: "Milind Ghaisas",
      project: "Raj Mudra",
      review: ` Namaskar. We Raj Mudra family are very glad to inform you that the
              Raj Housing Development cooperating us at every step which has
              been addressed to the Customer care and Legal Department.
              Currently we are at the stage of conclusion in respect to
              initiating and signing the conveyance deed between us and handover
              the entire property to Raj Mudra.`,
      image: "/people-new/milind.jpg",
    },
    {
      id: 9,
      name: "Vinay Shenoy",
      project: "Raj Aguiar Enclave",
      review: ` Well, first of all, Thank you Raj Housing for helping us realize
              our dream. It's because of the way things were handled by your
              team we were able to manage an apartment in Goa. Prajyoti was our
              single point of contact and face of Raj Housing ltd for us. She
              handled every single issue of ours and worked tirelessly. Highly
              appreciate her working fashion. Raj Housing provided us with good
              services and amenities that was hard to choose between the
              upcoming housing plans. We appreciate your service and hope to
              continue the same in future.`,
      image: "/people-new/vinay.jpg",
    },
    {
      id: 10,
      name: "Hema Salkar",
      project: "Ganaraj Arcade",
      review: ` Raj group builders are very trustworthy and efficient builder
              groups in Goa. They have good residential plans, prime locations
              and safety focus as their pillars. They are financially clean
              builders providing receipts for all payments. I would certainly
              recommend them for anyone wanting an affordable home for their
              family.`,
      image: "/people-new/hema.jpg",
    },
    {
      id: 11,
      name: "Devendra S. Desai",
      project: "Raj Ryle Residency",
      review: `  Raj Housing Development Company is known & reputed construction
              company in Goa. I am acquainted with this company since last 10
              yrs. Mr. Sandip Nigalye, MD of this company is a respected
              personality and very well known in social activities. I am
              personally in touch with him since 2001 when I was a Bank Manager
              in Ponda. My best wishes are always with him.`,
      image: "/people-new/devendra.jpg",
    },
    {
      id: 12,
      name: "Ujwala Rajesh Parab",
      project: "Raj Ryle Residency",
      review: ` I have taken possession in January 2019 and have been staying in
              the apartment for four months. The environment of the complex is
              full of greenery. The complex is well maintained kept clean by the
              housekeeping staff. It is also safe to stay here as there are day
              & night security to look after. I would like to thank especially
              Sir Nigalye and the Manager Mr. Anup Dessai, the staff of Raj Ryle
              Residency Mr. Swapnil, Mr. Ambrish, Mr. Sameer and Mr. Patil as
              they are all very helpful and very co-operative. Very glad to be a
              part of Raj Ryle Residency.`,
      image: "/people-new/ujwala.jpg",
    },
    {
      id: 13,
      name: "Ashley Coelho and Dyna Alvare",
      project: "Ganaraj Arcade",
      review: `  Buying a flat from Raj Housings was one of the best decisions ive
              ever taken. The whole procidure was hassle free and fast. The flat
              that we bought was perfectly designed for a comfortable stay.`,
      image: "/people-new/ashley.jpg",
    },
    {
      id: 14,
      name: "Richard Dsouza",
      project: "Raj Ryle",
      review: ` Sharing a small experience with Raj Housing. I and my hubby were
              looking out for a 2 BHK flat to shift since almost 2 years n got
              associated with many agents. One day jus a for change a new agent
              told me that he will show me a new upcoming project. My 1st visit
              to Raj Ryle residency made me to own a flat der as I was very much
              appreciated with their project, rate and ambience as well as
              location. So after discussion with my hubby n family we planned to
              go for 3 BHK as we were getting good rate and gst discount
              benefit. Also with a special request the manager gave us extra
              time to pay the extra 80 perecnt amount after my hubby returns as
              he was working abroad and I could not take a loan all by myself.
              Over all I had a smooth experience of transaction and procedures
              with Raj Ryle team and we are waiting to shift to our flat very
              soon.`,
      image: "/people-new/richard.jpg",
    },
  ];

  // TODO: make the outter box have an auto height with it's inner box centered
  return (
    <div className="grid-container reviews-swiper">
      <Swiper
        centeredSlides={true}
        slidesPerView={1}
        spaceBetween={45}
        modules={[Navigation, Keyboard, Autoplay]}
        loop
        navigation
        keyboard={{
          enabled: true,
        }}
        // autoHeight
        autoplay={{ disableOnInteraction: true }}
      >
        <div >
          {reviewsList.map((review) => (
            <SwiperSlide key={review.id} className="">
              {/* <h1 className="border border-purple-400">Testing...</h1> */}
              {/* <h1>Testing...</h1> */}
              <div className=" h-auto w-full md:max-w-[65%] absolute left-1/2 -translate-x-1/2">
                <div
                  className="bg-[#0d2b35] text-center text-white shadow-lg relative rounded-[10px] h-full "
                  style={{ padding: "60px 40px 40px 40px" }}
                >
                  <h2 className="text-2xl font-bold mb-[10px]">
                    {review.name}
                  </h2>
                  <h3 className="text-lg font-bold mb-[10px]">
                    {review.project}
                  </h3>
                  <p className="leading-[27px] text-[16px] font-normal text-center">
                    {review.review}
                  </p>

                  <div className="w-[90px] h-[90px] bg-white rounded-full absolute -top-[50px] left-[50%] translate-x-[-50%] overflow-hidden shadow-2xl">
                    <Image
                      className="shadow-2xl"
                      src={review.image}
                      alt={review.name}
                      width={90}
                      height={90}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Reviews;
