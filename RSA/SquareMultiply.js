// z = x^c mod n
//著名的平方-乘算法可以把计算 x^c mod n所需模乘的次数降低为最多2l次,其中l是c的二进制表示的比特数。

function SquareMultiply(x, c, n) {
    c = c.toString(2) // 二进制
    let z = 1
    for (let i = 0; i < c.length; i++) {
        z = z * z % n
        if (c[i] === "1") {
            z = z * x % n
        }
    }
    return z
}