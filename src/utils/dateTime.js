const templates = {
  prefix: '',
  suffix: ' ago',
  seconds: 'less than a minute',
  minute: 'about a minute',
  minutes: '%d minutes',
  hour: 'about an hour',
  hours: 'about %d hours',
  day: 'a day',
  days: '%d days',
  month: 'about a month',
  months: '%d months',
  year: 'about a year',
  years: '%d years',
};
const template = (t, n) => {
  return templates[t] && templates[t].replace(/%d/i, Math.abs(Math.round(n)));
};

// eslint-disable-next-line complexity
const timer = (time, sinceAgoDate = null) => {
  if (!time) return null;

  const now = sinceAgoDate ? new Date(sinceAgoDate) : new Date();
  const seconds = now.getTime() * 0.001 - time;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const years = days / 365;

  return (
    templates.prefix +
    ((seconds < 45 && template('seconds', seconds)) ||
      (seconds < 90 && template('minute', 1)) ||
      (minutes < 45 && template('minutes', minutes)) ||
      (minutes < 90 && template('hour', 1)) ||
      (hours < 24 && template('hours', hours)) ||
      (hours < 42 && template('day', 1)) ||
      (days < 30 && template('days', days)) ||
      (days < 45 && template('month', 1)) ||
      (days < 365 && template('months', days / 30)) ||
      (years < 1.5 && template('year', 1)) ||
      template('years', years)) +
    templates.suffix
  );
};

export default timer;
