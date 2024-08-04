import React from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
const heroData = {
  title: "Connecting Talent with Opportunity",
  tagline: " Discover Endless Opportunities and Unlock Your Potential",
};
const Homepage = () => {
  return (
    <>
      <Hero title={heroData.title} tagline={heroData.tagline} />
      <HomeCards />
      <JobListings />
    </>
  );
};

export default Homepage;
