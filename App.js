
import React, { useState } from "react";
//localStorage.clear()
import Die from "./Die"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

export default function App() {
    
const bondMovies = [
  "Dr. No",  "From Russia with Love",  "Goldfinger",  "Thunderball",  "You Only Live Twice",  "On Her Majesty's Secret Service",  "Diamonds Are Forever",  "Live and Let Die",  "The Man with the Golden Gun",  "The Spy Who Loved Me",  "Moonraker",  "For Your Eyes Only",  "Octopussy",  "A View to a Kill",  "The Living Daylights",  "Licence to Kill",   "GoldenEye",  "Tomorrow Never Dies",  "The World Is Not Enough",  "Die Another Day",  "Casino Royale",  "Quantum of Solace",  "Skyfall",  "Spectre",  "Never Say Never Again"
];

    const [timerIntervalId, setTimerIntervalId] = useState(null);
    const [count, changeCount] = React.useState(0)
    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    const [currentDisplay, changeDisplay] = React.useState(false)
    const [startButton, showStart] = React.useState(true)
    const [finalCount, setfinalCount] = React.useState(0)
    const [time, setTime] = useState(0);
    

 let movie
 
 if (tenzies){
     movie = bondMovies[(dice[0].value)-1]
 }  
//console.log(dice[0].value)
//console.log(movie)


    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
       
        if (allHeld && allSameValue) {
            setTenzies(true)
            clearInterval(timerIntervalId);
        }
    }, [dice])

    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 25),
            isHeld: false,
            id: nanoid(),
            numero : Math.ceil(Math.random() * 9),
        }
    }
    
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 6; i++) {
            newDice.push(generateNewDie())
        }
        return newDice
    }
    function rollDice() {
        if(!tenzies) {
             changeCount(prevCount => prevCount + 1);
            setDice(oldDice => oldDice.map(die => {
                return die.isHeld ? 
                    die :
                    generateNewDie()
            }))
        } else {
            setTenzies(false)
            setDice(allNewDice())
            changeCount(0)
            setTime(0)
            start()
        }
    }
 
    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? 
                {...die, isHeld: !die.isHeld} :
                die
        }))
    }
    
    const diceElements = dice.map(die => (
        <Die 
            key={die.id} 
            value = {die.value}
            isHeld={die.isHeld} 
            holdDice={() => holdDice(die.id)}
            numero = {die.numero}
        />
    ))
    
  function start() {
      changeDisplay(true);
      showStart(false);
      const intervalId = setInterval(() => {
    setTime((prevTime) => prevTime + 1);
      }, 1000);
      setTimerIntervalId(intervalId);
    }
  
console.log(time)

//let gameData = {
//  clicks: {count},  time: {time}
//}
//let previousGameData = JSON.parse(localStorage.getItem('gameData'));
//if (previousGameData) {
// previousGameData.push(gameData);
 // localStorage.setItem('gameData', JSON.stringify(previousGameData));
//} else {
 // localStorage.setItem('gameData', JSON.stringify([gameData]));
//}

//let myObject = JSON.parse(localStorage.getItem('gameData'));
//let clickArray=[]
//let timeArray = []
//if (myObject) {
//console.log(myObject)
//console.log(myObject[0].clicks.count)
//for(let i = 0; i < myObject.length; i++ ){
//clickArray.push(myObject[i].clicks.count)
//timeArray.push(myObject[i].time.time)
//}

//console.log(clickArray)
//console.log(timeArray)
//let clickRecord = clickArray[0];
//for (let i = 1; i < clickArray.length; i++) {
 /// if (clickArray[i] < clickRecord) {
   // clickRecord = clickArray[i]
  //}
//}
//let timeRecord = timeArray[0];
//for (let i = 1; i < timeArray.length; i++) {
 // if (timeArray[i] < timeRecord) {
  //  timeRecord = timeArray[i]
  //}
//}//c
//console.log(timeRecord)
     
    //return timeArray.length > 0 ? (
  //<p>Time record from storage: {timeRecord} seconds.</p>
    //) : (
      //""
    //);
  //} else {
    //return "";
//  }



return (    
        <main>
            {tenzies && <Confetti />}
            <h1 className="title">James Bond Tenzi</h1>
            <p className="instructions">Click below to refresh the Bond scenes. 
            Click an image to freeze it at its current state between clicks. Once all Bond scenes belong to the same movie, you win!</p>
            <button onClick = {start}  style={{display: startButton ? 'block' : 'none'}}>Start</button>
            <div className= 'revealorNo'  style={{display: currentDisplay ? 'block' : 'none'}}>
            <div className="dice-container" >
                {diceElements}
            </div>
            {tenzies && <p>{movie}</p>}
            {tenzies && 
                    <p>
                    Well done! you finished in {count} clicks and {time} seconds!
                    </p>}
            {/*{tenzies &&  localStorage.length > 0 &&     <p>
                    Clicks Record: {clickRecord} 
                    </p>}
              {tenzies &&
               <p> hello</p>    
            }*/}
            
            <button className="roll-dice" onClick={rollDice}>{tenzies ? "New Game" : "New Scenes"}
            </button>
            <p className = 'bottomStuff'>{count} clicks</p>
            <p className = 'bottomStuff'>{time} seconds</p>
            </div>
        </main>
    )
  }