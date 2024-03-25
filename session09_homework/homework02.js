// Viết chương trình yêu cầu người dùng nhập vào hai số nguyên bất kì a và b.
// Tính tổng các số nguyên trong khoảng giữa hai số a, b và in kết quả ra màn hình console.

let a = Number(prompt("Nhập số nguyên a."));
let b = Number(prompt("Nhập số nguyên b."));

let sum = 0;
for (let i = a; i <= b; i++) {
    sum += i;
}
console.log(`Tổng các số nguyên từ ${a} đến ${b} là: ${sum}`);
