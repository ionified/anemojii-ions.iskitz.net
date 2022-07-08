;
~
{ re:
    { id: 'anemojii@ions.iskitz.net'
    , is: "animated emoji ions"
    , by: 'mike.lee@iskitz'
    , on: -7.20151021
    , to: -7.20220708
    , at: 16.0
    , is:
        [ "exploring ionified literate programming while randomly displaying"
        + "valid emoji face lions: literal ions: invoked object notations 🤓"
        ],
      go:
        { seek: 'https://why.ionify.net/'
        },
      we:
        [ "hope you'll learn more about ions, ionify & ionified with this!"
        , "like renaming this anemoji for simpler reading & pronounciation"
        ]
    },

  do:
    [ "request emoji"
    ,   "await emoji"
    ,  "choose emoji"
    ,    "show emoji"
    , "wait .25 --> 1 second"
    , "repeat 20151021 times"
    ],

  emoji
    : null
    ,

 "request emoji"
    : {get:'emoji'}
    ,

 "await emoji":
    function awaitEmoji ()
      { ~
        { on:'anemojii.emoji@ions.iskitz.net'
            ,'anemojii.emoji@ions.iskitz.net'
            : awaitEmoji.with.its.gotEmoji
        }

        var anemojii         = awaitEmoji.with.its
          , doing            = anemojii.do
          ; anemojii.do      = doing.slice (2)
          ; anemojii.do.with = doing.with
          ; doing.length     = 2

        ~ {I:` set do to ${anemojii.do}`}
      },

  gotEmoji:
    function gotEmoji ()
      { var anemojii       = gotEmoji.with.its
          ; anemojii.emoji = this

      ~ {I:` got emoji from: ${this.re.id} & will ${anemojii.do}`}
      ~ anemojii.do
      },

  "choose emoji":
    function chooseEmoji ()
      { var emoji      = chooseEmoji.with.its.emoji
          ; emoji.next = emoji.new()

      ~ {I:` chose ${emoji.next}`}
      },

  "show emoji":
    function showEmoji ()
      { document.title = document.body.innerHTML = showEmoji.with.its.emoji.next
      },

  "wait .25 --> 1 second":
    function wait ()
      { wait.with.its.do.after = Math.random * 750 + 250 | 0
      ~ {I:`'ll wait ${wait.with.its.do.after} ms before showing the next emoji`}
      },

  "repeat 20151021 times":
    function repeat ()
      { clearTimeout (repeat.last)

        var   todo   =  repeat.with.its.do
        if (  todo   .  repeated > 20151021) return

        repeat.last  = setTimeout (repeat, todo.after)

            ! todo   . repeated   &&  todo.pop () && (todo.repeated = 0)
              todo   . repeated++ && ~todo

      ~ {i:` did ${todo} ${todo.repeated} time(s)`}
      }
}
;