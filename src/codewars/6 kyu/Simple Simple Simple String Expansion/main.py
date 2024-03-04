# Source : https://www.codewars.com/kata/5ae326342f8cbc72220000d2
# Author : Frank Faustino
# Date   : 2024-03-03

# Time complexity  : O(n)
# Space complexity : O(n)
def string_expansion(s):
    output = ''
    x = 0
    for index, char in enumerate(s):
        if char.isalpha():
            y = 0
            if index > 0 and s[index-1].isdigit():
                x = int(s[index-1]) - 1
            while y <= x:
                output += char
                y += 1
    return output

# Normal cases
print(string_expansion('3D2a5d2f'),'DDDaadddddff')
print(string_expansion('4D1a8d4j3k'),'DDDDaddddddddjjjjkkk')
print(string_expansion('4D2a8d4j2f'),'DDDDaaddddddddjjjjff')
print(string_expansion('3n6s7f3n'),'nnnssssssfffffffnnn')
print(string_expansion('0d4n8d2b'),'nnnnddddddddbb')
print(string_expansion('0c3b1n7m'),'bbbnmmmmmmm')
print(string_expansion('7m3j4ik2a'),'mmmmmmmjjjiiiikkkkaa')
print(string_expansion('3A5m3B3Y'),'AAAmmmmmBBBYYY')
print(string_expansion('5M0L8P1'),'MMMMMPPPPPPPP')
print(string_expansion('2B'),'BB')
print(string_expansion('7M1n3K'),'MMMMMMMnKKK')
print(string_expansion('A4g1b4d'),'Aggggbdddd')

# Repeated numerals
print(string_expansion('111111'),'')
print(string_expansion('4d324n2'),'ddddnnnn')
print(string_expansion('5919nf3u'),'nnnnnnnnnfffffffffuuu')
print(string_expansion('2n1k523n4i'),'nnknnniiii')
print(string_expansion('6o23M32d'),'ooooooMMMdd')
print(string_expansion('1B44n3r'),'Bnnnnrrr')
print(string_expansion('M21d1r32'),'Mdr')
print(string_expansion('23M31r2r2'),'MMMrrr')
print(string_expansion('8494mM25K2A'),'mmmmMMMMKKKKKAA')
print(string_expansion('4A46D6B3C'),'AAAADDDDDDBBBBBBCCC')
print(string_expansion('23D42B3A'),'DDDBBAAA')
print(string_expansion('143D36C1A'),'DDDCCCCCCA')

# Repeated alphabetic characters
print(string_expansion('asdf'),'asdf')
print(string_expansion('23jbjl1eb'),'jjjbbbjjjllleb')
print(string_expansion('43ibadsr3'),'iiibbbaaadddsssrrr')
print(string_expansion('123p9cdbjs'),'pppcccccccccdddddddddbbbbbbbbbjjjjjjjjjsssssssss')
print(string_expansion('2309ew7eh'),'eeeeeeeeewwwwwwwwweeeeeeehhhhhhh')
print(string_expansion('312987rfebd'),'rrrrrrrfffffffeeeeeeebbbbbbbddddddd')
print(string_expansion('126cgec'),'ccccccggggggeeeeeecccccc')
print(string_expansion('1chwq3rfb'),'chwqrrrfffbbb')
print(string_expansion('389fg21c'),'fffffffffgggggggggc')
print(string_expansion('239vbsac'),'vvvvvvvvvbbbbbbbbbsssssssssaaaaaaaaaccccccccc')
print(string_expansion('davhb327vuc'),'davhbvvvvvvvuuuuuuuccccccc')
print(string_expansion('cvyb239bved2dv'),'cvybbbbbbbbbbvvvvvvvvveeeeeeeeedddddddddddvv')

# Empty string
print(string_expansion(''),'')

