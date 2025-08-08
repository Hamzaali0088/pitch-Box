"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import FullContainer from "../../common/FullContainer";
import Image from "next/image";
import Logo from "../../common/Logo";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field on change
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    let newErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email format is invalid.";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };


  
const handleSubmit = () => {
  if (validateForm()) {
    toast.success("Login successful!");
    console.log("Login form submitted:", formData);
  }
};

  return (
    <FullContainer className="min-h-screen bg-gray-50 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Left Illustration */}
      <div className="absolute left-0 bottom-0 hidden lg:block">
        <Image
          src="/st-images/login_sample_2.png"
          alt="Left Illustration"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>

      {/* Right Illustration */}
      <div className="absolute right-0 bottom-0 hidden lg:block">
        <Image
          src="/st-images/login_sample_1.png"
          alt="Right Illustration"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center items-center mx-auto my-6 py-4">
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image
                width={200}
                height={40}
                src="/logo-image.jpg"
                alt="Logo"
                className="object-cover"
                priority
              />
            </Link>
          </div>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded shadow-2xl border border-gray-200 p-10">
            <Toaster position="top-center"/>
          <h1 className="text-[26px] leading-relaxed font-medium text-gray-600 text-center mb-4">
            Sign In
          </h1>

          <div className="space-y-4">
            {/* Email Field */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:border-gray-600 placeholder-gray-400`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:border-gray-600 placeholder-gray-400 pr-12`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
          </div>

          <div className="space-y-4 mt-4">
            {/* Sign In Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-[#0cc09c] hover:bg-[#18A689] text-white font-medium py-3 px-4 cursor-pointer transition duration-200 focus:outline-none"
            >
              Sign in
            </button>

            {/* Forgot Password */}
            <div className="text-center pb-4 border-b border-gray-200">
              <Link
                href="/login"
                className="text-blue-500 hover:text-blue-600 text-sm"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Sign Up Link */}
            <div className="text-center text-sm text-gray-600 mt-2">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="text-blue-500 hover:text-blue-600 font-medium"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="text-center mt-8 text-sm text-gray-500 space-x-4">
          <Link
            href="/privacy-policy"
            className="text-blue-500 hover:text-blue-600"
          >
            Privacy Policy
          </Link>
          <span>•</span>
          <Link href="/terms" className="text-blue-500 hover:text-blue-600">
            Terms of Service
          </Link>
        </div>
      </div>
    </FullContainer>
  );
}
