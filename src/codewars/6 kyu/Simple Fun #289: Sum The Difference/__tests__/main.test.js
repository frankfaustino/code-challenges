const solution = require('../main')

describe('Codewars - Simple Fun #289: Sum the Difference', function() { 
    it('It should work for basic tests.', () => {
        expect(solution('(-100) + 100  - (-200) + 1')).toEqual(-3)
        expect(solution('(-25) + (-75) + 50 - 40 - (22 + 2)')).toEqual(-8)
        expect(solution('999 + 999 + 999 + 888 + 888 - (-777)')).toEqual(-40)
        expect(solution('(-25) + (-75 )+ 50 - (-40 ) - (-80)')).toEqual(-22)
        expect(solution('(2-262+(+))7182(++1 ')).toEqual(9)
        expect(solution(' - -+ ')).toEqual(0)
        expect(solution('2 + -)     2        ')).toEqual(4)
    })

    it('It should work for these tests too.', () => {
        expect(solution('2+  7 +)3(1()-)))8269(( +(( + ++ )3))8)0-5()-)+-3-8-  +4 )501 289')).toEqual(2) 
        expect(solution('-) -1-384(3)0-(96+3( -26 9)) ( )-+0++ ))- +)(+-)-4 9+)6)584-- -)-087(9-(+)-()+26 - )-+0+4-  (3(')).toEqual(3) 
        expect(solution('62+-3+( +(')).toEqual(11)
        expect(solution(') 55 5(-) 7))- 4)6-83- - -++(96 + )(4 82)10778+4 -246+(1')).toEqual(-16)
        expect(solution('( ((3- ( )8(---(+ )(4)7)(9(5++59 +52-(( )--367( ( (4+5 +7(1+6-3- +')).toEqual(-27) 
    })
})

