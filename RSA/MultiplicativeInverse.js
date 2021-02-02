// 扩展欧式算法，求模乘逆
// s*a + t*b = 1 , t = b逆模a 
// (75,28) => 3*75 +（-8）*28 = 1,  t = -8
function MultiplicativeInverse(a, b) {
    let a0 = a
    let b0 = b
    let t0 = 0
    let t = 1
    let q = Math.floor(a0 / b0)
    let r = a0 - q * b0
    let j = 0
    // console.log("j", "rj", "qj", "tj")
    // console.log(j, a0, "-", t0)
    let qtemp = q

    while (r > 0) {
        const temp = (t0 - q * t) % a
        t0 = t
        t = temp
        a0 = b0
        b0 = r
        q = Math.floor(a0 / b0)
        r = a0 - q * b0
        j++
        // console.log(j, a0, qtemp, t0)
        qtemp = q
    }

    if (b0 !== 1) {
        return false
    } else {
        // console.log(j + 1, b0, a0, t)
        return t
    }
}

console.log(MultiplicativeInverse(75, 28))
console.log(MultiplicativeInverse(15485863, 104729))
console.log(MultiplicativeInverse(30960, 4913))