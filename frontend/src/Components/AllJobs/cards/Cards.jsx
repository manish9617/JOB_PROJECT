import Card from "./Card";
import style from "./Cards.module.css";
export default function Cards({ jobs }) {
  return (
    <div className={style.cards}>
      {jobs.map((arr) => (
        <Card key={arr.companyName} obj={arr} />
      ))}
    </div>
  );
}
