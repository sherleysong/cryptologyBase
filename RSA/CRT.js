//Chinese remainder theorem(CRT)
// x=2mod3
// x=3mod5
// x=2mod7
// 求解x = 23 
// 1. M=3*5*7=105,M1=5*7=35,M2=3*7=21,M3=3*5=15
// 2. y1=M1逆模m1=35逆模3=2,y2=21逆模5=1,y3=15逆模7=1
// 3. x=( a1M1y1+a2M2y2+a3M3y3 )modM  = (2*35*2+3*21*1+2*15*1)mod105  = 23

// 输入：[[2,3],[3,5],[2,7]]
function CRT(array) {
    let x = 0,
        M = 1
    for (let i = 0; i < array.length; i++) {
        const element = array[i]; // [2,3]
        M = M * element[1]
    }
    for (let i = 0; i < array.length; i++) {
        const element = array[i]; // [2,3]
        let Mi = M / element[1]
        let yi = MultiplicativeInverse(element[1], Mi)
        if (yi < 0) {
            yi = element[1] + yi
        }
        console.log(element[0], Mi, yi)
        x = x + element[0] * Mi * yi
    }
    console.log(x + "mod" + M + "=" + x % M)

    return x % M
}

console.log(CRT([
    [2, 3],
    [3, 5],
    [2, 7]
]))
console.log(CRT([
    [12, 25],
    [9, 26],
    [23, 27]
]))

function MultiplicativeInverse(a, b) {
    let a0 = a
    let b0 = b
    let t0 = 0
    let t = 1
    let q = Math.floor(a0 / b0)
    let r = a0 - q * b0
    while (r > 0) {
        const temp = (t0 - q * t) % a
        t0 = t
        t = temp
        a0 = b0
        b0 = r
        q = Math.floor(a0 / b0)
        r = a0 - q * b0
    }
    if (b0 !== 1) {
        return false
    } else {
        return t
    }
}