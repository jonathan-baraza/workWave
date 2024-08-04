import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

export type JobType = {
  id: string;
  title: string;
  type: string;
  description: string;
  location: string;
  salary: string;
  company: {
    name: string;
    description: string;
    contactEmail: string;
    contactPhone: string;
  };
};

const JobCard = ({ job }: { job: JobType }) => {
  const [showFullDescription, setShowFullDescription] =
    useState<boolean>(false);

  const setJD = (): string => {
    return showFullDescription
      ? job.description
      : job.description.slice(0, 120) + "...";
  };

  return (
    <div className="w-full text-[12px] border rounded shadow-lg bg-[#fcfefe] border-gray-100 shadow-sm p-6 flex flex-col gap-3">
      <div className="text-gray-500 font-bold">{job.type}</div>
      <div className="font-bold text-sm">{job.title}</div>
      <div className="">
        {setJD()}

        <div
          onClick={() => setShowFullDescription(!showFullDescription)}
          className="hover:underline hover:cursor-pointer text-xs mt-2 text-blue-700"
        >
          &nbsp;{!showFullDescription ? "More" : "Less"}
        </div>
      </div>
      <div className="mt-2 text-blue-500 text-bold">{job.salary}</div>
      <hr />
      <div className="font-bold text-orange-700 flex items-center">
        <FaMapMarkerAlt className="inline mr-1" /> {job.location}
      </div>
      <button className="w-full bg-blue-700 hover:cursor-pointer hover:shadow-xl duration-100 text-white rounded-lg py-1 px-3">
        Read More
      </button>
    </div>
  );
};

export default JobCard;
