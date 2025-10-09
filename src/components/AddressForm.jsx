import React, { useState } from "react";
import CustomButton from "./CustomButton";

function AddressForm({ addBook }) {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", phone: "" });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "The first name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "The last name is required";
    if (!formData.phone.trim()) newErrors.phone = "The phone is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    addBook({
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      phone: formData.phone.trim(),
    });

    setFormData({ firstName: "", lastName: "", phone: "" });
    setErrors({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <input
        type="text"
        placeholder="First Name"
        value={formData.firstName}
        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
        style={{
          width: "100%",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "6px",
          fontSize: "16px",
        }}
      />
      {errors.firstName && <div style={{ color: "red" }}>{errors.firstName}</div>}

      <input
        type="text"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
        style={{
          width: "100%",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "6px",
          fontSize: "16px",
        }}
      />
      {errors.lastName && <div style={{ color: "red" }}>{errors.lastName}</div>}

      <input
        type="text"
        placeholder="Phone"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        style={{
          width: "100%",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "6px",
          fontSize: "16px",
        }}
      />
      {errors.phone && <div style={{ color: "red" }}>{errors.phone}</div>}

      <CustomButton type="submit">Add</CustomButton>
    </form>
  );
}

export default AddressForm;
