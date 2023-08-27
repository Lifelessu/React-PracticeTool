import React, { useState } from "react";
import axios from "axios";

function AddRegionForm() {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://localhost:7291/api/Regions", {
        code,
        name,
        
      });
      
      console.log("Region created:", response.data);
      alert("Inserted new data")
    } catch (error) {
      console.error("Error creating region:", error);
    }
  };

  return (
    <div>
      <h2>Add New Region</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Code:
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
       
        <button type="submit">Add Region</button>
      </form>
    </div>
  );
}

export default AddRegionForm;
