const arrys = [ 1, 3, 8, 10, 2];
const newArrays = []
arrys.forEach(function(arry){
    newArrays.push(arry + 1); 
})

console.log(arrys, newArrays)

setInterval(function() {
    var currentTime = new Date();
    console.log("현재 시간은 " + currentTime.toLocaleTimeString() + "입니다.");
  }, 1000);

// setInterval( callbackFuncion, time)



// items.forEach(function(item){
//     copy.push(item);
//   });