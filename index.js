;
~
{ re:
    { id: 'anemojii@ions.iskitz.net'
    , is: "animated emoji ions"
    , by: 'mike.lee@iskitz'
    , on: -7.2015102107
    , to: +9.20181019
    , at: 12.0
    }

, do:
    [ "get emoji"
    , "wait for emoji"
    , "choose a random emoji"
    , "show that emoji"
    , "wait .25 --> 1 second"
    , "repeat 2014 times"
    ]

, emoji
:   null

, "get emoji"
:   {get:'emoji'}

, "wait for emoji"
:   function waitForEmoji (ion)
      { var anemojii        = waitForEmoji.ion
          , doing           = anemojii.do
          ; anemojii.do     = doing.slice (2)
          ; anemojii.do.ion = anemojii
          ; doing.length    = 2
          
      ~ { on:'anemojii.emoji@ions.iskitz.net'
            ,'anemojii.emoji@ions.iskitz.net'
            : function gotEmoji (ion)
                { anemojii.emoji = ion.emoji
                ~ {i:"got these emoji: "+ String (anemojii.emoji) +" from"+ ion.re.id}
                ~ anemojii.do
                }
        }
      }

, "choose a random emoji"
:   function chooseEmoji ()
      { var emoji       = chooseEmoji.ion.emoji
          , choice      = Math.random * emoji.length | 0
          ; emoji.next  = emoji [choice]
      ~ {i:"chose "+ emoji.next +" using random number "+ choice}
      }

, "show that emoji"
:   function showEmoji ()
      { document.title = document.body.innerHTML = showEmoji.ion.emoji.next
      }

, "wait .25 --> 1 second"
:   function wait ()
      { wait.ion.do.after = Math.random * 750 + 250 | 0
      ~ {i:"will wait "+ wait.ion.do.after +" ms before showing the next emoji"}
      }

, "repeat 2014 times"
:   function repeat ()
      { var  doing = repeat.ion.do
        if ( doing . repeated   >   2014) return
        setTimeout  (repeat     ,   doing.after)
           ! doing . repeated   &&  doing.pop () && (doing.repeated = 0)
             doing . repeated++ && ~doing
      ~ {i: "did " + String (doing) +" "+ doing.repeated +" time(s)"}
      }
}
;