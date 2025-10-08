import React, { useState } from "react";
import CustomButton from "./CustomButton";

const AddressTable = ({ books, updateBook }) => {
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({ firstName: "", lastName: "", phone: "" });
  const [errors, setErrors] = useState({});

  if (!books || books.length === 0) return <p>No data to display</p>;

  const handleEdit = (book) => {
    setEditId(book.id);
    setEditData({ firstName: book.firstName, lastName: book.lastName, phone: book.phone });
    setErrors({});
  };

  const handleSave = (id) => {
    const newErrors = {};
    if (!editData.firstName) newErrors.firstName = "The first name is required";
    if (!editData.lastName) newErrors.lastName = "The last name is required";
    if (!editData.phone) newErrors.phone = "The phone is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    updateBook({ id, ...editData });
    setEditId(null);
  };

  return (
    <table border="1" cellPadding="10" style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td>{book.id}</td>
            <td>
              {editId === book.id ? (
                <>
                  <input
                    type="text"
                    value={editData.firstName}
                    onChange={(e) => setEditData({ ...editData, firstName: e.target.value })}
                  />
                  {errors.firstName && <div style={{ color: "red" }}>{errors.firstName}</div>}
                </>
              ) : (
                book.firstName
              )}
            </td>
            <td>
              {editId === book.id ? (
                <>
                  <input
                    type="text"
                    value={editData.lastName}
                    onChange={(e) => setEditData({ ...editData, lastName: e.target.value })}
                  />
                  {errors.lastName && <div style={{ color: "red" }}>{errors.lastName}</div>}
                </>
              ) : (
                book.lastName
              )}
            </td>
            <td>
              {editId === book.id ? (
                <>
                  <input
                    type="text"
                    value={editData.phone}
                    onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                  />
                  {errors.phone && <div style={{ color: "red" }}>{errors.phone}</div>}
                </>
              ) : (
                book.phone
              )}
            </td>
            <td>
              {editId === book.id ? (
                <CustomButton onClick={() => handleSave(book.id)}>Save</CustomButton>
              ) : (
                <CustomButton onClick={() => handleEdit(book)}>Edit</CustomButton>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AddressTable;
