/*
2.试用维吉尼亚密码加密明文串： 
we are discovered, save yourself
这里密钥字为: 
friday
*
* */
public class VigenereCipher {
    public static void main(String[] arg) {
        String s = "we are discovered, save yourself";
        String key = "friday";

        System.out.println("原字母：");
        System.out.println(s);

        System.out.println("明文编码：");
        for (int i = 0; i < s.length(); i++) {
            char c0 = s.charAt(i);
            if (c0 - 'z' <= 0 & c0 - 'a' >= 0) {
                System.out.print(c0 - 'a');
            } else {
                System.out.print(c0);
            }
        }

        System.out.println();
        System.out.println("秘钥编码：");
        int k1 = 0;
        for (int i = 0; i < s.length(); i++) {
            char c1 = s.charAt(i);
            if (c1 - 'z' <= 0 & c1 - 'a' >= 0) {
                char C = key.charAt(k1 % 6);
                System.out.print(C - 'a');
                k1++;
            } else {
                System.out.print(c1);
            }
        }
        System.out.println();
        System.out.println("密文：");

        int k2 = 0;
        for (int i = 0; i < s.length(); i++) {
            char c2 = s.charAt(i);
            if (c2 - 'z' <= 0 & c2 - 'a' >= 0) {
                char C = key.charAt(k2 % 6);
                System.out.print((char) ((c2 - 'a' + C - 'a') % 26 + 65));
                k2++;
            } else {
                System.out.print(c2);
            }
        }
        System.out.println();
    }
}
