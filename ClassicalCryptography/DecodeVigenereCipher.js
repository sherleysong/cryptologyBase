const SDK = {
    filterString: s => {
        s = s.replace(/ /g, '');
        s = s.replace(/\n/g, '');
        return s
    },
    // Kasiski测试法
    countKasiski: str => {
        let obj = {}
        let key = []
        for (let index = 2; index < str.length; index++) {
            const s = str[index - 2] + str[index - 1] + str[index]
            if (str.lastIndexOf(s) !== index - 2) {
                key.push(s)
            }
        }
        key.map(item => {
            const regexp = new RegExp(item, "g")
            obj[item] = str.match(regexp).length;
        })
        return sortObj(obj)
    }
}
const s = `
CHREEVOAHMAERATBIAXXWTNXBEEOPHBSBOMQEQERBW
RVXUOAKXAOSXXWEAHBWGJMMOMNKGRFVGXWTRZXWIAK
LXFPSKAUTEMNDCMGTSXMXBTUIADNGMGPSRELXNJELX
VRVPRTULHDNQWTWDTYGBPHXTFALJHASVBFXNGLLCHR
ZBWELEKMSJIKNBHWRJGNMGJSGLXFEYPHAGNRBIEQJT
AMRVLCRREMNDGLXRRIMGNSNRWCHROHAEYEVTAOEBBI
PEEREVKAKOEWADREMXMTBHHCHRTKDNVRZCHRCLOOHP
WOAIIWXNRMGWOIIFKEE
`
const originString = SDK.filterString(s);
const countKasiski = SDK.countKasiski(originString)
console.log(JSON.stringify(countKasiski)) // CHR 5
let arr = originString.split('CHR')
arr = arr.map((v, i) => {
    return v.length + (i === 0 ? 0 : 3)
})
let indexList = [arr[0]];
for (let i = 1; i < arr.length - 1; i++) {
    indexList.push(arr[i] + indexList[i - 1])
}
// console.log(indexList)

// const probList = [0.08167, 0.01492, 0.02782, 0.04253, 0.12702, 0.02228, 0.02015, 0.06094, 0.06966, 0.00153, 0.00772, 0.04025,
//     0.02406, 0.06749, 0.07507, 0.01929, 0.00095, 0.05987, 0.06327, 0.09056, 0.02758, 0.00978, 0.02360, 0.00150,
//     0.01974, 0.00074
// ]

const probList = [
    8.2, 1.5, 2.8, 4.3, 12.7, 2.2, 2.0, 6.1, 7.0, 0.2, 0.8, 4.0,
    2.4, 6.7, 1.5, 1.9, 0.1, 6.0, 6.3, 9.1, 2.8, 1.0, 2.4, 0.2, 2.0, 0.1
].map(item => item / 100)

const strArray = new Array(5).fill('')
for (let i = 0; i < originString.length; i += 5) {
    for (let j = 0; j < 5; j++) {
        if (originString[i + j]) {
            strArray[j] = strArray[j] + originString[i + j];
        }
    }
}

//重合指数法，求期望概率
function calcMG(string, g) {
    const list = new Array(26).fill(0)
    for (let i = 0; i < string.length; i++) {
        let loc = string[i].charCodeAt(0) - 65;
        list[loc] = list[loc] + 1
    }

    let Mg = 0
    for (let i = 0; i < 26; i++) {
        const pi = probList[i]
        const fig = list[(i + g) % 26]
        Mg += pi * fig / string.length

    }
    return Mg > 0.05 ? Mg : 0
}

let KEY = []
for (let j = 0; j < 5; j++) {
    for (let i = 0; i < 26; i++) {
        if (calcMG(strArray[j], i)) {
            KEY.push(i)
        }
        // console.log(calcMG(strArray[j], i), i, String.fromCharCode(i + 97))
    }
}

console.log(KEY)

let answer = '';
for (let i = 0; i < originString.length; i += 5) {
    for (let j = 0; j < 5; j++) {
        let element
        if (originString[i + j]) {
            element = originString[i + j].charCodeAt(0) - 65 - KEY[j]
            element = element % 26
            if (element < 0) {
                element = element + 26
            }
            answer = answer + String.fromCharCode(element + 97)
        }
    }
}

console.log(answer)

function sortObj(obj) {
    const keys = Object.keys(obj).sort(function (a, b) {
        return obj[b] - obj[a]
    })
    var newObj = {}
    for (var i = 0; i < keys.length; i++) {
        const key = keys[i]
        newObj[key] = obj[key]
    }
    return newObj
}

// output:
// {"CHR":5,"XXW":2,"XWT":2,"LXF":2,"EMN":2,"MND":2,"ELX":2,"GLX":2,"REM":2}
// [ 9, 0, 13, 4, 19 ]（秘钥）
// thealmondtreewasintentativeblossokthedayswerelongeroftenendingwitfmagnificenteveningsofcorrugatedpinkskiesthehuntingseasonwasoverwithhoundsandgunsputawayforsixmonthsthevineyardswerebusyagainasthewellorganizedfarmerstreatedtheirvinesandthekorelackabaisicalieighborshurriedtodothepruningtheysfouldfavedoneinnovember