
// Viết chương trình yêu cầu người dùng nhập vào một số nguyên dương n bất kì,
// Tính kết quả biểu thức s= 1+1/2^2+1/3^2+...+1/n^2 (làm tròn 5 chữ số thập phân).

let n = Number(prompt("Nhập vào số nguyên dương n bất kì."))

let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += 1 / (i * i);
}

// Làm tròn 5 chữ số thập phân
let result = sum.toFixed(5);
console.log(`Kết quả là: ${result}`);