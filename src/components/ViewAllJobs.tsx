import { useState, useEffect } from "react";
import jobs from "../jobs.json";
import JobListing from "./JobListing";
import { JobType } from "./JobListing";

const ViewAllJobs = () => {
  return (
    <div className="w-full py-12 my-12 bg-[#ebf4f5] min-h-[30vh]">
      <div className="flex justify-center pb-8 px-3">
        <div className="text-blue-700 font-bold text-2xl">All Jobs</div>
      </div>
      <div className=" w-[85%] md:w-3/4   mx-auto  grid grid-cols-1 md:grid-cols-3 gap-8  ">
        {jobs?.jobs?.map((job: JobType) => (
          <JobListing job={job} key={job.id} />
        ))}
      </div>
    </div>
  );
};

export default ViewAllJobs;
