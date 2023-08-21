console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songitem')) 

let songs =[
    {songName:"mere_sir_par_do_maatt_dhari",filePath:"1.mp3",coverPath:"download.jpg"},
    {songName:"Teri Akhiyaan Ka Ye Kajal",filePath:"2.mp3",coverPath:"download.jpg"},
    {songName:"Laad Piyaa Ke-Sapna",filePath:"3.mp3",coverPath:"download.jpg"},
    {songName:"Saara rola patli kamar ( Remix )",filePath:"4.mp3",coverPath:"download.jpg"},
    {songName:"Sapna Dance Bahu Jamidar ki",filePath:"5.mp3",coverPath:"download.jpg"},
    {songName:"Teri Sector 15 Me Kothi",filePath:"6.mp3",coverPath:"download.jpg"},
    {songName:"meri chatri ke neeche",filePath:".mp7",coverPath:"download.jpg"},
    {songName:"Bhagat Singh - Preet Harpal ",filePath:"8.mp3",coverPath:"download.jpg"},
    {songName:"Chandigarh Aali Re Mai Tere Husan Pe Margya",filepath:"9.mp3",coverPath:"download.jpg"},
    {songName:"Chora Jamidar ka Haryanvi New Song ",filePath:"10.mp3",coverPath:"download.jpg"},
    {songName:"Dance Tere Rate Badhge Sapna-Bhagi Ragni",filePath:"11.mp3",coverPath:"download.jpg"},
    {songName:"haryanavi supar hit song gungru pawan gill",filePath:"120mp3",coverPath:"download.jpg"},
    {songName:"Jail Karawegi Re Chhori  Music",filePath:"13.mp3",coverPath:"download.jpg"},
    {songName:"love Song SOLID BODY Ajay Hooda",filePath:"14.mp3",coverPath:"download.jpg"},
    {songName:"Me Kothi  NDJ Music  Haryanvi New Song",filePath:"15.mp3",coverPath:"download.jpg"},
    {songName:"Meri Chatri Ke Neeche Aaja",filePath:"16.mp3",coverPath:"download.jpg"},
    {songName:"Nain Katore Pagal Chore Sapna Chodhary Harvanvi",filePath:"17.mp3",coverPath:"download.jpg"},
    {songName:" Bahu Jamidar Ki -Double Role Ajay Hooda & Renu",filePath:"18.mp3",coverPath:"download.jpg"},
    {songName:"New Super Hit Song _Bandook Chalegi बन्दूक चलेगी",filePath:"19.mp3",coverPath:"download.jpg"},
    {songName:"OLHA   Mhari Gal Mein Ek Patola Tu ",filePath:"20.mp3",coverPath:"download.jpg"},
    {songName:"Body Tu thada mai madi Jahangirpur",filePath:"21.mp3",coverPath:"download.jpg"},
    {songName:"New Dance Dhamaka-Ujwa Compitition ",filePath:"22.mp3",coverPath:"download.jpg"},
    {songName:"mere_sir_par_do_maatt_dhari",filePath:"23.mp3",coverPath:"download.jpg"},
    {songName:"Teri Akhiyaan Ka Ye Kajal",filePath:"24.mp3",coverPath:"download.jpg"},
    
     
    
]
songItem.forEach((element,i)=>{
   
      element.getElementsByTagName('img')[0].src = songs[i].coverPath;
      element.getElementsByClassName('songName')[0].innerText = songs[i].songName
})

 
masterplay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
       
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    
    //Update seakbar
     progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
     
     myprogressBar.value = progress;

})
myprogressBar.addEventListener('change',()=>{
    audioElement.currentTime = myprogressBar.value*audioElement.duration/100;
})

const makeAllPlayes = ()=>{
   
    Array.from(document.getElementsByClassName('songitemPlay')).forEach((element) => {
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    })
}
Array.from(document.getElementsByClassName('songitemPlay')).forEach((element) => {
    element.addEventListener('click',(e)=>{
        makeAllPlayes();
        songIndex=parseInt(e.target.id)
   e.target.classList.remove('fa-play-circle');
   e.target.classList.add('fa-pause-circle');
   audioElement.src = `songs/${songIndex+1}.mp3`;
   audioElement.currentTime = 0;
   audioElement.play();
   masterplay.classList.remove('fa-play-circle');
   masterplay.classList.add('fa-pause-circle');
   gif.style.opacity=1;
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=23){
        songIndex = 0
    }
    else{
        songIndex += 1
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
 
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
   
})
