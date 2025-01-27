import { useState } from "react";
import useJobs from "../hooks/fetchJobs";
import JobCard from "./card";
import ClipLoader from "react-spinners/PacmanLoader";

const Body = () => {
  const { jobs, loading, error } = useJobs(
    "https://htzg7vh5lh.execute-api.eu-central-1.amazonaws.com/prod"
  );
  console.log(jobs);
  const [searchQuery, setSearchQuery] = useState("");
  // Filter jobs based on the search query

  const filteredJobs = jobs.filter(
    (job) =>
      job["job_title"]?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job["location"]?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job["company"]?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  if (loading)
    return (
      <div className="pacman">
        <ClipLoader color={"#007bff"} />
      </div>
    );
  if (error) return <p>{error}</p>;

  return (
    <div className="container mt-4">
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search jobs..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {/* Jobs Display */}
      {filteredJobs.length === 0 ? (
        <p>No jobs match your search criteria.</p>
      ) : (
        <div className="row">
          {filteredJobs.map((job) => (
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={job["id"]}>
              <JobCard job={job} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
