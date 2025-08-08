"use client";
import { useMemo } from "react";
import Select, { components } from "react-select";
import countryList from "react-select-country-list";

const CountryDropdown = ({ formData, setFormData }) => {
  const options = useMemo(() => countryList().getData(), []);

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
export default CountryDropdown;
