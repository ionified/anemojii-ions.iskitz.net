;
~
{ re:
    { id: 'anemojii.emoji@ions.iskitz.net'
    , is: "anemojii's emoji ions"
    , by: 'mike.lee@iskitz'
    , on: -7.20151021
    , to: +9.20181021
    , at: +2.1
    , it:
        [ "creates a random ion, aesop | storie type emoji for each request"
        , "found an ionify bug where ion members named next [new] have no .ion field"
        ]
    }

, new
:   function next ()
      { var emoji = next.ion
          , types = emoji.types
          , type  = types [Math.random * types.length | 0]
          ; return emoji.create (emoji [type])
      }

, types
:   ['aesop', 'ion', 'storie']

, create
:   function create (compose)
      { var emoji = create.ion
          , get   = emoji.choose
          , eyes  = emoji.eyes
          , ears  = emoji.ears
          , ear   = Math.random * ears.left.length | 0
          , face  = { ears
                    :   { left  : ears.left  [ear]
                        , right : ears.right [ear]
                        }
                    , eyes
                    :   { left  : get (eyes)
                        , right : get (eyes)
                        }
                    , nose
                    :   get (emoji.nose)
                    }
        return compose (face)
      }

, aesop
:   function aesop (emoji)
      { with (emoji)
          return  ( ears.left
                  + "['"+ eyes.left +' '+ nose +' '+ eyes.right +"']"
                  + ears.right
                  )
      }

, ion
:   function ion (emoji)
      { with (emoji)
          return ears.left +"{'"+ eyes.left +"':'"+ eyes.right +"'}"+ ears.right
      }

, storie
:   function storie (emoji)
      { with (emoji) return '+/ d('+ eyes.left +' '+ nose +' '+ eyes.right +')b /;'
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
      //, '0<<'    //, '0|'
        , '8-' , '8^', '8*', '8+', '8<'//'8&', '8%'
      //, '8<<'    //, '8|'
        ]

    , right
    :   [ /*'b',  'p',*/';', ';'
        ,  '-0', '^0', '*0', '+0', '>0', '&0', '%0'
      //, '>>0'    //, '|0'
        ,  '-8', '^8', '*8', '+8', '>8'//'&8', '%8'
      //, '>>8'    //, '|8'
        ]
    }

, nose
:   [ '.', ',', ':', ';', 'ᴗ', '¿', 'ʖ', ' ͜ʖ'
, '؈', 'ډ', 'ڊ', 'ڋ', 'ڌ', 'ڍ', 'ڎ', 'ڏ', 'ڐ'
    ]
}
;