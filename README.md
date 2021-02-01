# cryptologyBase

密码学基础代码实现, JavaScript 为主， 小部分是 JAVA 版本

## 第一章 古典密码

### [1.1 移位密码](./ClassicalCryptography/MMShift26.java)

使用穷尽密钥搜索法破译如下利用移位密码加密的密文
ESPESTCOPIPCNTDPYPPODACZRCLXXTYR

`result`: The third exercise needs programming

### [1.2 维吉尼亚密码](./ClassicalCryptography/MMVirginian.java)

试用维吉尼亚密码加密明文串：`we are discovered, save yourself`
这里密钥字为:`friday`

`result`: BV IUE BNJKRVCWVL, VATJ PWXRQJCN

### [1.3 希尔密码](./ClassicalCryptography/MMHillCipher.java)

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
