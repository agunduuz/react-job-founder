import React, { useState } from "react";

type ToggleDescriptionProps = {
  description: string;
};

const ToggleDescription: React.FC<ToggleDescriptionProps> = ({
  description,
}) => {
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => setShowMore(!showMore);
  const textToShow = showMore
    ? description
    : `${description.substring(0, 90)}...`;

  return (
    <div>
      <p className="mb-2 text-[#9FA0A2]">
        {textToShow}
        <button onClick={handleClick} className="text-[#001966]">
          {showMore ? "Show Less" : "Show More"}
        </button>
      </p>
    </div>
  );
};

export default ToggleDescription;
