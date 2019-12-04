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

const blowingInTheWind = {"data":{"title":"Blowing in the Wind","writers":"Bob Dylan"},"structure":["verseOne","verseTwo","verseThree"],"sections":{"verseOne":[[{"type":"chord","body":"C"},{"type":"lyric","body":"How many "},{"type":"chord","body":"F"},{"type":"lyric","body":"roads must a "},{"type":"chord","body":"C"},{"type":"lyric","body":"man walk "},{"type":"chord","body":"Am"},{"type":"lyric","body":"down"}],[{"type":"lyric","body":"Be-"},{"type":"chord","body":"C"},{"type":"lyric","body":"fore you "},{"type":"chord","body":"F"},{"type":"lyric","body":"call him a "},{"type":"chord","body":"G"},{"type":"lyric","body":"man?"}],[{"type":"lyric","body":"Yes’n "},{"type":"chord","body":"C"},{"type":"lyric","body":"how many "},{"type":"chord","body":"F"},{"type":"lyric","body":"seas must a "},{"type":"chord","body":"C"},{"type":"lyric","body":"white dove "},{"type":"chord","body":"Am"},{"type":"lyric","body":"sail"}],[{"type":"lyric","body":"Be-"},{"type":"chord","body":"C"},{"type":"lyric","body":"fore she "},{"type":"chord","body":"F"},{"type":"lyric","body":"sleeps in the "},{"type":"chord","body":"G"},{"type":"lyric","body":"sand?"}],[{"type":"lyric","body":"Yes’n "},{"type":"chord","body":"C"},{"type":"lyric","body":"how many "},{"type":"chord","body":"F"},{"type":"lyric","body":"times must the "},{"type":"chord","body":"C"},{"type":"lyric","body":"cannon balls "},{"type":"chord","body":"Am"},{"type":"lyric","body":"fly"}],[{"type":"lyric","body":"Be-"},{"type":"chord","body":"C"},{"type":"lyric","body":"fore they're "},{"type":"chord","body":"F"},{"type":"lyric","body":"forever "},{"type":"chord","body":"G"},{"type":"lyric","body":"banned?"}],[{"type":"lyric","body":"The "},{"type":"chord","body":"F"},{"type":"lyric","body":"answer my "},{"type":"chord","body":"G"},{"type":"lyric","body":"friend is "},{"type":"chord","body":"C"},{"type":"lyric","body":"blowing in the "},{"type":"chord","body":"Am"},{"type":"lyric","body":"wind"}],[{"type":"lyric","body":"The "},{"type":"chord","body":"F"},{"type":"lyric","body":"answer is "},{"type":"chord","body":"G"},{"type":"lyric","body":"blowing in the "},{"type":"chord","body":"C"},{"type":"lyric","body":"wind"}]],"verseTwo":[[{"type":"lyric","body":"Yes’n "},{"type":"chord","body":"C"},{"type":"lyric","body":"how many "},{"type":"chord","body":"F"},{"type":"lyric","body":"years can a "},{"type":"chord","body":"C"},{"type":"lyric","body":"mountain e-"},{"type":"chord","body":"Am"},{"type":"lyric","body":"xist"}],[{"type":"lyric","body":"Be-"},{"type":"chord","body":"C"},{"type":"lyric","body":"fore it is "},{"type":"chord","body":"F"},{"type":"lyric","body":"washed to the "},{"type":"chord","body":"G"},{"type":"lyric","body":"sea?"}],[{"type":"lyric","body":"Yes’n "},{"type":"chord","body":"C"},{"type":"lyric","body":"how many "},{"type":"chord","body":"F"},{"type":"lyric","body":"years can some "},{"type":"chord","body":"C"},{"type":"lyric","body":"people e-"},{"type":"chord","body":"Am"},{"type":"lyric","body":"xist"}],[{"type":"lyric","body":"Be-"},{"type":"chord","body":"C"},{"type":"lyric","body":"fore they're all-"},{"type":"chord","body":"F"},{"type":"lyric","body":"owed to be "},{"type":"chord","body":"G"},{"type":"lyric","body":"free?"}],[{"type":"lyric","body":"Yes’n "},{"type":"chord","body":"C"},{"type":"lyric","body":"how many "},{"type":"chord","body":"F"},{"type":"lyric","body":"times can a "},{"type":"chord","body":"C"},{"type":"lyric","body":"man turn his "},{"type":"chord","body":"Am"},{"type":"lyric","body":"head"}],[{"type":"lyric","body":"Pre-"},{"type":"chord","body":"C"},{"type":"lyric","body":"tending he "},{"type":"chord","body":"F"},{"type":"lyric","body":"just doesn't "},{"type":"chord","body":"G"},{"type":"lyric","body":"see?"}],[{"type":"lyric","body":"The "},{"type":"chord","body":"F"},{"type":"lyric","body":"answer my "},{"type":"chord","body":"G"},{"type":"lyric","body":"friend is "},{"type":"chord","body":"C"},{"type":"lyric","body":"blowing in the "},{"type":"chord","body":"Am"},{"type":"lyric","body":"wind"}],[{"type":"lyric","body":"The "},{"type":"chord","body":"F"},{"type":"lyric","body":"answer is "},{"type":"chord","body":"G"},{"type":"lyric","body":"blowing in the "},{"type":"chord","body":"C"},{"type":"lyric","body":"wind"}]],"verseThree":[[{"type":"chord","body":"C"},{"type":"lyric","body":"How many "},{"type":"chord","body":"F"},{"type":"lyric","body":"times must a "},{"type":"chord","body":"C"},{"type":"lyric","body":"man look "},{"type":"chord","body":"Am"},{"type":"lyric","body":"up"}],[{"type":"lyric","body":"Be-"},{"type":"chord","body":"C"},{"type":"lyric","body":"fore he "},{"type":"chord","body":"F"},{"type":"lyric","body":"can see the "},{"type":"chord","body":"G"},{"type":"lyric","body":"sky?"}],[{"type":"lyric","body":"Yes’n "},{"type":"chord","body":"C"},{"type":"lyric","body":"how many "},{"type":"chord","body":"F"},{"type":"lyric","body":"ears must "},{"type":"chord","body":"C"},{"type":"lyric","body":"one man "},{"type":"chord","body":"Am"},{"type":"lyric","body":"have"}],[{"type":"lyric","body":"Be-"},{"type":"chord","body":"C"},{"type":"lyric","body":"fore he can "},{"type":"chord","body":"F"},{"type":"lyric","body":"hear people "},{"type":"chord","body":"G"},{"type":"lyric","body":"cry?"}],[{"type":"lyric","body":"Yes’n "},{"type":"chord","body":"C"},{"type":"lyric","body":"how many "},{"type":"chord","body":"F"},{"type":"lyric","body":"deaths will it "},{"type":"chord","body":"C"},{"type":"lyric","body":"take till he "},{"type":"chord","body":"Am"},{"type":"lyric","body":"knows"}],[{"type":"lyric","body":"That "},{"type":"chord","body":"C"},{"type":"lyric","body":"too many "},{"type":"chord","body":"F"},{"type":"lyric","body":"people have "},{"type":"chord","body":"G"},{"type":"lyric","body":"died?"}],[{"type":"lyric","body":"The "},{"type":"chord","body":"F"},{"type":"lyric","body":"answer my "},{"type":"chord","body":"G"},{"type":"lyric","body":"friend is "},{"type":"chord","body":"C"},{"type":"lyric","body":"blowing in the "},{"type":"chord","body":"Am"},{"type":"lyric","body":"wind"}],[{"type":"lyric","body":"The "},{"type":"chord","body":"F"},{"type":"lyric","body":"answer is "},{"type":"chord","body":"G"},{"type":"lyric","body":"blowing in the "},{"type":"chord","body":"C"},{"type":"lyric","body":"wind"}],[{"type":"lyric","body":"The "},{"type":"chord","body":"F"},{"type":"lyric","body":"answer my "},{"type":"chord","body":"G"},{"type":"lyric","body":"friend is "},{"type":"chord","body":"C"},{"type":"lyric","body":"blowing in the "},{"type":"chord","body":"Am"},{"type":"lyric","body":"wind"}],[{"type":"lyric","body":"The "},{"type":"chord","body":"F"},{"type":"lyric","body":"answer is "},{"type":"chord","body":"G"},{"type":"lyric","body":"blowing in the "},{"type":"chord","body":"C"},{"type":"lyric","body":"wind"}]]}}

const blueMoon = {"data":{"title":"Blue Moon","writers":"Rogers and Hart"},"structure":["intro","verseOne","verseTwo","chorus","verseThree","chorus"],"sections":{"intro":[[{"type":"chord","body":"C"},{"type":"lyric","body":" "},{"type":"chord","body":"Am"},{"type":"lyric","body":" | "},{"type":"chord","body":"F"},{"type":"lyric","body":" "},{"type":"chord","body":"G"},{"type":"lyric","body":""}],[{"type":"chord","body":"C"},{"type":"lyric","body":" "},{"type":"chord","body":"Am"},{"type":"lyric","body":" | "},{"type":"chord","body":"F"},{"type":"lyric","body":" "},{"type":"chord","body":"G"},{"type":"lyric","body":""}]],"verseOne":[[{"type":"lyric","body":"Blue "},{"type":"chord","body":"C"},{"type":"lyric","body":"moon "},{"type":"chord","body":"Am"},{"type":"lyric","body":" "},{"type":"chord","body":"F"},{"type":"lyric","body":" you saw me "},{"type":"chord","body":"G"},{"type":"lyric","body":"standing"}],[{"type":"lyric","body":"A-"},{"type":"chord","body":"C"},{"type":"lyric","body":"lone "},{"type":"chord","body":"Am"},{"type":"lyric","body":" "},{"type":"chord","body":"F"},{"type":"lyric","body":" without a "},{"type":"chord","body":"G"},{"type":"lyric","body":"dream in my"}],[{"type":"chord","body":"C"},{"type":"lyric","body":"Heart "},{"type":"chord","body":"Am"},{"type":"lyric","body":" "},{"type":"chord","body":"F"},{"type":"lyric","body":" without a "},{"type":"chord","body":"G"},{"type":"lyric","body":"love of my"}],[{"type":"chord","body":"C"},{"type":"lyric","body":"Own "},{"type":"chord","body":"Am"},{"type":"lyric","body":" "},{"type":"chord","body":"F"},{"type":"lyric","body":" "},{"type":"chord","body":"G"},{"type":"lyric","body":""}]],"verseTwo":[[{"type":"lyric","body":"Blue "},{"type":"chord","body":"C"},{"type":"lyric","body":"moon "},{"type":"chord","body":"Am"},{"type":"lyric","body":" "},{"type":"chord","body":"F"},{"type":"lyric","body":" you knew just "},{"type":"chord","body":"G"},{"type":"lyric","body":"what I was"}],[{"type":"chord","body":"C"},{"type":"lyric","body":"There for "},{"type":"chord","body":"Am"},{"type":"lyric","body":" "},{"type":"chord","body":"F"},{"type":"lyric","body":" you heard me "},{"type":"chord","body":"G"},{"type":"lyric","body":"saying a"}],[{"type":"chord","body":"C"},{"type":"lyric","body":"Prayer for "},{"type":"chord","body":"Am"},{"type":"lyric","body":" "},{"type":"chord","body":"F"},{"type":"lyric","body":" someone I "},{"type":"chord","body":"G"},{"type":"lyric","body":"really could"}],[{"type":"chord","body":"C"},{"type":"lyric","body":"Care for "},{"type":"chord","body":"Am"},{"type":"lyric","body":" "},{"type":"chord","body":"F"},{"type":"lyric","body":" "},{"type":"chord","body":"G"},{"type":"lyric","body":""}]],"chorus":[[{"type":"chord","body":"C"},{"type":"lyric","body":"Oooh "},{"type":"chord","body":"Am"},{"type":"lyric","body":" "},{"type":"chord","body":"F"},{"type":"lyric","body":" "},{"type":"chord","body":"G"},{"type":"lyric","body":""}],[{"type":"chord","body":"C"},{"type":"lyric","body":" "},{"type":"chord","body":"Am"},{"type":"lyric","body":" "},{"type":"chord","body":"F"},{"type":"lyric","body":"Oooh "},{"type":"chord","body":"G"},{"type":"lyric","body":""}],[{"type":"chord","body":"C"},{"type":"lyric","body":" "},{"type":"chord","body":"Am"},{"type":"lyric","body":" "},{"type":"chord","body":"F"},{"type":"lyric","body":" Without a "},{"type":"chord","body":"G"},{"type":"lyric","body":"love of my"}],[{"type":"chord","body":"C"},{"type":"lyric","body":"Own "},{"type":"chord","body":"Am"},{"type":"lyric","body":" "},{"type":"chord","body":"F"},{"type":"lyric","body":" "},{"type":"lyric","body":"G)"}]],"verseThree":[[{"type":"lyric","body":"Blue "},{"type":"chord","body":"C"},{"type":"lyric","body":"moon "},{"type":"chord","body":"Am"},{"type":"lyric","body":" "},{"type":"chord","body":"F"},{"type":"lyric","body":" you saw me "},{"type":"chord","body":"G"},{"type":"lyric","body":"standing"}],[{"type":"lyric","body":"A-"},{"type":"chord","body":"C"},{"type":"lyric","body":"lone "},{"type":"chord","body":"Am"},{"type":"lyric","body":" "},{"type":"chord","body":"F"},{"type":"lyric","body":" without a "},{"type":"chord","body":"G"},{"type":"lyric","body":"dream in my"}],[{"type":"chord","body":"C"},{"type":"lyric","body":"Heart "},{"type":"chord","body":"Am"},{"type":"lyric","body":" "},{"type":"chord","body":"F"},{"type":"lyric","body":" without a "},{"type":"chord","body":"G"},{"type":"lyric","body":"love of my"}],[{"type":"chord","body":"C"},{"type":"lyric","body":"Own "},{"type":"chord","body":"Am"},{"type":"lyric","body":" "},{"type":"chord","body":"F"},{"type":"lyric","body":" "},{"type":"chord","body":"G"},{"type":"lyric","body":""}]]}}



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
    //   song: aWholeNewWorld,
    //   songTwo: badMoonRising,
    //   songThree: blowingInTheWind,
    //   songFour: blueMoon
      allSongs: [aWholeNewWorld, badMoonRising, blowingInTheWind, blueMoon],
      chords: chords
  }