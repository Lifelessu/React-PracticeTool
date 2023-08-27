
import React, { useState } from "react";
import axios from "axios";

function UpdateRegion({regionid}) {
  const [formData, setFormData] = useState({
    
    code: "",
    name: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(`/api/regions/${regionid}`, formData);
      //console.log("Region updated:", response.data);
      alert("Region Updated",response.data);
    } catch (error) {
      //console.error("Error updating region:", error);
      alert("Failed to update", error);
    }
  };

  return (
    <div>
      <h2>Update Region</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>
            Code:
            <input
              type="text"
              name="code"
              value={formData.code}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button type="submit">Update Region</button>
      </form>
    </div>
  );
}

export default UpdateRegion;
