# cryptologyBase

密码学基础代码实现, JavaScript 为主， 小部分是 JAVA 版本
本 readme 可用支持 LaTeX 的插件阅读，github 默认支持不友好。

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

### [1.4 仿射密码分析](./ClassicalCryptography/DecodeAffineCipher.java)

解方程组 $
k1 * a + b = e1 、
k2 * a + b = e2
$

模 26 求逆速算

字符串 ax+b 的加密、解密

### [1.5 维吉尼亚密码分析](./ClassicalCryptography/DecodeVigenereCipher.java)

Kasiski 测试法
计算期望概率 Mg, 求出秘钥:

### [1.6 希尔密码分析](./ClassicalCryptography/DecodeHillCipher.java)

矩阵算法使用`matrix-js`，借助求模 26 的逆。

已知明文 breathtaking
已知密文 RUPOTENTOIFV
试确定加密秘钥矩阵（维数未知）
`result`: [ [ 3, 21, 20 ], [ 4, 15, 23 ], [ 6, 14, 5 ] ]
