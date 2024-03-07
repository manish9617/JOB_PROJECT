import "./PostedJobs.css";

export default function PostedJobs({ job }) {
  console.log(job);
  return (
    <div className="main mt-4">
      <div>
        <h1 className="p-1 text-xm font-bold">{job.JobTitle}</h1>
        <h2 className="p-1">{job.City}</h2>
      </div>
      <div className="vertical-line"></div>
      <div>
        <h1 className="p-1 text-xm font-bold">Posted Date</h1>
        <h1 className="p-1">{new Date(job.PostDate).toLocaleDateString()}</h1>
      </div>
      <div className="vertical-line"></div>
      <div>
        <h1 className="p-1 text-xm font-bold">All Candidate</h1>
        <h1 className="p-1">{job.application}</h1>
      </div>
      <div className="vertical-line"></div>
      <div>
        <h1 className="p-1 text-xm font-bold">Last Date</h1>
        <h1 className="p-1">{new Date(job.lastDate).toLocaleDateString()}</h1>
      </div>
    </div>
  );
}
