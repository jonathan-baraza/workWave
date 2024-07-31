import { useState } from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [active, setActive] = useState<string>("Home");
  return (
    <div className="w-full py-3 px-8 bg-blue-700 flex items-center justify-between">
      <div className="logoDiv">
        <img src={Logo} className="w-[150px]" />
      </div>
      <div className="navBtns flex items-center gap-6">
        <div
          className={`btnNav text-white hover:cursor-pointer hover:bg-black duration-100 px-4 py-2 rounded-lg text-sm ${
            active == "Home" && "bg-black"
          }`}
          onClick={() => setActive("Home")}
        >
          {" "}
          Home
        </div>
        <div
          className={`btnNav text-white hover:cursor-pointer hover:bg-black duration-100 px-4 py-2 rounded-lg text-sm ${
            active == "Job" && "bg-black"
          }`}
          onClick={() => setActive("Job")}
        >
          {" "}
          Jobs
        </div>
        <div
          className={`btnNav text-white hover:cursor-pointer hover:bg-black duration-100 px-4 py-2 rounded-lg text-sm ${
            active == "Add" && "bg-black"
          }`}
          onClick={() => setActive("Add")}
        >
          {" "}
          Add Job
        </div>
      </div>
    </div>
  );
};

export default Navbar;
