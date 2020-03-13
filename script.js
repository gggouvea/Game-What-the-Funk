/*GAMEPLAY LOGICS
)Select Music Genre:
Player must select music genre;

) Difficulty Selection:
easy-btn click => select 10 seconds of audioplay;
medium-btn click => select 5 seconds of audioplay;
hard-btn click => select 3 seconds of audioplay;
extreme-btn click => select 1 seconds of audioplay;

) Play Random Song:
Play Music => plays random music for (x)seconds;
*/
//Add the specs


// MUSIC DB
const musicDb = [
    './songs/Rock/Dire Straits - Sultans Of Swing.mp3',
    './songs/Rock/Pink Floyd - Another Brick In The Wall.mp3',
    './songs/Rock/Led Zeppelin - When The Levee Breaks.mp3',
    './songs/Rock/Rage Against The Machine - Killing In The Name.mp3',
    './songs/Rock/Eagles - Hotel California.mp3',
    './songs/Rock/Metallica - Wherever I May Roam.mp3',
    './songs/Rock/Steppenwolf - Born To Be Wild.mp3',
    './songs/Rock/The Doors - Break On Through.mp3',
    './songs/Rock/Black Sabbath - Paranoid.mp3',
    './songs/Rock/The Animals - The House Of The Rising Sun.mp3',
    './songs/Rock/The Who - Baba ORiley.mp3',
    './songs/Rock/Heart - Barracuda.mp3',
    './songs/Rock/Survivor - Burning Heart.mp3',
    './songs/Rock/Survivor - Eye Of The Tiger.mp3',
    './songs/Rock/The Who - American Woman.mp3',
    './songs/Rock/Nirvana - Heart-Shaped Box.mp3',
    './songs/Rock/Guns N Roses - Paradise City.mp3',
    './songs/Rock/Scorpions - Wind Of Change.mp3',
    './songs/Rock/Eric Clapton - Cocaine.mp3',
    './songs/Rock/Bon Jovi - Livin On A Prayer.mp3',
    './songs/Rock/Guns N Roses - November Rain.mp3'
]


// SELECT 4 RANDOM SONGS
let musicDbCopy = [...musicDb];

const musicToPlay = () => {
    let selected4 = [...musicDbCopy].sort(func => 0.5 - Math.random()).slice(0, 3);
    selected4.push(musicIndex);
    return selected4;
}


// AUDIO SETTINGS
let difficulty = '';
let audio;
let name = '';
const winMsg = document.createElement('h1');
winMsg.classList.add("message");

const playAudio = () => {  
    winMsg.innerHTML = "";
    musicIndex = Math.floor(Math.random() * musicDb.length);
    name = musicDb[musicIndex].slice(13, -4);
    audio = new Audio(musicDb[musicIndex]);
    audio.play();
    if (difficulty === 'easy') {
        setTimeout(() => {      
            audio.pause();
            console.log('SetTimeout EASY');
            multipleChoice();
        }, 10000);
    } else if (difficulty === 'medium') {
        setTimeout(() => {
            audio.pause();
            console.log('SetTimeout MEDIUM');
            multipleChoice();
        }, 5000);
    } else if (difficulty === 'hard') {
        setTimeout(() => {
            audio.pause();
            console.log('SetTimeout HARD');
            multipleChoice();
        }, 3000);
    } else if (difficulty === 'extreme') {
        setTimeout(() => {
            audio.pause();
            console.log('SetTimeout EXTREME');
            multipleChoice();
        }, 1000);
    } else {
        alert('Choose Game Level');
    }
}


// GAME DIFFICULTY
// Easy - Plays 10 seconds
const levelEasy = () => {
    difficulty = 'easy'
    console.log(difficulty)
}

// Medium - Plays 5 seconds
const levelMedium = () => {
    difficulty = 'medium'
    console.log(difficulty)
}

// Hard - Plays 3 seconds
const levelHard = () => {
    difficulty = 'hard'
    console.log(difficulty)
}

// Extreme - Plays 1 second
const levelExtreme = () => {
    difficulty = 'extreme'
    console.log(difficulty)
}


// MULTIPLE CHOICE TEST
// Random Music
const multipleChoice = () => {
    let divs = document.querySelectorAll(".container div");

    [...divs].map(div => div.innerHTML = "");

    let selected4 = [...musicDbCopy].sort(func => 0.5 - Math.random()).slice(0, 3);
    selected4.push(musicDbCopy[musicIndex]);
    selected4.sort(func => 0.5 - Math.random());
    selected4.map((musicName, index) => {
        let div = document.querySelector(`.container:nth-child(${index+1}) div`);
        div.innerHTML = musicName.slice(13, -4);
    })
}


// Secret Music
const selectMusic = () => {
    let inputs = document.querySelectorAll('input[name]');
    inputs = [...inputs];
    let options = document.querySelectorAll('input[name] + div');
    options = [...options];
    let optionValue;
    for (let i = 0; i < options.length; i += 1) {
        if (inputs[i].checked && name === options[i].innerHTML) {
            winMsg.textContent = 'CONGRATULATIONS!';
            winMsg.style.backgroundColor = "green"
            break;
        } else {
            winMsg.innerHTML = 'TRY AGAIN!'
            winMsg.style.backgroundColor = "red"
        }
    }
    document.getElementById('message').appendChild(winMsg);
    options.map((div) => div.innerHTML = '')
}