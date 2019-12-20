// Sort an array from shortest string to longest

function lengthSort(arr) {
  const result = arr.sort((a, b) => {
    return a.length - b.length;
  });
  return result;
}

// Gợi ý: độ dài của 1 string = string.length, thử chạy "abc".length