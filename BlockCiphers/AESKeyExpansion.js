const k = `2B7E1516 28AED2A6 ABF71588 09CF4F3C`.split(" ");
const S = [
    [
        "63",
        "7c",
        "77",
        "7b",
        "f2",
        "6b",
        "6f",
        "c5",
        "30",
        "01",
        "67",
        "2b",
        "fe",
        "d7",
        "ab",
        "76",
    ],
    [
        "ca",
        "82",
        "c9",
        "7d",
        "fa",
        "59",
        "47",
        "f0",
        "ad",
        "d4",
        "a2",
        "af",
        "9c",
        "a4",
        "72",
        "c0",
    ],
    [
        "b7",
        "fd",
        "93",
        "26",
        "36",
        "3f",
        "f7",
        "cc",
        "34",
        "a5",
        "e5",
        "f1",
        "71",
        "d8",
        "31",
        "15",
    ],
    [
        "04",
        "c7",
        "23",
        "c3",
        "18",
        "96",
        "05",
        "9a",
        "07",
        "12",
        "80",
        "e2",
        "eb",
        "27",
        "b2",
        "75",
    ],
    [
        "09",
        "83",
        "2c",
        "1a",
        "1b",
        "6e",
        "5a",
        "a0",
        "52",
        "3b",
        "d6",
        "b3",
        "29",
        "e3",
        "2f",
        "84",
    ],
    [
        "53",
        "d1",
        "00",
        "ed",
        "20",
        "fc",
        "b1",
        "5b",
        "6a",
        "cb",
        "be",
        "39",
        "4a",
        "4c",
        "58",
        "cf",
    ],
    [
        "d0",
        "ef",
        "aa",
        "fb",
        "43",
        "4d",
        "33",
        "85",
        "45",
        "f9",
        "02",
        "7f",
        "50",
        "3c",
        "9f",
        "a8",
    ],
    [
        "51",
        "a3",
        "40",
        "8f",
        "92",
        "9d",
        "38",
        "f5",
        "bc",
        "b6",
        "da",
        "21",
        "10",
        "ff",
        "f3",
        "d2",
    ],
    [
        "cd",
        "0c",
        "13",
        "ec",
        "5f",
        "97",
        "44",
        "17",
        "c4",
        "a7",
        "7e",
        "3d",
        "64",
        "5d",
        "19",
        "73",
    ],
    [
        "60",
        "81",
        "4f",
        "dc",
        "22",
        "2a",
        "90",
        "88",
        "46",
        "ee",
        "b8",
        "14",
        "de",
        "5e",
        "0b",
        "db",
    ],
    [
        "e0",
        "32",
        "3a",
        "0a",
        "49",
        "06",
        "24",
        "5c",
        "c2",
        "d3",
        "ac",
        "62",
        "91",
        "95",
        "e4",
        "79",
    ],
    [
        "e7",
        "c8",
        "37",
        "6d",
        "8d",
        "d5",
        "4e",
        "a9",
        "6c",
        "56",
        "f4",
        "ea",
        "65",
        "7a",
        "ae",
        "08",
    ],
    [
        "ba",
        "78",
        "25",
        "2e",
        "1c",
        "a6",
        "b4",
        "c6",
        "e8",
        "dd",
        "74",
        "1f",
        "4b",
        "bd",
        "8b",
        "8a",
    ],
    [
        "70",
        "3e",
        "b5",
        "66",
        "48",
        "03",
        "f6",
        "0e",
        "61",
        "35",
        "57",
        "b9",
        "86",
        "c1",
        "1d",
        "9e",
    ],
    [
        "e1",
        "f8",
        "98",
        "11",
        "69",
        "d9",
        "8e",
        "94",
        "9b",
        "1e",
        "87",
        "e9",
        "ce",
        "55",
        "28",
        "df",
    ],
    [
        "8c",
        "a1",
        "89",
        "0d",
        "bf",
        "e6",
        "42",
        "68",
        "41",
        "99",
        "2d",
        "0f",
        "b0",
        "54",
        "bb",
        "16",
    ],
];

let keyList = [k[0], k[1], k[2], k[3]];

const RCON = [
    "01000000",
    "02000000",
    "04000000",
    "08000000",
    "10000000",
    "20000000",
    "40000000",
    "80000000",
    "1b000000",
    "36000000",
];

function roundN(round) {
    //  00010203 -> 03020100
    var reverseWord = (str) => {
        return (
            str.charAt(6) +
            str.charAt(7) +
            str.charAt(4) +
            str.charAt(5) +
            str.charAt(2) +
            str.charAt(3) +
            str.charAt(0) +
            str.charAt(1)
        );
    };

    var xor16 = (str1, str2) => {
        // 十六进制转二进制
        function trans16to2(str) {
            return trans10to2(parseInt(str, 16));
        }
        // 十进制转二进制, "0" -> "0000"
        function trans10to2(str) {
            let v = parseInt(str).toString(2);
            for (let j = 0; j < 4 - v.length; j++) {
                v = "0".repeat(4 - v.length) + v; // 补齐前面的0
            }
            return v;
        }

        function xor2(str1, str2) {
            let s = "";
            for (let i = 0; i < str1.length; i++) {
                s += str1[i] === str2[i] ? 0 : 1;
            }
            return s;
        }

        const e = [];
        for (let i = 0; i < 8; i = i + 2) {
            const cur1 = trans16to2(str1[i]);
            const cur2 = trans16to2(str2[i]);
            const result1 = parseInt(xor2(cur1, cur2), 2).toString(16);
            const cur3 = trans16to2(str1[i + 1]);
            const cur4 = trans16to2(str2[i + 1]);
            const result2 = parseInt(xor2(cur3, cur4), 2).toString(16);
            e.push(result1 + result2);
            // console.log(result1, result2)
        }
        return e.reverse().join("");
    };
    const n = round * 4;

    // 循环位移
    // 00010203 -> 01020300
    var rotWord = (s) => {
        console.log(s, s.slice(2, 8), s.slice(0, 2));
        return s.slice(2, 8) + s.slice(0, 2);
    };
    const rotN = rotWord(keyList[n - 1]);
    console.log("rotN:", rotN);

    // 使用AES的S盒加密
    // 'CF4F3C09'  ->   '8a84eb01'
    var subWord = (element) => {
        const ele1 = element.slice(0, 2);
        const ele2 = element.slice(2, 4);
        const ele3 = element.slice(4, 6);
        const ele4 = element.slice(6, 8);
        const Sbox1 = S[parseInt(ele1.charAt(0), 16)][parseInt(ele1.charAt(1), 16)];
        const Sbox2 = S[parseInt(ele2.charAt(0), 16)][parseInt(ele2.charAt(1), 16)];
        const Sbox3 = S[parseInt(ele3.charAt(0), 16)][parseInt(ele3.charAt(1), 16)];
        const Sbox4 = S[parseInt(ele4.charAt(0), 16)][parseInt(ele4.charAt(1), 16)];
        return Sbox1 + Sbox2 + Sbox3 + Sbox4;
    };
    const subN = subWord(rotN);
    console.log("subN:", subN);
    const temp = reverseWord(xor16(subN, RCON[round - 1]));
    console.log("temp:", temp); //f6bb3860
    const rsn0 = reverseWord(xor16(keyList[n - 4], temp));
    console.log("rsn0:", rsn0); // b692cf0b
    const rsn1 = reverseWord(xor16(keyList[n - 3], rsn0));
    console.log("rs01:", rsn1); //643dbdf1
    const rsn2 = reverseWord(xor16(keyList[n - 2], rsn1));
    console.log("rs02:", rsn2); //be9bc500
    const rsn3 = reverseWord(xor16(keyList[n - 1], rsn2));
    console.log("rs03:", rsn3); //6830b3fe

    keyList = [...keyList, rsn0, rsn1, rsn2, rsn3];
}

for (let i = 1; i < 11; i++) {
    roundN(i);
}

console.log(keyList.join('","').toUpperCase());
// 2B7E1516,28AED2A6,ABF71588,09CF4F3C,A0FAFE17,88542CB1,23A33939,2A6C7605,F2C295F2,7A96B943,5935807A,7359F67F,3D80477D,4716FE3E,1E237E44,6D7A883B,EF44A541,A8525B7F,B671253B,DB0BAD00,D4D1C6F8,7C839D87,CAF2B8BC,11F915BC,6D88A37A,110B3EFD,DBF98641,CA0093FD,4E54F70E,5F5FC9F3,84A64FB2,4EA6DC4F,EAD27321,B58DBAD2,312BF560,7F8D292F,AC7766F3,19FADC21,28D12941,575C006E,D014F9A8,C9EE2589,E13F0CC8,B6630CA6