
export function getDate(str) {
  var date = str.substring(0, str.indexOf('T'));
  date = date.split("-");
  return `${date[1]}/${date[2]}/${date[0]}`
}

export function getInitials(str) {
  let initials = '';
  let words = str.split(" ");
  if (words.length > 0) {
    initials += words[0][0];
    if (words.length > 1) {
      initials += words[1][0]
    }
  }
  return initials.toUpperCase();
}

export function getBirthYear(str) {
  if (!str) { return null; }
  const indexBBY = str.indexOf('BBY');
  return indexBBY > -1 ? `${str.substring(0, indexBBY)} ${str.substring(indexBBY)}` : str
}
