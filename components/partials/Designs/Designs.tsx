import React from "react";
import { designs } from "~/utilities/data";
import DesignCategory from "./DesignCategory";

const Designs = () => {
  return (
    <>
      {designs.map((category) => (
        <DesignCategory key={category.categoryName} category={category} />
      ))}
    </>
  );
};

export default Designs;
