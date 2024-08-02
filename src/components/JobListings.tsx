import React from "react";
import jobs from "../jobs.json";
import JobCard from "./JobCard";

const JobListings = () => {
  console.log(jobs.jobs[0]);
  return (
    <div className="w-full py-12 my-12 bg-[#ebf4f5] min-h-[30vh]">
      <div className="w-3/4   mx-auto  grid grid-cols-3 gap-8  ">
        {jobs.jobs.map((job) => (
          <JobCard job={job} key={job.id} />
        ))}
      </div>
    </div>
  );
};

export default JobListings;
