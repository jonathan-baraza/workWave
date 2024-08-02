import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
import Navbar from "./components/Navbar";

function App() {
  const heroData = {
    title: "Connecting Talent with Opportunity",
    tagline: " Discover Endless Opportunities and Unlock Your Potential",
  };

  return (
    <>
      <div>
        <Navbar />
        <Hero title={heroData.title} tagline={heroData.tagline} />
        <HomeCards />
        <JobListings />
      </div>
    </>
  );
}

export default App;
