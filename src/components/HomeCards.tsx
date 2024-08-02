import React from "react";
import Card from "./Card";

const HomeCards = () => {
  return (
    <div className="w-full h-[35vh] p-6 flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-center">
      <Card bg="blue">
        <h1 className=" font-bold text-2xl">For Developers</h1>
        <div className="text-sm">
          Browse our React jobs and start your career today
        </div>
        <button
          className={`bg-black text-white w-fit px-3 py-1 rounded-lg hover:cursor-pointer hover:shadow-lg`}
        >
          Browse Jobs
        </button>
      </Card>
      <Card bg="blue">
        <h1 className=" font-bold text-2xl">For Employers</h1>
        <div className="text-sm">
          LIst your job to find the perfect developer for the role
        </div>
        <button
          className={`bg-blue-700 text-white w-fit px-3 py-1 rounded-lg hover:cursor-pointer hover:shadow-lg`}
        >
          Add Job
        </button>
      </Card>
    </div>
  );
};

export default HomeCards;
