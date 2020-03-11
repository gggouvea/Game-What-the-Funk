/*GAMEPLAY LOGICS
)Select Music Genre:
Player must select music genre;

)Type Player Name:
Player must type his name or alias;

) Difficulty Selection:
easy-btn click => select 10 seconds of audioplay;
medium-btn click => select 5 seconds of audioplay;
hard-btn click => select 3 seconds of audioplay;
pro-btn click => select 1 seconds of audioplay;

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
// Rock
const musicRock = [
    './songs/Rock/Dire Straits - Sultans Of Swing.mp3',
    './songs/Rock/Pink Floyd - Another Brick In The Wall.mp3.mp3',
    './songs/Rock/Led Zeppelin - When The Levee Breaks.mp3',
    './songs/Rock/Rage Against The Machine - Killing In The Name.mp3'
]



// AUDIO SETTINGS
let time = '';

let passwordMusicIndex = null;

const audioPlay = () => {
    passwordMusicIndex = Math.floor(Math.random() * musicRock.length);
    let audio = new Audio(musicRock[passwordMusicIndex]);
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
    } else if (time === 'pro') {
        setTimeout(() => {
            audio.pause();
            console.log('SetTimeout PRO');
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
const levelz = () => {
    time = 'pro'
    console.log(time)
}


// MULTIPLE CHOICE TEST
// Secret Music


// Random Music
const multipleChoice = () => {
    musicRock.sort()

    // let music1 = musicRock[passwordMusicIndex].splice(13, -4);
    // let label = document.getElementById('content');
    // label.innerHTML = `<label class ="container"><input value="blabla" type="radio" name="radio">${music1}</label>`;
    // console.log(music1)
}

//neste ponto é preciso que o DOM insira os <label> com as opções randomicas de musica. Daí depois preciso comparar se o 'onclick' da opção selecionada é === à secretMusic.








// let buttonEasy = document.getElementById("easy-btn").addEventListener("click", time = 'easy') {

// };






// buttonEasy.onclick = function play() {
//     var audio = new Audio(musicRock[Math.floor(Math.random() * musicRock.length)]);
//     audio.play();
// }

// function easy() {
//     time = 10;
//     console.log('oi');








// #t=0,5


// EASY SONGS
// let buttonEasy = document.getElementById("easy-btn");

// buttonEasy.onclick = function() {
//     time = 10
//     acdcHighWayToHell = `./songs/Rage Against The Machine - Killing In The Name.mp3#t=,${time}`;
//     console.log(acdcHighWayToHell)
//     let musics = ['ACDC - TNT', 'Pink Floyd - Run Like Hell', 'Led Zeppelin - Kashmir', 'Korn - Freak on a Leash'];
//     musics.map(element => {
//         if (element === 'ACDC - TNT') {
//             let ul = document.getElementById('item-list');
//             let li = document.createElement('li');
//             ul.appendChild(li);
//             li.innerHTML = element;
//         } else {
//             console.log("easy")
//         }
//     })
// }


// function play() {
//     var audio = new Audio(musicRock[Math.floor(Math.random() * musicRock.length)]);
//     audio.play();
// }

// function easy() {
//     time = 10;
//     console.log('oi');
// }



// // MEDIUM SONGS
// let buttonMedium = document.getElementById("medium-btn");

// buttonMedium.onclick = function(){
//     time = 5;
//     console.log(time)
//     console.log('entrou')
//     // let musics = ['ACDC - TNT', 'Pink Floyd - Run Like Hell', 'Led Zeppelin - Kashmir', 'Korn - Freak on a Leash'];
//     // musics.map(element => {
//     //     if (element === 'ACDC - TNT') {
//     //         let ul = document.getElementById('item-list');
//     //         let li = document.createElement('li');
//     //         ul.appendChild(li);
//     //         li.innerHTML = element;
//     //     } else {
//     //         console.log("medium")
//     //     }
//     // })
// }




// // HARD SONGS
// let buttonHard = document.getElementById("hard-btn");

// buttonHard.onclick = function(){
//     let musics = ['ACDC - TNT', 'Pink Floyd - Run Like Hell', 'Led Zeppelin - Kashmir', 'Korn - Freak on a Leash'];
//     musics.map(element => {
//         if (element === 'ACDC - TNT') {
//             let ul = document.getElementById('item-list');
//             let li = document.createElement('li');
//             ul.appendChild(li);
//             li.innerHTML = element;
//         } else {
//             console.log("hard")
//         }
//     })
// }




// // INSANE SONGS
// let buttonInsane = document.getElementById("insane-btn");

// buttonInsane.onclick = function(){
//     let musics = ['ACDC - TNT', 'Pink Floyd - Run Like Hell', 'Led Zeppelin - Kashmir', 'Korn - Freak on a Leash'];
//     musics.map(element => {
//         if (element === 'ACDC - TNT') {
//             let ul = document.getElementById('item-list');
//             let li = document.createElement('li');
//             ul.appendChild(li);
//             li.innerHTML = element;
//         } else {
//             console.log("insane")
//         }
//     })
// }


