import React from "react"

export default function Die(props) {

    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

let letters
let numero

//console.log("the movie is  "+props.value)
//console.log("the number is " + props.numero)

if (props.value=== 1){
    letters = 'DN'
} else if (props.value===2){
    letters='FRWL'
} else if (props.value===3){
    letters='GF'
} else if (props.value===4){
    letters='TB'
} else if (props.value===5){
    letters='YOLT'
} else if (props.value===6){
    letters='OHMSS'
} else if (props.value===7){
    letters='DAF'
} else if (props.value===8){
    letters='TMWTGG'
} else if (props.value===9){
    letters='TSWLM'
} else if (props.value===10){
    letters='MR'
} else if (props.value===11){
    letters='FYEO'
} else if (props.value===12){
    letters='O'
} else if (props.value===13){
    letters='NSNA'
} else if (props.value===14){
    letters="VTAK"
} else if (props.value===15){
    letters='TLD'
} else if (props.value===16){
letters='LTK'
} else if (props.value===17){
letters='GE'
} else if (props.value===18){
letters='TND'
} else if (props.value===19){
letters='TWINE'
} else if (props.value===20){
letters='DAD'
} else if (props.value===21){
letters='CR'
} else if (props.value===22){
letters='QOS'
} else if (props.value===23){
letters='SF'
} else if (props.value===24){
letters='S'
} else if (props.value===25){
letters='NTTD'
}



    
    return (
        <div 
            className="die-face" 
            style={styles}
            onClick={props.holdDice}
        >
            {/* <h2 className="die-num">{props.image}</h2> */}
            {/* <div className='nearlydie-face' style = {thePicture}></div>*/}
            <div className = "die-Num"><img src={`images/${letters}${props.numero}.jpg`} /></div> 
            {/*  <div className = "die-Num"><img src={`images/${letters}${numero}.jpg`} /></div>*/}
             {/* <h2 className="die-num">{props.value}</h2>*/}
              
        </div>
    )
}