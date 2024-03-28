function indexOfIgnoreCase(str, subStr) {
  if (str === null || subStr === null || str.length === 0 || subStr.length === 0) {
    return -1; // Handle edge cases like empty strings
  }

  str = str.toLowerCase();
  subStr = subStr.toLowerCase();

  return str.indexOf(subStr);
}