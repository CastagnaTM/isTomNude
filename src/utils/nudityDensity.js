export function nudityDensity(events, date = new Date()) {
  const dayEvents = events.filter(e =>
    e.start.toDateString() === date.toDateString()
  );

  const totalMinutes = dayEvents.reduce((sum, e) => {
    return sum + (e.end - e.start) / 60000;
  }, 0);

  return Math.min(100, Math.round((totalMinutes / (24 * 60)) * 100));
}
