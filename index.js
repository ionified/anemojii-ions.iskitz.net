;
~
{ re:
    { id: 'anemojii@ions.iskitz.net'
    , do: {emoji:true, 'narrator@ionify':true}
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.🇬🇾👨🏾‍💻🇺🇸.lee@iskitz']
    , on:  -27.20151021
    , to:  -18.578309111
    , at:   17.10
    , is:
        [ "animated emoji ions"
        , "exploring ionified literate programming while randomly displaying"
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
    [   "await emoji"
    ,  "choose emoji"
    ,    "show emoji"
    , "wait .25 --> 1 second"
    , "repeat 20151021 times"
    ],

  emoji
    : null
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
          ; anemojii.do      = doing.slice (1)
          ; anemojii.do.with = doing.with
          ; doing.length     = 1

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