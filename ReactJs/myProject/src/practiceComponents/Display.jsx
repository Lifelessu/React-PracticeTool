import React, { useState, useEffect } from "react";
import axios from "axios";

function RegionList() {
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    fetchRegions();
  }, []);

  const fetchRegions = async () => {
    try {
      const response = await axios.get("https://localhost:7291/api/Regions");
      setRegions(response.data);
    } catch (error) {
      console.error("Error fetching regions:", error);
    }
  };

  return (
    <div>
      <h2>All Regions</h2>
      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Region Image URL</th>
          </tr>
        </thead>
        <tbody>
          {regions.map((regionList) => (
            <tr key={regionList.id}>
              <td>{regionList.code}</td>
              <td>{regionList.name}</td>
              <td>{regionList.regionImageUrl}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RegionList;
