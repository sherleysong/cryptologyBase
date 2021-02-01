/*
    3.计算定义在Z26上矩阵K = { { 1, 11, 12 }, { 4, 23, 2 }, { 17, 15, 9 } }的逆K-1,
    并用K作为希尔密码体制的密钥完成对明文串:
    looking forward to our national day
    的加密和相应密文串的解密.
* */

public class HillCipher {
    public static void main(String[] arg) {
        String s = "lookingforwardtoournationalday";
        String encodeS = encode(s);
        String decodeS = decode(encodeS);
        System.out.println("加密结果：");
        System.out.println(encodeS);
        System.out.println("解密结果：");
        System.out.println(decodeS);
    }

    private static String encode(String s) {
        String result = "";
        int K[][] = { { 1, 11, 12 }, { 4, 23, 2 }, { 17, 15, 9 } };
        for (int i = 0; i < s.length() - 1; i = i + 3) {
            int x = s.charAt(i) - 'a';
            int y = s.charAt(i + 1) - 'a';
            int z = s.charAt(i + 2) - 'a';
            int out1 = K[0][0] * x + K[1][0] * y + K[2][0] * z;
            int out2 = K[0][1] * x + K[1][1] * y + K[2][1] * z;
            int out3 = K[0][2] * x + K[1][2] * y + K[2][2] * z;
            result += ((char) (out1 % 26 + 97));
            result += ((char) (out2 % 26 + 97));
            result += ((char) (out3 % 26 + 97));
        }
        return result;
    }

    private static String decode(String s) {
        String result = "";
        int InvK[][] = { { 25, 11, 22 }, { 10, 13, 4 }, { 17, 24, 1 } };

        for (int i = 0; i < s.length() - 1; i = i + 3) {
            int x = s.charAt(i) - 'a';
            int y = s.charAt(i + 1) - 'a';
            int z = s.charAt(i + 2) - 'a';
            int out1 = InvK[0][0] * x + InvK[1][0] * y + InvK[2][0] * z;
            int out2 = InvK[0][1] * x + InvK[1][1] * y + InvK[2][1] * z;
            int out3 = InvK[0][2] * x + InvK[1][2] * y + InvK[2][2] * z;
            result += ((char) (out1 % 26 + 97));
            result += ((char) (out2 % 26 + 97));
            result += ((char) (out3 % 26 + 97));
        }
        return result;
    }

}
