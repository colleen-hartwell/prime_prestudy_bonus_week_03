function number1 (x){
	x += 3;
  return x;
}

function number2 (y){
 	y*=42
  return y;
}

function number3 (z){
  	z-=89
    return z;
}

console.log(number3(number2(number1(3))));