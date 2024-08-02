import React from "react";
import jobs from "../jobs.json";

const JobListings = () => {
  return <div className="w-full min-h-[30vh] p-6">
    {jobs.jobs.map((job)=><div key={job.id}>{job.title}</div>)}

  </div>;
};

export default JobListings;
