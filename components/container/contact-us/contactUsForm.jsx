import { useState, useMemo } from "react";
import Select, { components } from "react-select";
import countryList from "react-select-country-list";

import Container from "../../common/Container";
import FullContainer from "../../common/FullContainer";
import Link from "next/link";

const ContactUsForm = () => {
  const countryOptions = useMemo(() => countryList().getData(), []);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    country: null,
    companyType: null,
    companySize: null,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "Full Name is required";
    if (!formData.email.trim()) newErrors.email = "Company Name is required";
    if (!formData.company.trim())
      newErrors.company = "Email Address is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone Number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.companyType)
      newErrors.companyType = "Company Type is required";
    if (!formData.companySize)
      newErrors.companySize = "Company Size is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <FullContainer className="bg-white">
      <Container className="mt-30 px-5">
        <div className="text-center py-8 mb-4">
          <h2 className="text-[40px] text-black font-light">
            Ready to speak with our sales team?
          </h2>
          <h2 className="text-[20px] text-black font-light">
            Please provide basic information below and we’ll get in touch with
            you within 24 hours.
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-[550px] mx-auto mb-20 space-y-4"
        >
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="Full Name *"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full px-6 border-2 border-gray-200 bg-gray-100 py-4 rounded text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Company Name *"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-6 border-2 border-gray-200 bg-gray-100 py-4 rounded text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              name="company"
              placeholder="Work Email Address *"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-6 bg-gray-100 py-4 border-2 border-gray-200 rounded text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {errors.company && (
              <p className="text-red-500 text-sm">{errors.company}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-6 bg-gray-100 py-4 border-2 border-gray-200 rounded text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>
          {/* Company Type Dropdown */}
          <div>
            <Select
              placeholder="Select Company Type "
              options={companyTypeOptions}
              value={formData.companyType}
              onChange={(selected) =>
                setFormData({ ...formData, companyType: selected })
              }
              styles={customStyles}
              components={{ DropdownIndicator }}
            />
            {errors.companyType && (
              <p className="text-red-500 text-sm">{errors.companyType}</p>
            )}
          </div>

          {/* Company Size Dropdown */}
          <div>
            <Select
              placeholder="Select Company Size "
              options={companySizeOptions}
              value={formData.companySize}
              onChange={(selected) =>
                setFormData({ ...formData, companySize: selected })
              }
              styles={customStyles}
              components={{ DropdownIndicator }}
            />
            {errors.companySize && (
              <p className="text-red-500 text-sm">{errors.companySize}</p>
            )}
          </div>

          {/* Country Dropdown */}
          <div>
            <Select
              placeholder="Company of Country Headquarters"
              options={countryOptions}
              value={formData.country}
              onChange={(selected) =>
                setFormData({ ...formData, country: selected })
              }
              styles={customStyles}
              components={{ DropdownIndicator }}
              isSearchable
            />
          </div>

          <div>
            <input
              type="text"
              name="message"
              placeholder="What would you like to discuss?"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-6 bg-gray-100 py-4 border-2 border-gray-200 rounded text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full uppercase bg-[#1198EB] text-white font-semibold border-2 hover:border-[#1198EB] py-3 px-6 hover:text-[#1198EB] hover:bg-white transition-colors ease-in-out duration-300 cursor-pointer"
          >
            Send
          </button>

          <p className="text-[14px] text-gray-500 leading-relaxed tracking-wide mt-4 text-left">
            This site is protected by reCAPTCHA and the Google{" "}
            <Link
              href="/privacy-policy"
              className="font-medium text-blue-400 underline"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms" className="font-medium text-blue-400 underline">
              Terms of Service
            </Link>{" "}
            apply.
          </p>
        </form>
      </Container>
    </FullContainer>
  );
};

const companyTypeOptions = [
  { value: "Startup", label: "Startup" },
  { value: "Agency", label: "Agency" },
  { value: "Enterprise", label: "Enterprise" },
  { value: "Consultancy", label: "Consultancy" },
  { value: "Non-Profit", label: "Non-Profit" },
  { value: "Other", label: "Other" },
];

const companySizeOptions = [
  { value: "none", label: "none" },
  { value: "1-10", label: "1–10 employees" },
  { value: "11-50", label: "11–50 employees" },
  { value: "51-200", label: "51–200 employees" },
  { value: "201-500", label: "201–500 employees" },
  { value: "501-1000", label: "501–1000 employees" },
  { value: "1000+", label: "1000+ employees" },
];

// DropdownIndicator component for custom select arrow
const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#374151"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </components.DropdownIndicator>
  );
};

const customStyles = {
  control: (base, state) => ({
    ...base,
    padding: "12px 14px",
    borderRadius: "4px",
    borderColor: state.isFocused ? "#1198EB" : "#E5E7EB",
    borderWidth: state.isFocused ? "1px" : "2px",
    boxShadow: "none",
    "&:hover": {
      cursor: "pointer",
    },
    fontSize: "16px",
    minHeight: "44px",
    backgroundColor: "#F3F4F6",
    color: "black",
  }),

  dropdownIndicator: (base) => ({
    ...base,
    svg: {
      strokeWidth: 2,
      color: "black",
    },
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  menu: (base) => ({
    ...base,
    zIndex: 9999,
    width: "100%",
  }),
  option: (base, state) => ({
    ...base,
    cursor: "pointer",
    backgroundColor: state.isFocused ? "#e5e7eb" : "white",
    color: "black",
    paddingTop: "10px",
    paddingBottom: "10px",
  }),
};

export default ContactUsForm;
