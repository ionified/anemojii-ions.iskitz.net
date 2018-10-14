;
~
{ re:
    { id: "anemojii.3.1@ions.iskitz.net"
    , is: "animated emoji ions"

    , by: "mike.lee@iskitz"
    , at: "2018.10.14+09...2015.10.21-07"

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
          +" number between 0 and the list's length. Next I use that number"
          +" to select the face at the matching position within the list."
          +" Lastly, I save the chosen face as a property on the faces list to"
          +" simplify accessing it from other actions."
          }

        var faces       = chooseFace.ion.faces
          , choice      = Math.random * faces.length
          ; choice      = Math.floor (choice)
          ; faces.next  = faces      [choice]

        ~ {i:"chose "+ faces.next +" using random number "+ choice}
      }

, "show that face"
:   function showFace ()
      { ~ {I
          :" show the chosen face by setting it as my web view's title and"
          +" content."
          }
        document.title = document.body.innerHTML = showFace.ion.faces.next
      }

, "wait .5 --> 1.5 seconds"
:   function wait ()
      { wait.ion.do.after = Math.random * 1000 + 500
      }

, "repeat 2014 times"
:   function repeat ()
      { ~ {I
          :" repeat this ion's do actions 2014 times waiting up to 1.5 seconds"
          +" each time. I remove the repeat action on the second repeat to"
          +" avoid doing all actions immediately *and* after a delay."
          }

        ++repeat.times < 2015
          ?   setTimeout (repeat,  repeat.ion.do.after)
          &&  repeat.times == 2 && repeat.ion.do.pop ()
          :  (repeat.times  = 1)

        ~ repeat.ion.do
      }
}
;