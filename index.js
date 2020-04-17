;
~
{ re:
    { id: 'anemojii@ions.iskitz.net'
    , is: "animated emoji ions"
    , by: 'mike.lee@iskitz'
    , on: -7.20151021
    , to: -7.20200417
    , at: 15.3
    , it: "it explores ionified literate programming while randomly displaying "
        + "valid emoji face lions: literal ions: invoked object notations.     "
        + "Learn more about ions, ionify & ionified @ https://why.ionify.net/  "
}

, do:
    [ "request emoji"
    ,   "await emoji"
    ,  "choose emoji"
    ,    "show emoji"
    , "wait .25 --> 1 second"
    , "repeat 20151021 times"
    ]

, emoji
:   null

,"request emoji"
:  {get:'emoji'}

,"await emoji"
:   function awaitEmoji ()
      { ~
        { on:'anemojii.emoji@ions.iskitz.net'
            ,'anemojii.emoji@ions.iskitz.net'
            : awaitEmoji.with.gotEmoji
        }

        var anemojii         = awaitEmoji.with
          , doing            = anemojii.do
          ; anemojii.do      = doing.slice (2)
          ; anemojii.do.with = anemojii
          ; doing.length     = 2

        ~ {i:`set do to ${anemojii.do}`}
      }

, gotEmoji
:   function gotEmoji ()
      { var anemojii       = gotEmoji.with
          ; anemojii.emoji = this

      ~ {i:`got emoji from: ${this.re.id} & will ${anemojii.do}`}
      ~ anemojii.do
      }

, "choose emoji"
:   function chooseEmoji ()
      { var emoji      = chooseEmoji.with.emoji
          ; emoji.next = emoji.new()
      ~ {i:`chose ${emoji.next}`}
      }

, "show emoji"
:   function showEmoji ()
      { document.title = document.body.innerHTML = showEmoji.with.emoji.next
      }

, "wait .25 --> 1 second"
:   function wait ()
      { wait.with.do.after = Math.random * 750 + 250 | 0
      ~ {i:`will wait ${wait.with.do.after} ms before showing the next emoji`}
      }

, "repeat 20151021 times"
:   function repeat ()
      { var   todo = repeat.with.do
        if (  todo . repeated   >   20151021  ) return
        setTimeout ( repeat     ,   todo.after)

            ! todo . repeated   &&  todo.pop () && (todo.repeated = 0)
              todo . repeated++ && ~todo

      ~ {i: `did ${todo} ${todo.repeated} time(s)`}
      }
}
;