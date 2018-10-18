;
~
{ re:
    { id: 'anemojii.re@ions.iskitz.net'
    , is: "animated emoji ions"
    , by: 'mike.lee@iskitz'
    , on: '2015.10.21-07'
    , to: '2018.10.18+09'
    , at: 11

    , it: "Shows emoji that're all valid ions. It also explores ionified "
        + "literate programming.                                         "

    , im: "Planning, at some point, to update anemojii to generate faces based "
        + "on preset eyes, noses, mouths & accessories like earphones:         "
        +                        /d(~ . ~)b/
    }

, do:
    [ "get emoji"
    , "wait for emoji"
    , "choose a random emoji"
    , "show that emoji"
    , "wait .5 --> 1 second"
    , "repeat 2014 times"
    ]

, "get emoji"
:   {I:" request a list of emoji from an external ion."}

, "wait for emoji"
:   {I
    :" pause actions until emoji arrive by updating the actions list to only"
    +" contain pending actions & by removing them from the active actions list"
    +" before they're activated. Next, I add a sensor to observe when emoji"
    +" arrive. Once they arrive, I keep them in a shared emoji list to simplify"
    +" accessing them from anemojii's other actions. Finally, I resume"
    +" previously paused actions by activating the updated actions list of"
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

, "wait .5 --> 1 second"
:   {I
    :" set the amount of time to wait after showing each face. I"
    +" generate a random length of time between 0 & 500 milliseconds"
    +" then increase it by 500 milliseconds to ensure waiting for at"
    +" least half a second before showing the next face. I keep this"
    +" time as a property of this ion's do actions list to simplify"
    +" accessing it from other actions."
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