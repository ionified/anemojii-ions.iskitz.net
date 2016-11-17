;

+
{ id: "anemojii@ions.iskitz.net"
, is: "animated emoji ions"
, by: "Mike Lee, @iskitz"
, at: "2016.11.16-08...2015.07.12-07"
,
  faces:
    [ "+{'-':'-'};"
    , "+{'•':'•'};"
    , "+{'ö':'ö'};"
    , "+{'*':'*'};"
    , "+{'o':'o'};"
    , "+{'O':'O'};"
    , "+[‘• . •’];"
    , "+[‘• ؈ •’];"
    , "+[‘0 . 0’];"
    , "+{'0':'0'};"
    , "+{ 0 : 0 };"
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
    , "+['` . `'};"
    , " +[' . ']; "
    , "+['— ؈ —'];"
    , "+{'~':'~'};"
    , "+['~ . ~'];"
    , "+{'+':'+'};"
    , "+['+ . +'];"
    , "+{'¢':'¢'};"
    , "+['¢ . ¢'];"
    , "+{'#':'#'};"
    , "+['# . #'];"
    , "+{'^':'^'};"
    , "+['^ . ^'];"
    , "/d(~ . ~)b/"
    , '["]\'• ؈ •\'["]'
    , "['~ ؈ ~']"
    ],

  view: document,

  go:
    function go ()
      { !go.view  && (go.view  = this.view);
        !go.faces && (go.faces = this.faces);

        var faces = go.faces
          , index = Math.random() * faces.length
          , view  = go.view
          ;

        index      = Math.floor (index);
        view.title = view.body.innerHTML = faces [index];
        var runs   = go.count ? go.count++ : (go.count = 1);
        var wait   = Math.random() * 1500;

        (runs < 2015) && setTimeout (go, wait);
      }, //go()

  valueOf:
    function anemojii ()
      { this.go()
      }
} //+anemojii@ions.iskitz.net

;