"use client";

import React from "react";
import Button from "../Button/Button";
import Image from "next/image";
import SendGold from "../../public/icons/send-gold.svg";
import { useState } from "react";
import { toast } from "sonner";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { TailSpin } from "react-loader-spinner";

import "../Button/index.scss";
// import { SendMail } from "@/service/mail-service";

const ContactForm = () => {
  const [emailDetails, setEmailDetails] = useState({
    senderFirstName: "",
    senderLastName: "",
    senderEmail: "",
    senderPhone: "",
    senderMessage: "",
  });
  const [loading, setLoading] = useState(false);

  // Google Recaptcha Service on the Client
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSendMail = async (e) => {
    e.preventDefault();

    // ensuring executeRecaptcha is loaded
    if (!executeRecaptcha) {
      toast.error("Not available to execute Recaptcha");
      return;
    }

    // generate recaptcha token and send to server for verification
    const gRecaptchaToken = await executeRecaptcha("inquirySubmit");
    const recaptchaVerificationResponse = await fetch("/api/gRecaptcha", {
      method: "POST",
      body: JSON.stringify({ gRecaptchaToken }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const recaptchaVerificationResponseBody =
      await recaptchaVerificationResponse.json();

    setLoading(true);

    if (recaptchaVerificationResponseBody.success) {
      try {
        const response = await fetch("/api/sendEmail", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ ...emailDetails }),
        });

        if (!response.ok) {
          toast.error("Failed to Send Email", {
            cancel: {
              label: "Dismiss",
            },
            description: "Retry Again",
          });
        } else {
          toast.success("Email Sent Successfully", {
            action: {
              label: "Dismiss",
            },
            description:
              "We'll write you back soonest. Be sure to check your inbox or spam folder for our response.",
          });

          setEmailDetails({
            senderFirstName: "",
            senderLastName: "",
            senderEmail: "",
            senderPhone: "",
            senderMessage: "",
          });
        }
      } catch (error) {
        toast.error("OOPS, Something Went Wrong", {
          cancel: {
            label: "Dismiss",
          },
        });
      } finally {
        setLoading(false);
      }
    } else {
      toast.error("Failed to verify Recaptcha! Try again later.");
      setLoading(false);
      return;
    }
  };

  return (
    <form className="lg:w-[50%]" onSubmit={handleSendMail}>
      <p className="mb-[17px] font-semibold text-2xl leading-[30px]">
        Leave us a message
      </p>

      <div className="md:flex">
        <input
          className="block md:mr-[20px] w-full md:w-[50%]"
          type="text"
          name=""
          id=""
          placeholder="First Name"
          required
          value={emailDetails.senderFirstName}
          onChange={(e) =>
            setEmailDetails({
              ...emailDetails,
              senderFirstName: e.target.value,
            })
          }
        />
        <input
          className="block w-full md:w-[50%]"
          type="text"
          name=""
          id=""
          placeholder="Last Name"
          required
          value={emailDetails.senderLastName}
          onChange={(e) =>
            setEmailDetails({
              ...emailDetails,
              senderLastName: e.target.value,
            })
          }
        />
      </div>

      <div className="md:flex items-center">
        <input
          className="block w-full md:mr-[20px] md:w-[70%]"
          type="email"
          name=""
          id=""
          placeholder="Email Address"
          required
          value={emailDetails.senderEmail}
          onChange={(e) =>
            setEmailDetails({
              ...emailDetails,
              senderEmail: e.target.value,
            })
          }
        />
        <input
          className="block w-full md:w-[30%]"
          type="number"
          name=""
          id=""
          placeholder="Contact number"
          required
          value={emailDetails.senderPhone}
          onChange={(e) =>
            setEmailDetails({
              ...emailDetails,
              senderPhone: e.target.value,
            })
          }
        />
      </div>

      <textarea
        className="w-full min-h-[130px] pt-3"
        name=""
        id=""
        cols="30"
        rows="40"
        placeholder="Message"
        required
        value={emailDetails.senderMessage}
        onChange={(e) =>
          setEmailDetails({
            ...emailDetails,
            senderMessage: e.target.value,
          })
        }
      ></textarea>

      {/* TODO: conduct a bug analysis and find out why the before pseudo element doesn't grow in width when not a link */}

      <div
        className="link-styles w-[110px] mt-[20px]"
        style={{
          "--before-bg-gradient": "white",
          "--initial-color": "white",
        }}
      >
        <button
          disabled={loading}
          className={`btn-component border-2 border-white w-full h-full disabled:cursor-not-allowed disabled:bg-gray-300`}
          style={{
            "--before-bg-gradient": "white",
            "--initial-color": "white",
          }}
        >
          <span className="flex items-center justify-center gap-2">
            {!loading ? (
              <Image
                src={SendGold}
                alt="Golden send icon"
                width={15}
                height={19}
              />
            ) : (
              <TailSpin
                visible={true}
                height="22"
                width="22"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="5"
                wrapperStyle={{}}
                wrapperClass=""
              />
            )}
            Send
          </span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
