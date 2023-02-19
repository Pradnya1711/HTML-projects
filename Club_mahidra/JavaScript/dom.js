class vahicle{
    
constructor(wheels,brand, mileage, color)
{
       this.wheels=wheels;
       this.brand=brand;
       this.mileage=mileage;
       this.color=color;
}
display()
{
    document.write("brand is :"+this.brand+ "color is: "+this.color);
}
}
let scooter=new vehicle(2,'bajaj' ,'30kmpl' , 'red');
scooter.display();
let maruti=new vehicle(4,'maruti alto' ,'40kmpl' , 'black');
maruti.display();
let fname=new String('Pradnya');
console.log(fname);

class jeep extends vehicle{
constructor(speed)
{
    super();//constructor of parent
    this.speed=speed;
}
display()
{
    super.display();
    document.write("speed is :" +this.speed);
}
}
let tghar = new jeep('120kmph');
thar.display(); 

catch(error)
{
    document.write(error);
}
let BMW= new jeep('50kmpl' , 'White');
BMW.display();

let num1 =prompt("enter a number");
let num2 =prompt("enter a number");
document.write(num1/num2);

var Person={name:'Pradnya', age: 22, nation:'India' };
console.log(Person);
console.log(Person.name);
document.write("<br>"+Person);
document.write("age is"+Person.age);
document.write(JSON.stringify(Person));
// let i=0;
// for(i=0; i<5; i++)
// {
//     document.write("value of i is-"+i);
//     if(i==3)
//     break;
// }
// i=0;
// while(i<5)
// {
//     document.write("<br>value of i is-"+i+);
//  i++;
// }
// while(i<5)
// {
 //  i++;
// }
// do{
//     document.write("<br>while agin"+i);
//     i++;
// }