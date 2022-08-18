console.log("Welcome To Spotify");
// Initialize the Variable
let songIndex = 0;
let audioElement = new Audio ('dynamite.mp3');
let audioPlay = document.getElementById('audioPlay');
let myProgressBar = document.getElementById('audioPlay');
let gif = document.getElementById('gif');

let songs = [
    {songName: "Dynamite" , filePath: "Music/Spotify/dynamite.mp3", coverPath: "cover.jpg"},
    {songName: "Dynamite" , filePath: "Music/Spotify/dynamite.mp3", coverPath: "cover.jpg"},
    {songName: "Dynamite" , filePath: "Music/Spotify/dynamite.mp3", coverPath: "cover.jpg"},
    {songName: "Dynamite" , filePath: "Music/Spotify/dynamite.mp3", coverPath: "cover.jpg"},
    {songName: "Dynamite" , filePath: "Music/Spotify/dynamite.mp3", coverPath: "cover.jpg"},
    {songName: "Dynamite" , filePath: "Music/Spotify/dynamite.mp3", coverPath: "cover.jpg"},
    {songName: "Dynamite" , filePath: "Music/Spotify/dynamite.mp3", coverPath: "cover.jpg"},
    {songName: "Dynamite" , filePath: "Music/Spotify/dynamite.mp3", coverPath: "cover.jpg"},
]

// audioElement.play();

// Handle play/pause click
audioPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        audioPlay.classList.remove('fa-solidfa-circle-play');
        audioPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        audioPlay.classList.add('fa-solidfa-circle-play');
        audioPlay.classList.remove('fa-circle-pause');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    // Update Seekbar
     movement = parseInt((audioElement.currentTime/audioElement.duration)* 100);
     console.log(movement);
     myProgressBar.value = movement;

})