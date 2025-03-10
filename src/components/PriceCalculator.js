import React from "react";
import { ServiceContext } from "../components/ServiceCard";

const PriceCalculator = () => {
  return (
    <div className="form-group">
      <label
        className="form-label"
        style={{ fontSize: "24px", fontWeight: "bold", color: "#4CAF50" }}
      >
        Total: $15.000
      </label>
    </div>
  );
};

export default PriceCalculator;
