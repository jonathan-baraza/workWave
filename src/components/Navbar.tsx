import { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState<string>("Home");
  return (
    <div className="w-full py-3 px-12 bg-blue-700 flex items-center justify-between">
      <div className="logoDiv">
        <img src={Logo} className="w-[150px]" />
      </div>
      <div className="navBtns flex items-center gap-6">
        <Link
          to={"/"}
          className={`btnNav text-white hover:cursor-pointer hover:bg-black duration-100 px-4 py-2 rounded-lg text-sm ${
            active == "Home" && "bg-black"
          }`}
          onClick={() => setActive("Home")}
        >
          {" "}
          Home
        </Link>
        <Link
          to={"/jobs"}
          className={`btnNav text-white hover:cursor-pointer hover:bg-black duration-100 px-4 py-2 rounded-lg text-sm ${
            active == "Job" && "bg-black"
          }`}
          onClick={() => setActive("Job")}
        >
          {" "}
          Jobs
        </Link>
        <Link
          to={"add-job"}
          className={`btnNav text-white hover:cursor-pointer hover:bg-black duration-100 px-4 py-2 rounded-lg text-sm ${
            active == "Add" && "bg-black"
          }`}
          onClick={() => setActive("Add")}
        >
          {" "}
          Add Job
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
