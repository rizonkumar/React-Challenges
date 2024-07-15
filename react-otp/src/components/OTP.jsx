import React, { useState, useRef, useEffect } from "react";

const OTP = ({ otpLength = 6 }) => {
  const [otpFields, setOtpFields] = useState(new Array(otpLength).fill(""));
  const ref = useRef([]);

  const handleKeyDown = (e, index) => {
    const key = e.key;
    console.log(key);

    if (key === "ArrowLeft") {
      if (index > 0) ref.current[index - 1].focus();
      return;
    }
    if (key === "ArrowRight") {
      if (index + 1 < otpFields.length) ref.current[index + 1].focus();
      return;
    }

    const copyOtpFields = [...otpFields];

    if (key === "Backspace") {
      copyOtpFields[index] = "";
      setOtpFields(copyOtpFields);
      if (index > 0) ref.current[index - 1].focus();
      return;
    }

    if (isNaN(key)) {
      return;
    }
    copyOtpFields[index] = key;
    if (index + 1 < otpFields.length) ref.current[index + 1].focus();
    setOtpFields(copyOtpFields);
  };

  useEffect(() => {
    ref.current["0"].focus();
  }, []);

  return (
    <div className="container">
      {otpFields.map((value, index) => {
        return (
          <input
            type="text"
            ref={(currentInput) => (ref.current[index] = currentInput)}
            key={index}
            value={value}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        );
      })}
    </div>
  );
};

export default OTP;
