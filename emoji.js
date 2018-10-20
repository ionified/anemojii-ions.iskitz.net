;
~
{ re:
    { id: 'anemojii.emoji@ions.iskitz.net'
    , is: "anemojii's emoji ions"
    , by: 'mike.lee@iskitz'
    , on: -7.20151021
    , to: +9.20181021
    , at: +2.0
    , it:
        [ "found an ionify bug where ion members named next [new] have no .ion field"
        , "randomly chooses to create ion, aesop | storie type emoji"
        
        , "will create storie emoji if eval (left ear +[0.0]+ right ear) is an Error"
        +       / left ear ( eye nose eye ) right ear /

        , "will create ion emoji, like" + {'ö':'~'} +" via"
        + "       left ear {'eye nose eye'} right ear"
        ]
    }

, new
:   function next ()
      { var emoji = next.ion
          , types = emoji.types
          , type  = types [Math.random * types.length | 0]
          ; return emoji [type]()
      }

, types
:   ['aesop', 'ion', 'storie']

, aesop
:   function aesop ()
      { var emoji = aesop.ion
          , add   = emoji.choose
          , eyes  = emoji.eyes
          , nose  = emoji.nose
          , ears  = emoji.ears
          , ear   = Math.random * ears.left.length | 0
          ; return  ears.left [ear]
                  + "['"
                  + add (eyes)
                  + ' '
                  + add (nose)
                  + ' '
                  + add (eyes)
                  + "']"
                  + ears.right [ear]
      }

, ion
:   function ion ()
      { return "+{'ö':'~'};"
      }

, storie
:   function storie ()
      { return "+/q('ö . ~')p/;"
      }

, choose
:   function choose (feature)
      { return feature [Math.random * feature.length | 0]
      }

, eyes
:   [ 'o', 'ô', 'õ', 'ō', 'ø', 'ó', 'ò', 'ö'
    , 'O', 'Ô', 'Õ', 'Ō', 'Ø', 'Ó', 'Ò', 'Ö'
    , '+', '-', '•', '~', '0', '*', '^'
  //, '@', '#', ' ͡°'
    ]

, ears
:   { left
    :   [ /*'d',  'q',*/'~',  '-'
        , '0-' , '0^', '0*', '0+', '0<', '0&', '0%'
        , '0<<'    //, '0|'
        , '8-' , '8^', '8*', '8+', '8<'//'8&', '8%'
        , '8<<'    //, '8|'
        ]

    , right
    :   [ /*'b',  'p',*/';', ';'
        ,  '-0', '^0', '*0', '+0', '>0', '&0', '%0'
        , '>>0'    //, '|0'
        ,  '-8', '^8', '*8', '+8', '>8'//'&8', '%8'
        , '>>8'    //, '|8'
        ]
    }

, nose
:   [ '.', ',', ':', ';', 'ᴗ', '¿', 'ʖ', ' ͜ʖ'
    //, '؈', 'ډ', 'ڊ', 'ڋ', 'ڌ', 'ڍ', 'ڎ', 'ڏ', 'ڐ'
    ]
}
;