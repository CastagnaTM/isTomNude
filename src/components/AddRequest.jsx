import { Button, Card } from "../styles";

export default function AddRequest({ setEvents }) {
  const add = () => {
    const start = new Date();
    const end = new Date(start.getTime() + 30 * 60000);

    setEvents(e => [...e, {
      id: crypto.randomUUID(),
      title: "Requested Disrobing",
      start,
      end
    }]);
  };

  return (
    <Card>
      <h3>Request that Tom disrobe</h3>
      <Button onClick={add}>Submit Request</Button>
    </Card>
  );
}
