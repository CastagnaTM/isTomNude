export function nextNude(events) {
  const now = new Date();
  return events
    .filter(e => e.start > now)
    .sort((a, b) => a.start - b.start)[0];
}
