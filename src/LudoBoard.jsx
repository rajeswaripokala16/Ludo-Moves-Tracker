

import {useState} from "react";

export default function LudoBoard()
{
     
    let [moves, setMoves] = useState({blue:0, yellow:0, green:0, red:0});

    
    let updateBlue = () =>
    {
        moves.blue += 1;
        console.log('moves.blue = ${moves.blue}');

        setMoves((prevMoves) => 
        {
            return {...prevMoves , blue:prevMoves.blue};
        });

        // setMoves({...moves , blue:moves.blue});
        // setMoves({...moves , blue:moves.blue});

    };

    let updateYellow = () =>
    {
        moves.yellow += 1;
        console.log('moves.yellow = ${moves.yellow}');
        // setMoves({...moves , yellow:moves.yellow});

        setMoves((prevMoves) => 
        {
            return {...prevMoves , yellow:prevMoves.yellow};
        });

    };

    let updateGreen = () =>
    {
        moves.green += 1;
        console.log('moves.green = ${moves.green}');
        // setMoves({...moves , green:moves.green});

        setMoves((prevMoves) => 
        {
            return {...prevMoves , green:prevMoves.green};
        });

    };

    let updateRed = () =>
    {
        moves.red += 1;
        console.log('moves.red = ${moves.red}');
        // setMoves({...moves , red:moves.red});

        setMoves((prevMoves) => 
        {
            return {...prevMoves , red:prevMoves.red};
        });

    };

    return (
       <div>
        <p>Game Begins!</p>
        <div className="board">
        <p>Blue Moves={moves.blue}</p>
        <button style={{backgroundColor:"blue", color:"black"}} onClick={updateBlue}>+1</button>

         <p>Yellow Moves={moves.yellow}</p>
        <button style={{backgroundColor:"yellow", color:"black"}} onClick={updateYellow}>+1</button>

         <p>Green Moves={moves.green}</p>
        <button  style={{backgroundColor:"green", color:"black"}} onClick={updateGreen}>+1</button>

         <p>Red Moves={moves.red}</p>
        <button style={{backgroundColor:"red", color:"black"}} onClick={updateRed}>+1</button>

        </div>
        </div>
    );
}

 // let [blueMoves, setBlueMoves] = useState(0);
    // let [yellowMoves, setYellowMoves] = useState(0);
    // let [greenMoves, setGreenMoves] = useState(0);
    // let [redMoves, setRedMoves] = useState(0);