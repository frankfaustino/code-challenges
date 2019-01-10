const amendTheSentence = require('../amendTheSentence')

describe('Codesignal — amendTheSentence', () => {
  test('Simple tests', () => {
    expect(amendTheSentence('CodesignalIsAwesome')).toEqual('codesignal is awesome')
    expect(amendTheSentence('Hello')).toEqual('hello')
    expect(amendTheSentence('vSKwWDjwIerQKMgVaAniorRJlerbKpDgvyKBLPNwSRWtylqKewNFtERNuUBBHAsGkTSSfdhQHJYvAighAdeG')).toEqual('v s kw w djw ier q k mg va anior r jlerb kp dgvy k b l p nw s r wtylq kew n ft e r nu u b b h as gk t s sfdh q h j yv aigh ade g')
  })
  test('Complex tests', () => {
    expect(amendTheSentence('iFvFAxtViLJDuWWXJesppOcLVdRAJZwBobdczkkWSPHzFLfyvmJYPdqYqRKKvLGYLwEFXcJiyYWLqjBvHjeqE')).toEqual('i fv f axt vi l j du w w x jespp oc l vd r a j zw bobdczkk w s p hz f lfyvm j y pdq yq r k kv l g y lw e f xc jiy y w lqj bv hjeq e')
    expect(amendTheSentence('JhBkPBaozMnBqEWiIaOEje')).toEqual('jh bk p baoz mn bq e wi ia o eje')
    expect(amendTheSentence('tfRZGdYurvrVyEuHbOJcaXnZrsEUr')).toEqual('tf r z gd yurvr vy eu hb o jca xn zrs e ur')
    expect(amendTheSentence('VizQEogigkRZJacVELulHjG')).toEqual('viz q eogigk r z jac v e lul hj g')
    expect(amendTheSentence('DLwgqUxVFFNjbfMSuRuVhWZKVWSfLQrTXUxXdGJErkxWTzGAnbIGQeivRcdBbKrknbsdFRjzXAvqUDStpXx')).toEqual('d lwgq ux v f f njbf m su ru vh w z k v w sf l qr t x ux xd g j erkx w tz g anb i g qeiv rcd bb krknbsd f rjz x avq u d stp xx')
    expect(amendTheSentence('VEOwBXWxDTfDTnQZRKdnrOqPBSGuioJYdmISCoIpgXCLXNgnHQnxSntODxGZtimkoOeYlAHUuAwwOhmMkmxeBqdsxRynA')).toEqual('v e ow b x wx d tf d tn q z r kdnr oq p b s guio j ydm i s co ipg x c l x ngn h qnx snt o dx g ztimko oe yl a h uu aww ohm mkmxe bqdsx ryn a')
    expect(amendTheSentence('bFLHXlURIOoBJdwYpBpecxrplXNowNtwDVloJNgnUNBNDMTCnhmcPtuTWtgEYXyZlbRoBzoulOttIaEImRYSOSKpJyfBM')).toEqual('b f l h xl u r i oo b jdw yp bpecxrpl x now ntw d vlo j ngn u n b n d m t cnhmc ptu t wtg e y xy zlb ro bzoul ott ia e im r y s o s kp jyf b m')
  })
})