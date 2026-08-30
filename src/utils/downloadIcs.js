const EVENT_TITLE = 'NSS Manjummel Marathon, Season 04';
const EVENT_LOCATION = 'Kasturba English Medium School, Eloor, Kerala';
const EVENT_START = '20261002T023000Z';
const EVENT_END = '20261002T053000Z';

export default function downloadIcs() {
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//NSS Manjummel Marathon//Season 04//EN',
    'BEGIN:VEVENT',
    `UID:nss-manjummel-marathon-s04@manjummelmarathon`,
    `DTSTAMP:${EVENT_START}`,
    `DTSTART:${EVENT_START}`,
    `DTEND:${EVENT_END}`,
    `SUMMARY:${EVENT_TITLE}`,
    `LOCATION:${EVENT_LOCATION}`,
    'DESCRIPTION:Race day for the NSS Manjummel Marathon, Season 04 — for a Drug-Free Kerala.',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'nss-manjummel-marathon.ics';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
