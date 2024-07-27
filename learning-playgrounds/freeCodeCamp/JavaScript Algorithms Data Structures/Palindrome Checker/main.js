function palindrome(str) {
  const cleaned = str.replace(/[^0-9a-z]/gi, "").toLowerCase();
  let l = 0;
  let h = cleaned.length - 1;

  while (h > l) {
    if (cleaned[l++] !== cleaned[h--]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome("nope"));
