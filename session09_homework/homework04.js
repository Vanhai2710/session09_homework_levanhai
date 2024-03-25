

// Viết chương trình yêu cầu người dùng nhập vào một số nguyên dương bất kì,
// In ra bình phương các số nguyên dương chẵn từ 1 
// sao cho tổng các số được in ra nhỏ hơn số được nhập.

let n = Number(prompt("Nhập vào số nguyên dương bất kỳ: "));

let sum = 0;
for (let i = 2; i <= n; i += 2) {
    let square = i * i;
    if (sum + square > n) {
        break;
    }

    sum += square;
    console.log(`Bình phương của ${i} là: ${square}`);
}

console.log(`Tổng các số bình phương đã in ra là: ${sum}`);

