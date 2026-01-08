import { useEffect, useState } from "react";
import { generateSchedule } from "./utils/generateSchedule";
import CalendarView from "./components/CalendarView";
import NudeChecker from "./components/NudeChecker";
import NowChecker from "./components/NowChecker";
import AddRequest from "./components/AddRequest";
import { Container } from "./styles";
import { nudityDensity } from "./utils/nudityDensity";
import { nextNude } from "./utils/nextNude";
import { Card } from "./styles";


export default function App() {
  const [events, setEvents] = useState([]);
  const density = nudityDensity(events);
  const upcoming = nextNude(events);

  useEffect(() => {
    setEvents(generateSchedule());
  }, []);

  return (
    <Container>
      <h1>IsTomNudeDotCom.com</h1>
      <Card>
        <h3>Nudity Density Today</h3>
        <p>{density}% nude</p>
        <small>Estimate. Accuracy not guaranteed.</small>
      </Card>
      <NowChecker events={events} />
      <NudeChecker events={events} />
      <AddRequest setEvents={setEvents} />
      <Card>
        <h3>Next Guaranteed Nude Window</h3>
        {upcoming ? (
          <p>
            {upcoming.start.toLocaleString()} <br />
            Duration: {Math.round((upcoming.end - upcoming.start) / 60000)} minutes
          </p>
        ) : (
          <p>Unclear. Possibly imminent.</p>
        )}
      </Card>
      <CalendarView events={events} />
    </Container>
  );
}
