import "./PostedJobs.css";
export default function PostedJobs() {
  return (
    <div className="main mt-4">
      <div>
        <h1 className="p-1 text-xm font-bold">Job Name</h1>
        <h2 className="p-1">Location</h2>
      </div>
      <div className="vertical-line"></div>
      <div>
        <h1 className="p-1 text-xm font-bold">Posted Date</h1>
        <h1 className="p-1">Date</h1>
      </div>
      <div className="vertical-line"></div>
      <div>
        <h1 className="p-1 text-xm font-bold">All Candidate</h1>
        <h1 className="p-1">1000</h1>
      </div>
      <div className="vertical-line"></div>
      <div>
        <h1 className="p-1 text-xm font-bold">Last Date</h1>
        <h1 className="p-1">Date</h1>
      </div>
    </div>
  );
}
