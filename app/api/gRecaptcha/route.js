import { NextResponse } from "next/server";

export const POST = async (request) => {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  const postData = await request.json();

  //   console.log("postData:", postData);

  const { gRecaptchaToken } = postData;

  //   console.log("gRecaptchaToken:", gRecaptchaToken);

  /*
==============================================================
=============================================================
The commented out code below didn't work as expected but returned an error.

The error message (missing-input-secret), typically indicates that the secret key parameter (secret) is missing in the POST request to Google's reCAPTCHA verification endpoint (https://www.google.com/recaptcha/api/siteverify).

Looking at the code, I constructing the form data manually. This is the reason the request is not being sent with the correct parameters. When sending form data, encode the parameters in a URL-encoded format rather than JSON.
  */
  //   const formData = `secret=${secretKey}&response=${gRecaptchaToken}`;

  const formData = new URLSearchParams();
  formData.append("secret", secretKey);
  formData.append("response", gRecaptchaToken);

  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });
    // console.log("res: ", res);
    const resData = await res.json();
    // console.log("resData: ", resData);

    if (resData && resData.success && resData.score > 0.5) {
      //   console.log("recaptcha score:", resData.score);

      return NextResponse.json({
        success: true,
        score: resData.score,
      });
    }
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error);

    return NextResponse.json({
      success: false,
      error: "Error verifying reCAPTCHA",
    });
  }
};
