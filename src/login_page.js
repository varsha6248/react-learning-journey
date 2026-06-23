import React, { useState } from "react";//useState is a Hook that allows us to store data inside a component.

function Login() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    course: "",
    feedback: "",
    agree: false,
  });//This object stores all form values.

//setFormData() is used to update the state.

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };//e.target.name   // "name"
//e.target.value  // "Varsha"
//**React keeps the old values and updates only one field. */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password
    ) {
      alert("Please fill all required fields");
      return;
    }

    if (!formData.agree) {
      alert("Accept Terms and Conditions");
      return;
    }

    console.log(formData);
    alert("Form Submitted Successfully");
  };

  return (
    <div>
      <h2>Student Registration Form</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label>Name:</label>
          <br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <br />

        {/* Email */}
        <div>
          <label>Email:</label>
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <br />

        {/* Password */}
        <div>
          <label>Password:</label>
          <br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <br />

        {/* Radio Buttons */}
        <div>
          <label>Gender:</label>
          <br />

          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === "Male"}
            onChange={handleChange}
          />
          Male

          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={handleChange}
          />
          Female
        </div>

        <br />

        {/* Select */}
        <div>
          <label>Course:</label>
          <br />

          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
          >
            <option value="">Select Course</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
            <option value="IT">IT</option>
          </select>
        </div>

        <br />

        {/* Textarea */}
        <div>
          <label>Feedback:</label>
          <br />

          <textarea
            name="feedback"
            rows="4"
            cols="30"
            value={formData.feedback}
            onChange={handleChange}
          />
        </div>

        <br />

        {/* Checkbox */}
        <div>
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          I agree to Terms and Conditions
        </div>

        <br />

        {/* Submit */}
        <button type="submit">
          Submit
        </button>
      </form>

      <hr />

    </div>
  );
}

export default Login;