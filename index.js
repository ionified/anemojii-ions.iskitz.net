;
~
{ re:
    { id: 'anemojii@ions.iskitz.net'
    , is: "animated emoji ions"
    , by: 'mike.lee@iskitz'
    , on: '2015.10.21-07'
    , to: '2018.10.17+09'
    , at: 9.0
    }

, do:
    [ "get emoji faces"
    , "choose a random face"
    , "show that face"
    , "wait .5 --> 1 second"
    , "repeat 2014 times"
    ]

, faces
:   null

, "get emoji faces"
:   function getFaces ()
      { var anemojii           = getFaces.ion
          , todo               = anemojii.do.slice (1)
          ; todo.ion           = anemojii.do.ion
          ; anemojii.do.length = 1

      ~ {get:'faces'}
      & { on:'anemojii.faces@ions.iskitz.net'
            ,'anemojii.faces@ions.iskitz.net'
            : function gotFaces (ion)
                { anemojii.faces = ion.faces
                ~ {debug:'got these faces: '+ String (anemojii.faces)}
                ~ (anemojii.do = todo)
                }
        }
      }

, "choose a random face"
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
                 : !todo.times && (todo.times = 1) && todo.pop () & repeat

      ~ {i:"did "+ String (todo) +" "+ todo.times +" times"}
      }
}
;