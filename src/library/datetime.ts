const units = {
  year  : 24 * 60 * 60 * 1000 * 365,
  month : 24 * 60 * 60 * 1000 * 365/12,
  day   : 24 * 60 * 60 * 1000,
  hour  : 60 * 60 * 1000,
  minute: 60 * 1000,
  second: 1000
}

const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" })

export function getRelativeTimeString(timestamp: number) {
  const elapsed = timestamp - Date.now();

  for (let u in units) 
    if (Math.abs(elapsed) > units[u] || u == "second")
      return rtf.format(Math.round(elapsed/units[u]), u);
}