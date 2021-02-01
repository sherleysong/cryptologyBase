import matrix from 'matrix-js'

function XToY(a, b) {
    // 模26乘法求逆速算
    const keyValue = {
        1: 1,
        3: 9,
        5: 21,
        7: 15,
        9: 3,
        11: 19,
        15: 7,
        17: 23,
        19: 11,
        21: 5,
        23: 17,
        25: 25
    };
    const c = keyValue[a]
    let d = (26 - c * b) % 26
    return [c, d]
}

const hillBase = {
    encode: (s, K, m) => {
        let result = "";
        for (let i = 0; i < s.length - 1; i = i + m) {
            let arrxyz = []
            for (let j = 0; j < m; j++) {
                arrxyz[j] = s[i + j].charCodeAt(0) - 97;
            }
            let out123 = new Array(m).fill(0)
            for (let j = 0; j < m; j++) {
                for (let k = 0; k < m; k++) {
                    out123[j] = out123[j] + K[k][j] * arrxyz[k];
                }
            }
            for (let j = 0; j < m; j++) {
                result = result + String.fromCharCode(out123[j] % 26 + 65);
            }
        }
        return result;
    },
    product: (A, B) => {
        let m = matrix(A).prod(matrix(B))
        return m.map(row => row.map(col => col % 26))
    },
    invMatrix: K => {
        K = matrix(K)
        const detK = K.det();
        let detKMod26 = detK % 26;
        if (detKMod26 < 0) {
            detKMod26 = detKMod26 + 26
        }
        // 求乘法逆元
        const detInvKMod26 = XToY(detKMod26)[0]

        // console.log(detK, detKMod26, detInvKMod26)
        if (!detInvKMod26) {
            return false
        }
        const adjK = matrix(K.inv()).map((value, row, col, mat) => {
            const v = Math.round(value * detK) % 26
            if (v < 0) return v + 26
            return v
        });

        const invKMod26 = matrix(adjK).map(value => {
            const v = value * detInvKMod26 % 26
            if (v < 0) return v + 26
            return v
        })
        return invKMod26
    }
}

const decode = 'breathtaking'
// [1, 17, 4, 0],[19, 7, 19, 0],[10, 8, 13, 6]
const encode = 'RUPOTENTOIFV'
// [17, 20, 15, 14],[19, 4, 13, 19],[14, 18, 20, 15],

const A2 = [
    [1, 17],
    [19, 0],
]
const B2 = [
    [17, 20],
    [13, 19]
]
const AInv2 = hillBase.invMatrix(A2)
const K2 = hillBase.product(AInv2, B2)
console.log("二维秘钥矩阵：", AInv2, K2)
const encodeS2 = hillBase.encode(decode, K2, 2);
console.log("二维完整加密结果：", encodeS2)

const A3 = [
    [1, 17, 4],
    [0, 19, 7],
    [19, 0, 10]
]
const B3 = [
    [17, 20, 15],
    [14, 19, 4],
    [13, 19, 14]
]
const AInv3 = hillBase.invMatrix(A3)
const K3 = hillBase.product(AInv3, B3)
console.log("三维秘钥矩阵：", K3)
const encodeS3 = hillBase.encode(decode, K3, 3);
console.log("三维完整加密结果：", encodeS3)

// 二维秘钥矩阵： [ [ -0, 11 ], [ 23, 7 ] ] [ [ 13, 1 ], [ 14, 21 ] ]
// 二维完整加密结果： RUAEHKNTIWTJ
// 三维秘钥矩阵： [ [ 3, 21, 20 ], [ 4, 15, 23 ], [ 6, 14, 5 ] ]
// 三维完整加密结果： RUPOTENTOIFV