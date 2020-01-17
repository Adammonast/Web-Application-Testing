import React, { useState } from 'react';
import Display from './Components/Display';

const Dashboard = (props) => {
    const [ball, setBall] = useState(0);
    const [strike, setStrike] = useState(0);
    const [foul, setFoul] = useState(0);
    const [hit, setHit] = useState(0);

    if(strike >= 3 || ball >= 4 || hit === true){
        setBall(0);
        setStrike(0);
    }

    if(foul){
        if(strike === 2){
            return setStrike(strike);
        } else {
            setStrike(2);
        }
    }

    if(hit === true){
        setBall(0);
        setStrike(0);
    }

    return (
        <div className="Dashboard">
            <button className="ball" onClick={() => setBall(ball + 1)}>Ball</button>
            <button className="strike" onClick={() => setStrike(strike + 1)}>Strike</button>
            <button className="foul" onClick={() => setFoul(foul + 1)}>Foul</button>
            <button className="hit" onClick={() => setHit(hit + 1)}>Hit</button>
        </div>
    )
}