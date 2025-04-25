import { useState } from "react";
import useJobs from "../hooks/fetchJobs";
import JobCard from "./card";
import ClipLoader from "react-spinners/PacmanLoader";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import BasicSelect from "../Select";

const Body = () => {
  const { jobs, loading, error } = useJobs(import.meta.env.VITE_API_URL);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<"Date" | "Company">("Date");
  const itemsPerPage = 8; // Number of jobs to show per page
  const sortedJobs = [...jobs].sort((a, b) => {
    if (sortBy === "Company") {
      return a["company"].localeCompare(b["company"]);
    } else {
      return new Date(b["date"]).getTime() - new Date(a["date"]).getTime();
    }
  });
  // Filter jobs based on the search query
  const filteredJobs = sortedJobs.filter(
    (job) =>
      (job["job_title"]?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job["location"]?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job["company"]?.toLowerCase().includes(searchQuery.toLowerCase())) &&
      job["active"]
  );

  // Paginate the filtered jobs
  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);
  const paginatedJobs = filteredJobs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to page 1 when the search query changes
  };

  // Handle page change
  const handlePageChange = (_: unknown, page: number) => {
    setCurrentPage(page);
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
      {/* Sorting Dropdown */}
      <BasicSelect sortBy={sortBy} setSortBy={setSortBy} />
      {/* Jobs Display */}
      {paginatedJobs.length === 0 ? (
        <p>No jobs match your search criteria.</p>
      ) : (
        <div className="row">
          {paginatedJobs.map((job) => {
            return <JobCard job={job}></JobCard>;
          })}
        </div>
      )}

      {/* Pagination Component */}
      {filteredJobs.length > itemsPerPage && (
        <Stack spacing={2} alignItems="center" marginTop={2}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            shape="rounded"
          />
        </Stack>
      )}
    </div>
  );
};

export default Body;
