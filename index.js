;
~
{ re:
    { id: 'anemojii@ions.iskitz.net'
    , is: "animated emoji ions"
    , by: 'mike.lee@iskitz'
    , on: -7.20151021
    , to: -7.20190331
    , at: 15.1
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
:  function getEmoji ()
      {~{get:'emoji'
        , on:'anemojii.emoji@ions.iskitz.net'
            ,'anemojii.emoji@ions.iskitz.net'
            : getEmoji.home.gotEmoji
        }
      }

,"await emoji"
:   function awaitEmoji ()
      { var anemojii         = awaitEmoji.home
          , doing            = anemojii.do
          ; anemojii.do      = doing.slice (2)
          ; anemojii.do.home = anemojii
          ; doing.length     = 2
      ~ {i:`set do to ${anemojii.do}`}
      }

, gotEmoji
:   function gotEmoji ()
      { var anemojii       = gotEmoji.home
      ;     anemojii.emoji = this
      ~ {i:`got emoji from: ${this.re.id} & will ${anemojii.do}`}
      ~     anemojii.do
      }

, "choose emoji"
:   function chooseEmoji ()
      { var emoji      = chooseEmoji.home.emoji
          ; emoji.next = emoji.new()
      ~ {i:`chose ${emoji.next}`}
      }

, "show emoji"
:   function showEmoji ()
      { document.title = document.body.innerHTML = showEmoji.home.emoji.next
      }

, "wait .25 --> 1 second"
:   function wait ()
      { wait.home.do.after = Math.random * 750 + 250 | 0
      ~ {i:`will wait ${wait.home.do.after} ms before showing the next emoji`}
      }

, "repeat 20151021 times"
:   function repeat ()
      { var  doing = repeat.home.do
        if ( doing . repeated   >   20151021) return
        setTimeout  (repeat     ,   doing.after)
           ! doing . repeated   &&  doing.pop () && (doing.repeated = 0)
             doing . repeated++ && ~doing
      ~ {i: `did ${doing} ${doing.repeated} time(s)`}
      }
}
;