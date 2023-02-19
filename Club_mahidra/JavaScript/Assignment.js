//in-built function inside an array class

//push()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.write("Fruits- "+fruits);
fruits.push("WaterMelon");
document.write("<br>After Push- "+fruits);
let array = [1, 2, 3, 4];
document.write("<br>Element-" +array);
array.push(5);
document.write("<br>Push Element- </br>"+array);
//push()/

//pop()
let arr = [1, 2, 3, 4];
document.write("<br>Before pop-" +arr);
let x = arr.pop();

document.write("<br>Element-" +x);
document.write("<br>After pop-" +arr);
//pop()/
//shift()
let ar = [5,3,8];
document.write("<br>After shift-" +ar);
let y = ar.shift();//shift() removes the first element from an array and returns it
document.write("<br>element-" +y);
document.write("<br>After shift-" +ar);
//shift()/

//sort()
let array1 = [1, 3, 2, 0];
let array2 = ["Rutu", "Saloni", "Pradnya"];
let array3 = ["b", 3, 1, "c", "a"];

let originalArray1 = [...array1];
document.write('<br>Original array1: ', originalArray1);
document.write('<br>Sorted array1: ', array1.sort());
document.write('<br>Sorted array2: ', array2.sort());
document.write('<br>Sorted array3: ', array3.sort());
//sort()/

//Slice()
let arry = [10, 20, 30, 40, 50];
let subarray = arry.slice(2, 4);
   
document.write('<br>Elements-'+arry);    
document.write('<br>After Slice- '+subarray); 
//slice()/
//spice()
let spc = [10, 20, 30, 40, 50];
document.write('<br>array: '+spc);
let splicedArray = spc.splice(3, 2);
document.write('<br>Spliced elements: ', splicedArray);
document.write('<br>Changed array: ', spc);
//spice()/
//Reverse()
let revstr = [" Saloni ", " Pradnya "," Rutu "];
document.write('<br>Original String - ',revstr) 

document.write('<br>Reverse String - ',revstr.reverse()) 
//Reverse()/
//Map()
let mapfun = ["Saloni" , "Pradnya" , "Rutu"];
document.write("<br>Map element - </br>"+mapfun)
let langLengths = mapfun.map(function(x){
    return x.length;
});

document.write('<br>Length - ',langLengths);
//Map()/
//join()
let jn = [1, 2, "hello"];
let str1 = jn.join();
let str2 = jn.join('');
let str3 = jn.join('_');

document.write('<br>Result: ', str1);
document.write('<br>Result: ', str2);
document.write('<br>Result: ', str3);
document.write('<br>Type of result: ', typeof(str1));
//join()/

//Every()
let simpleArray = [1, 2, 3];
document.write('<br> ',simpleArray.every(x => x > 0)); 

// let objectArray = [new User('John'), new User('Maria')];
// document.write('<br>',objectArray.every(x => x.age > 21));
//Every()/

//Some()
let a = [1, 2, 3];
document.write('<br> Array elemnt',a);    
document.write('<br>',a.some(x => x == 2)); 
//Some()/
//Filter()
var arrayValue  = [2,3,4,5,6,7,8];

var output = arrayValue.filter(x => x%2==0); // Will save value to output array 
                                             // only when it is divisible by 2

for(i =0 ;i<output.length;i++){

   document.write(output[i]+"</br>");}
//Filter()/


//indexof()
let indxof = [1, 4, 5, 4, 5, 6, 5, 8];
document.write('<br>IndexOf-',indxof.indexOf(5));
document.write('<br>',indxof.indexOf(10));
//indexof()/


//lastindexof()
let simpleAr = [1, 4, 5, 4, 5, 6, 5, 8];

document.write('<br>LastIndexOf-',simpleAr.lastIndexOf(5, 3));
document.write('<br>',simpleAr.indexOf(5, 5));
//lastindexof()/

//Reduce() and rightReduce()
var arrayValue = [500, 200, 100, 100];
    		var iteration = 1;
    		var output = arrayValue.reduce(userFunction); // Perform reduce on each of the elements

    		function userFunction(firstValue, restTotalValue) 
    		{
    			document.write('<br>Running Iteration: ', iteration, '</br>');
    			document.write('Initial value: ', firstValue, '</br>');
    			document.write('Next value: ', restTotalValue, '</br>');
    			document.write('</br>');
    			iteration++;
    			return firstValue - restTotalValue;
    		}
          var output = arrayValue.reduceRight(userFunction);

    		document.write('Final Result:', output);
//Reduce() and rightReduce()/
//concat()
var arry1 = [2,4,5];
var arry2 = [7,8,9];
var arry3 = [12, 13, 14];
    
    		var output = arry1.concat(arry2, arry3);
    		for (i = 0; i < output.length; i++)
    		{ 
    			document.write(output[i] + "</br>");
    		}
         //concat()/
         //Entries() and fill()
var arrayValue  = ["Tools","QA","JavaScript","Tutorial"];

    var output = arrayValue.entries();
       for(var p of output){
        document.write(p+"</br>");

    
    var output = arrayValue.fill("Tuts",3,4);
       }

         //Entries() and fill()/
 //CopyWithin()
         var arrayValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    		
    		// Copy elements on 6th index, starting from 0 to 2nd index,
    		// where 0 is inclusive and 2 is exclusive
    		arrayValue.copyWithin(6, 0, 2);

    		for (i = 0; i < arrayValue.length; i++)
    		{
    			document.write(arrayValue[i] + "</br>");
    		}
  //CopyWithin()/
