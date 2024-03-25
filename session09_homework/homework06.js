
// Viết chương trình yêu cầu người dùng nhập vào một số nguyên dương n bất kì,
//In ra số đảo ngược của số vừa nhập lên màn hình console.

let n = Number(prompt("Nhập vào số nguyên dương bất kì."));
let reversedNumber = 0;

for (let i = n; i > 0; i = Math.floor(i / 10)) {
    reversedNumber = reversedNumber * 10 + i % 10;
}
    console.log(`Số đảo ngược của ${n} là: ${reversedNumber}`);
