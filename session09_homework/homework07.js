
// Viết chương trình yêu cầu người dùng nhập vào một số bât kì,
// Kiểm tra xem số vừa nhập có phải số nguyên tố không,
// In kết quả ra màn hình console.

let n = Number(prompt("Nhập vào một số bất kì."));

let isPrime = true;

for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
        isPrime = false;
        break;
    }
}
if (isPrime) {
    console.log(`${n} là số nguyên tố.`);
} else {
    console.log(`${n} không phải là số nguyên tố.`);
}