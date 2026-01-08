import { useState } from "react";
import { isWithinInterval } from "date-fns";
import { Button, Card } from "../styles";
import { downloadICS } from "../utils/ics";

export default function NudeChecker({ events }) {
  const [date, setDate] = useState(null);
  const match = date && events.find(e =>
    isWithinInterval(date, { start: e.start, end: e.end })
  );

  return (
    <Card>
      <h3>Will Tom be nude?</h3>
      <input type="datetime-local" onChange={e => setDate(new Date(e.target.value))} />
      {date && (
        <>
          <p>{match ? "YES 😳" : "No 😔"}</p>
          {match && <Button onClick={() => downloadICS(match)}>Set Reminder</Button>}
        </>
      )}
    </Card>
  );
}
