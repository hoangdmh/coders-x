// Viết hàm trả về số chẵn đầu tiên trong mảng sử dụng find method
// Nếu không tìm thấy số chẵn nào thì trả về undefined
function findFirstEvenNumber(array) {
  let result = array.find(item => {
    return item % 2 === 0;
  });
  return result;
}