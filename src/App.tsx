
import './App.css';
// import {useState} from "react";
import Person from "./Person/Person";
import {useState} from "react";

function App() {

    const randomNum = Array.from({ length: 5 }, () => Math.floor(Math.random() * 32) + 5);

    const [mainNumber, setNumber] = useState([
        {number: 5,},
        {number: 11,},
        {number: 16,},
        {number: 23,},
        {number: 32,},
    ]);

    const changeNumber = () => {
        setNumber([
            {number: randomNum[0]},
            {number: randomNum[1]},
            {number: randomNum[2]},
            {number: randomNum[3]},
            {number: randomNum[4]},
        ]);
    }


    return (
        <div className="App">
            <div>
                <button onClick={changeNumber}>New numbers</button>
            </div>
            <Person number={mainNumber[0].number}/>
            <Person number={mainNumber[1].number}/>
            <Person number={mainNumber[2].number}/>
            <Person number={mainNumber[3].number}/>
            <Person number={mainNumber[4].number}/>
        </div>
    )
}

export default App
