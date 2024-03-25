
// Viết chương trình yêu cầu người dùng nhập vào 4 số nguyên a, b, c, d bất kỳ,
// tìm ước chung lớn nhất của 4 số vừa nhập và in kết quả ra màn hình console.

let a = Number(prompt("Nhập vào số nguyên a: "));
let b = Number(prompt("Nhập vào số nguyên b: "));
let c = Number(prompt("Nhập vào số nguyên c: "));
let d = Number(prompt("Nhập vào số nguyên d: "));

let ucln = 1;

for (let i = 1; i <= Math.min(a, b, c, d); i++) {
    if (a % i === 0 && b % i === 0 && c % i === 0 && d % i === 0) {
        ucln = i;
    }
}

console.log(`Ước chung lớn nhất của các số vừa nhập là: ${ucln}`);