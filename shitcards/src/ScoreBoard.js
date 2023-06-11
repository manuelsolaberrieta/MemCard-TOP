export default function Scoirée(props) {
  return (
    <div id="scoreboard">
      <h3>Scoreboard</h3>
      {props.score.map((s, i) => {
        return (
          <div className="scoreboardScore" key={i}>
            <span>
              * {s.points}, {s.message}
            </span>
          </div>
        );
      })}
    </div>
  );
}
