/*GAMEPLAY LOGICS
)Select Music Genre:
Player must select music genre;

)Type Player Name:
Player must type his name or alias;

) Difficulty Selection:
easy-btn click => select 10 seconds of audioplay;
medium-btn click => select 5 seconds of audioplay;
hard-btn click => select 3 seconds of audioplay;
extreme-btn click => select 1 seconds of audioplay;

) Play Random Song:
Play Music => plays random music for (x)seconds;

) Select Answer:
When the music stops, user should select the correct answer in 10 seconds;

) Game Rules:
Correct answer => earns (x) points;
Wrong answer => loses (x) points;
3 wrong answers => GAME OVER;
*/



// MUSIC DB
const musicDB = [
    './songs/Rock/Dire Straits - Sultans Of Swing.mp3',
    './songs/Rock/Pink Floyd - Another Brick In The Wall.mp3',
    './songs/Rock/Led Zeppelin - When The Levee Breaks.mp3',
    './songs/Rock/Rage Against The Machine - Killing In The Name.mp3',
    // './songs/Rock/Eagles - Hotel California.mp3',
    // './songs/Rock/Metallica - Wherever I May Roam.mp3',
    // './songs/Rock/Steppenwolf - Born To Be Wild.mp3',
    // './songs/Rock/The Doors - Break On Through.mp3'
]



// AUDIO SETTINGS
let time = '';

const audioPlay = () => {
    passwordMusicIndex = Math.floor(Math.random() * musicDB.length);
    let audio = new Audio(musicDB[passwordMusicIndex]);
    audio.play();
    if (time === 'easy') {
        setTimeout(() => {
            audio.pause();
            console.log('SetTimeout EASY');
            multipleChoice();
        }, 10000);
    } else if (time === 'medium') {
        setTimeout(() => {
            audio.pause();
            console.log('SetTimeout MEDIUM');
            multipleChoice();
        }, 5000);
    } else if (time === 'hard') {
        setTimeout(() => {
            audio.pause();
            console.log('SetTimeout HARD');
            multipleChoice();
        }, 3000);
    } else if (time === 'extreme') {
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
    time = 'easy'
    console.log(time)
}

// Medium - Plays 5 seconds
const levelMedium = () => {
    time = 'medium'
    console.log(time)
}

// Hard - Plays 3 seconds
const levelHard = () => {
    time = 'hard'
    console.log(time)
}

// Extreme - Plays 1 second
const levelExtreme = () => {
    time = 'extreme'
    console.log(time)
}


// MULTIPLE CHOICE TEST
// Secret Music



// Random Music
const multipleChoice = () => {
   let divs = document.querySelectorAll(".container div");
   [...divs].map(div => div.innerHTML = "");
    musicDB.sort(func => 0.5 - Math.random());
    musicDB.map((musicName, index) => {
        let div = document.querySelector(`.container:nth-child(${index+1}) div`);
        div.innerHTML = musicName.slice(13, -4);
    })
}


