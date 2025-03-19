import React, { useState } from "react";

function RegistrationForm() {
  // State to store form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    country: "", // New state for dropdown
    agree: false,
  });

  // State to store errors
  const [errors, setErrors] = useState({});

  // Handle input changes
  function changeHandler(event) {
    const { name, value, type, checked } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value, // Handle checkbox separately
    }));
  }

  // Form validation
  function validateForm() {
    let newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Invalid Email";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    if (!formData.gender) newErrors.gender = "Please select a gender";
    if (!formData.country) newErrors.country = "Please select a country";
    if (!formData.agree) newErrors.agree = "You must agree to the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  }

  // Handle form submission
  function submitHandler(event) {
    event.preventDefault();

    if (validateForm()) {
      console.log("Form Submitted:", formData);
      alert("Registration Successful!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
        country: "", // Reset dropdown selection
        agree: false,
      });
      setErrors({});
    }
  }

  return (
    <div className="container">
      <h2>Registration Form</h2>
      <form onSubmit={submitHandler}>
        {/* First Name */}
        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={changeHandler} />
        {errors.firstName && <p className="error">{errors.firstName}</p>}

        {/* Last Name */}
        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={changeHandler} />
        {errors.lastName && <p className="error">{errors.lastName}</p>}

        {/* Email */}
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={changeHandler} />
        {errors.email && <p className="error">{errors.email}</p>}

        {/* Password */}
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={changeHandler} />
        {errors.password && <p className="error">{errors.password}</p>}

        {/* Confirm Password */}
        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={changeHandler} />
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

        {/* Gender Selection */}
        <div>
          <label>
            <input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={changeHandler} /> Male
          </label>
          <label>
            <input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={changeHandler} /> Female
          </label>
        </div>
        {errors.gender && <p className="error">{errors.gender}</p>}

        {/* Country Dropdown */}
        <select name="country" value={formData.country} onChange={changeHandler}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Canada">Canada</option>
        </select>
        {errors.country && <p className="error">{errors.country}</p>}

        {/* Terms & Conditions Checkbox */}
        <label>
          <input type="checkbox" name="agree" checked={formData.agree} onChange={changeHandler} />
          I agree to the terms and conditions
        </label>
        {errors.agree && <p className="error">{errors.agree}</p>}

        {/* Submit Button */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
