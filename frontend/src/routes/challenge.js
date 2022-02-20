import React from "react";
import "./challenge.scss";
import BaseBtn from "../components/Button";

const Challenge = (props) => {
    return (
        <div className="Challenge">
            <div className="Challenge__Card">
                <h1>What is the powerhouse of the cell?</h1>
                <div className="Challenge__Info">
                    <div className="Challenge__Info-block">
                        <span>60:00</span>
                    </div>
                    <div className="Challenge__Info-block">
                        <span>10 players</span>
                    </div>
                    <div className="Challenge__Info-block">
                        <span>0 answers</span>
                    </div>
                </div>
                <div className="Challenge__Answer">
                    <textarea/>
                    <BaseBtn 
                        text="Submit" 
                        size="20px"
                        btnW="166px"
                        btnH="50px"
                    />
                </div>
            </div>
        </div>
    )
}

export default Challenge;