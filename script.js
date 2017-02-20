var currentSong;
var playing;
var firstClick = true;
var track = 0;


function play(song) {
    currentSong.pause();
    currentSong.currentTime = 0;
    currentSong = new Audio(song.audioPath);
    currentSong.play();
    firstClick = false;
    playing = true;
    setAlbumArt(song.artPath);
    track = songs.indexOf(song)

    $("#songinfo").html(
        song.name +
        "<br> <a target='_blank' href='" + song.link + "'>" +
        song.artist + "</a>"
    )

    document.title = song.name +  " - " + song.artist

    currentSong.onended = function() {
        next();
    }
    $("#play").addClass("spinning")
}

$('body').keyup(function(e){
   if(e.keyCode == 32){
       // user has pressed space
       e.preventDefault();
       pause();
   } else if (e.keyCode == 39) {
       //right arrow
        e.preventDefault();
        next()
   } else if (e.keyCode == 37) {
       e.preventDefault();
       prev();
   }
});

$('body').keydown(function(e){
   if(e.keyCode == 32){
       // doh ho ho
       e.preventDefault();
   }
});

function seek(e) {
    var percent = e.offsetX / this.offsetWidth;
    currentSong.currentTime = percent * currentSong.duration;
}

function pause() {
    if (firstClick === true) {
        play(songs[0]);
        firstClick = false;
    } else if (playing) {
        currentSong.pause();
        playing = false;
        $("#play").addClass("paused")
        $("#play").removeClass("spinning")
    } else {
        currentSong.play();
        playing = true;
        $("#play").addClass("spinning")
    }
}

function next() {
    //loop if at the end
    var toPlay;
    var wasPlaying = playing;
    if (track != songs.length-1) {
        toPlay = songs[track + 1];
    } else { toPlay = songs[0]; }
    play(toPlay);
    if (!wasPlaying) pause();
}

function prev() {
    var toPlay;
    var wasPlaying = playing;
    if (currentSong.currentTime > 3) { //rewinds if in the middle of a song
        currentSong.currentTime = 0;
        return;
    } else if (track === 0) {
            toPlay = (songs[songs.length-1]);
    } else { toPlay = (songs[track - 1]); }
    play(toPlay);
    if (!wasPlaying) pause();
}

function updateTrackbar() {
	var percent = (currentSong.currentTime / currentSong.duration) * 100
	percent += "%"
	$("#trackbar").css("width", percent)
}

setInterval(updateTrackbar, 20)

$(document).ready(function() {
    currentSong = new Audio(songs[1].audioPath)
    for (var i=0; i<songs.length; i++) {
        $("#tracklist").append(
            //a hack to get html entities from weird characters
            "<p onclick=play(songs["+ i +"])>" + $("<div/>").text(songs[i].name).html() + "</p><br>"
        )
    }
    $("#tracklist").append(
        "<p><a href='songs.zip' target='_blank'> download all</a></p>"
    )
    play(songs[0]);
    pause();
    document.getElementById("trackbar-container").addEventListener("click", seek);
})

function setAlbumArt(path) {
    $("#albumart").attr("src", path);
}

var Tessellate = {
    audioPath : "mp3s/1tessellate.mp3",
    artPath : "art/1.jpg",
    name : "Tessellate",
    artist : "Alt-J",
    link : "http://www.altjband.com/",
}

var CarrotFlowers = {
    audioPath : "mp3s/2.mp3",
    artPath : "art/2.jpg",
    name : "The King of Carrot Flowers",
    artist : "Neutral Milk Hotel",
    link : "http://www.walkingwallofwords.com/",
}

var Sailing = {
    audioPath : "mp3s/3.mp3",
    artPath : "art/3.jpg",
    name : "Sailing",
    artist : "Broken Whale",
    link : "https://atribeofbrokenwhales.bandcamp.com/",
}

var Nude = {
    audioPath : "mp3s/4.mp3",
    artPath : "art/4.jpg",
    name : "Nude",
    artist : "Radiohead",
    link : "https://www.radiohead.com/",
}

var Charlie = {
    audioPath : "mp3s/5.mp3",
    artPath : "art/5.jpg",
    name : "You Suck Charlie",
    artist : "Joji",
    link : "https://soundcloud.com/chloeburbank",
}

var Elwa = {
    audioPath : "mp3s/6.mp3",
    artPath : "art/6.jpg",
    name : "Elwa",
    artist : "Fingerspit",
    link : "https://fingerspit.bandcamp.com",
}

var Obstacle1 = {
    audioPath : "mp3s/7.mp3",
    artPath : "art/7.png",
    name : "Obstacle 1",
    artist : "Interpol",
    link : "http://splash.interpolnyc.com/",
}

var Adz = {
    audioPath : "mp3s/8.mp3",
    artPath : "art/8.jpg",
    name : "Age of Adz",
    artist : "Sufjan Stevens",
    link : "https://music.sufjan.com/",
}

var Suburbs = {
    audioPath : "mp3s/9.mp3",
    artPath : "art/9.jpg",
    name : "The Suburbs",
    artist : "Arcade Fire",
    link : "https://www.arcadefire.com/",
}

var Yrself = {
    audioPath : "mp3s/10.mp3",
    artPath : "art/10.jpg",
    name : "Dance Yrself Clean",
    artist : "LCD Soundsystem",
    link : "https://lcdsoundsystem.com/",
}

var Ultralight = {
    audioPath : "mp3s/11.mp3",
    artPath : "art/11.jpg",
    name : "Ultralight Beam",
    artist : "Kanye West",
    link : "https://www.kanyewest.com/",
}

var GetGot = {
    audioPath : "mp3s/12.mp3",
    artPath : "art/12.jpg",
    name : "Get Got",
    artist : "Death Grips",
    link : "http://thirdworlds.net/",
}

var Baasa = {
    audioPath : "mp3s/13.mp3",
    artPath : "art/13.jpg",
    name : "Drum n Baasa",
    artist : "Infected Mushroom",
    link : "https://infected-mushroom.com/",
}

var Gorgeous = {
    audioPath : "mp3s/14.mp3",
    artPath : "art/14.jpg",
    name : "Gorgeous",
    artist : "Kanye West",
    link : "https://www.kanyewest.com/",
}
var Archangel = {
    audioPath : "mp3s/15burialarchangel.mp3",
    artPath : "art/15.jpg",
    name : "Archangel",
    artist : "Burial",
    link : "http://www.hyperdub.net/artists/view/Burial"
}

var Explain = {
    audioPath : "mp3s/16.mp3",
    artPath : "art/16.jpg",
    name : "Hard to Explain",
    artist : "The Strokes",
    link : "http://thestrokes.com/"
}

var Vietnam = {
    audioPath : "mp3s/17.mp3",
    artPath : "art/17.jpg",
    name : "Vietnam",
    artist : "Crystal Castles",
    link : "https://www.crystalcastles.com/"
}

var Illinoise = {
    audioPath : "mp3s/18.mp3",
    artPath : "art/18.jpg",
    name : "Feel the Illinoise!",
    artist : "Sufjan Stevens",
    link : "https://music.sufjan.com/"
}

var WakeUp = {
    audioPath : "mp3s/19.mp3",
    artPath : "art/19.jpg",
    name : "Wake up",
    artist : "Arcade Fire",
    link : "http://www.arcadefire.com/"
}

var MyGirls = {
    audioPath : "mp3s/20.mp3",
    artPath : "art/20.jpg",
    name : "My Girls",
    artist : "Animal Collective",
    link : "http://www.myanimalhome.net/"
}

var Fireworks = {
    audioPath : "mp3s/21.mp3",
    artPath : "art/21.jpg",
    name : "Fireworks",
    artist : "Animal Collective",
    link : "http://www.myanimalhome.net/"
}

var Beware = {
    audioPath : "mp3s/22.mp3",
    artPath : "art/22.jpg",
    name : "Beware",
    artist : "Death Grips",
    link : "http://thirdworlds.net/"
}

var Gatorade = {
    audioPath : "mp3s/23.mp3",
    artPath : "art/23.jpg",
    name : "Gatorade",
    artist : "Yung Lean",
    link : "https://soundcloud.com/yung-lean-doer"
}

var Premonition = {
    audioPath : "mp3s/24.mp3",
    artPath : "art/24.jpg",
    name : "Premonition",
    artist : "Yuka Kitamura",
    link : "https://www.darksouls3.com"
}

var songs = [
    Tessellate,
    CarrotFlowers,
    Sailing,
    Nude,
    Charlie,
    Elwa,
    Obstacle1,
    Adz,
    Suburbs,
    Yrself,
    Ultralight,
    GetGot,
    Baasa,
    Gorgeous,
    Archangel,
    Explain,
    Vietnam,
    Illinoise,
	WakeUp,
    MyGirls,
    Fireworks,
    Beware,
    Gatorade,
    Premonition,
]
