import { useState, useEffect } from "react";
import jobs from "../jobs.json";
import JobListing from "./JobListing";
import { JobType } from "./JobListing";
const JobListings = () => {
  const [viewJobs, setViewJobs] = useState<JobType[]>(jobs.jobs.slice(0, 3));
  const [jobRange, setJobRange] = useState<number>(3);

  //Set Jobs
  useEffect(() => {
    setViewJobs(jobs.jobs.slice(0, jobRange));
  }, [jobRange]);

  return (
    <div className="w-full py-12 my-12 bg-[#ebf4f5] min-h-[30vh]">
      <div className="flex justify-center pb-8 px-3">
        <div className="text-blue-700 font-bold text-2xl">Browse Jobs</div>
      </div>
      <div className=" w-[85%] md:w-3/4   mx-auto  grid grid-cols-1 md:grid-cols-3 gap-8  ">
        {viewJobs?.length > 0 &&
          viewJobs.map((job: JobType) => <JobListing job={job} key={job.id} />)}
      </div>

      <div className="w-full flex items-center gap-8 justify-center my-5">
        {jobs.jobs.length > jobRange && (
          <button
            onClick={() => setJobRange(jobRange + 3)}
            className="w-fit text-sm bg-black hover:cursor-pointer hover:shadow-xl duration-100 text-white rounded py-1 px-3"
          >
            View More
          </button>
        )}
        <button
          onClick={() => setJobRange(jobRange + 3)}
          className="w-fit text-sm bg-black hover:cursor-pointer hover:shadow-xl duration-100 text-white rounded py-1 px-3"
        >
          View all jobs
        </button>
      </div>
    </div>
  );
};

export default JobListings;
