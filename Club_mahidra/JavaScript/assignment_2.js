
let names =['Nikita', 'Aparna', 'Rahul', 'Satish']; //index
console.log(names);
document.write("names"+names);
console.log(names[3]);
document.write("4th element: "+names[90]);
let nums=['Agarwal', 'Sharma',90, 100, 1000];
console.log(names.concat(nums));
console.log(names); //immutable
nums.fill(10, 1,3);
document.write("<br>"+nums);
document.write("1st "+names[0]);
document.write("2nd "+names[1]);
document.write("2nd "+names[2]);
document.write("2nd "+names[3]);
//loops for while do-while
for(let i=0; i < 3; i++)
{
document.write("<br>element "+i+" is "+nums[i]);
}
nums.forEach(function display(e){
document.write("<br>"+e)
});

//callback is a function passed as a parameter to another function
var output = (a,b)=> {
return(a+b);
}
document.write(output(4,5));

document.write("reversed "+nums.reverse());
document.write(nums);
nums.filter((f) => {
if(f>=100)
document.write(f);
})

let double_num= nums.map((n)=>{
return 2*n;
})
document.write("Double"+double_num);

var arr= [12, 23, 34, 45, 56];
document.write("shift method "+arr.shift());
arr.push(900);
document.write("after push<br> "+arr);
document.write("<br>after pop"+arr.pop());
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.constructor;
document.write("<br>constroctor"+fruits)

var arrayValue  = ["Tools","QA","JavaScript","Tutorial"];
 var output = arrayValue.entries();
for(var x of output)
{
document.write(x+"</br>");
 }

 var arrayValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    		
 // Copy elements on 6th index, starting from 0 to 2nd index,
 // where 0 is inclusive and 2 is exclusive
 arrayValue.copyWithin(6, 0, 2);

 for (i = 0; i < arrayValue.length; i++)
 {
     document.write("<br>"+arrayValue[i]);
 }

 var array1 = [2, 3, 4, 5];
var array2 = [9, 10, 11];
var array3 = [12, 13, 14];
    var output = array1.concat(array2, array3);
for (i = 0; i < output.length; i++)
{ 
document.write(output[i] + "</br>");
}var arrayValue  = [2,3,4,5,6,7,8];
var output = arrayValue.filter(x => x%2==0); //filter function
 for(i =0 ;i<output.length;i++){
 document.write(output[i]+"</br>");
 }

 var arrayValue = [500, 200, 100, 100];
var iteration = 1;
var output = arrayValue.reduceRight(userFunction);  //reduceRight function

function userFunction(firstValue, restTotalValue) 
{
document.write('Running Iteration: ', iteration, '</br>');
document.write('Initial value: ', firstValue, '</br>');
document.write('Next value: ', restTotalValue, '</br>');
document.write('</br>');
iteration++;
return firstValue - restTotalValue;
}

let arr = ["Java", "Python", "JavaScript"];
let langLengths = arr.map(function(x){    //map function
    return x.length;
});
console.log(langLengths);
document.write("<br>map"+langLengths);
//push()
let fruits = ["Banana", "Orange", "Apple", "Mango"];
document.write("Fruits- "+fruits);
fruits.push("WaterMelon");
document.write("<br>After Push- "+fruits);
//push()/