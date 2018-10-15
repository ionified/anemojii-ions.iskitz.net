;
~
{ re:
    { id: "anemojii.8.1@ions.iskitz.net"
    , is: "animated emoji ions"
    , by: "mike.lee@iskitz"
    , at: "2018.10.15+09...2015.10.21-07"
    }

, do:
    [ "choose a random face from the faces list"
    , "show that face"
    , "wait .5 --> 1 second"
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
      { var faces       = chooseFace.ion.faces
          , choice      = Math.random * faces.length | 0
          ; faces.next  = faces [choice]

        ~{i:"chose "+ faces.next +" using random number "+ choice}
      }

, "show that face"
:   function showFace ()
      { document.title = document.body.innerHTML = showFace.ion.faces.next
      }

, "wait .5 --> 1 second"
:   function wait ()
      { wait.ion.do.after = Math.random * 500 + 500 | 0
      ~ {i:"will wait "+ wait.ion.do.after +" ms before showing the next face"}
      }

, "repeat 2014 times"
:   function repeat ()
      { var todo = repeat.ion.do
         ++ todo . times <= 2014
                 ? setTimeout (repeat, todo.after ^ todo)
                 : !todo.times && (todo.times = 1) && todo.pop () && repeat ()
      }
}
;