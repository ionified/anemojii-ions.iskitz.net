;
~
{ re:
    { id: 'documenter@ions.iskitz.net'
    , is: "an ion that observes & presents live code documentation"
    , by: 'mike.lee@iskitz.net'
    , on: '2007.09-04'
    , to: '2018.10.18+09'
    , at: 0.1

    , it: "provides these apis:"
        + " ~I: do documentation once; only 1st time.          "
        + " ~i: do documentation every time.                   "
        
    , im: "intentionally disabling ~i for now & am planning to improve this ion"
        + "over time & to move it to ionify's core or ionified.net."
    }

, on: 'I', I
: function I (ion)
    { var message = ion.I
    ; if (message.presented) return
    ;     message.presented = true
    ~ {log:"I"+ String (message)}
    }

, on: 'i', ignore
: function i (ion)
    { ~ {log:"i "+ String (ion.i)}
    }
}
;