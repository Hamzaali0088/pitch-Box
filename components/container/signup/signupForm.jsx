"use client";
import { useMemo, useState } from "react";
import FullContainer from "../../common/FullContainer";
import React from "react";
import Select, { components } from "react-select";
import countryList from "react-select-country-list";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    country: { label: "United States", value: "US" },
    agreeToTerms: false,
    captcha: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <FullContainer className="">
      <div className="bg-[#2F4050] p-2">
        <div className="flex items-center">
          <span className="text-[30px] leading-relaxed font-medium text-gray-100 mr-1">
            pitch
          </span>
          <span className="text-[30px]  leading-relaxed font-medium text-white bg-red-500">
            box
          </span>
        </div>
      </div>

      <div className="max-w-md mx-auto mt-6">
        {/* Title */}
        <div className="text-center mb-4">
          <h1 className="text-[30px] leading-relaxed font-medium text-gray-600">
            Start Your Free Trial
          </h1>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded shadow-lg border border-gray-200 p-8">
          <h2 className="text-[16px] font-medium leading-relaxed text-gray-900 mb-6">
            Please provide your information
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-2">
              <div className="">
                <label className="block text-sm font-bold leading-relaxed text-gray-900 mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Enter First Name"
                  className="w-full px-4 py-2 text-[14px] leading-relaxed font-medium border border-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm leading-relaxed font-bold text-gray-900 mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Enter Last Name"
                  className="w-full  px-4  py-2 border leading-relaxed text-[14px] font-medium border-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-bold leading-relaxed text-gray-900 mb-2">
                Business Email Address
                <span className="ml-1 italic text-[10px] text-gray-500">
                  (account activation email will be sent here)
                </span>{" "}
                <span className="text-red-500">*</span>
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter Email Address"
                className="w-full  px-4 py-2 border leading-relaxed text-[14px] font-medium border-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-sm font-bold leading-relaxed text-gray-900 mb-2">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Enter Company Name"
                className="w-full px-4 py-2 border text-[14px] leading-relaxed font-medium border-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-bold leading-relaxed text-gray-900 mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter Phone Number"
                className="w-full px-4 py-2 border leading-relaxed text-[14px] font-medium border-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Country */}
            <CountryDropdown formData={formData} setFormData={setFormData} />

            {/* Terms Checkbox */}
            <div className="flex items-center space-x-2 cursor-pointer">
              <label
                htmlFor="agreeToTerms"
                className="flex items-center cursor-pointer group"
              >
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="hidden"
                />
                <div
                  className={`w-4 h-4 rounded-[2px] border flex items-center justify-center transition-all duration-200 ${
                    formData.agreeToTerms
                      ? "bg-blue-600 border-blue-600 group-hover:bg-[#00589C] focus:ring-0"
                      : "bg-white border-gray-500 hover:border-gray-800 "
                  }`}
                >
                  {formData.agreeToTerms && (
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
                <span className="ml-2 text-[14px] text-gray-600">
                  I read and agree to{" "}
                  <a
                    href="/signup"
                    className="text-blue-500 hover:text-[#0a81c1]"
                  >
                    terms and conditions
                  </a>
                </span>
              </label>
            </div>

            {/* reCAPTCHA placeholder */}
            <div className="flex items-center space-x-3 p-4 border bg-gray-100 border-gray-400 rounded">
              <label className="flex items-center cursor-pointer group space-x-2">
                <input
                  type="checkbox"
                  name="captcha"
                  checked={formData.captcha}
                  onChange={handleInputChange}
                  className="hidden"
                  required
                />
                <div
                  className={`w-6 h-6 rounded-[2px] border flex items-center justify-center transition-all duration-200 ${
                    formData.captcha
                      ? "bg-blue-600 border-blue-600 group-hover:bg-[#00589C]"
                      : "bg-white border-gray-900 hover:opacity-60 opacity-100"
                  }`}
                >
                  {formData.captcha && (
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>

                <span className="text-sm font-medium text-black">
                  I'm not a robot
                </span>
              </label>

              <div className="ml-auto flex flex-col items-center">
                <img
                  src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                  alt="reCAPTCHA"
                  className="w-10 h-10 mb-1"
                />
                <div className="text-[10px] text-gray-600 text-center leading-none">
                  <div className="text-[11px] mb-1">reCAPTCHA</div>
                  <div className="flex space-x-1">
                    <a
                      href="https://policies.google.com/privacy?hl=en"
                      className="hover:underline text-gray-600"
                    >
                      Privacy
                    </a>
                    <span>-</span>
                    <a
                      href="https://policies.google.com/terms?hl=en"
                      className="hover:underline text-gray-600"
                    >
                      Terms
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="border-t border-gray-200 mt-8">
              <button
                type="submit"
                className="w-full mt-6 bg-[#0285CB] cursor-pointer text-white font-medium py-3 px-4 transition duration-200 focus:outline-none "
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Footer */}
      <div className="text-center my-8 text-[14px] text-gray-500 max-w-3xl mx-auto space-x-2">
        <span>© Copyright Pitchbox, 2012-2025. All Rights Reserved.</span>
        <a href="/signup" className="text-blue-500 hover:text-[#0285CB] ">
          End User Agreement
        </a>
        <a href="/signup" className="text-blue-500 hover:text-[#0285CB] ">
          Terms & Conditions
        </a>
      </div>
      <div className="bg-[#2F4050] py-8"></div>
    </FullContainer>
  );
}

const CountryDropdown = ({ formData, setFormData }) => {
  const options = useMemo(() => countryList().getData(), []);

  const customStyles = {
    control: (base, state) => ({
      ...base,
      padding: "3px 6px",
      borderRadius: "4px",
      borderColor: state.isFocused ? "#d1d5db" : "#9ca3af", // gray-400
      boxShadow: state.isFocused ? "0 0 0 1px #9ca3af" : "none",
      "&:hover": {
        cursor: "pointer",
      },
      fontSize: "14px",
      minHeight: "44px", // maintain or slightly increase height
      // width: not set here, will stay default
    }),
    dropdownIndicator: (base) => ({
      ...base,
      svg: {
        strokeWidth: 1,
        color: "#374151", // gray-700
      },
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    menu: (base) => ({
      ...base,
      zIndex: 9999,
      width: "220px", // reduced width of dropdown menu only
    }),
    option: (base, state) => ({
      ...base,
      cursor: "pointer",
      backgroundColor: state.isFocused ? "#e5e7eb" : "white", // gray-200 on hover
      color: "black",
      paddingTop: "10px", // increase each option height
      paddingBottom: "10px",
    }),
  };

  return (
    <div>
      <label className="block text-sm font-bold leading-relaxed text-gray-900 mb-2">
        Country of Company Headquarters <span className="text-red-500">*</span>
      </label>
      <Select
        options={options}
        value={formData.country}
        onChange={(selectedOption) =>
          setFormData({ ...formData, country: selectedOption })
        }
        styles={customStyles}
        components={{ DropdownIndicator }}
        //   placeholder="Select a country..."
        isSearchable
      />
    </div>
  );
};

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#374151" // matches text color
        strokeWidth="1.2" // ↓ reduced from default 2
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </components.DropdownIndicator>
  );
};
