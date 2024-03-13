import Card from "./Card";
import style from "./Cards.module.css";
export default function Cards({ jobs }) {
  if (jobs === null) return <center>Loading</center>;
  return (
    <div className={style.cards}>
      {jobs.map((arr, idx) => (
        <Card key={arr.idx} obj={arr} />
      ))}
    </div>
  );
}
