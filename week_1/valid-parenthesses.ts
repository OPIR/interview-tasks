function isValid(s: string): boolean {
  let roundBrackets = 0;
  let squeraBrackets = 0;
  let curlyBrackets = 0;

  const chars = s.split("");

  chars.forEach((bracket) => {
    switch (bracket) {
      case "(": {
        roundBrackets++;
        return;
      }
      case ")": {
        roundBrackets--;
        return;
      }
      case "{": {
        curlyBrackets++;
        return;
      }
      case "}": {
        curlyBrackets--;
        return;
      }
      case "[": {
        squeraBrackets++;
        return;
      }
      case "]": {
        squeraBrackets--;
        return;
      }
    }
  });
  return roundBrackets === 0 && curlyBrackets === 0 && squeraBrackets === 0;
}

export default isValid;
