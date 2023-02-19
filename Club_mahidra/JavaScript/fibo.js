//The First n fibonacci numbers 
let number = parseInt(prompt('Enter the number : '));
let f = 0, f1 = 1, fibo;

document.write('The First n Fibonacci Nubers:');

for (let i = 1; i <= number; i++) {
    document.write(f);
    fibo = f + f1;
    f = f1;
    f1 = fibo;
}