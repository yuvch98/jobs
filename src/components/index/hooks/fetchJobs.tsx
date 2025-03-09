import { useState, useEffect } from "react";
import axios from "axios";
import { Job } from "../body/card";

interface Jobs {
  [company: string]: Job[];
}

const useJobs = (apiUrl: string) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await axios.get(apiUrl);
        const jobs: Jobs = JSON.parse(response.data.body);
        const flattenedJobs = Object.entries(jobs).flatMap(
          ([company, jobList]) => jobList.map((job) => ({ ...job, company }))
        );
        setJobs(flattenedJobs);
        console.log(jobs);
        setError(null);
      } catch (err) {
        setError("Failed to fetch jobs");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [apiUrl]);

  return { jobs, loading, error };
};

export default useJobs;
