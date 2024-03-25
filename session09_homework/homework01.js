
// Viết chương trình yêu cầu người dùng nhập vào một số nguyên dương bất kì,
// In ra bình phương các số nguyên dương chẵn từ 1 đến số vừa nhập lên màn hình console.


let a = Number(prompt("Nhập 1 số nguyên dương bất kì."));

if (a <= 0) {
    console.log("Số nhập vào không phải là số nguyên dương!");
} else {
    for (let i = 1; i <= a; i++) {
        if (i % 2 === 0) {
            console.log(`Bình phương của ${i} là: ${i * i}`);
        }
    }
}
