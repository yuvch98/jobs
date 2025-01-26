export interface Job {
  id: number; // Ensure this matches your backend schema
  job_title: string;
  location: string;
  company: string;
  date: string;
  url: string;
  active: string;
}
const JobCard = ({ job }: { job: Job }) => (
  <div className="card h-100 w-100">
    <div className="card-body">
      <h5 className="card-title">{job.job_title}</h5>
      <p className="card-text">
        <strong>Location:</strong> {job.location}
      </p>
      <p className="card-text">
        <strong>Company:</strong> {job.company}
      </p>
      <p className="card-text">
        <strong>Updated:</strong> {job.date}
      </p>
      <div className="card-text">
        <a href={job.url} className="btn btn-primary" target="_blank">
          Apply
        </a>
      </div>
    </div>
  </div>
);

export default JobCard;
