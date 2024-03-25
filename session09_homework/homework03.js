
// Viết chương trình yêu cầu người dùng nhập vào hai số nguyên bất kì a và b.
// Tính kết quả biểu thức a^b và in kết quả ra màn hình console.
// -----------

let a = Number(prompt("Nhập vào số nguyên a."));
let b = Number(prompt("Nhập vào số nguyên b."));

let result = 1;
for (let i = 1; i <= b; i++) {
    result *= a;
}

console.log(`Kết quả của ${a}^${b} là: ${result}`);
