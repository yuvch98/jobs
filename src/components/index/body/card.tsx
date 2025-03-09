export interface Job {
  id: number;
  job_title: string;
  location: string;
  company: string;
  date: string;
  url: string;
  active: boolean;
}
const JobCard = ({ job }: { job: Job }) => {
  return (
    <div className="col-sm-6 col-md-6 col-lg-3 mb-4" key={job["id"]}>
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
          <p className="card-text">
            <a href={job.url} className="btn btn-primary" target="_blank">
              Apply job
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
