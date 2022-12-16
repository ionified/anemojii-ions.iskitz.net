;
~
{ re:
    { id: 'anemojii.emoji@ions.iskitz.net'
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.👨🏾‍💻.lee@iskitz']
    , as: {emoji:-0.001}
    , on: -27.201510214
    , to: -18.578309226
    , at: + 5.21
    , is:
        [ "anemojii's emoji"
        , "creating a random ion, aesop | storie type emoji on each request"
        ],
      we:
        [ "know there was a challenge with ion members named next lacking .with"
        , "like emoji parts in their own ion separate from their construction"
        ]
    },

  new:
    function next ()
      { var emoji = next.with.its
          , types = emoji.types
          , type  = types [Math.random * types.length | 0]
          ; return emoji.create (emoji [type])
      },

  types:
    ['aesop', 'ion'/*, 'number'*/, 'storie'/*, 'string'*/
    ],

  create:
    function create (compose)
      { var emoji = create.with.its
          , get   = emoji.choose
          , eyes  = emoji.eyes
          , eye   = Math.random * eyes.length | 0
          , ears  = emoji.ears
          , ear   = Math.random * ears.left.length | 0
          , face  = { left:
                        { ear: ears.left [ear]
                        , eye: eyes [eye] //get (eyes)
                        },
                      right:
                        { ear: ears.right [ear]
                        , eye: eyes [eye] //get (eyes)
                        },
                      nose:
                        get (emoji.nose)
                    }
        return compose (face)
      },

  aesop:
    function aesop (emoji)
      { with (emoji)
          return  ( left.ear
                  + "['"+ left.eye +' '+ nose +' '+ right.eye +"']"
                  + right.ear
                  )
      },

  ion:
    function ion (emoji)
      { with (emoji)
          return left.ear +"{'"+ left.eye +"':'"+ right.eye +"'}"+ right.ear
      },

  number:
    function number (emoji)
      { []^0.0^[] , []*0.0*[] , []+0.0+[] , []-0.0-[] , []|0.0|[] & []%0.0%[]
        with (emoji)
          return left.ear + '0.0' + right.ear
      },

  storie:
    function storie (emoji)
      { with (emoji) return "+/ d('"+ left.eye +' '+ nose +' '+ right.eye +"')b /;"
      },

  string:
    function string (emoji)
      { []^'0 . 0'^[] & 0|'~ . ~'|0  <= /examples/
        with (emoji)
          return left.ear +"'"+ left.eye +' '+ nose +' '+ right.eye +"'"+ right.ear
      },

  choose:
    function choose (feature)
      { return feature [Math.random * feature.length | 0]
      },

  eyes:
    [ 'o', 'ô', 'õ', 'ō', 'ø', 'ó', 'ò', 'ö', 'ª', 'º', '˚', '•', '¨', '^', '~'
    , 'O', 'Ô', 'Õ', 'Ō', 'Ø', 'Ó', 'Ò', 'Ö', '0', '∂', 'å', '¢', '-', '*', '≈'
    , '÷', '+', '≥', '≤', '♥︎', '♡', '☀︎', '☼', '★', '☆', 'æ', 'œ', '©', '®', '˜'
    , '⚛︎', 'π', '“', '‘', '☌', '✇', '⚀', '⚙︎', 'ˆ', '™', '¬', '∞', '≠', '⚇', 'ñ'
    , '⚈', '⚆', '⚉', ' ͡°','⭐︎'
    ],

  ears:
    { left:
        [/*'d' ,  'q' ,*/ '~',   '-',  '+'
        ,  '0-',  '0^',  '0*',  '0+', '0>',  '0&', '0|' //,  '0%', '0>>'
        ,  '8-',  '8^',  '8*',  '8+', '8>',  '8|'       //,  '8&', '8%', '8>>'
        , '[]-', '[]^', '[]*', '[]+','[]>', '[]|'       //, '[]<'
        ],

      right:
        [ /*'b',  'p' ,*/';'  , ';'  , ';'
        ,  '-0', '^0' ,  '*0' , '+0' , '<0' , '&0', '|0' //, '%0' , '<<0'
        ,  '-8', '^8' ,  '*8' , '+8' , '<8' , '|8'       //, '&8' ,  '%8', '<<8'
        , '-[]', '^[]',  '*[]', '+[]', '<[]', '|[]'      //, '>[]'
        ]
    },

  nose:
    [ '.', '…', ',', ':', ';', '¡', 'ᴗ', 'ñ', '⚛︎', 'ß', '¥', '√', '∫', '∆', '«'
    , '⚯', '☋','⚭', 'ç', 'ʖ', ' ͜ʖ', '؈', 'ډ', 'ڊ', 'ڋ', 'ڌ', 'ڍ', 'ڎ', 'ڏ', 'ڐ'
    , 'µ', '§', '¿', '?', '£', '¶', '🁢', '🁣', '⚘', '☄︎', '@', '#', '☇'
    ]
}
;