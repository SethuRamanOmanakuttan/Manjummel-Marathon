const EVENT_TITLE = 'NSS Manjummel Marathon, Season 04';
const EVENT_LOCATION = 'Manjummel, Eloor, Kerala';
const EVENT_START = '20261002T023000Z';
const EVENT_END = '20261002T053000Z';
const EVENT_DESCRIPTION = 'Race day for the NSS Manjummel Marathon, Season 04, for a Drug-Free Kerala.';

export function googleCalendarUrl() {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: EVENT_TITLE,
    dates: `${EVENT_START}/${EVENT_END}`,
    details: EVENT_DESCRIPTION,
    location: EVENT_LOCATION,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export default function addToCalendar() {
  window.open(googleCalendarUrl(), '_blank', 'noopener,noreferrer');
}
