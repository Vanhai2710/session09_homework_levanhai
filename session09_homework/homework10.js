
// Viết chương trình yêu cầu người dùng nhập vào số nguyên dương bất kì,
// In ra hai tam giác vuông lên màn hình trình duyệt sao cho số hàng của tam giác bằng với số vừa nhập.

// In tam giác vuông thứ nhất

let n = Number(prompt("Nhập vào số nguyên dương bất kỳ: "));

// In tam giác vuông thứ nhất

console.log("Tam giác vuông thứ nhất");
for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
        str += "**";
    }
    console.log(str);   
} 


// In tam giác vuông thứ hai

console.log("Tam giác vuông thứ hai");
for (let i = n; i >= 1; i--) {
    let str = "";
    for (let j = 1; j <= i; j++) {
        str += "**";
    }
    console.log(str);
}