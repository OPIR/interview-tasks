function isPalindrome(s: string): boolean {
  s = s.toLowerCase();
  s = s.replace(/[^0-9a-z]/gi, "");
  const revesedS = s.split("").reverse().join("");

  return !s || s === revesedS;
}

export default isPalindrome;
