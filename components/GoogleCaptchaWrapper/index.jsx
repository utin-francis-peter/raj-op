"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import React from "react";

const GoogleCaptchaWrapper = ({ children }) => {
  const recaptchaSiteKey = process?.env?.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  return (
    <GoogleReCaptchaProvider reCaptchaKey={recaptchaSiteKey}>
      {children}
    </GoogleReCaptchaProvider>
  );
};

export default GoogleCaptchaWrapper;
