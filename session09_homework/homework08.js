
// Viết chương trình yêu cầu người dùng nhập vào một số nguyên dương bất kì,
// In ra số nguyên tố đầu tiên lên màn hình console.

let n = Number(prompt("Nhập vào một số nguyên dương bất kỳ: "));

let isPrime = false;
let i = 2;

for (; i <= n; i++) {
    isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        break;
    }
}

if (isPrime) {
    console.log(`Số nguyên tố đầu tiên là: ${i}`);
} else {
    console.log(`Không có số nguyên tố nào.`);
}