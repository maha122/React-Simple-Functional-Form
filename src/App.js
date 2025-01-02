
import React, { useState } from "react";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    color: "",
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <header>
        <h1>Landing Page</h1>
      </header>
      <main>
        <div className="intro mt-3">
        <button className="open-modal-btn" onClick={() => setIsModalOpen(true)}>
          Enter the Data
        </button>
        </div>
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <h2>Enter Your Details</h2>
              <form onSubmit={handleSubmit}>
                <label>
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Favorite Color:
                  <select
                    name="color"
                    value={formData.color}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>
                      Select a color
                    </option>
                    <option value="Red">Red</option>
                    <option value="Blue">Blue</option>
                    <option value="Green">Green</option>
                    <option value="Yellow">Yellow</option>
                  </select>
                </label>
                <div className="form-buttons">
                  <button type="submit">Submit</button>
                  <button type="button" onClick={() => setIsModalOpen(false)}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {submittedData && (
          <div className="output">
            <h2>Submitted Data:</h2>
            <p>
              <strong>Name:</strong> {submittedData.name}
            </p>
            <p>
              <strong>Email:</strong> {submittedData.email}
            </p>
            <p>
              <strong>Favorite Color:</strong> {submittedData.color}
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;

