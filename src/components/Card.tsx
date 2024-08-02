import React from "react";

type Props = {
  children: React.ReactNode;
  bg?: string;
};
const Card = ({ children, bg }: Props) => {
  return (
    <div
      className={`w-full md:w-1/3 flex flex-col gap-3 bg-${bg}-400 shadow-lg hover:shadow-xl border py-4 px-8 rounded-xl border-gray-200`}
    >
      {children}
    </div>
  );
};

export default Card;
