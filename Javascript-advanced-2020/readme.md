## Hoisting in Javascript
- Trình biên dịch của Javascript sẽ chuyển phần khai báo của biến và hàm lên trên top, nó được gọi là Hoisting

- Chỉ có phần khai báo được đưa lên top, không phải phần gán giá trị

- Phần khai báo hàm được đưa lên trước phần khai báo của biến


## var let const in Javascript
- Khai báo biến bằng let or const thì không được tái khai báo lại biến

- Khai báo biến bằng const thì phải gán giá trị cho nó ngay

- Khi khai bao const với kiểu biến là reference (object, array, function) thì chúng ta có thể cập nhật giá trị của biến bên trong dc.


## arrow function in Javascript
- arrow function không có context cho nên biến this của arrow function chín là this của function gần nó nhất (hàm mà nó nằm trong)

- Arrow function không phù hợp làm method cho object

- Arrow function không thể sử dụng làm hàm constructor



## Template string in Javascript
- var multiLine = `Tôi dang tay ôm nước vào lòng, Sông mở nước ôm tôi vào dạ`;
- var cat = `Con mèo`;
- var embededVar = `${cat} đang bay?`;
- var price = 500;
- var embededEx = `1 cái kem giá ${price}đ => ${cat} mua 2 cái kem phải trả ${2 * price}đ`;


## arguments in Javascript
- nó là một biến cục bộ bên trong function đó
- arrow function không có arguments
- Có thể tham chiếu đến các đối số của function đó thông qua object arguments


## Default parameters
- biến được gán giá trị mặc định bên trong tham số của hàm

` 
  function getName(name = 'friend'){
    if(name == undefined){
      return ${name}
    }
  }
  getName();
`


## method call in Javascript
` nameFunction.call(thisArg, arg1, arg2)`
- call() cho phép bạn truyền vào một object và các đối số cách nhau bởi dấu phẩy



## method apply in Javascript
` nameFunction.apply(thisArg, [argArray])`
- call() cho phép bạn truyền vào một object và các đối số thông qua mảng
