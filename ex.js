let a =25,b = 38,c = 55,d = 59;
//let a = parseInt("enter the first number:");
//let b = parseInt("enter the second number:");
//let c = parseInt("enter the third number:");
//let d = parseInt("enter the fourth number:");
let first,second,third,fourth;
if (a>=b && a>=c && a>=d){
  first =a;
  if(b>=c && b>=d){
    second=b;
    third=c;
    fourth=d;
  }
  else if(c>=b && c>=d){
    second=c;
    third=b;
    fourth=d;
  }
  else{
    second=d;
    third=c;
    fourth=b;
  }
}

else if(b>=a && b>=c && b>=d){
  first=b;
  if(a>=c && a>=d){
    second=a;
    third=c;
    fourth=d;
  }
  else if(c>=a && c>=d){
    second=c;
    third=a;
    fourth=d;
  }
  else{
    second=d;
    third=c;
    fourth=a;
  }
}

else if(c>=a && c>=b && c>=d){
  first=c;
  if(a>=b && a>=d){
    second=a;
    third=b;
    fourth=d;
  }
  else if(b>=a && b>=d)
    {
      second=b;
      third=a;
      fourth=d;
    }
else{
  second=d;
  third=b;
  fourth=a;
}
}

else{
  first=d;
  if(a>=b && a>=c){
    second=a;
    third=b;
    fourth=c;
  }
  else if(b>=a && b>=c){
    second=b;
    third=a;
    fourth=c;
  }
  else{
    second=c;
    third=b;
    fourth=a;
  }
}

console.log(`from the greatest to the least values:${first},${second},${third},${fourth}`)