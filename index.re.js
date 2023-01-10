;
~
{ re:
    { id: 'anemojii.re@ions.iskitz.net'
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾', 'mike.🇬🇾👨🏾‍💻🇺🇸.lee@iskitz']
    , on: - 2.20151021407
    , to: - 1.57831003308
    , at: +18.000
    , is: "an exploration of animated emoji ions & ionified literate programming"
    },

  do:
    [ "choose emoji"
    , "show emoji"
    , "wait .25 --> 1 second"
    , "repeat 20151021 times"
    ],

  "choose emoji":
    {I
    :" choose an emoji by requesting it from anemoji's association@-shared"
    +" emoji ion. I then save the chosen emoji as a property on the emoji ion"
    +" to simplify accessing it via the 'show emoji' aesop action."
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