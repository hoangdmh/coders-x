// viết hàm Kiểm tra xem một chuỗi bắt đầu bằng "Java" hay không 
function startWith(str){
  if(str.startsWith('Java')){
    return true;
  }else{
    return false;
  }
}
console.log(startWith('xJava'));