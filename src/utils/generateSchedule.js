import { v4 as uuid } from "uuid";

export function generateSchedule(year = new Date().getFullYear()) {
  const events = [];

  for (let month = 0; month < 12; month++) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let day = 1; day <= daysInMonth; day++) {
      const windowsToday = Math.floor(Math.random() * 3) + 1; // 1–3 times/day

      for (let i = 0; i < windowsToday; i++) {
        const startHour = Math.floor(Math.random() * 24);
        const durationMinutes = 30 + Math.floor(Math.random() * 60);

        const start = new Date(year, month, day, startHour);
        const end = new Date(start.getTime() + durationMinutes * 60000);

        events.push({
          id: uuid(),
          title: "Tom is Nude",
          start,
          end
        });
      }
    }
  }

  return events;
}
