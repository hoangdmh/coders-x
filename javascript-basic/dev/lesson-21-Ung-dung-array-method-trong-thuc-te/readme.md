# List lesson

1. - Filter các sản phẩm khi biết id danh mục sản phẩm
  - Ví dụ đây là 1 danh sách các danh mục sản phẩm, 
  - khi người dùng muốn lọc các sản phẩm thuộc danh mục nào 
  - thì filter các sản phẩm của danh mục đó.
  - var categories = [
    { id: 1, name: 'Đồ điện tử'},
    { id: 2, name: 'Đồ gia dụng'},
    { id: 3, name: 'Nội thất'}
  ];
  
 2. * Viêt hàm có sử dụng method filter để loại bỏ những phần tử bị lặp lại trong mảng:
    * Tìm hiểu thêm indexOf:
    * https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
    * Example:
    * removeDuplicate([1, 1, 2, 3, 3]) // [1, 2, 3]