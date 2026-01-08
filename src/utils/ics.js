export function downloadICS(event) {
  const format = d =>
    d.toISOString().replace(/[-:]/g, "").split(".")[0];

  const ics = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${format(event.start)}
DTEND:${format(event.end)}
SUMMARY:Tom is Nude
DESCRIPTION:IsTomNudeDotCom.com
END:VEVENT
END:VCALENDAR
`;

  const blob = new Blob([ics], { type: "text/calendar" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "tom-is-nude.ics";
  a.click();
}
