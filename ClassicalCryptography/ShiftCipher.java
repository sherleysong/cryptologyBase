/*
1.使用穷尽密钥搜索法破译如下利用移位密码加密的密文
ESPESTCOPIPCNTDPYPPODACZRCLXXTYR
*
* */
public class ShiftCipher {
    public static void main(String[] arg) {
        String s = "ESPESTCOPIPCNTDPYPPODACZRCLXXTYR";
        for (int i = 0; i < 26; i++) {
            for (int j = 0; j < s.length(); j++) {
                if (i + s.charAt(j) - 65 >= 26) {
                    System.out.print((char) (i + s.charAt(j) - 26 + 32));
                } else {
                    System.out.print((char) (i + s.charAt(j) + 32));
                }
            }
            System.out.println();
        }
    }
}
