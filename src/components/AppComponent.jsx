import React, { useState } from "react";
import AddressForm from "./AddressForm";
import AddressTable from "./AddressTable";

function AppComponent() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  const addBook = (book) => {
    setBooks([...books, { ...book, id: books.length + 1 }]);
  };

  const updateBook = (updatedBook) => {
    setBooks(books.map((b) => (b.id === updatedBook.id ? updatedBook : b)));
  };

  const filteredBooks = books.filter(
    (b) =>
      b.firstName.toLowerCase().includes(search.toLowerCase()) ||
      b.lastName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "600px",
        margin: "0 auto",
        textAlign: "center",
        fontFamily: "'Roboto'",
      }}
    >
      <h1 style={{ marginBottom: "20px", color: "#333" }}>Address Book</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search by first"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />
      </div>

      <AddressForm addBook={addBook} />
      <AddressTable books={filteredBooks} updateBook={updateBook} />
    </div>
  );
}

export default AppComponent;
