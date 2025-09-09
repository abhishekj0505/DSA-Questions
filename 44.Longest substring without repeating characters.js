function longestSubstringWithoutRepeating(s) {
  let start = 0;
  let maxLength = 0;
  let maxSubstring = "";
  const seen = new Map();

  for (let end = 0; end < s.length; end++) {
    const char = s[end];

    if (seen.has(char) && seen.get(char) >= start) {
      start = seen.get(char) + 1;
    }

    seen.set(char, end);

    if (end - start + 1 > maxLength) {
      maxLength = end - start + 1;
      maxSubstring = s.slice(start, end + 1);
    }
  }

  return { maxLength, maxSubstring };
}

console.log(longestSubstringWithoutRepeating("abcabcbb")); 
// { maxLength: 3, maxSubstring: 'abc' }

console.log(longestSubstringWithoutRepeating("bbbbb"));    
// { maxLength: 1, maxSubstring: 'b' }

console.log(longestSubstringWithoutRepeating("pwwkew"));   
// { maxLength: 3, maxSubstring: 'wke' }
