const SDK = {
    // 解密函数 
    decode: (s, a, b) => {
        let result = []
        for (let index = 0; index < s.length; index++) {
            let temp = ((s[index].charCodeAt(0) - 65) * a + b) % 26
            if (temp < 0) {
                temp = temp + 26
            }
            result.push(String.fromCharCode(temp + 97))
        }
        return result
    },
    // 加密函数
    encode: (s, a, b) => {
        let result = []
        for (let index = 0; index < s.length; index++) {
            let temp = ((s[index].charCodeAt(0) - 97) * a + b) % 26
            if (temp < 0) {
                temp = temp + 26
            }
            result.push(String.fromCharCode(temp + 65))
        }
        return result
    },
    fsAB: (k1, e1, k2, e2) => {
        // 解方程组
        // k1 * a + b = e1
        // k2 * a + b = e2
        let result = {}
        for (let a = 1; a < 26; a++) {
            let b = (e1 - k1 * a) % 26
            if (b < 0) {
                b = b + 26
            }
            if ((k2 * a + b - e2) % 26 == 0) {
                result.a = a
                result.b = b
                break
            }
        }
        return result
    },
    XToY: (a, b) => {
        // 模26求逆速算
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
}
export default SDK

let s = `AOPC GUDE YKRO IFKG BEFM CPIY CRAR DEPB 
AQUF EPGH KJPK DDCJ GKPJ IEVC GEBE BAYC 
FAMC XCER IARE HAFF ERJG HCRA OKBB KYAR 
RCED KFAI GHCP CDCK DFCB KKME FEMC GKXC 
OKRQ KYYE BKYC ERBH CCRJ KVEI BKPS AQKU 
FJRK BIDC EMEG HKFC ICRB CRQC ARQK YDER 
SERJ GEIQ KRIA JCPC JRKB BKKX PAOH B `

// output:
//     C - > e, B - > t
// 加密函数为19x + 4
// 解密函数为11y - 18
// result:
//     Igrewupamongslowtalkersmeninparticularwhodroppedwordsafewatatimelikebeansinahillandwhenigottominneapoliswherepeopletookalakewobegoncommatomeantheendofastoryicouldnotspeakawholesentenceincompanyandwasconsiderednottoobright