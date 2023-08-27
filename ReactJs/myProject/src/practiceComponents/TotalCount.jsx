import React, { useState, useEffect } from "react";
import axios from "axios";

function CodesCount() {
    const [count, setCount] = useState(null);
  
    useEffect(() => {
      fetchCount();
    }, []);
  
    const fetchCount = async () => {
      try {
        const response = await axios.get("https://localhost:7291/api/Regions/count");
        setCount(response.data);
      } catch (error) {
        console.error("Error fetching regions:", error);
      }
    };

    return(
        <div>
            <h1>Total code count: {count}</h1>
        </div>
    );
}

export default CodesCount;