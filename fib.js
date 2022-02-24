/*
  fibonacci func
*/

function fibonacci(n){
  
  if (n==1||n==0) return 0
  else{
    
    let a=0, b=1, f=1;
      
    for (var i = 2; i < n; i++) {
      f=a+b
      a=b
      b=f
    }

    return f
  }
}
 
 
console.log(fibonacci(8))
