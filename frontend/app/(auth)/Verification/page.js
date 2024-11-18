"use client";
import React, { useState, useRef } from "react";

const VerificationCode = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleChange = (element, index) => {
    const value = element.value;
    if (isNaN(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Move to next input if current field is filled
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Move to previous input on backspace if current field is empty
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const verificationCode = code.join("");
    console.log("Submitted email:", email);
    console.log("Submitted code:", verificationCode);
    // Add your verification logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 ">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2 text-black">Verification</h1>
          <p className="text-gray-600 mb-8">We sent you a code to your email</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col items-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              className="w-full p-3 mb-4 text-center text-xl border rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              required
            />

            <p className="text-gray-500 mb-4">Put the code here</p>

            <div className="flex gap-2 sm:gap-4 justify-center">
              {code.map((digit, idx) => (
                <input
                  key={idx}
                  type="text"
                  maxLength="1"
                  className="w-12 h-12 sm:w-14 sm:h-14 text-center text-xl border rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  value={digit}
                  onChange={(e) => handleChange(e.target, idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  ref={(ref) => (inputRefs.current[idx] = ref)}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors w-full sm:w-auto"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerificationCode;
