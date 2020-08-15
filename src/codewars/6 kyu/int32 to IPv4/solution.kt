// Source : https://www.codewars.com/kata/52e88b39ffb6ac53a400022e
// Author : Frank Faustino
// Date   : 2020-08-14

// a) Using bitwise and bitshift operators (explained below)
fun longToIP(ip: UInt): String = "${ip shr 24 and 255u}.${ip shr 16 and 255u}.${ip shr 8 and 255u}.${ip and 255u}"

// b) Using kotlin built-in methods
// Convert unsigned integer to string representing 32 bits
// i.e., 2154959208u -> "10000000011100100001000101101000"
// Split the string into a list of 4 octets (8 bits)
// i.e., [10000000, 01110010, 00010001, 01101000]
// Convert each octet from binary to decimal notation
// i.e., [128, 114, 17, 104]
fun longToIP(ip: UInt): String {
    return ip.toString(radix = 2)
            .padStart(32, '0')
            .chunked(8)
            .map { it.toInt(radix = 2) }
            .joinToString(".")
}

// https://oscarliang.com/what-s-the-use-of-and-0xff-in-programming-c-plus-p/
// 255 is the decimal representation of 0xFF (hex literal for 11111111)
print(255u.toString(radix = 2))
// "and" operator compares corresponding bits of two values
// If both bits are 1, it evaluates to 1 and vice versa
// i.e., 01101000 & 11111111 -> 01101000 / 104u and 255u -> 104u
print(("01101000".toInt(radix = 2) and "11111111".toInt(radix = 2)).toString(radix = 2).padStart(8, '0'))
print(104u and 255u)
// "shr" operator shifts the bit pattern to the right by the specified number of bits
// i.e., 2154959208u >> 8 -> 8417809
// i.e., 10000000011100100001000101101000 >> 8 -> 100000000111001000010001
print((2154959208u shr 8).toString(radix = 2).padStart(8, '0'))
// & 0xFF (and 11111111) is used again to mask only the last 8 bits, disregarding the rest of the bits
// 100000000111001000010001 & 11111111 -> 00010001
print(8417809u and 255u)
print("100000000111001000010001".toInt(radix = 2) and "00010001".toInt(radix = 2))
// Repeat by shifting the bit pattern >> 16 and >> 24 and masking their last 8 bits
// i.e., 10000000011100100001000101101000 >> 16 & 0xFF -> 01110010
// i.e., 10000000011100100001000101101000 >> 24 & 0xFF -> 10000000
print((2154959208u shr 24 and 255u).toString(radix = 2).padStart(8, '0'))
// Put them all together:
// 10000000 + 01110010 + 00010001 + 01101000 = 128.114.17.104