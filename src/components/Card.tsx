import React from "react";

type CardProps = {
  children: React.ReactNode;
  bg?: string;
};

const Card: React.FC<CardProps> = ({ children, bg = "bg-[#E8EAF1]" }) => {
  return <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>;
};

export default Card;
