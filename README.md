# cryptologyBase

密码学基础代码实现, JavaScript 为主， 小部分是 JAVA 版本

建议使用 LaTeX 插件阅读，更友好。

## 第一章 古典密码

### [1.1 移位密码加密](./ClassicalCryptography/ShiftCipher.java)

使用穷尽密钥搜索法破译如下利用移位密码加密的密文
ESPESTCOPIPCNTDPYPPODACZRCLXXTYR

`result`: The third exercise needs programming

### [1.2 维吉尼亚密码加密](./ClassicalCryptography/VigenereCipher.java)

试用维吉尼亚密码加密明文串：`we are discovered, save yourself`
这里密钥字为:`friday`

`result`: BV IUE BNJKRVCWVL, VATJ PWXRQJCN

### [1.3 希尔密码加密](./ClassicalCryptography/HillCipher.java)

计算定义在 Z26 上矩阵 K = $
\begin{bmatrix}
   1 & 11 & 12 \\
   4 & 23 & 2 \\
   17 & 15 & 9 \\
\end{bmatrix}$, 求逆$K^{-1}$,
并用 K 作为希尔密码体制的密钥完成对明文串:
looking forward to our national day
的加密和相应密文串的解密.

`result`:  
$detK = 5$
乘法逆元 $5^{-1}Mod26 = 21$
伴随矩阵 $K^* = \begin{bmatrix}
21 & 3 & 6 \\ 
24 & 13 & 20 \\ 
7 & 16 & 5 \\
\end{bmatrix}$
Z26 上 K 的逆 $K^-1 = 21K^* = 
\begin{bmatrix}
25 & 11 & 22 \\ 
10 & 13 & 4 \\ 
17 & 24 & 1 \\
\end{bmatrix}$

### [1.4 仿射密码分析](./ClassicalCryptography/DecodeAffineCipher.js)

解方程组 $
k1 * a + b = e1 、
k2 * a + b = e2
$

模 26 求逆速算

字符串 ax+b 的加密、解密

### [1.5 维吉尼亚密码分析](./ClassicalCryptography/DecodeVigenereCipher.js)

Kasiski 测试法
计算期望概率 Mg, 求出秘钥:

### [1.6 希尔密码分析](./ClassicalCryptography/DecodeHillCipher.js)

矩阵算法使用`matrix-js`，借助求模 26 的逆。

已知明文 breathtaking
已知密文 RUPOTENTOIFV
试确定加密秘钥矩阵（维数未知）
`result`: [ [ 3, 21, 20 ], [ 4, 15, 23 ], [ 6, 14, 5 ] ]

## 第三章 分组密码

### [3.1 AES 秘钥编排方案](./BlockCiphers/AESKeyExpansion.js)

    假设有128比特的AES密钥,用十六进制表示为
    2B7E151628AED2A6ABF7158809CF4F3C
    由上述种子密钥构造一个完整的密钥编排方案。

[sherleysong CSDN 密钥编排方案](https://blog.csdn.net/sherleysong/article/details/113542128)

## 第五章 RSA

### [5.1 Multiplicative Inverse 乘法逆](./RSA/MultiplicativeInverse.js)

$s*a+t*b=1$
$(75,28)$
$3*75+(-8)*28=1$
$t=-8$

### [5.2 中国剩余定理](./RSA/CRT.js)

有物不知其数，三三数之剩二，五五数之剩三，七七数之剩二。问物几何？

[sherleysong CSDN 中国剩余定理 Chinese remainder theorem(CRT)](https://blog.csdn.net/sherleysong/article/details/112095723)

### [5.3 平方-乘算法](./RSA/SquareMultiply.js)

著名的平方-乘算法可以把计算 x^c mod n 所需模乘的次数降低为最多 2l 次,其中 l 是 c 的二进制表示的比特数。
