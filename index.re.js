;
~
{ re:
    { id: 'anemojii.re@ions.iskitz.net'
    , is: "exploring animated emoji ions & ionified literate programming"
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

, "get emoji"
:   {I:" request a list of emoji via an external ion."}

, "wait for emoji"
:   {I
    :" pause actions until emoji arrive by updating the do actions list to only"
    +" contain pending actions & by removing them from the active do actions"
    +" list before they're activated. Next, I add a sensor to observe when"
    +" emoji arrive. Once they arrive, I keep them in a shared emoji list to"
    +" simplify accessing them from anemojii's other actions. Finally, I resume"
    +" previously paused do actions by activating the updated do actions list of"
    +" pending actions."
    }

, "choose a random emoji"
:   {I
    :" choose an emoji from the emoji list by first generating a random"
    +" number between 0 and the list's length. Next I use that number to"
    +" select the emoji at the matching position within the list. Lastly,"
    +" I save the chosen emoji as a property on the emoji list to simplify"
    +" accessing it from other actions."
    }

, "show that emoji"
:   {I:" show the chosen emoji as my web view's title & content."
    }

, "wait .25 --> 1 second"
:   {I
    :" set the amount of time to wait after showing each emoji. I generate a"
    +" random length of time between 0 & 750 milliseconds then increase it by"
    +" 250 milliseconds to ensure waiting between a quarter to 1 second before"
    +" showing the next emoji. I keep this time as a property of anemojii's do"
    +" actions list to simplify accessing it from other actions."
    }

, "repeat 2014 times"
:   {I
    :" repeat this ion's do actions list 2014 times after waiting some"
    +" pre-calculated time each time. On the first repeat I remove the repeat"
    +" 2014 times action from the list to avoid repeating all actions without"
    +" waiting the pre-calculated time after each and begin tracking how many"
    +" times I've repeated to ensure I repeat do actions exactly 2014 times."
    }
}
;