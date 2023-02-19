//The First n fibonacci numbers using prompt
let number = parseInt(prompt('Enter the number : '));
let f = 0, f1 = 1, fibo;

document.write('The First n Fibonacci Nubers:');

for (let i = 1; i <= number; i++) {
    document.write(f);
    fibo = f + f1;
    f = f1;
    f1 = fibo;
}



//The First 10 numbers of fibonacci series.
let n = 0, f2 = 1, fibonacci;

document.write('<br>The first ten Fibonacci series number are:');

for (let i = 1; i <= 10; i++) {
    document.write(n);
    fibonacci = n+ f2;
    n = f2;
    f2 = fibonacci;
}
