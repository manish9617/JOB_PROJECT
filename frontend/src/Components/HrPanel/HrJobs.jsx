import PostedJobs from "./PostedJobs";

export default function HrJobs({ onSelectTab }) {
  // onClickHandler should be a function that returns a function
  const onClickHandler = (tab) => () => {
    onSelectTab(tab);
  };
  return (
    <div className="ms-5 me-5 p-5">
      <div className="flex justify-content-between   font-bold text-xl ">
        <p style={{ height: "40px" }}> All Jobs (10)</p>
        <button
          style={{
            background: "rgb(31, 130, 104)",
            width: "180px",
            height: "30px",
            borderRadius: "10px",
          }}
          // Pass a function reference to onClick
          onClick={onClickHandler("postJob")}
        >
          Post a new job
        </button>
      </div>
      <PostedJobs></PostedJobs>
      <PostedJobs></PostedJobs>
      <PostedJobs></PostedJobs>
      <PostedJobs></PostedJobs>
    </div>
  );
}
