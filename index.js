;

+
{ id: "anemojii@ions.iskitz.net.1.1"
, is: "animated emoji ions"
, by: "mike.lee@iskitz"
, at: "2016.11.27-08...2015"
,
  faces:
    [ "+{'-':'-'};"
    , "+['- : -'];"
    , "+['- . -'];"
    , "+{'•':'•'};"
    , "+['• : •'];"
    , "+['• . •'];"
    , "+{'ö':'ö'};"
    , "+['ö : ö'];"
    , "+['ö . ö'];"
    , "+{'*':'*'};"
    , "+['* : *'];"
    , "+['* . *'];"
    , "+{'o':'o'};"
    , "+['o : o'];"
    , "+['o . o'];"
    , "+{'O':'O'};"
    , "+['O : O'];"
    , "+['O . O'];"
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
    , " +[' . ']; "
    , "+['— ؈ —'];"
    , "+{'~':'~'};"
    , "+['~ . ~'];"
    , "+{'+':'+'};"
    , "+['+ . +'];"
    , "+['๑˃̵ᴗ˂̵'];"
    , "+[' ͡° ʖ ͡°'];"
    , "+[' ͡° ͜ʖ ͡°'];"
    ],

  view: document,

  go:
    function go () {
       !go.view  && (go.view  = this.view);
       !go.faces && (go.faces = this.faces);

       var faces = go.faces
         , index = Math.random() * faces.length
         , view  = go.view
         ;

       index      = Math.floor(index);
       view.title = view.body.innerHTML = faces [index];
       var runs   = go.count ? go.count++ : (go.count = 1);
       var wait   = Math.random() * 1500;

       (runs < 2015) && setTimeout (go, wait);
    }, //go()

  valueOf:
    function jsonXDLogo () {
       this.go();
    }
} //+anemojii@ions.iskitz.net

;