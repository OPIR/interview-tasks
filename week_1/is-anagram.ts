function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  return checkLetters(s, t);
}

function checkLetters(s: string, t: string): boolean {
  if (s.length === 0 && t.length === 0) {
    return true;
  }
  const indexOfOccurance = t.indexOf(s[0]);
  if (indexOfOccurance === -1) {
    return false;
  }
  return checkLetters(s.slice(1), t.replace(s[0], ""));
}

export default isAnagram;
