var i = 0;
var setIntervalId = setInterval(() => {
  ++i;
  console.log(i);
  if(i === 5){
    clearInterval(setIntervalId);
  }
}, 1000);