const aWholeNewWorld = {
    data: {
            title: "A Whole New World",
            writers: "Alan Menken, Tim Rice"
        },
    structure: ["verseOne", "chorusOne"],
    sections: {
        verseOne: [
            [
                {type: "chord", body: "D"}, {type: "lyric", body: "I can"},
                {type: "chord", body: "G"}, {type: "lyric", body: "show you the"},
                {type: "chord", body: "D"}, {type: "lyric", body: "world"}
            ],
            [
                {type: "chord", body: "D"}, {type: "lyric", body: "Shining,"},
                {type: "chord", body: "G"}, {type: "lyric", body: "shimmering"},
                {type: "chord", body: "Bm"}, {type: "lyric", body: "splen-"},
                {type: "chord", body: "A"}, {type: "lyric", body: "did"}
            ],
            [
                {type: "chord", body: "Em"}, {type: "lyric", body: "Tell me Princess, now"},
                {type: "chord", body: "Bm"}, {type: "lyric", body: "when did you last"},
                {type: "chord", body: "G"}, {type: "lyric", body: "let you heart de-"},
                {type: "chord", body: "D"}, {type: "lyric", body: "cide"}
            ],
            [
                {type: "chord", body: "D"}, {type: "lyric", body: "I can"},
                {type: "chord", body: "G"}, {type: "lyric", body: "open your"},
                {type: "chord", body: "D"}, {type: "lyric", body: "eyes"}
            ],
            [
                {type: "chord", body: "D"}, {type: "lyric", body: "Take you"},
                {type: "chord", body: "G"}, {type: "lyric", body: "wonder by"},
                {type: "chord", body: "Bm"}, {type: "lyric", body: "won-"},
                {type: "chord", body: "A"}, {type: "lyric", body: "der"}
            ],
            [
                {type: "chord", body: "Em"}, {type: "lyric", body: "Over, sideways, and"},
                {type: "chord", body: "Bm"}, {type: "lyric", body: "under, on a"},
                {type: "chord", body: "G"}, {type: "lyric", body: "magic carpet"},
                {type: "chord", body: "D"}, {type: "lyric", body: "ride"}
            ]
        ],
        chorusOne: [
            [
                {type: "lyric", body: "A"},
                {type: "chord", body: "G"}, {type: "lyric", body: "whole new"},
                {type: "chord", body: "A"}, {type: "lyric", body: "world"}
            ],
            [   {type: "lyric", body: "A"},
                {type: "chord", body: "G"}, {type: "lyric", body: "new, fan-"},
                {type: "chord", body: "A"}, {type: "lyric", body: "tastic point of"},
                {type: "chord", body: "D"}, {type: "lyric", body: "view"}
            ],
            [   {type: "lyric", body: "No-one to"},
                {type: "chord", body: "G"}, {type: "lyric", body: "tell us"},
                {type: "chord", body: "D"}, {type: "lyric", body: "no,"}
            ],
            [   {type: "lyric", body: "or"},
                {type: "chord", body: "G"}, {type: "lyric", body: "where to"},
                {type: "chord", body: "D"}, {type: "lyric", body: "go"}
            ],
            [   {type: "lyric", body: "Or"},
                {type: "chord", body: "Bm7"}, {type: "lyric", body: "say we're"},
                {type: "chord", body: "E7"}, {type: "lyric", body: "only"},
                {type: "chord", body: "A7"}, {type: "lyric", body: "dreaming"}
            ],
        ]
    }  

}

const badMoonRising = {
    data: {
            title: "Bad Moon Rising",
            writers: "Credence Clearwater Revival"
        },
    structure: ["intro", "verseOne", "chorus", "verseTwo", "chorus", "verseThree", "chorus", "chorus"],
    sections: {
        intro: [
            [{type: "chord", body: "C"}, {type: "chord", body: "G"}, {type: "chord", body: "F"}, {type: "chord", body: "C"}]
        ],
        verseOne: [
            [
                {type: "chord", body: "C"}, {type: "lyric", body: "I see... the"},
                {type: "chord", body: "G"}, {type: "lyric", body: "bad"},
                {type: "chord", body: "F"}, {type: "lyric", body: "moon"},
                {type: "chord", body: "C"}, {type: "lyric", body: "rising"}
            ],
            [
                {type: "chord", body: "C"}, {type: "lyric", body: "I see..."},
                {type: "chord", body: "G"}, {type: "lyric", body: "trouble"},
                {type: "chord", body: "F"}, {type: "lyric", body: "on the"},
                {type: "chord", body: "C"}, {type: "lyric", body: "rising"}
            ],
            [
                {type: "chord", body: "C"}, {type: "lyric", body: "I see..."},
                {type: "chord", body: "G"}, {type: "lyric", body: "earth-"},
                {type: "chord", body: "F"}, {type: "lyric", body: "quakes and"},
                {type: "chord", body: "C"}, {type: "lyric", body: "lighting"}
            ],
            [
                {type: "chord", body: "C"}, {type: "lyric", body: "I see..."},
                {type: "chord", body: "G"}, {type: "lyric", body: "bad"},
                {type: "chord", body: "F"}, {type: "lyric", body: "times to-"},
                {type: "chord", body: "C"}, {type: "lyric", body: "day"}
            ]       
        ],
        chorus: [
            [
                {type: "chord", body: "F"}, {type: "lyric", body: "Don't go out tonight"},
            ],
            [
                {type: "lyric", body: "Well it's"}, {type: "chord", body: "C"}, {type: "lyric", body: "bound to take your life"}
            ],
            [
                {type: "chord", body: "G"}, {type: "lyric", body: "Theres's a"},
                {type: "chord", body: "F"}, {type: "lyric", body: "bad moon on the"},
                {type: "chord", body: "C"}, {type: "lyric", body: "rise"}
            ]
        ],
        verseTwo: [
            [
                {type: "chord", body: "C"}, {type: "lyric", body: "I hear..."},
                {type: "chord", body: "G"}, {type: "lyric", body: "hurri-"},
                {type: "chord", body: "F"}, {type: "lyric", body: "canes"},
                {type: "chord", body: "C"}, {type: "lyric", body: "blowing"}
            ],
            [
                {type: "chord", body: "C"}, {type: "lyric", body: "I know... the"},
                {type: "chord", body: "G"}, {type: "lyric", body: "end is"},
                {type: "chord", body: "F"}, {type: "lyric", body: "coming"},
                {type: "chord", body: "C"}, {type: "lyric", body: "soon"}
            ],
            [
                {type: "chord", body: "C"}, {type: "lyric", body: "I fear..."},
                {type: "chord", body: "G"}, {type: "lyric", body: "rivers"},
                {type: "chord", body: "F"}, {type: "lyric", body: "over-"},
                {type: "chord", body: "C"}, {type: "lyric", body: "flowing"}
            ],
            [
                {type: "chord", body: "C"}, {type: "lyric", body: "I hear... the"},
                {type: "chord", body: "G"}, {type: "lyric", body: "voice of"},
                {type: "chord", body: "F"}, {type: "lyric", body: "rage and"},
                {type: "chord", body: "C"}, {type: "lyric", body: "ruin"}
            ]       
        ],
        verseThree: [
            [
                {type: "chord", body: "C"}, {type: "lyric", body: "Hope you..."},
                {type: "chord", body: "G"}, {type: "lyric", body: "got your"},
                {type: "chord", body: "F"}, {type: "lyric", body: "things"},
                {type: "chord", body: "C"}, {type: "lyric", body: "together"}
            ],
            [
                {type: "chord", body: "C"}, {type: "lyric", body: "Hope you... are"},
                {type: "chord", body: "G"}, {type: "lyric", body: "quite"},
                {type: "chord", body: "F"}, {type: "lyric", body: "prepared to"},
                {type: "chord", body: "C"}, {type: "lyric", body: "die"}
            ],
            [
                {type: "chord", body: "C"}, {type: "lyric", body: "Looks like..."},
                {type: "chord", body: "G"}, {type: "lyric", body: "we're in for"},
                {type: "chord", body: "F"}, {type: "lyric", body: "nasty"},
                {type: "chord", body: "C"}, {type: "lyric", body: "weather"}
            ],
            [
                {type: "chord", body: "C"}, {type: "lyric", body: "One eye... is"},
                {type: "chord", body: "G"}, {type: "lyric", body: "taken"},
                {type: "chord", body: "F"}, {type: "lyric", body: "for an"},
                {type: "chord", body: "C"}, {type: "lyric", body: "eye"}
            ]       
        ]
    }
}

const chords = { 
    "A": {imgUrl: "http://www.uke-chords.com/images/chords/amaj.jpg"},
    "A7": {imgUrl: "https://ukulele-chords.com/img/chord/A7_11.png"},
    "Am": {imgUrl: "http://www.uke-chords.com/images/chords/amin.jpg"},
    "Bb": {imgUrl: "http://www.uke-chords.com/images/chords/bbmaj.jpg"}, 
    "Bbm": {imgUrl: "http://www.uke-chords.com/images/chords/amaj.jpg"}, 
    "B7": {imgUrl: "http://www.uke-chords.com/images/chords/bmaj7.jpg"}, 
    "Bm": {imgUrl: "http://www.uke-chords.com/images/chords/bmin.jpg"},
    "Bm7": {imgUrl: "https://ukulele-chords.com/img/chord/Bm7_97.png"},
    "C": {imgUrl: "http://www.uke-chords.com/images/chords/cmaj.jpg"}, 
    "Cm": {imgUrl: "http://www.uke-chords.com/images/chords/cmin.jpg"}, 
    "C#": {imgUrl: "http://www.uke-chords.com/images/chords/csmaj.jpg"}, 
    "C#m": {imgUrl: "http://www.uke-chords.com/images/chords/csmin.jpg"}, 
    "D": {imgUrl: "http://www.uke-chords.com/images/chords/dmaj.jpg"}, 
    "Dm": {imgUrl: "http://www.uke-chords.com/images/chords/dmin.jpg"}, 
    "Eb": {imgUrl: "http://www.uke-chords.com/images/chords/ebmaj.jpg"}, 
    "Ebm": {imgUrl: "http://www.uke-chords.com/images/chords/ebmin.jpg"}, 
    "E": {imgUrl: "http://www.uke-chords.com/images/chords/emaj.jpg"},
    "E7": {imgUrl: "https://ukulele-chords.com/img/chord/E7_361.png"},
    "Em": {imgUrl: "http://www.uke-chords.com/images/chords/emin.jpg"}, 
    "F": {imgUrl: "http://www.uke-chords.com/images/chords/fmaj.jpg"}, 
    "Fm": {imgUrl: "http://www.uke-chords.com/images/chords/fmin.jpg"}, 
    "F#": {imgUrl: "http://www.uke-chords.com/images/chords/fsmaj.jpg"}, 
    "F#m": {imgUrl: "http://www.uke-chords.com/images/chords/fsmin.jpg"}, 
    "G": {imgUrl: "http://www.uke-chords.com/images/chords/gmaj.jpg"}, 
    "Gm": {imgUrl: "http://www.uke-chords.com/images/chords/gmin.jpg"}, 
    "G#": {imgUrl: "http://www.uke-chords.com/images/chords/gsmaj.jpg"}, 
    "G#m": {imgUrl: "http://www.uke-chords.com/images/chords/gsmaj.jpg"}, 
}
  

  module.exports = {
      song: aWholeNewWorld,
      songTwo: badMoonRising,
      allSongs: [aWholeNewWorld, badMoonRising],
      chords: chords
  }