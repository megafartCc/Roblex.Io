import React, { useState } from "react";
import { Buttons } from "../../components/Buttons";
import { HeaderForms } from "../../components/HeaderForms";
import { IconsChevronRight } from "../../components/IconsChevronRight";
import { IconsSun } from "../../components/IconsSun";
import { Inputs } from "../../components/Inputs";
import { Notification } from "../../components/Notification";

export const Dark = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation - you can customize this
    if (!email || !password) {
      setErrorMessage("Please fill in all fields");
      setShowError(true);
      return;
    }

    // Example: Check for invalid credentials
    if (email !== "admin@example.com" || password !== "password123") {
      setErrorMessage("Invalid email or password");
      setShowError(true);
      return;
    }

    // If validation passes
    console.log("Login successful!");
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className="bg-collection-1-background w-full h-screen flex items-center justify-center relative overflow-hidden"
      data-collection-1-mode={isDarkMode ? "dark" : "light"}
      data-model-id="221:7856"
    >

      <div className="flex flex-col w-[419px] items-start rounded-xl overflow-hidden border-2 border-solid border-collection-1-stroke shadow-[0px_4px_16px_#1111110a] relative z-10">
        <HeaderForms
          button
          buttonsHeaderForms={
            <button
              type="button"
              onClick={toggleTheme}
              className="flex items-center justify-center w-6 h-6"
            >
              {isDarkMode ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_221_7869)">
                    <path d="M10 13.75C12.0711 13.75 13.75 12.0711 13.75 10C13.75 7.92893 12.0711 6.25 10 6.25C7.92893 6.25 6.25 7.92893 6.25 10C6.25 12.0711 7.92893 13.75 10 13.75Z" stroke="#8D97A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 1.25V2.5" stroke="#8D97A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 17.5V18.75" stroke="#8D97A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.66699 3.66699L4.55449 4.55449" stroke="#8D97A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.4453 15.4453L16.3328 16.3328" stroke="#8D97A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1.25 10H2.5" stroke="#8D97A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.5 10H18.75" stroke="#8D97A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.66699 16.3328L4.55449 15.4453" stroke="#8D97A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.4453 4.55449L16.3328 3.66699" stroke="#8D97A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_221_7869">
                      <rect width="20" height="20" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.5354 11.5633C19.3911 11.4186 19.2101 11.3161 19.0119 11.2665C18.8137 11.217 18.6058 11.2223 18.4104 11.282C17.0455 11.694 15.5944 11.7281 14.2117 11.3807C12.829 11.0332 11.5664 10.3171 10.5584 9.30881C9.55047 8.30048 8.8349 7.03762 8.48795 5.65475C8.141 4.27188 8.17566 2.8208 8.58822 1.45607C8.64841 1.2606 8.65417 1.05242 8.60489 0.853928C8.55561 0.655431 8.45315 0.474124 8.30853 0.329505C8.16391 0.184886 7.98261 0.0824264 7.78411 0.0331461C7.58561 -0.0161341 7.37744 -0.0103709 7.18197 0.0498162C5.12922 0.680749 3.3278 1.94315 2.03416 3.65732C0.902881 5.16097 0.213003 6.95012 0.0419336 8.82402C-0.129135 10.6979 0.225374 12.5824 1.06568 14.266C1.90599 15.9497 3.19885 17.3658 4.79919 18.3556C6.39953 19.3454 8.24403 19.8696 10.1257 19.8695C12.3226 19.876 14.461 19.1616 16.2129 17.8361C17.9262 16.5411 19.1873 14.7387 19.8167 12.6854C19.8758 12.4905 19.8809 12.2831 19.8313 12.0854C19.7818 11.8878 19.6795 11.7073 19.5354 11.5633ZM14.8592 16.0389C13.3428 17.1804 11.4651 17.7359 9.57165 17.6031C7.67824 17.4702 5.89652 16.658 4.55438 15.3158C3.21224 13.9737 2.40001 12.192 2.26716 10.2986C2.13431 8.40516 2.68978 6.52747 3.83135 5.01107C4.43203 4.2165 5.17648 3.5417 6.02603 3.02169C6.00916 3.26169 6.00072 3.50263 6.00072 3.7445C6.0037 6.42891 7.07139 9.00251 8.96955 10.9007C10.8677 12.7988 13.4413 13.8665 16.1257 13.8695C16.3676 13.8695 16.6085 13.8611 16.8485 13.8442C16.3288 14.6939 15.6539 15.4384 14.8592 16.0389Z" fill="#7B7F86"/>
                </svg>
              )}
            </button>
          }
          className="!self-stretch !left-[unset] !w-full !top-[unset]"
          property1="modal"
        />
        <form onSubmit={handleSubmit} className="flex flex-col items-start gap-6 p-6 relative self-stretch w-full flex-[0_0_auto] bg-collection-1-sub-default">
          <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <Inputs
              className="!self-stretch !left-[unset] !w-full !top-[unset]"
              icon={false}
              stateProp="default"
              text="Email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Inputs
              className="!self-stretch !left-[unset] !w-full !top-[unset]"
              icon
              stateProp="default"
              text="Password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Buttons
            className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
            icon="off"
            priority="primary"
            stateProp="default"
            text="Continue"
          />
        </form>

        <div className="flex items-start justify-between px-6 py-4 relative self-stretch w-full flex-[0_0_auto] bg-collection-1-impr-default border-t [border-top-style:solid] border-collection-1-stroke">
          <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
            <div className="relative w-6 h-6 rounded-md bg-[linear-gradient(98deg,rgba(204,204,204,0)_0%,rgba(204,204,204,0)_25%,rgba(204,204,204,0.3)_50%,rgba(204,204,204,0)_75%,rgba(204,204,204,0)_100%),linear-gradient(0deg,rgba(227,227,227,0.3)_0%,rgba(227,227,227,0.3)_100%)]" />

            <div className="font-medium text-collection-1-glyphs-body text-xl tracking-[-0.60px] leading-5 relative w-fit [font-family:'Inter',Helvetica] whitespace-nowrap">
              Not selected
            </div>
          </div>

          <IconsChevronRight
            className="!relative !left-[unset] !top-[unset]"
            iconsChevronRight="https://c.animaapp.com/1sunRxfK/img/icons-chevron-right-1.svg"
          />
        </div>
      </div>

      {showError && (
        <div className="fixed bottom-6 right-6 z-50">
          <Notification
            message={errorMessage}
            onClose={() => setShowError(false)}
          />
        </div>
      )}
    </div>
  );
};
