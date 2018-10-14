;
~
{ re:
    { id: "anemojii.3.1@ions.iskitz.net"
    , is: "animated emoji ions"

    , by: "mike.lee@iskitz"
    , at: "2018.10.15+09...2015.10.21-07"

    , it: "Shows emoji faces that're all valid ions. It also explores"
        + "ionified literate programming.                            "

    , im: "Exploring ion API & runtime documentation syntax via"
        + " ~I: do documentation once; only 1st time.          "
        + " ~i: do documentation every time.                   "

        + "I'd also, at some point, like to update this to generate faces based"
        + " on preset eyes, noses, mouths & head accessories like earphones:   "
        
        +   /d(~ . ~)b/
    }

, do:
    [ "choose a random face from the faces list"
    , "show that face"
    , "wait .5 --> 1.5 seconds"
    , "repeat 2014 times"
    ]

, faces
:   [ "+['- : -'];"
    , "+['- . -'];"
    , "+{'•':'•'};"
    , "+['• : •'];"
    , "+['• . •'];"
    , "+{'ö':'ö'};"
    , "+['ö : ö'];"
    , "+['ö . ö'];"
    , "+['* : *'];"
    , "+['* . *'];"
    , "+{'o':'o'};"
    , "+['o : o'];"
    , "+['o . o'];"
    , "+{'O':'O'};"
    , "+['O : O'];"
    , "+['O . O'];"
    , "+['• . •'];"
    , "+['• ؈ •'];"
    , "+['0 . 0'];"
    , "+{ 0 : 0 };"
    , "+{'0':'0'};"
    , "+['0 : 0'];"
    , "+{'õ':'õ'};"
    , "+['õ . õ'];"
    , "+{'ō':'ō'};"
    , "+['ō . ō'];"
    , "+{'ô':'ô'};"
    , "+{'ø':'ø'};"
    , "+['ó . ò'];"
    , "+{'ó':'ò'};"
    , "+{'ò':'ó'};"
    , "+['ò . ó'];"
    , " +[' . ']; "
    , "+['— ؈ —'];"
    , "+{'~':'~'};"
    , "+['~ . ~'];"
    , "+['# . #'];"
    , "+['+ . +'];"
    , "+['^ . ^'];"
    , "+{'^':'^'};"
    , "+['@ . @'];"
    , "+['๑˃̵ ᴗ ˂̵๑'];"
    , "+['˃̵ ᴗ ˂̵'];"
    , "+[' ͡° ʖ  ͡°'];"
    , "+[' ͡°  ͜ʖ  ͡°'];"
    , "+/ d(~ . ~)b /;"
    , "+/ d(• . •)b /;"
    , "+/ d(- . -)b /;"
    , "+/ d( @ . @ )b /;"
    , '+["]\'• ؈ •\'["]'
    , "+['~ ؈ ~'];"
    ]

, "choose a random face from the faces list"
:   function chooseFace ()
      { ~ {I
          :" choose a face from the faces list by first generating a random"
          +" number between 0 and the list's length. Next I use that number to"
          +" select the face at the matching position within the list. Lastly,"
          +" I save the chosen face as a property on the faces list to simplify"
          +" accessing it from other actions."
          }
        var faces       = chooseFace.ion.faces
          , choice      = Math.random * faces.length
          ; choice      = Math.floor (choice)
          ; faces.next  = faces      [choice]

        ~ {i:"chose "+ faces.next +" using random number "+ choice}
      }

, "show that face"
:   function showFace ()
      { ~{I:"show the chosen face as my web view's title & content."}
      ; document.title = document.body.innerHTML = showFace.ion.faces.next
      }

, "wait .5 --> 1.5 seconds"
:   function wait ()
      { ~ {I
          :" set the amount of time to wait after showing each face. I"
          +" generate a random length of time between 0 & 1000 milliseconds"
          +" then increase it by 500 milliseconds to ensure waiting for at"
          +" least half a second before showing the next face. I keep this"
          +" time as a property of this ion's do actions list to simplify"
          +" accessing it from other actions."
          }
        wait.ion.do.after = Math.random * 1000 + 500
      }

, "repeat 2014 times"
:   function repeat ()
      { ~ {I
          :" repeat this ion's list of things to do 2014 times after waiting"
          +" each time. On the first repeat I begin tracking the number of"
          +" times I've repeated as a property of the do actions list and"
          +" remove the repeat action to avoid repeating all actions without"
          +" waiting for some time after each."
          }
        var todo = repeat.ion.do
         ++ todo . times <= 2014
                 ? setTimeout (repeat, todo.after ^ todo)
                 : isNaN (todo.times) && (todo.times = 1) && todo.pop () && repeat ()
      }
}
;