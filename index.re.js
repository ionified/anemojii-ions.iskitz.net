;
~
{ re:
    { id: 'anemojii.re@ions.iskitz.net'
    , by: 'mike.lee@iskitz'
    , on: -7.20151021
    , to: -8.20210217
    , at: 15.0
    , is: "an exploration of animated emoji ions & ionified literate programming"
    },

  do:
    [ "request emoji"
    , "await emoji"
    , "choose emoji"
    , "show emoji"
    , "wait .25 --> 1 second"
    , "repeat 20151021 times"
    ],

  "request emoji":
    {I:" request anemoji's emoji ion."}
    ,

  "await emoji":
    {I
    :" pause actions until emoji arrive by updating the do actions list to only"
    +" contain pending actions & by removing them from the active do actions"
    +" list before they're activated. Next, I add a sensor to observe when"
    +" emoji arrive. Once they arrive, I keep them in a shared emoji list to"
    +" simplify accessing them from anemojii's other actions. Finally, I resume"
    +" previously paused do actions by activating the updated do actions list of"
    +" pending actions."
    },

  "choose emoji":
    {I
    :" choose an emoji by requesting it from anemoji's emoji ion. I then save the"
    +" chosen emoji as a property on the emoji list to simplify accessing it from"
    +" other actions."
    },

  "show emoji":
    {I:" show the chosen emoji as my web view's title & content."
    },

  "wait .25 --> 1 second":
    {I
    :" set the amount of time to wait after showing each emoji. I generate a"
    +" random length of time between 0 & 750 milliseconds then increase it by"
    +" 250 milliseconds to ensure waiting between a quarter to 1 second before"
    +" showing the next emoji. I keep this time as a property of anemojii's do"
    +" actions list to simplify accessing it from other actions."
    },

  "repeat 20151021 times":
    {I
    :" repeat this ion's do actions list 20151021 times after waiting some"
    +" pre-calculated time each time. On the first repeat I remove the repeat"
    +" 20151021 times action from the list to avoid repeating all actions without"
    +" waiting the pre-calculated time after each and begin tracking how many times"
    +" I've repeated to ensure I repeat do actions exactly 20151021 times."
    }
}
;