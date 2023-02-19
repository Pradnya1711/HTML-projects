let g=0.;
function increment()
{
    g+=2;
    console.log("g is"+g );
    let f=1;
    f++;
    console.log("value of:"+f);
}
increment();
increment();
g++; 
console.log("Updated value :"+g);

//hosting
 
sum=a+blur;
console.log(sum);
var a=8, b=10, sum;//NAN, infinity, undefine

var c,d;//declaration
c=10; d=5;//initialization
sub=c+d;
c=90,d=9;
console.log(sub);
 
//self invoking function-recursion

function multiply()
{
    let b=1; i=1;
    b*=5;
    console.log(b);
    while(i<=2)
{  
 return multiply();
 i++;
}}
multiply();
//fatorial 5
fanction factorial(num)
{
    let fact=1;
    for(let i=num; i>0; i--)

{
else
{
    fact = i *factorial(i-1);
    return fact; 
}   
}
}
console.log("fact is:"+factorial(3));
/*fact= fact (5)* fact(4)
       5* fact(4)
          
    //fact(1)*/


