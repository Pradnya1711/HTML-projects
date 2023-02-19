function count()
{
    document.write("page not found");
}
// setTimeout(count,3000);
// setInterval(count,5000);
let new_promise=new Promise(function(resolve,reject){
    for(let i=0; i<5; i++)
console.log(i);
if(i==5)
resolve(document.write("success"))
else
reject(document.write("rejected"))
});
new_promise.then(() => {
    console.log("success")
})
.catch(() =>{
    console.log("error")
})
.finally(() =>{console.log("Inside finally block")})
function temp(){
let api_key='641d8a6132c2f05d70e36e04bdf9f063';
let city= document.getElementById('city').innerText
fetch('https://api.openweathermap.org/data/2.5/weather?q=Mumbai'+'&appid='+api_key)
.then(res=> res.json())
.then(q=> console.log(q))
//.then(q=>document.write("tepmrature of delhi"+q.main.temp))
}