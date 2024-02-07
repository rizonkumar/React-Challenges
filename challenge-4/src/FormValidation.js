import React, { useState } from "react";

const FormValidation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const validateForm = () => {
    let isValidForm = true;
    const newErrors = { name: "", email: "", password: "" };

    // Validate Name

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValidForm = false;
    }

    // Validate Email

    if (
      !formData.email.trim() ||
      !formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    ) {
      newErrors.email = "Enter a valid email address";
      isValidForm = false;
    }

    // Validate Password
    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
      isValidForm = false;
    }

    setErrors(newErrors);

    if (!isValidForm) {
      console.log("Form data is invalid. Details:");
      if (newErrors.name) console.log("Name:", newErrors.name);
      if (newErrors.email) console.log("Email:", newErrors.email);
      if (newErrors.password) console.log("Password:", newErrors.password);
    }

    return isValidForm;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate Form before submitting
    if (validateForm()) {
      console.log("Form submitted:", formData);
    }
  };

  // function to handle changes in the input field
  const handleChange = ({ name, value }) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <h2>Form Validation Example</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidation;
